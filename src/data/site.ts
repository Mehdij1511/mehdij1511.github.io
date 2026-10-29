// Single source of truth for personal content.
export const site = {
  name: 'Mehdi Jamali',
  shortName: 'MJ',
  role: 'Data Science & Business Analytics',
  location: 'Oslo, Norway',
  email: 'MehdiJamali1511@gmail.com',
  phone: '+47 916 50 518',
  phoneHref: 'tel:+4791650518',
  linkedin: 'https://www.linkedin.com/in/mehdi-jamali-033a2b2a2/',
  github: 'https://github.com/Mehdij1511',
  cv: '/CV-H26.pdf',
  description:
    "Mehdi Jamali — Master's student in Data Science & Business Analytics at NMBU, Oslo. Machine learning, deep learning, simulation and operations analytics.",
  statement:
    'Integrated M.Sc. engineering student in Data Science at NMBU, specialising in Business Analytics. Seeking internships and part-time roles in data science and analytics.',
  bio: [
    "I'm an integrated Master's student in Data Science at the Norwegian University of Life Sciences (NMBU), specialising in Business Analytics, and I'm looking for internships and part-time roles in data analytics, business intelligence and applied machine learning.",
    'My work sits between complex datasets and strategic decisions: machine learning and deep learning, numerical simulation, data engineering pipelines and operations research. I care about models that can be explained, validated and acted on.',
    'Beyond the code, I bring leadership from chairing student and youth organisations, local-government experience as a deputy district council member, and the communication skills of a teaching assistant.',
  ],
};

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  desc: string;
  current?: boolean;
};

export const education: TimelineItem[] = [
  {
    title: 'M.Sc. Data Science & Business Analytics',
    org: 'Norwegian University of Life Sciences (NMBU)',
    period: '2023 — 2028',
    desc: 'Integrated Master of Science in Engineering: data science, machine learning, business analytics and statistical modelling.',
    current: true,
  },
  {
    title: 'Specialisation in Science',
    org: 'Upper secondary — IT, Mathematics R1+R2, Chemistry, Physics',
    period: '2019 — 2022',
    desc: 'Built a strong analytical foundation for engineering and computational studies.',
  },
];

export const experience: TimelineItem[] = [
  {
    title: 'Deputy Representative',
    org: 'Alna District Council — Labour Party',
    period: '2023 — 2027',
    desc: 'Represent residents in district council work and contribute to local decisions and community initiatives.',
    current: true,
  },
  {
    title: 'Service Station Attendant',
    org: 'Circle K',
    period: 'Nov 2022 — Present',
    desc: 'Run day-to-day station operations independently, resolve customer and operational issues, and keep service running smoothly during shifts.',
    current: true,
  },
  {
    title: 'Chairperson & Marketing Manager',
    org: 'DataSci NMBU',
    period: 'Feb 2024 — Feb 2026',
    desc: 'Led the student association’s activities and outreach, creating opportunities for students to connect around data science.',
  },
  {
    title: 'Teaching Assistant',
    org: 'NMBU — IMRT100 Introduction to Engineering Projects',
    period: 'Aug 2024',
    desc: 'Helped first-year students work through data analysis and engineering projects, translating technical concepts into practical guidance.',
  },
  {
    title: 'Chairperson & former Deputy Chair',
    org: 'Alna AUF',
    period: 'Jan 2021 — Jan 2024',
    desc: 'Organised political campaigns, coordinated association activities, and represented members at regional board level.',
  },
  {
    title: 'Maintenance Worker',
    org: 'Oslo Municipality — Alna District',
    period: 'Jul — Aug 2021',
    desc: 'Renovated, painted, and maintained community clubhouses to keep shared spaces safe and usable for residents.',
  },
];

export const skills = {
  Languages: ['Python', 'SQL', 'Julia', 'R (learning)'],
  'ML & Deep Learning': ['scikit-learn', 'TensorFlow / Keras', 'PyTorch', 'CNN · U-Net · VAE · NLP'],
  'Data & Engineering': ['pandas / NumPy', 'Spark', 'Cassandra', 'MongoDB', 'MySQL', 'REST APIs'],
  'Modelling & OR': ['Numerical simulation', 'Linear programming', 'Heuristics (2-opt)', 'Statistics'],
  'Viz & Apps': ['Matplotlib / Seaborn', 'Plotly', 'Streamlit', 'Jupyter'],
  Human: ['Leadership', 'Communication', 'Norwegian · English · Persian'],
};

export const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];
