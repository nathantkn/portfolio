/**
 * Single source of content for the Projects / Experience / Leadership pages.
 *
 * Bullet and description strings may contain `<strong>…</strong>`. They are
 * never injected as HTML — `parseRich` in `src/lib/richtext.ts` turns them into
 * segments that `<RichText>` renders as escaped text.
 */

/** The three buckets the projects page filters by. */
export const PROJECT_KINDS = ['hackathon', 'work', 'personal'] as const;

export type ProjectKind = (typeof PROJECT_KINDS)[number];

export interface Project {
  title: string;
  /** Which filter bucket this project belongs to. */
  kind: ProjectKind;
  /** Full date range shown in the detail overlay. */
  dates: string;
  img: string;
  website: string;
  repo: string;
  tags: string[];
  /** Empty string when the project didn't place. */
  badge: string;
  /** Short one-liner for the bento card. */
  blurb: string;
  /** Long-form copy for the detail overlay. */
  desc: string;
}

export interface Experience {
  /** `"<Month YYYY> - <Month YYYY|Present>"`. */
  date: string;
  role: string;
  company: string;
  /** Company mark shown beside the name; empty string renders nothing. */
  logo: string;
  /** Polaroid photo shown under the date block; empty string renders nothing. */
  photo: string;
  bullets: string[];
}

export interface LeadershipStat {
  num: string;
  subtext: string;
  /** Renders the figure in the accent; meant for one stat per org. */
  accent?: boolean;
}

export interface Leadership {
  role: string;
  organization: string;
  date: string;
  logo: string;
  groupImage: string;
  imageCaption: string;
  description: string[];
  stats: LeadershipStat[];
}

