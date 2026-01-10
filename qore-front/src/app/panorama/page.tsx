import VirtualTour from '@/components/VirtualTour';

export default function UniversityPage() {
  const tourScenes = {
    entrance: {
      title: 'Harvard University',
        panorama: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=4000&q=80', 
 // Harvard yard
      hotSpots: [
        {
          pitch: -5,
          yaw: 90,
          type: 'info' as const,
          text: 'Main Building - Founded in 2001'
        },
        {
          pitch: 0,
          yaw: -45,
          type: 'scene' as const,
          text: 'Go to Library',
          sceneId: 'library'
        }
      ]
    },
    library: {
      title: 'University Library',
      panorama: 'https://pannellum.org/images/jfk.jpg', // замени на свое фото
      hotSpots: [
        {
          pitch: 0,
          yaw: 180,
          type: 'scene' as const,
          text: 'Back to Entrance',
          sceneId: 'entrance'
        },
        {
          pitch: -10,
          yaw: 0,
          type: 'info' as const,
          text: 'Library - 50,000+ books'
        }
      ]
    },
    dormitory: {
      title: 'Student Dormitory',
      panorama: '/campus/dorm-360.jpg', // твое фото
      hotSpots: [
        {
          pitch: 0,
          yaw: 90,
          type: 'scene' as const,
          text: 'Back to Entrance',
          sceneId: 'entrance'
        }
      ]
    }
  };

  return (
    <div className="university-page">
      <h1>Virtual Campus Tour</h1>
      <VirtualTour scenes={tourScenes} defaultScene="entrance" />
    </div>
  );
}