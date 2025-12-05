'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustedBySection from '@/components/TrustedBySection';
import './page.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-headline">
            Discover Kazakhstan's <span className="highlight-green">Premier Universities</span>
          </h1>
          <p className="hero-subheadline">
            Explore top educational institutions, compare programs, and find your perfect academic path with our comprehensive university platform
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2C5.13 2 2 5.13 2 9C2 12.87 5.13 16 9 16C12.87 16 16 12.87 16 9C16 5.13 12.87 2 9 2ZM9 14.5C6.24 14.5 4 12.26 4 9.5C4 6.74 6.24 4.5 9 4.5C11.76 4.5 14 6.74 14 9.5C14 12.26 11.76 14.5 9 14.5ZM17.29 15.88L15.88 17.29L13.29 14.7L14.7 13.29L17.29 15.88Z" fill="white"/>
              </svg>
              Explore Universities
            </button>
            <button className="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V15L15 10L8 5Z" fill="white"/>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      <section className="universities-section">
        <div className="section-container">
          <h2 className="section-title">Top Universities</h2>
          <p className="section-subtitle">Discover leading educational institutions across Kazakhstan</p>
          
          <div className="universities-grid">
            <div className="university-card">
              <div className="university-image">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" alt="Nazarbayev University" />
              </div>
              <div className="university-content">
                <h3 className="university-name">Nazarbayev University</h3>
                <p className="university-description">Premier research university with international partnerships</p>
                <div className="university-rating">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.163 5.52786L16 6.11146L11.8541 9.97214L12.9443 16L8 13.0279L3.05573 16L4.1459 9.97214L0 6.11146L5.83697 5.52786L8 0Z" fill="#00FF88"/>
                  </svg>
                  <span>4.8</span>
                </div>
                <div className="card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-image">
                <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80" alt="Al-Farabi KazNU" />
              </div>
              <div className="university-content">
                <h3 className="university-name">Al-Farabi KazNU</h3>
                <p className="university-description">Leading classical university with diverse academic programs</p>
                <div className="university-rating">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.163 5.52786L16 6.11146L11.8541 9.97214L12.9443 16L8 13.0279L3.05573 16L4.1459 9.97214L0 6.11146L5.83697 5.52786L8 0Z" fill="#00FF88"/>
                  </svg>
                  <span>4.6</span>
                </div>
                <div className="card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-image">
                <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80" alt="Satbayev University" />
              </div>
              <div className="university-content">
                <h3 className="university-name">Satbayev University</h3>
                <p className="university-description">Top technical university specializing in engineering and technology</p>
                <div className="university-rating">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.163 5.52786L16 6.11146L11.8541 9.97214L12.9443 16L8 13.0279L3.05573 16L4.1459 9.97214L0 6.11146L5.83697 5.52786L8 0Z" fill="#00FF88"/>
                  </svg>
                  <span>4.7</span>
                </div>
                <div className="card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-image">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80" alt="IITU" />
              </div>
              <div className="university-content">
                <h3 className="university-name">IITU</h3>
                <p className="university-description">International Information Technologies University</p>
                <div className="university-rating">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.163 5.52786L16 6.11146L11.8541 9.97214L12.9443 16L8 13.0279L3.05573 16L4.1459 9.97214L0 6.11146L5.83697 5.52786L8 0Z" fill="#00FF88"/>
                  </svg>
                  <span>4.5</span>
                </div>
                <div className="card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-image">
                <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80" alt="MNU" />
              </div>
              <div className="university-content">
                <h3 className="university-name">MNU</h3>
                <p className="university-description">Modern university with innovative programs</p>
                <div className="university-rating">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.163 5.52786L16 6.11146L11.8541 9.97214L12.9443 16L8 13.0279L3.05573 16L4.1459 9.97214L0 6.11146L5.83697 5.52786L8 0Z" fill="#00FF88"/>
                  </svg>
                  <span>4.4</span>
                </div>
                <div className="card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-image">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" alt="KBTU" />
              </div>
              <div className="university-content">
                <h3 className="university-name">KBTU</h3>
                <p className="university-description">Kazakh-British Technical University with international standards</p>
                <div className="university-rating">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.163 5.52786L16 6.11146L11.8541 9.97214L12.9443 16L8 13.0279L3.05573 16L4.1459 9.97214L0 6.11146L5.83697 5.52786L8 0Z" fill="#00FF88"/>
                  </svg>
                  <span>4.6</span>
                </div>
                <div className="card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <TrustedBySection />

      <section className="admission-section">
        <div className="section-container">
          <div className="admission-layout">
            <div className="admission-requirements">
              <h2 className="section-title">Admission Requirements</h2>
              <p className="section-subtitle">Understanding the admission process for Kazakhstan universities</p>
              
              <div className="requirements-list">
                <div className="requirement-item">
                  <div className="requirement-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="requirement-content">
                    <h3 className="requirement-title">Academic Transcripts</h3>
                    <p className="requirement-description">Official academic records and certificates</p>
                  </div>
                </div>

                <div className="requirement-item">
                  <div className="requirement-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="requirement-content">
                    <h3 className="requirement-title">Language Proficiency</h3>
                    <p className="requirement-description">IELTS, TOEFL, or local language tests</p>
                  </div>
                </div>

                <div className="requirement-item">
                  <div className="requirement-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="requirement-content">
                    <h3 className="requirement-title">Entrance Exams</h3>
                    <p className="requirement-description">UNT or specialized program tests</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="quick-application">
              <h2 className="section-title">Quick Application</h2>
              <form className="application-form">
                <div className="form-group">
                  <input type="text" placeholder="Full Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" className="form-input" />
                </div>
                <div className="form-group">
                  <select className="form-input form-select">
                    <option value="">Select University</option>
                    <option value="nazarbayev">Nazarbayev University</option>
                    <option value="alfarabi">Al-Farabi KazNU</option>
                    <option value="satbayev">Satbayev University</option>
                    <option value="IITU">International Information Technoligies University</option>
                    <option value="kbtu">Kazakh-British Technical University</option>
                  </select>
                </div>
                <button type="submit" className="submit-btn">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="programs-section">
        <div className="section-container">
          <h2 className="section-title">Academic Programs</h2>
          <p className="section-subtitle">Explore diverse fields of study</p>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6H10V8H8V6ZM14 6H16V8H14V6ZM8 10H10V12H8V10ZM14 10H16V12H14V10ZM8 14H10V16H8V14ZM14 14H16V16H14V14ZM6 4V20H18V4H6ZM16 18H8V6H16V18Z" fill="white"/>
                </svg>
              </div>
              <h3 className="program-title">Computer Science</h3>
              <p className="program-description">Software development, AI, cybersecurity</p>
              <div className="program-count">120+ programs</div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5ZM19.43 12.97C19.47 12.65 19.5 12.33 19.5 12C19.5 11.67 19.47 11.35 19.43 11.03L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.65 15.5 5.32 14.87 5.07L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.5 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.03C4.53 11.35 4.5 11.67 4.5 12C4.5 12.33 4.53 12.65 4.57 12.97L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.95C7.96 18.35 8.5 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.5 18.67 16.04 18.34 16.56 17.94L19.05 18.94C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97ZM18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12Z" fill="white"/>
                </svg>
              </div>
              <h3 className="program-title">Engineering</h3>
              <p className="program-description">Mechanical, electrical, civil engineering</p>
              <div className="program-count">85+ programs</div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="white"/>
                </svg>
              </div>
              <h3 className="program-title">Business</h3>
              <p className="program-description">MBA, finance, marketing, management</p>
              <div className="program-count">95+ programs</div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="white"/>
                  <path d="M12 12L14.5 14.5L17 12L14.5 9.5L12 12Z" fill="white"/>
                </svg>
              </div>
              <h3 className="program-title">Medicine</h3>
              <p className="program-description">General medicine, dentistry, pharmacy</p>
              <div className="program-count">45+ programs</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

