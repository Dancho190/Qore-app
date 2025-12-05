'use client';

import React, { useEffect, useRef, useState } from 'react';
import { getAllUniversities, University } from '../universities/universitiesData';
import './page.css';

declare global {
  interface Window {
    PhotoSphereViewer?: any;
  }
}

export default function VirtualTourPage() {
  const universities = getAllUniversities();
  const containersRef = useRef<Array<HTMLDivElement | null>>([]);
  const viewersRef = useRef<any[]>([]);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  // helper: resolve PhotoSphereViewer constructor across different UMD/ESM shapes
  const getViewerClass = () => {
    const PSV = (window as any).PhotoSphereViewer;
    // try common locations: PhotoSphereViewer.Viewer, PhotoSphereViewer.default.Viewer, PhotoSphereViewer.default, PhotoSphereViewer
    return PSV?.Viewer ?? PSV?.default?.Viewer ?? PSV?.default ?? PSV;
  };

  const createViewerInstance = (opts: any) => {
    const Klass = getViewerClass();
    if (!Klass) return null;
    if (typeof Klass !== 'function') {
      // sometimes the exported value is a namespace object; try to access .Viewer again
      const maybe = Klass?.Viewer ?? Klass?.default ?? null;
      if (typeof maybe === 'function') {
        return new maybe(opts);
      }
      console.warn('PhotoSphereViewer constructor not found:', Klass);
      return null;
    }
    return new Klass(opts);
  };

  // modal/fullscreen viewer
  const [activeUniversity, setActiveUniversity] = useState<University | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalViewerRef = useRef<any>(null);

  useEffect(() => {
    const src = 'https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core/index.min.js';

    function initSmallViewers() {
      if (!(window as any).PhotoSphereViewer) return;

      // initialize one viewer per university card
      universities.forEach((u, i) => {
        const container = containersRef.current[i];
        if (container && !(viewersRef.current[i])) {
          try {
            const panorama = u.campusImages && u.campusImages.length > 0 ? u.campusImages[0] : u.image;
            const viewer = createViewerInstance({
              container,
              panorama,
              navbar: ['zoom', 'move'],
              defaultZoomLvl: 50,
              loadingImg: '',
            });
            viewersRef.current[i] = viewer;
          } catch (err) {
            // fail silently
            // console.warn('PSV init error', err);
          }
        }
      });
    }

    // If script already present and library loaded
    const existing = document.querySelector(`script[src="${src}"]`);
    if ((window as any).PhotoSphereViewer) {
      initSmallViewers();
      return () => {};
    }

    if (existing) {
      // wait a tick for library to be available
      const t = setTimeout(() => initSmallViewers(), 250);
      return () => clearTimeout(t);
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => {
      initSmallViewers();
    };
    document.head.appendChild(script);
    scriptRef.current = script;

    return () => {
      // destroy small viewers
      viewersRef.current.forEach((v) => v && typeof v.destroy === 'function' && v.destroy());
      viewersRef.current = [];
      // remove script if we added it
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, [universities]);

  // open modal viewer
  useEffect(() => {
    if (!activeUniversity) return;
    if (!(window as any).PhotoSphereViewer) return;

    // destroy previous modal viewer if any
    if (modalViewerRef.current && typeof modalViewerRef.current.destroy === 'function') {
      modalViewerRef.current.destroy();
      modalViewerRef.current = null;
    }

    const panorama = activeUniversity.campusImages && activeUniversity.campusImages.length > 0 ? activeUniversity.campusImages[0] : activeUniversity.image;

    if (modalRef.current) {
      modalViewerRef.current = createViewerInstance({
        container: modalRef.current,
        panorama,
        navbar: ['zoom', 'move', 'fullscreen'],
        defaultZoomLvl: 50,
      });
    }

    return () => {
      if (modalViewerRef.current && typeof modalViewerRef.current.destroy === 'function') {
        modalViewerRef.current.destroy();
        modalViewerRef.current = null;
      }
    };
  }, [activeUniversity]);

  return (
    <div className="panorama-page">
      <div className="section-container">
        <h1 className="page-title">Mini Panoramas — Virtual Campus Tours</h1>

        <p className="lead">Кликните по мини-панораме, чтобы открыть полноэкранный 3D-тур.</p>

        <div className="grid">
          {universities.map((u, i) => (
            <div
              key={u.slug}
              className="card"
              onClick={() => setActiveUniversity(u)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setActiveUniversity(u); }}
            >
              <div
                className="mini-viewer"
                ref={(el) => { containersRef.current[i] = el; return undefined; }}
                style={{ height: 220 }}
              />
              <div className="card-body">
                <img src={u.logo} alt={u.name} className="logo" />
                <div className="card-info">
                  <h3 className="uni-name">{u.name}</h3>
                  <p className="uni-location">{u.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeUniversity && (
          <div className="modal-overlay" onClick={() => setActiveUniversity(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setActiveUniversity(null)} aria-label="Close">×</button>
              <div className="modal-viewer" ref={modalRef} />
              <div className="modal-meta">
                <h2>{activeUniversity.fullName}</h2>
                <p>{activeUniversity.description}</p>
                <a className="visit-btn" href={activeUniversity.website} target="_blank" rel="noreferrer">Visit website</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
