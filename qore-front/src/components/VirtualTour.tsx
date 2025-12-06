'use client';
import { useEffect, useRef } from 'react';

interface HotSpot {
  pitch: number;
  yaw: number;
  type: 'info' | 'scene';
  text?: string;
  sceneId?: string;
  createTooltipFunc?: (hotSpotDiv: HTMLElement, args: any) => void;
}

interface Scene {
  title: string;
  panorama: string;
  hotSpots?: HotSpot[];
}

interface VirtualTourProps {
  scenes: Record<string, Scene>;
  defaultScene?: string;
}

declare global {
  interface Window {
    pannellum: any;
  }
}

export default function VirtualTour({ scenes, defaultScene = 'entrance' }: VirtualTourProps) {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Загружаем CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
    document.head.appendChild(link);

    // Загружаем JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
    script.onload = () => {
      if (viewerRef.current && window.pannellum) {
        window.pannellum.viewer('pannellum-viewer', {
          default: {
            firstScene: defaultScene,
            sceneFadeDuration: 1000,
            autoLoad: true
          },
          scenes: scenes
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, [scenes, defaultScene]);

  return (
    <div className="virtual-tour-container">
      <div 
        id="pannellum-viewer" 
        ref={viewerRef}
        style={{ 
          width: '100%', 
          height: '600px',
          borderRadius: '12px',
          overflow: 'hidden'
        }} 
      />
    </div>
  );
}