export const PROJECTS: Project[] = [
  {
    title: 'Dakmod',
    kind: 'work',
    dates: 'June 2025',
    img: '/projects/dakmod.jpg',
    website: 'http://dakmod.labs.fulcrumgt.com/',
    repo: '',
    tags: ['TypeScript', 'Swift', 'Python', 'OAuth'],
    badge: 'Fulcrum Labs',
    blurb:
      'The safety layer between you and your media.',
    desc:
      'An accessibility and safety layer for media content. Dakmod detects and remediates uncomfortable content in media, such as flashing lights, loud sounds, and triggering content in videos and movies.',
  },
  {
    title: 'SparkHacks 2026 Website',
    kind: 'work',
    dates: 'August 2025 - February 2026',
    img: '/projects/sparkhacks.png',
    website: 'https://www.sparkhacks.org/',
    repo: 'https://github.com/SparkHacks/spark-web-2026',
    tags: ['Astro', 'TypeScript', 'Tailwind'],
    badge: 'SparkHacks 2026',
    blurb: 'The website for UIC’s student-run hackathon, SparkHacks 2026.',
    desc:
      'The landing page for SparkHacks 2026. Built by UIC students, for UIC students. Lights, cameras, hacktion!',
  },
  {
    title: 'SparkHacks 2026 Dashboard',
    kind: 'work',
    dates: 'August 2025 - February 2026',
    img: '/projects/dashboard.png',
    website: 'https://dashboard.sparkhacks.org/',
    repo: 'https://github.com/SparkHacks/spark-dashboard',
    tags: ['Astro', 'TypeScript', 'Firebase', 'Tailwind'],
    badge: 'SparkHacks 2026',
    blurb: 'The dashboard for UIC’s student-run hackathon, SparkHacks 2026.',
    desc:
      'The user and admin dashboard used for SparkHacks 2026. Features include managing applications, scanning QR codes, changing permissions, and live analytics.',
  },
  {
    title: 'Haven',
    kind: 'hackathon',
    dates: 'April 2025',
    img: '/projects/haven.png',
    website: 'https://devpost.com/software/haven-kj3o4q',
    repo: 'https://github.com/Ayush7970/wildhacks_2026',
    tags: ['TypeScript', 'Next.js', 'Python', 'TensorFlow.js', 'OpenCV'],
    badge: '1st place, WildHacks 2026',
    blurb:
      'Rethink the world for every mind!',
    desc:
      'A neurodivergent-focused wellness and productivity app. Haven helps people with sensory processing differences navigate daily life through smarter scheduling, focus tools, sensory-aware place ratings, and environment sensing. First place for WildHacks 2026.',
  },
  {
    title: 'Mystery AI',
    kind: 'work',
    dates: 'October 2025 - April 2026',
    img: '/projects/mystery_ai.png',
    website: 'https://ai-privacy-literacy.vercel.app/',
    repo: 'https://github.com/nsoniuic/AI-Privacy-Literacy-Fall-2025',
    tags: ['React', 'Node.js', 'JavaScript', 'ElevenLabs'],
    badge: 'Research',
    blurb: 'HCI research on how children reason about AI and privacy.',
    desc:
      'An interactive educational web application designed to teach children about AI reasoning, pattern recognition, and digital privacy through engaging puzzles and scenarios.',
  },
  {
    title: 'Outloop AI',
    kind: 'hackathon',
    dates: 'March 2026',
    img: '/projects/outloop.png',
    website: 'https://devpost.com/software/chicago-team',
    repo: 'https://github.com/YamaanNandolia/Outloop-AI',
    tags: ['Jac', 'TypeScript', 'Python'],
    badge: 'JacHacks 2026',
    blurb: 'Build your startup on autopilot!',
    desc:
      'An autonomous startup builder that analyzes trends from around the world, extrapolates problem statements, and autonomously builds software products to address those problems. It also simultaneously handles the business development and customer outreach, all from a single platform.',
  },
  {
    title: 'Dynamic Bill Splitter',
    kind: 'personal',
    dates: 'October 2025',
    img: '/projects/bill_splitter.png',
    website: 'https://dynamic-bill-splitter.vercel.app/',
    repo: 'https://github.com/nathantkn/astro-bill-splitter',
    tags: ['Astro', 'TypeScript', 'Vite', 'Spline'],
    badge: '',
    blurb: 'Splits dinner and grocery bills by who actually ate what.',
    desc:
      'Allows parties to split dining and grocery bills, based on the number of people and the items they bought or shared.',
  },
  {
    title: 'CycleBoard',
    kind: 'personal',
    dates: 'May 2025 - February 2026',
    img: '/projects/cycleboard.png',
    website: 'https://music-rank-193652486981.us-central1.run.app/',
    repo: 'https://github.com/nathantkn/music-rank',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    badge: '',
    blurb: 'Your very own Billboard Hot 100.',
    desc:
      'Allows users to rank their favorite music tracks and keep a record of their favorite artists.',
  },
    {
    title: 'Schedly',
    kind: 'personal',
    dates: 'October 2025 - December 2025',
    img: '/projects/schedly.png',
    website: 'https://schedly-gtxg.onrender.com/',
    repo: 'https://github.com/mqbal/CS484_Final',
    tags: ['Next.js', 'React', 'TypeScript', 'OAuth'],
    badge: '',
    blurb: 'Drop in a course syllabus, and never miss a deadline again.',
    desc:
      'Upload your course syllabi and let AI extract assignments and exam dates. Sync everything to Google Calendar, and get every deadline synced to your calendar.',
  },
  {
    title: 'Restockd',
    kind: 'personal',
    dates: 'September 2025 - December 2025',
    img: '/projects/restockd.png',
    website: 'https://restockd-ten.vercel.app/',
    repo: 'https://github.com/TheRoadSurgeon/CS351-GroupProject',
    tags: ['React', 'Flask', 'PostgreSQL'],
    badge: '',
    blurb: 'Real-time matchmaking between food donors and food banks.',
    desc:
      'Streamlines coordination between food donors and food banks in real-time. Enables food banks to post donation needs, donors to discover nearby opportunities, and both parties to schedule seamless pickups and drop-offs.',
  },
  {
    title: 'TARIFFARM',
    kind: 'hackathon',
    dates: 'March 2025',
    img: '/projects/tariffarm.jpg',
    website: 'https://devpost.com/software/idk-yet-o67hj8',
    repo: 'https://github.com/nathantkn/tariffarm',
    tags: ['Python', 'React', 'Next.js'],
    badge: '3rd place, WildHacks 2025',
    blurb: 'Calculates and visualizes the true cost of importing commodities.',
    desc:
      'Allows users to calculate and visualize the full cost of importing commodities into the US. Third place winner for WildHacks 2025.',
  },
  {
    title: 'Baldur: Debris Detection and Removal',
    kind: 'hackathon',
    dates: 'February 2025',
    img: '/projects/baldur.jpg',
    website: 'https://devpost.com/software/baldur-8h2tmn',
    repo: 'https://github.com/nathantkn/Baldur-HackIllinois',
    tags: ['Python', 'OpenCV', 'Flutter', 'Dart', 'Raspberry Pi'],
    badge: 'HackIllinois 2025',
    blurb:
      'A Raspberry Pi rover that finds and clears field debris.',
    desc:
      'An autonomous, AI-powered solution to detect and remove debris from fields using a Raspberry Pi-controlled vehicle equipped with a robotic claw. Submission for HackIllinois 2025.',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    date: 'June 2026 - Present',
    role: 'Software Engineer Associate',
    company: 'Fulcrum GT',
    logo: '',
    photo: '/dakmod-team.png',
    bullets: [
      'Built a sensory-safe product from scratch through a structured validation process, leading a cross-functional team of 6 to deliver <strong>10+</strong> features, converting roadmaps in Jira into measurable PRDs, lifting efficiency and adoption by <strong>25%</strong>.',
      'Directed user research and weekly beta testing sessions to stress-test detection and remediation accuracy, translating findings into <strong>5+</strong> prioritized product requirements and validating product-market fit with neurodivergent end users.',
      'Delivered idea-approval pitches to <strong>70+</strong> company VIPs, running weekly Agile sprints alongside technical and business reviews with PMOs and SMEs, culminating in customer pitches at ILTACON 2026.',
    ],
  },
  {
    date: 'July 2025 - April 2026',
    role: 'Web Development Team Lead',
    company: 'SparkHacks',
    logo: '',
    photo: '',
    bullets: [
      'Lead design and full-stack development of SparkHacks 2026’s main website, providing event information and registration access for <strong>400+</strong> participants, sponsors, mentors, and organizers.',
      'Enhance an admin dashboard backed by Firestore to aggregate, search, and filter <strong>500+</strong> records, with live analytics displaying acceptance rates, demographic breakdowns, and check-in progress.',
      'Manage Agile sprints and peer programming reviews across a 6-member development team, managing version control, code quality, and consistency through CI workflows.',
    ],
  },
  {
    date: 'May 2025 - May 2026',
    role: 'Research Assistant',
    company: 'UIC ELiCIT Lab',
    logo: '',
    photo: '',
    bullets: [
      'Design <strong>60+</strong> low-fidelity wireframes screens to lead development of an interactive AI literacy educational app, teaching children aged 8-12 privacy concepts through puzzle-solving mechanics.',
      'Collaborate with a PhD student and an Assistant Professor to align technical implementation with research objectives.',
    ],
  },
  {
    date: 'January 2025 - May 2026',
    role: 'Undergraduate Teaching Assistant',
    company: 'UIC College of Engineering',
    logo: '',
    photo: '',
    bullets: [
      'Mentor <strong>400+</strong> students in C++ data structures and algorithmic problem-solving, offering course material and project support during lecture assistance and weekly in-person office hours.',
      'Assist in weekly lab sessions for <strong>30+</strong> students, covering complex concepts such as binary trees, hash tables, graph algorithms, and searching &amp; sorting techniques.',
      'Guide students in using tools such as LLDB, ASAN, and GoogleTest to improve unit testing and debugging skills.',
    ],
  },
  {
    date: 'June 2024 - Aug 2024',
    role: 'Software Developer Intern',
    company: 'Viettel Digital',
    logo: '',
    photo: '',
    bullets: [
      'Developed RESTful APIs for user interaction in PHP, Spring and Yii for an integrated Fintech social network system, increasing engagement and connectivity for over <strong>24 million users</strong>.',
      'Implemented JWT and OAuth 2.0 for secure, role-based API authentication and authorization across users, merchants, and admins, enhancing security and system performance.',
      'Improved database performance by <strong>40%</strong> through optimized query optimization and API validation with Postman.',
    ],
  },
  {
    date: 'January 2024 - May 2025',
    role: 'CS Tutor',
    company: 'UIC Engineering Learning Center',
    logo: '',
    photo: '',
    bullets: [
      'Provide academic support and peer guidance availability to <strong>1500+</strong> students for multiple core Computer Science courses.',
      'Enhance students’ understanding of complex core concepts through instruction, study techniques, and supplementary test preparation.',
    ],
  },
  {
    date: 'July 2023 - Aug 2023',
    role: 'Software Developer Intern',
    company: 'VISSOFT',
    logo: '',
    photo: '',
    bullets: [
      'Adapted the Bloom Filter algorithm for fast data retrieval, reducing lookup time and cutting memory usage by <strong>80%</strong> in a Java-based library management system with a MySQL backend.',
      'Integrated the GoogleTest framework to develop <strong>20+</strong> unit tests, ensuring functionality through automated testing.',
    ],
  },
];

