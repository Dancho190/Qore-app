'use client';

import Image from 'next/image';
import Link from 'next/link';
import './TrustedBySection.css';

const universities = [
  { name: 'Nazarbayev University', logo: '/nulogo.png', url: '/universities/nazarbayev' },
  { name: 'Al-Farabi KazNU', logo: '/kaznu.png', url: '/universities/kaznu' },
  { name: 'Satbayev University', logo: '/Satbayevlogo.png', url: '/universities/satbayev' },
  { name: 'Astana IT University', logo: '/aitulogo.png', url: '/universities/aitu' },
  { name: 'KBTU', logo: '/kbtulogo.png', url: '/universities/kbtu' },
  { name: 'IITU', logo: '/IITUlogo.png', url: '/universities/iitu' },
  { name: 'МНУ', logo: '/mnu_logo.png', url: '/universities/mnu' },
];

export default function TrustedBySection() {
  const duplicatedUniversities = [
    ...universities,
    ...universities,
    ...universities,
    ...universities,
    ...universities,
  ];

  return (
    <section className="trusted-by-section">
      <div className="trusted-by-container">
        <h3 className="trusted-by-title">TRUSTED BY STUDENTS AT</h3>
        
        <div className="trusted-by-wrapper">
          <div className="trusted-by-track">
            {duplicatedUniversities.map((uni, index) => (
              <Link 
                key={index} 
                href={uni.url || '#'} 
                className="trusted-by-item"
              >
                {uni.logo ? (
                  <div className="trusted-by-logo">
                    <Image
                      src={uni.logo}
                      alt={uni.name}
                      width={120}
                      height={60}
                      className="trusted-by-image"
                      unoptimized
                    />
                  </div>
                ) : (
                  <span className="trusted-by-name">{uni.name}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
