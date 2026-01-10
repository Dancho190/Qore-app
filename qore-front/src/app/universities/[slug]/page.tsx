'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getUniversityBySlug } from '../universitiesData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './page.css';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function UniversityPage({ params }: PageProps) {
  const { slug } = use(params);
  const university = getUniversityBySlug(slug);
  const [activeTab, setActiveTab] = useState<'bachelor' | 'master' | 'phd'>('bachelor');
  const [activeAccordion, setActiveAccordion] = useState<'bachelor' | 'master' | null>('bachelor');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!university) {
    notFound();
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % university.campusImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + university.campusImages.length) % university.campusImages.length);
  };

  return (
    <div className="university-page">
      <Header />
      
      <section className="university-hero">
        <div className="hero-image-container">
          <Image
            src={university.image}
            alt={university.name}
            fill
            className="hero-image"
            priority
            unoptimized
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-logo">
            <Image
              src={university.logo}
              alt={university.name}
              width={120}
              height={120}
              className="university-logo"
              unoptimized
            />
          </div>
          <h1 className="hero-title">{university.fullName}</h1>
          <p className="hero-description">{university.description}</p>
          <div className="hero-cta">
            <Link href="/apply" className="cta-primary">
              Apply Now
            </Link>
            <button className="cta-secondary">Request Info</button>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-container">
          <h2 className="section-title">About {university.name}</h2>
          <p className="about-text">
            Founded in {university.founded}, {university.name} is located in {university.location} and has established itself as one of Kazakhstan's leading educational institutions. With a commitment to excellence in teaching and research, the university offers world-class programs across multiple disciplines.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{university.stats.enrollment.toLocaleString()}+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{university.stats.averageScore}</div>
              <div className="stat-label">Avg. ENT Score</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{university.stats.internationalStudents}+</div>
              <div className="stat-label">International Students</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{university.stats.faculty}+</div>
              <div className="stat-label">Faculty Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="campus-carousel-section">
        <div className="section-container">
          <h2 className="section-title">Campus Gallery</h2>
          <div className="carousel-container">
            <button className="carousel-btn carousel-btn-prev" onClick={prevImage}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="carousel-image-wrapper">
              <Image
                src={university.campusImages[currentImageIndex]}
                alt={`Campus view ${currentImageIndex + 1}`}
                fill
                className="carousel-image"
                unoptimized
                style={{ objectFit: 'cover' }}
              />
            </div>
            <button className="carousel-btn carousel-btn-next" onClick={nextImage}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="carousel-indicators">
              {university.campusImages.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="programs-section">
        <div className="section-container">
          <h2 className="section-title">Academic Programs</h2>
          <div className="programs-tabs">
            <button
              className={`tab-btn ${activeTab === 'bachelor' ? 'active' : ''}`}
              onClick={() => setActiveTab('bachelor')}
            >
              Bachelor's
            </button>
            <button
              className={`tab-btn ${activeTab === 'master' ? 'active' : ''}`}
              onClick={() => setActiveTab('master')}
            >
              Master's
            </button>
            <button
              className={`tab-btn ${activeTab === 'phd' ? 'active' : ''}`}
              onClick={() => setActiveTab('phd')}
            >
              PhD
            </button>
          </div>
          <div className="programs-grid">
            {university.programsByLevel[activeTab].map((program, index) => (
              <div key={index} className="program-card">
                <h3 className="program-name">{program.name}</h3>
                <div className="program-details">
                  <div className="program-detail">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{program.duration}</span>
                  </div>
                  <div className="program-detail">
                    <span className="detail-label">Cost:</span>
                    <span className="detail-value">{program.cost}</span>
                  </div>
                  <div className="program-detail">
                    <span className="detail-label">Language:</span>
                    <span className="detail-value">{program.language}</span>
                  </div>
                </div>
                <button className="program-apply-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="admission-section">
        <div className="section-container">
          <h2 className="section-title">Admission Requirements</h2>
          <div className="accordion-container">
            <div className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => setActiveAccordion(activeAccordion === 'bachelor' ? null : 'bachelor')}
              >
                <span>Bachelor's Degree Requirements</span>
                <svg
                  className={`accordion-icon ${activeAccordion === 'bachelor' ? 'open' : ''}`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {activeAccordion === 'bachelor' && (
                <div className="accordion-content">
                  {university.admissionRequirements.bachelor.map((req, index) => (
                    <div key={index} className="requirement-item">
                      <h4 className="requirement-title">{req.title}</h4>
                      <p className="requirement-description">{req.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => setActiveAccordion(activeAccordion === 'master' ? null : 'master')}
              >
                <span>Master's Degree Requirements</span>
                <svg
                  className={`accordion-icon ${activeAccordion === 'master' ? 'open' : ''}`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {activeAccordion === 'master' && (
                <div className="accordion-content">
                  {university.admissionRequirements.master.map((req, index) => (
                    <div key={index} className="requirement-item">
                      <h4 className="requirement-title">{req.title}</h4>
                      <p className="requirement-description">{req.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {university.partnerUniversities.length > 0 && (
        <section className="partners-section">
          <div className="section-container">
            <h2 className="section-title">Partner Universities</h2>
            <p className="section-subtitle">International collaborations and exchange programs</p>
            <div className="partners-grid">
              {university.partnerUniversities.map((partner, index) => (
                <div key={index} className="partner-card">
                  <div className="partner-logo-wrapper">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={150}
                      height={80}
                      className="partner-logo"
                      unoptimized
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <h3 className="partner-name">{partner.name}</h3>
                  <p className="partner-country">{partner.country}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
