import { Facility } from '../types';

export const facilitiesData: Facility[] = [
  {
    id: 'classrooms',
    title: 'Smart Classrooms',
    category: 'Academic',
    description: 'Acoustically treated tiered lecture halls and multimedia-enabled smart classrooms fitted with high-lumen projectors, smart digital podiums, and interactive display surfaces.',
    highlights: [
      'Ergonomic seating with individual power access for laptops',
      'Dual projection systems for synchronous code & slide presentation',
      'High-bandwidth Wi-Fi 6 coverage across every lecture gallery',
      'Natural daylight optimization with energy-efficient climate control'
    ],
    specs: '60+ Multimedia Classrooms & 8 Seminar Galleries'
  },
  {
    id: 'laboratories',
    title: 'Advanced Laboratories',
    category: 'Academic',
    description: 'Discipline-specific laboratories equipped with high-end computational hardware, licensed engineering software suites, testing instrumentation, and experimental apparatus.',
    highlights: [
      'High-performance computing workstations with dedicated GPU accelerators',
      'Cadence EDA software suite for VLSI design and microelectronics research',
      'Subsonic wind tunnel and aerodynamic flow testing apparatus',
      'CNC machining, material testing, and advanced hydraulics laboratories'
    ],
    specs: '45+ Specialized Engineering & Computing Laboratories'
  },
  {
    id: 'library',
    title: 'Digital Library & Resource Centre',
    category: 'Academic',
    description: 'Expansive knowledge hub spanning multiple levels with print volumes, digital subscriptions, IEEE/ScienceDirect research databases, and quiet dissertation research cubicles.',
    highlights: [
      'Over 35,000+ volumes, titles, and national/international journal subscriptions',
      'Digital library section with 50+ high-speed terminals for online database browsing',
      'VTU Consortium institutional access for IEEE Xplore, Springer, and Elsevier',
      'RFID-enabled automated book lending and cataloging system'
    ],
    specs: 'Central Knowledge Hub with 35,000+ Volumes & Digital Portal'
  },
  {
    id: 'seminar-hall',
    title: 'Air-Conditioned Seminar Halls',
    category: 'Academic',
    description: 'State-of-the-art auditorium and seminar halls designed for international symposiums, industry keynote addresses, cultural presentations, and placement pre-talks.',
    highlights: [
      'Surround sound acoustic treatment and professional lighting rigs',
      'High-definition multi-camera recording and live-streaming facilities',
      'Cushioned auditorium seating accommodating large student gatherings',
      'Dedicated green rooms and VIP guest holding lounges'
    ],
    specs: '3 Seminar Halls & 600-Capacity Central Auditorium'
  },
  {
    id: 'open-air-theatre',
    title: 'Open Air Theatre (OAT)',
    category: 'Recreation',
    description: 'An open-air amphitheater nestled amidst the green slopes of the Kenjar campus, providing an atmospheric venue for cultural festivals, annual day celebrations, and musical performances.',
    highlights: [
      'Spacious terraced grass-and-stone seating for 1,500+ spectators',
      'Elevated performance stage with integrated outdoor electrical distribution',
      'Ideal natural acoustics surrounded by scenic coastal landscape'
    ],
    specs: '1,500+ Seating Capacity Outdoor Amphitheater'
  },
  {
    id: 'sports',
    title: 'Sports Complex & Athletics Grounds',
    category: 'Recreation',
    description: 'Comprehensive sports infrastructure promoting physical fitness and inter-collegiate sportsmanship, featuring standard outdoor pitches and dedicated indoor gaming arenas.',
    highlights: [
      'Cricket field and full-size football pitch with spectator stands',
      'Standard volleyball, basketball, and throwball outdoor courts',
      'Indoor sports pavilion for table tennis, carrom, chess, and badminton',
      'Modern gymnasium equipped with strength and cardiovascular training equipment'
    ],
    specs: 'Outdoor Sports Ground, Courts & Indoor Gymnasium'
  },
  {
    id: 'cafeteria',
    title: 'Cafeteria & Food Court',
    category: 'Amenities',
    description: 'Hygienic multi-cuisine food court catering to diverse tastes of students and faculty, offering freshly prepared South Indian, North Indian, and continental breakfast, lunch, and snack options.',
    highlights: [
      'Strict quality audits and food safety standards maintained daily',
      'Spacious, airy dining seating with fast-service counters',
      'Affordable student-friendly pricing with nutritious meal plans',
      'Dedicated beverage and fresh juice bars'
    ],
    specs: '400+ Seating Multi-Cuisine Food Court'
  },
  {
    id: 'hostel',
    title: 'Residential Hostels (Boys & Girls)',
    category: 'Residential',
    description: 'Separate, secure residential hostels located within close proximity to academic blocks, providing furnished rooms, 24/7 security, Wi-Fi connectivity, and dining mess.',
    highlights: [
      'Choice of single, double, and triple occupancy well-ventilated rooms',
      'Nutritious vegetarian and non-vegetarian mess food with rotating weekly menus',
      '24/7 CCTV surveillance, biometric access, and resident wardens',
      'Common reading rooms, TV lounges, and solar hot water heating systems'
    ],
    specs: 'Dedicated On-Campus Boys & Girls Hostel Wings'
  },
  {
    id: 'transport',
    title: 'Fleet Transportation',
    category: 'Amenities',
    description: 'Dedicated fleet of institutional buses operating across multiple commuter routes connecting Mangaluru city, Surathkal, Bantwal, Moodbidri, and surrounding areas to the Kenjar campus.',
    highlights: [
      'Comfortable bus fleet with punctual morning and evening schedules',
      'GPS-tracked vehicles with professional verified drivers',
      'Safe transit picking up students from prominent central junctions'
    ],
    specs: 'Campus Fleet Serving Mangaluru & Coastal Suburbs'
  },
  {
    id: 'wifi-digital',
    title: 'Digital Campus & Wi-Fi 6',
    category: 'Amenities',
    description: 'High-speed fiber-optic campus backbone providing seamless wireless coverage across all academic blocks, laboratories, library, and hostel residences.',
    highlights: [
      'High-bandwidth leased fiber internet connection with redundant failover',
      'Firewall protected secure enterprise network with content safety policies',
      'Centralized student portal access for ERP, marks, and attendance'
    ],
    specs: '1 Gbps Redundant Leased Line Campus Backbone'
  }
];