export const LEADERSHIP: Leadership[] = [
  {
    role: 'Web Development Team Lead',
    organization: 'SparkHacks 2026',
    date: 'July 2025 - February 2026',
    logo: '/sparkhacks26.svg',
    groupImage: '/sparkhacks_team26.jpg',
    imageCaption: 'The SparkHacks 2026 team!',
    description: [
      'For SparkHacks 2026, I stepped into the role of <strong>Web Development Team Lead</strong>, leading the design and development of the website and dashboard system.',
      'The experience has been nothing short of amazing. I’ve learned so much about project management and leadership, and I’ve had the opportunity to work with the most talented team.',
    ],
    stats: [
      { num: '700+', subtext: 'dashboard users',  accent: true },
      { num: '300+', subtext: 'accepted hackers' },
      { num: '100%', subtext: 'website uptime' },
    ],
  },
  {
    role: 'Logistics Organizer',
    organization: 'SparkHacks 2025',
    date: 'August 2024 - February 2025',
    logo: '/sparkhacks25.svg',
    groupImage: '/sparkhacks_team25.jpg',
    imageCaption: 'The SparkHacks 2025 dream team :)',
    description: [
      'SparkHacks is UIC’s very own student-led, 24-hour hackathon! I joined the <strong>Logistics Team</strong> for SparkHacks 2025, helping make sure everything ran smoothly for our participants.',
      'Being the very first hackathon I ever attended, SparkHacks has always been an fascinating experience for me. Seeing how supportive and innovative this community could be has always given me the motivation to keep pushing forward in my journey, and I wish to do the same for others through my role.',
    ],
    stats: [
      { num: '400+', subtext: 'hackers' },
      { num: '93%', subtext: 'retention rate',  accent: true },
      { num: '$30,000+', subtext: 'sponsorship funding' },
    ],
  },
  {
    role: 'Event Organizer',
    organization: 'Vietnamese International Student Association (VISA) at UIC',
    date: 'January 2025 - July 2025',
    logo: '/visa.png',
    groupImage: '/visa_tet.JPG',
    imageCaption: 'The VISA team, celebrating Once Upon A Tết 2025',
    description: [
      'VISA is a cultural and social organization that aims to connect Vietnamese international students at UIC and promote Vietnamese culture on campus. I served as an <strong>Event Organizer</strong> for the Spring 2025 semester.',
      'Being part of VISA has been such a rewarding way to connect with fellow students at UIC, some of whom have become my closest friends. From brainstorming event ideas to seeing people come together and have lasting memories, it has truly been a fulfilling experience!',
    ],
    stats: [
      { num: '100+', subtext: 'average participants in major events' },
      { num: '5+', subtext: 'total events hosted' },
      { num: '$2,000+', subtext: 'fundraised',  accent: true },
    ],
  },
];
