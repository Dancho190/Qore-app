export interface Program {
  name: string;
  duration: string;
  cost: string;
  language: string;
}

export interface ProgramsByLevel {
  bachelor: Program[];
  master: Program[];
  phd: Program[];
}

export interface AdmissionRequirement {
  title: string;
  description: string;
}

export interface AdmissionRequirements {
  bachelor: AdmissionRequirement[];
  master: AdmissionRequirement[];
}

export interface University {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  logo: string;
  image: string;
  rating: number;
  location: string;
  founded: number;
  website: string;
  programs: string[];
  stats: {
    enrollment: number;
    averageScore: number;
    internationalStudents: number;
    faculty: number;
  };
  campusImages: string[];
  programsByLevel: ProgramsByLevel;
  admissionRequirements: AdmissionRequirements;
  partnerUniversities: {
    name: string;
    logo: string;
    country: string;
  }[];
}

export const universities: Record<string, University> = {
  nazarbayev: {
    slug: 'nazarbayev',
    name: 'Nazarbayev University',
    fullName: 'Nazarbayev University',
    description: 'Premier research university with international partnerships and world-class facilities',
    logo: '/NU.jpg',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
    rating: 4.8,
    location: 'Astana, Kazakhstan',
    founded: 2010,
    website: 'https://nu.edu.kz',
    programs: ['Computer Science', 'Engineering', 'Business', 'Medicine', 'Social Sciences'],
    stats: {
      enrollment: 6500,
      averageScore: 125,
      internationalStudents: 850,
      faculty: 450
    },
    campusImages: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80',
      'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80'
    ],
    programsByLevel: {
      bachelor: [
        { name: 'Computer Science', duration: '4 years', cost: '$8,500/year', language: 'English' },
        { name: 'Mechanical Engineering', duration: '4 years', cost: '$8,500/year', language: 'English' },
        { name: 'Business Administration', duration: '4 years', cost: '$7,500/year', language: 'English' },
        { name: 'Economics', duration: '4 years', cost: '$7,500/year', language: 'English' },
        { name: 'Mathematics', duration: '4 years', cost: '$8,500/year', language: 'English' }
      ],
      master: [
        { name: 'Computer Science', duration: '2 years', cost: '$10,000/year', language: 'English' },
        { name: 'Engineering Management', duration: '2 years', cost: '$10,000/year', language: 'English' },
        { name: 'MBA', duration: '2 years', cost: '$12,000/year', language: 'English' },
        { name: 'Data Science', duration: '2 years', cost: '$10,000/year', language: 'English' }
      ],
      phd: [
        { name: 'Computer Science', duration: '4 years', cost: 'Fully Funded', language: 'English' },
        { name: 'Engineering', duration: '4 years', cost: 'Fully Funded', language: 'English' },
        { name: 'Business', duration: '4 years', cost: 'Fully Funded', language: 'English' }
      ]
    },
    admissionRequirements: {
      bachelor: [
        { title: 'ENT Scores', description: 'Minimum 120 points (out of 140) in Unified National Testing' },
        { title: 'IELTS/TOEFL', description: 'IELTS 6.0 or TOEFL iBT 79 (for English-taught programs)' },
        { title: 'Medical Certificate', description: 'Valid medical certificate (form 086-U)' },
        { title: 'Passport Copy', description: 'Notarized copy of passport or ID card' },
        { title: 'Photos', description: '4 passport-size photos (3.5x4.5 cm)' },
        { title: 'School Certificate', description: 'Original high school diploma with transcript' }
      ],
      master: [
        { title: 'Bachelor Diploma', description: 'Original bachelor degree diploma with transcript (GPA 3.0+)' },
        { title: 'IELTS/TOEFL', description: 'IELTS 6.5 or TOEFL iBT 85 (for English-taught programs)' },
        { title: 'Recommendation Letters', description: '2-3 recommendation letters from professors or employers' },
        { title: 'CV/Resume', description: 'Updated curriculum vitae with work experience' },
        { title: 'Motivation Letter', description: 'Statement of purpose (500-1000 words)' },
        { title: 'Research Proposal', description: 'Research proposal for thesis-based programs' }
      ]
    },
    partnerUniversities: [
      { name: 'Duke University', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Duke-University-Logo.png', country: 'USA' },
      { name: 'University of Cambridge', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Cambridge-University-Logo.png', country: 'UK' },
      { name: 'National University of Singapore', logo: 'https://logos-world.net/wp-content/uploads/2021/02/National-University-of-Singapore-Logo.png', country: 'Singapore' },
      { name: 'University of Pennsylvania', logo: 'https://logos-world.net/wp-content/uploads/2021/02/University-of-Pennsylvania-Logo.png', country: 'USA' },
      { name: 'ETH Zurich', logo: 'https://logos-world.net/wp-content/uploads/2021/02/ETH-Zurich-Logo.png', country: 'Switzerland' },
      { name: 'University of Toronto', logo: 'https://logos-world.net/wp-content/uploads/2021/02/University-of-Toronto-Logo.png', country: 'Canada' }
    ]
  },
  kaznu: {
    slug: 'kaznu',
    name: 'Al-Farabi KazNU',
    fullName: 'Al-Farabi Kazakh National University',
    description: 'Leading classical university with diverse academic programs and rich history',
    logo: '/kaznu.png',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1600&q=80',
    rating: 4.6,
    location: 'Almaty, Kazakhstan',
    founded: 1934,
    website: 'https://www.kaznu.kz',
    programs: ['Natural Sciences', 'Humanities', 'Social Sciences', 'Engineering', 'Medicine'],
    stats: {
      enrollment: 18000,
      averageScore: 115,
      internationalStudents: 1200,
      faculty: 1200
    },
    campusImages: [
      'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80'
    ],
    programsByLevel: {
      bachelor: [
        { name: 'Mathematics', duration: '4 years', cost: '$3,500/year', language: 'Kazakh/Russian' },
        { name: 'Physics', duration: '4 years', cost: '$3,500/year', language: 'Kazakh/Russian' },
        { name: 'Chemistry', duration: '4 years', cost: '$3,500/year', language: 'Kazakh/Russian' },
        { name: 'Journalism', duration: '4 years', cost: '$2,800/year', language: 'Kazakh/Russian' }
      ],
      master: [
        { name: 'Applied Mathematics', duration: '2 years', cost: '$4,500/year', language: 'Kazakh/Russian' },
        { name: 'International Relations', duration: '2 years', cost: '$4,000/year', language: 'Kazakh/Russian' }
      ],
      phd: [
        { name: 'Natural Sciences', duration: '3 years', cost: '$5,000/year', language: 'Kazakh/Russian' }
      ]
    },
    admissionRequirements: {
      bachelor: [
        { title: 'ENT Scores', description: 'Minimum 100 points in Unified National Testing' },
        { title: 'Language Certificate', description: 'Kazakh or Russian language proficiency' },
        { title: 'Medical Certificate', description: 'Valid medical certificate (form 086-U)' },
        { title: 'Passport Copy', description: 'Notarized copy of passport or ID card' },
        { title: 'Photos', description: '4 passport-size photos' }
      ],
      master: [
        { title: 'Bachelor Diploma', description: 'Original bachelor degree diploma with transcript' },
        { title: 'Recommendation Letters', description: '2 recommendation letters' },
        { title: 'CV/Resume', description: 'Curriculum vitae' }
      ]
    },
    partnerUniversities: [
      { name: 'Moscow State University', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Moscow-State-University-Logo.png', country: 'Russia' },
      { name: 'Peking University', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Peking-University-Logo.png', country: 'China' }
    ]
  },
  satbayev: {
    slug: 'satbayev',
    name: 'Satbayev University',
    fullName: 'Satbayev University',
    description: 'Top technical university specializing in engineering and technology',
    logo: '/Satbayevlogo.png',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1600&q=80',
    rating: 4.7,
    location: 'Almaty, Kazakhstan',
    founded: 1934,
    website: 'https://satbayev.university',
    programs: ['Mining Engineering', 'Petroleum Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Information Technology'],
    stats: {
      enrollment: 12000,
      averageScore: 110,
      internationalStudents: 500,
      faculty: 600
    },
    campusImages: [
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
      'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80'
    ],
    programsByLevel: {
      bachelor: [
        { name: 'Mining Engineering', duration: '4 years', cost: '$4,500/year', language: 'Kazakh/Russian' },
        { name: 'Petroleum Engineering', duration: '4 years', cost: '$5,000/year', language: 'Kazakh/Russian' },
        { name: 'Mechanical Engineering', duration: '4 years', cost: '$4,500/year', language: 'Kazakh/Russian' }
      ],
      master: [
        { name: 'Petroleum Engineering', duration: '2 years', cost: '$5,500/year', language: 'Kazakh/Russian' },
        { name: 'Mining Engineering', duration: '2 years', cost: '$5,500/year', language: 'Kazakh/Russian' }
      ],
      phd: [
        { name: 'Engineering', duration: '3 years', cost: '$6,000/year', language: 'Kazakh/Russian' }
      ]
    },
    admissionRequirements: {
      bachelor: [
        { title: 'ENT Scores', description: 'Minimum 105 points in Unified National Testing' },
        { title: 'Medical Certificate', description: 'Valid medical certificate' },
        { title: 'Passport Copy', description: 'Notarized copy of passport' },
        { title: 'Photos', description: '4 passport-size photos' }
      ],
      master: [
        { title: 'Bachelor Diploma', description: 'Original bachelor degree in related field' },
        { title: 'Recommendation Letters', description: '2 recommendation letters' },
        { title: 'CV/Resume', description: 'Curriculum vitae' }
      ]
    },
    partnerUniversities: [
      { name: 'Colorado School of Mines', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Colorado-School-of-Mines-Logo.png', country: 'USA' }
    ]
  },
  kbtu: {
    slug: 'kbtu',
    name: 'KBTU',
    fullName: 'Kazakh-British Technical University',
    description: 'Kazakh-British Technical University with international standards and British education system',
    logo: '/kbtulogo.png',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
    rating: 4.6,
    location: 'Almaty, Kazakhstan',
    founded: 2001,
    website: 'https://kbtu.edu.kz',
    programs: ['Petroleum Engineering', 'Information Technology', 'Business', 'Chemical Engineering', 'Marine Engineering'],
    stats: {
      enrollment: 8000,
      averageScore: 112,
      internationalStudents: 400,
      faculty: 350
    },
    campusImages: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80',
      'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80'
    ],
    programsByLevel: {
      bachelor: [
        { name: 'Petroleum Engineering', duration: '4 years', cost: '$5,500/year', language: 'English' },
        { name: 'Information Technology', duration: '4 years', cost: '$4,500/year', language: 'English' },
        { name: 'Business Administration', duration: '4 years', cost: '$4,000/year', language: 'English' }
      ],
      master: [
        { name: 'Petroleum Engineering', duration: '2 years', cost: '$6,000/year', language: 'English' },
        { name: 'IT Management', duration: '2 years', cost: '$5,500/year', language: 'English' }
      ],
      phd: [
        { name: 'Engineering', duration: '3 years', cost: '$7,000/year', language: 'English' }
      ]
    },
    admissionRequirements: {
      bachelor: [
        { title: 'ENT Scores', description: 'Minimum 110 points in Unified National Testing' },
        { title: 'IELTS', description: 'IELTS 5.5 or equivalent for English programs' },
        { title: 'Medical Certificate', description: 'Valid medical certificate' },
        { title: 'Passport Copy', description: 'Notarized copy of passport' },
        { title: 'Photos', description: '4 passport-size photos' }
      ],
      master: [
        { title: 'Bachelor Diploma', description: 'Original bachelor degree with transcript' },
        { title: 'IELTS', description: 'IELTS 6.0 or equivalent' },
        { title: 'Recommendation Letters', description: '2 recommendation letters' },
        { title: 'CV/Resume', description: 'Curriculum vitae' }
      ]
    },
    partnerUniversities: [
      { name: 'Heriot-Watt University', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Heriot-Watt-University-Logo.png', country: 'UK' },
      { name: 'University of Aberdeen', logo: 'https://logos-world.net/wp-content/uploads/2021/02/University-of-Aberdeen-Logo.png', country: 'UK' }
    ]
  },
  iitu: {
    slug: 'iitu',
    name: 'IITU',
    fullName: 'International Information Technologies University',
    description: 'Leading IT university focused on information technologies and innovation',
    logo: '/IITUlogo.png',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80',
    rating: 4.5,
    location: 'Almaty, Kazakhstan',
    founded: 2009,
    website: 'https://iitu.edu.kz',
    programs: ['Computer Science', 'Software Engineering', 'Cybersecurity', 'Data Science', 'Information Systems'],
    stats: {
      enrollment: 5000,
      averageScore: 108,
      internationalStudents: 200,
      faculty: 250
    },
    campusImages: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80',
      'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80'
    ],
    programsByLevel: {
      bachelor: [
        { name: 'Computer Science', duration: '4 years', cost: '$4,000/year', language: 'English' },
        { name: 'Software Engineering', duration: '4 years', cost: '$4,000/year', language: 'English' },
        { name: 'Cybersecurity', duration: '4 years', cost: '$4,500/year', language: 'English' }
      ],
      master: [
        { name: 'Data Science', duration: '2 years', cost: '$5,000/year', language: 'English' },
        { name: 'Software Engineering', duration: '2 years', cost: '$5,000/year', language: 'English' }
      ],
      phd: [
        { name: 'Information Technology', duration: '3 years', cost: '$6,000/year', language: 'English' }
      ]
    },
    admissionRequirements: {
      bachelor: [
        { title: 'ENT Scores', description: 'Minimum 105 points in Unified National Testing' },
        { title: 'IELTS', description: 'IELTS 5.5 for English programs' },
        { title: 'Medical Certificate', description: 'Valid medical certificate' },
        { title: 'Passport Copy', description: 'Notarized copy of passport' },
        { title: 'Photos', description: '4 passport-size photos' }
      ],
      master: [
        { title: 'Bachelor Diploma', description: 'Original bachelor degree in IT or related field' },
        { title: 'IELTS', description: 'IELTS 6.0' },
        { title: 'Recommendation Letters', description: '2 recommendation letters' },
        { title: 'CV/Resume', description: 'Curriculum vitae' }
      ]
    },
    partnerUniversities: [
      { name: 'Carnegie Mellon University', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Carnegie-Mellon-University-Logo.png', country: 'USA' }
    ]
  },
  mnu: {
    slug: 'mnu',
    name: 'MNU',
    fullName: 'Modern University',
    description: 'Modern university with innovative programs and contemporary approach to education',
    logo: '/mnu_logo.png',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1600&q=80',
    rating: 4.4,
    location: 'Almaty, Kazakhstan',
    founded: 1992,
    website: 'https://mnu.kz',
    programs: ['Business Administration', 'Economics', 'Law', 'Journalism', 'International Relations'],
    stats: {
      enrollment: 4000,
      averageScore: 100,
      internationalStudents: 150,
      faculty: 200
    },
    campusImages: [
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80',
      'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80'
    ],
    programsByLevel: {
      bachelor: [
        { name: 'Business Administration', duration: '4 years', cost: '$3,000/year', language: 'Kazakh/Russian' },
        { name: 'Economics', duration: '4 years', cost: '$3,000/year', language: 'Kazakh/Russian' },
        { name: 'Law', duration: '4 years', cost: '$3,200/year', language: 'Kazakh/Russian' }
      ],
      master: [
        { name: 'MBA', duration: '2 years', cost: '$4,000/year', language: 'Kazakh/Russian' },
        { name: 'International Relations', duration: '2 years', cost: '$3,500/year', language: 'Kazakh/Russian' }
      ],
      phd: [
        { name: 'Business', duration: '3 years', cost: '$4,500/year', language: 'Kazakh/Russian' }
      ]
    },
    admissionRequirements: {
      bachelor: [
        { title: 'ENT Scores', description: 'Minimum 95 points in Unified National Testing' },
        { title: 'Medical Certificate', description: 'Valid medical certificate' },
        { title: 'Passport Copy', description: 'Notarized copy of passport' },
        { title: 'Photos', description: '4 passport-size photos' }
      ],
      master: [
        { title: 'Bachelor Diploma', description: 'Original bachelor degree' },
        { title: 'Recommendation Letters', description: '2 recommendation letters' },
        { title: 'CV/Resume', description: 'Curriculum vitae' }
      ]
    },
    partnerUniversities: []
  }
};

export const getAllUniversities = (): University[] => {
  return Object.values(universities);
};

export const getUniversityBySlug = (slug: string): University | undefined => {
  return universities[slug];
};
