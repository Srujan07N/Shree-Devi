import { Department } from '../types';

export const departmentsData: Department[] = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    hodName: 'Dr. Ramesh Kumar',
    hodQualification: 'Ph.D in Computer Science, M.Tech (CSE)',
    facultyCount: 24,
    studentCount: 480,
    established: 2006,
    description: 'The Department of Computer Science & Engineering is committed to developing exceptional computer engineers equipped with analytical rigor, modern computational skills, and an aptitude for continuous innovation.',
    programsOffered: ['B.E. Computer Science & Engineering', 'Ph.D / M.Sc (Engg.) by Research'],
    keyLabs: [
      'Advanced Computing & Cloud Lab',
      'Data Structures & Algorithms Studio',
      'System Programming Lab',
      'Project Incubation Centre'
    ],
    researchAreas: ['Artificial Intelligence', 'Cybersecurity', 'Cloud Computing', 'Internet of Things'],
    achievements: [
      'Over 90% eligible students placed in premier IT organizations',
      'Active IEEE and CSI student chapters organizing annual hackathons',
      'Published 40+ research papers in Scopus/Web of Science indexed journals'
    ],
    contactEmail: 'hod.cse@sdc.ac.in'
  },
  {
    id: 'ise',
    name: 'Information Science & Engineering',
    shortName: 'ISE',
    hodName: 'Dr. Shwetha Kamath',
    hodQualification: 'Ph.D in Information Technology, M.Tech',
    facultyCount: 16,
    studentCount: 240,
    established: 2007,
    description: 'The Department of Information Science & Engineering focuses on data-centric computing, distributed systems, information architecture, and scalable software solutions.',
    programsOffered: ['B.E. Information Science & Engineering'],
    keyLabs: [
      'Enterprise Software Engineering Lab',
      'Data Mining & Warehousing Lab',
      'Network Security Studio'
    ],
    researchAreas: ['Big Data Analytics', 'Information Retrieval', 'Distributed Systems'],
    achievements: [
      'Student projects selected for state-level KSCST innovation funding',
      'Consistent top campus recruitment records across software service leaders'
    ],
    contactEmail: 'hod.ise@sdc.ac.in'
  },
  {
    id: 'cse-aiml',
    name: 'Computer Science & Engineering (AI & ML)',
    shortName: 'CSE (AI & ML)',
    hodName: 'Dr. Anand Shenoy',
    hodQualification: 'Ph.D in Machine Learning, M.Tech',
    facultyCount: 14,
    studentCount: 240,
    established: 2021,
    description: 'Focused on next-generation computing, this department trains students in machine learning pipelines, deep neural architectures, natural language understanding, and perceptual robotics.',
    programsOffered: ['B.E. Computer Science & Engineering (AI & ML)'],
    keyLabs: [
      'GPU Deep Learning Laboratory',
      'Computer Vision & Cognitive Systems Lab',
      'AI Innovation Studio'
    ],
    researchAreas: ['Deep Neural Networks', 'Computer Vision', 'Reinforcement Learning', 'Generative AI'],
    achievements: [
      'Winners of inter-collegiate AI hackathons across coastal Karnataka',
      'Collaborative student projects applied to agricultural imaging and medical diagnostics'
    ],
    contactEmail: 'hod.aiml@sdc.ac.in'
  },
  {
    id: 'aids',
    name: 'Artificial Intelligence & Data Science',
    shortName: 'AI & DS',
    hodName: 'Dr. Pradeep Rao',
    hodQualification: 'Ph.D in Data Science, M.Tech',
    facultyCount: 12,
    studentCount: 180,
    established: 2022,
    description: 'Specializes in mathematical modeling, computational statistics, massive dataset pipelines, and business intelligence solutions for enterprise decision-making.',
    programsOffered: ['B.E. Artificial Intelligence & Data Science'],
    keyLabs: [
      'Big Data & Spark Processing Lab',
      'Statistical Analytics Workspace',
      'Business Intelligence Studio'
    ],
    researchAreas: ['Predictive Modeling', 'Streaming Data Systems', 'Probabilistic Machine Learning'],
    achievements: [
      'Dedicated industry training modules on Apache Kafka and Cloud MLOps pipelines'
    ],
    contactEmail: 'hod.aids@sdc.ac.in'
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    hodName: 'Dr. Vidyadhar Shetty',
    hodQualification: 'Ph.D in VLSI Design, M.Tech (VLSI)',
    facultyCount: 20,
    studentCount: 360,
    established: 2006,
    description: 'Nurtures expertise in semiconductor electronics, integrated circuit design, embedded controllers, telecommunications, and digital signal processing systems.',
    programsOffered: ['B.E. Electronics & Communication Engineering', 'Ph.D Research Centre'],
    keyLabs: [
      'Cadence VLSI Design Lab',
      'Microcontroller & Embedded Systems Lab',
      'Microwave & Optical Fiber Lab',
      'Digital Signal Processing Lab'
    ],
    researchAreas: ['VLSI Architectures', '5G Wireless Technologies', 'Embedded IoT Systems'],
    achievements: [
      'VTU Recognized research center with ongoing doctoral research scholars',
      'Cadence University Program licensing for state-of-the-art circuit simulation'
    ],
    contactEmail: 'hod.ece@sdc.ac.in'
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    shortName: 'ME',
    hodName: 'Dr. Sudheer Pai',
    hodQualification: 'Ph.D in Thermal Engineering, M.Tech',
    facultyCount: 18,
    studentCount: 240,
    established: 2006,
    description: 'Combines classical mechanical principles with modern computational engineering, computer-aided manufacturing, robotics, and advanced materials engineering.',
    programsOffered: ['B.E. Mechanical Engineering', 'Ph.D Research Centre'],
    keyLabs: [
      'CAD/CAM & Simulation Centre',
      'Material Science & Metallography Lab',
      'Heat Power Engineering Lab',
      'CNC Machine Shop & Metrology'
    ],
    researchAreas: ['Composite Materials', 'Thermal Management', 'Renewable Energy Systems', 'Robotics'],
    achievements: [
      'Student fabrication teams participated in national SAE BAJA and Go-Kart competitions',
      'Consultancy testing for regional industrial components'
    ],
    contactEmail: 'hod.me@sdc.ac.in'
  },
  {
    id: 'cv',
    name: 'Civil Engineering',
    shortName: 'Civil',
    hodName: 'Dr. Manjunath Bhat',
    hodQualification: 'Ph.D in Structural Engineering, M.Tech',
    facultyCount: 16,
    studentCount: 240,
    established: 2008,
    description: 'Develops infrastructure engineers focused on structural durability, geotechnical stability, modern transportation planning, environmental conservation, and smart construction.',
    programsOffered: ['B.E. Civil Engineering', 'M.Tech Construction Technology', 'Ph.D Research Centre'],
    keyLabs: [
      'Advanced Surveying & Total Station Lab',
      'Structural Testing & NDT Lab',
      'Geotechnical Engineering Lab',
      'Environmental Engineering Lab'
    ],
    researchAreas: ['Sustainable Concrete Materials', 'Earthquake Resistant Structures', 'Geoinformatics'],
    achievements: [
      'Recognized VTU research center with M.Tech in Construction Technology',
      'Technical soil and material testing consultancy provided to regional infrastructure works'
    ],
    contactEmail: 'hod.civil@sdc.ac.in'
  },
  {
    id: 'ae',
    name: 'Aeronautical Engineering',
    shortName: 'Aero',
    hodName: 'Dr. K. S. Balakrishna',
    hodQualification: 'Ph.D in Aerospace Engineering, M.Tech',
    facultyCount: 14,
    studentCount: 180,
    established: 2011,
    description: 'Premier aerospace department in coastal Karnataka offering training in aerodynamics, aircraft structures, propulsion engines, flight dynamics, and space systems.',
    programsOffered: ['B.E. Aeronautical Engineering'],
    keyLabs: [
      'Subsonic Wind Tunnel Testing Lab',
      'Aircraft Structural Mechanics Lab',
      'Propulsion & Jet Engine Lab',
      'Flight Simulation & Modeling Studio'
    ],
    researchAreas: ['Computational Fluid Dynamics', 'UAV / Drone Design', 'Aerospace Composites'],
    achievements: [
      'Student UAV and drone design teams recognized at state engineering exhibitions',
      'Proximity to Mangaluru International Airport enables contextual industry exposure'
    ],
    contactEmail: 'hod.aero@sdc.ac.in'
  },
  {
    id: 'mba',
    name: 'Department of Business Administration',
    shortName: 'MBA',
    hodName: 'Dr. Poornima Hegde',
    hodQualification: 'Ph.D in Management, MBA',
    facultyCount: 14,
    studentCount: 240,
    established: 2007,
    description: 'Prepares future business executives and entrepreneurs through rigorous management fundamentals, experiential case analysis, financial modeling, and leadership development.',
    programsOffered: ['Master of Business Administration (MBA)'],
    keyLabs: ['Business Analytics Studio', 'Corporate GD & Interview Simulation Suite'],
    researchAreas: ['Financial Markets & FinTech', 'Consumer Behavior', 'Strategic Human Capital'],
    achievements: [
      '100% internship placement with leading banking, FMCG, and corporate entities',
      'Annual national management conclave "Samveg" organizing student leader competitions'
    ],
    contactEmail: 'hod.mba@sdc.ac.in'
  },
  {
    id: 'mca',
    name: 'Department of Computer Applications',
    shortName: 'MCA',
    hodName: 'Dr. Suresh Nayak',
    hodQualification: 'Ph.D in Computer Applications, MCA',
    facultyCount: 12,
    studentCount: 180,
    established: 2008,
    description: 'Focuses on enterprise software engineering, full stack web development, cloud computing, and database management for professional IT careers.',
    programsOffered: ['Master of Computer Applications (MCA)'],
    keyLabs: ['Full Stack Computing Lab', 'Cloud Architecture & Open Source Lab'],
    researchAreas: ['Cloud Technologies', 'Enterprise Software Architectures', 'Web Engineering'],
    achievements: [
      'Consistent campus placement in top software consulting firms',
      'Strong alumni presence across national and international tech companies'
    ],
    contactEmail: 'hod.mca@sdc.ac.in'
  }
];
