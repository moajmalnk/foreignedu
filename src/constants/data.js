// Site branding & contact
export const SITE = {
  name: 'Foreign Education Consultancy',
  logo: '/favicon.png',
  tagline: 'Expert guidance for global education. Specializing in MBBS and Nursing program placements in Georgia, UK, Malta, and Latvia.',
  copyright: '© 2026 Foreign Education Consultancy. All Rights Reserved.',
  phone: '+9180887 87772',
  email: 'info@foreigneducation.co',
  emails: {
    general: 'info@foreigneducation.co',
    intekhab: 'info@foreigneducation.co',
  },
  addresses: [
    { label: 'London Hub', detail: '15 Wigmore St, Marylebone', line2: 'London W1U 1PF, United Kingdom' },
    { label: 'Tbilisi Operations', detail: 'MBBS & Nursing Specialists' },
  ],
  whatsapp: '918088787772',
};

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Medical', href: '#georgia' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
];

export const SERVICES = [
  {
    id: '1',
    icon: '🎓',
    number: '01',
    title: 'Course & University Selection',
    description: 'Tailored counselling to match your profile with the right programs across UK, Malta, Latvia & Georgia.',
  },
  {
    id: '2',
    icon: '📄',
    number: '02',
    title: 'Documentation & Visa Support',
    description: 'End-to-end assistance with applications, SOPs, financial proofs, and visa processing for Schengen & UK.',
  },
  {
    id: '3',
    icon: '✈️',
    number: '03',
    title: 'Pre-Departure Briefing',
    description: 'Orientation sessions covering accommodation, cultural tips, banking, and settling into your new country.',
  },
  {
    id: '4',
    icon: '🏥',
    number: '04',
    title: 'Medical & Nursing Counselling',
    description: 'Specialised guidance for MBBS, BDS, and Nursing programs in Georgia with MCI-recognised universities.',
  },
  {
    id: '5',
    icon: '💰',
    number: '05',
    title: 'Scholarship & Loan Assistance',
    description: 'Help identifying scholarships, education loans, and funding options to make study abroad affordable.',
  },
  {
    id: '6',
    icon: '🤝',
    number: '06',
    title: 'Post-Arrival Support',
    description: 'Ongoing support after landing — airport pickup, accommodation, registration, and career guidance.',
  },
];

export const DESTINATIONS = [
  {
    id: '1',
    flag: '🇬🇧',
    image: '/united%20kingdom.avif',
    name: 'United Kingdom',
    highlight: 'World-Class Universities',
    pillBg: 'var(--blue-50)',
    pillColor: 'var(--blue-600)',
    description: 'Home to Oxford, Cambridge, and globally ranked institutions. Post-study work visa available for graduates.',
    bgColor: '#1a4b8c',
    learnMore: '#destinations',
  },
  {
    id: '2',
    flag: '🇲🇹',
    image: '/malta.avif',
    name: 'Malta',
    highlight: 'Sunny Schengen Gateway',
    pillBg: 'var(--green-50)',
    pillColor: '#0c6b58',
    description: 'English-taught programmes, affordable tuition, and EU membership. Perfect blend of education and lifestyle.',
    bgColor: '#0c6b58',
    learnMore: '#destinations',
  },
  {
    id: '3',
    flag: '🇱🇻',
    image: '/latvia.avif',
    name: 'Latvia',
    highlight: 'From ₹3 Lakhs Tuition',
    pillBg: 'var(--cream-200)',
    pillColor: 'var(--gold-600)',
    description: 'Among the most affordable EU study destinations. Quality education with Schengen access and work rights.',
    bgColor: '#185adb',
    learnMore: '#destinations',
  },
  {
    id: '4',
    flag: '🇬🇪',
    image: '/georgia.avif',
    name: 'Georgia',
    highlight: 'MBBS & Nursing Hub',
    pillBg: 'var(--red-50)',
    pillColor: '#b91c1c',
    description: 'MCI-recognised medical universities. Low-cost MBBS, nursing programs, and clinical exposure in Europe.',
    bgColor: '#92400e',
    learnMore: '#georgia',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    quote: 'Foreign Education Consultancy made my UK dream possible. Transparent process, no hidden fees. Got my offer from a top university within 6 weeks.',
    name: 'Priya Sharma',
    role: 'MSc Data Science, UK',
    country: 'India',
    initial: 'PS',
  },
  {
    id: '2',
    quote: 'I chose Latvia for my MBA — tuition under ₹4 lakhs! The team helped with everything from applications to visa. Highly recommend for budget-conscious students.',
    name: 'Rahul Mehta',
    role: 'MBA, Latvia',
    country: 'India',
    initial: 'RM',
  },
  {
    id: '3',
    quote: 'Georgia MBBS was the right choice for me. MCI recognition, affordable fees, and excellent support. Now preparing for my FMGE with confidence.',
    name: 'Ananya Reddy',
    role: 'MBBS, Georgia',
    country: 'India',
    initial: 'AR',
  },
];

export const PROGRAMS = [
  {
    id: '1',
    number: '01',
    title: 'MBBS in Georgia',
    bullets: [
      'MCI-recognised universities',
      'Tuition from ₹25–35 Lakhs (total)',
      'English medium, no entrance exam',
      'Clinical rotations in EU hospitals',
      '6-year program with internship',
    ],
  },
  {
    id: '2',
    number: '02',
    title: 'Nursing in Georgia',
    bullets: [
      'BSc & MSc Nursing programs',
      'Affordable fees, EU recognition',
      'English-taught curriculum',
      'Work permits for graduates',
      'Pathway to Schengen migration',
    ],
  },
];

export const STATS = [
  { label: 'Students Placed', value: 5000, suffix: '+' },
  { label: 'Visa Success Rate', value: 98, suffix: '%' },
  { label: 'Partner Universities', value: 120, suffix: '+' },
  { label: 'Years of Trust', value: 12, suffix: '+' },
];

export const GEORGIA_STATS = [
  { label: 'MCI-Recognised Universities', value: 15 },
  { label: 'MBBS Graduates', value: 2000 },
  { label: 'Pass Rate (FMGE)', value: 72 },
  { label: 'Countries Represented', value: 45 },
];

export const CONTACT_ITEMS = [
  { icon: '📧', label: 'Email', detail: 'info@foreigneducation.co' },
  { icon: '📞', label: 'Phone', detail: '+9180887 87772' },
  { icon: '📍', label: 'London Hub', detail: '15 Wigmore St, Marylebone, London W1U 1PF, United Kingdom' },
  { icon: '📍', label: 'Tbilisi Operations', detail: 'MBBS & Nursing Specialists' },
  { icon: '📧', label: 'Team', detail: 'info@foreigneducation.co' },
  { icon: '⏰', label: 'Hours', detail: 'Mon–Sat 9AM–6PM IST' },
];
