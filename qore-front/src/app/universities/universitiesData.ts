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
}

export const universities: Record<string, University> = {
  nazarbayev: {
    slug: 'nazarbayev',
    name: 'Nazarbayev University',
    fullName: 'Nazarbayev University',
    description: 'Premier research university with international partnerships and world-class facilities',
    logo: '/nulogo.png',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    rating: 4.8,
    location: 'Astana, Kazakhstan',
    founded: 2010,
    website: 'https://nu.edu.kz',
    programs: ['Computer Science', 'Engineering', 'Business', 'Medicine', 'Social Sciences']
  },
  kaznu: {
    slug: 'kaznu',
    name: 'Al-Farabi KazNU',
    fullName: 'Al-Farabi Kazakh National University',
    description: 'Leading classical university with diverse academic programs and rich history',
    logo: '/kaznu.png',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80',
    rating: 4.6,
    location: 'Almaty, Kazakhstan',
    founded: 1934,
    website: 'https://www.kaznu.kz',
    programs: ['Natural Sciences', 'Humanities', 'Social Sciences', 'Engineering', 'Medicine']
  },
  satbayev: {
    slug: 'satbayev',
    name: 'Satbayev University',
    fullName: 'Satbayev University',
    description: 'Top technical university specializing in engineering and technology',
    logo: '/Satbayevlogo.png',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
    rating: 4.7,
    location: 'Almaty, Kazakhstan',
    founded: 1934,
    website: 'https://satbayev.university',
    programs: ['Mining Engineering', 'Petroleum Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Information Technology']
  },
  kbtu: {
    slug: 'kbtu',
    name: 'KBTU',
    fullName: 'Kazakh-British Technical University',
    description: 'Kazakh-British Technical University with international standards and British education system',
    logo: '/kbtulogo.png',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    rating: 4.6,
    location: 'Almaty, Kazakhstan',
    founded: 2001,
    website: 'https://kbtu.edu.kz',
    programs: ['Petroleum Engineering', 'Information Technology', 'Business', 'Chemical Engineering', 'Marine Engineering']
  },
  iitu: {
    slug: 'iitu',
    name: 'IITU',
    fullName: 'International Information Technologies University',
    description: 'Leading IT university focused on information technologies and innovation',
    logo: '/IITUlogo.png',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    rating: 4.5,
    location: 'Almaty, Kazakhstan',
    founded: 2009,
    website: 'https://iitu.edu.kz',
    programs: ['Computer Science', 'Software Engineering', 'Cybersecurity', 'Data Science', 'Information Systems']
  },
  mnu: {
    slug: 'mnu',
    name: 'MNU',
    fullName: 'Modern University',
    description: 'Modern university with innovative programs and contemporary approach to education',
    logo: '/mnu_logo.png',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
    rating: 4.4,
    location: 'Almaty, Kazakhstan',
    founded: 1992,
    website: 'https://mnu.kz',
    programs: ['Business Administration', 'Economics', 'Law', 'Journalism', 'International Relations']
  }
};

export const getAllUniversities = (): University[] => {
  return Object.values(universities);
};

export const getUniversityBySlug = (slug: string): University | undefined => {
  return universities[slug];
};
