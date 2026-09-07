export const navLinks = [
  { name: 'HOME', href: '#home', active: true },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROGRAMS', href: '#programs' },
  { name: 'TRAINERS', href: '#trainers' },
  { name: 'MEMBERSHIP', href: '#membership' },
  { name: 'GALLERY', href: '#gallery' },
  { name: 'BLOG', href: '#blog' },
  { name: 'CONTACT', href: '#contact' },
];

export const featuresData = [
  {
    icon: 'Dumbbell',
    title: 'MODERN EQUIPMENT',
    description: 'Top quality machines and equipments for effective workouts.'
  },
  {
    icon: 'UserCheck',
    title: 'EXPERT TRAINERS',
    description: 'Certified & experienced trainers to guide you every step.'
  },
  {
    icon: 'ClipboardList',
    title: 'PERSONALIZED PLANS',
    description: 'Workout and diet plans tailored to your goals and lifestyle.'
  },
  {
    icon: 'Users',
    title: 'SUPPORTIVE COMMUNITY',
    description: 'A positive environment that keeps you motivated and consistent.'
  }
];

export const programsData = [
  {
    id: 1,
    title: 'STRENGTH TRAINING',
    description: 'Build lean muscle and increase overall strength with progressive overload techniques and compound movements.',
    icon: 'Dumbbell',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
  },
  {
    id: 2,
    title: 'WEIGHT LOSS',
    description: 'Effective fat loss programs for a healthier you.',
    icon: 'Flame',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg'
  },
  {
    id: 3,
    title: 'FUNCTIONAL TRAINING',
    description: 'Improve mobility, endurance and everyday performance.',
    icon: 'Activity',
    image: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg'
  },
  {
    id: 4,
    title: 'YOGA & WELLNESS',
    description: 'Balance your body and mind with yoga and stretching.',
    icon: 'Flower2',
    image: 'https://images.pexels.com/photos/3822677/pexels-photo-3822677.jpeg'
  }
];

export const contactInfo = [
  {
    icon: 'MapPin',
    title: 'ADDRESS',
    lines: ['123 Fitness Street,', 'Coimbatore, Tamil Nadu 641001']
  },
  {
    icon: 'Phone',
    title: 'PHONE',
    lines: ['+91 91596 81276']
  },
  {
    icon: 'Mail',
    title: 'EMAIL',
    lines: ['hello@fitzone.com']
  },
  {
    icon: 'Clock',
    title: 'OPENING HOURS',
    lines: ['Mon - Sat: 5:30 AM - 10:00 PM', 'Sunday: 6:00 AM - 1:00 PM']
  }
];

export const trainersData = [
  {
    id: 1,
    name: 'Marcus Vance',
    role: 'HEAD OF STRENGTH',
    certifications: ['CSCS', 'USA-W'],
    image: 'https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg',
    socials: { instagram: '#', tiktok: '#' },
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'FUNCTIONAL & HYROX',
    certifications: ['HYROX MASTER', 'CF-L2'],
    image: 'https://images.pexels.com/photos/3820397/pexels-photo-3820397.jpeg',
    socials: { instagram: '#', tiktok: '#' },
  },
  {
    id: 3,
    name: 'Jaxson Reed',
    role: 'POWERLIFTING COACH',
    certifications: ['IPL PRO', 'NSCA-CPT'],
    image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg',
    socials: { instagram: '#', tiktok: '#' },
  },
  {
    id: 4,
    name: 'Sarah Chen',
    role: 'RECOVERY & MOBILITY',
    certifications: ['EXOS', 'FMS'],
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
    socials: { instagram: '#', tiktok: '#' },
  },
];

export const membershipsData = [
  {
    id: 1,
    tag: 'SINGLE ACCESS',
    name: 'DAY WARRIOR',
    price: '15',
    period: '/DAY',
    featured: false,
    features: [
      'Full gym floor access',
      'Locker room & showers',
      'Free WiFi',
      'One-time entry',
    ],
  },
  {
    id: 2,
    tag: 'MOST POPULAR',
    name: 'PRO ATHLETE',
    price: '59',
    period: '/MO',
    badge: 'RECOMMENDED',
    featured: true,
    features: [
      'Unlimited 24/7 gym access',
      'All group classes included',
      'Sauna & steam room',
      '1 free coach session / month',
      'Nutrition app access',
      'Guest passes (2 / month)',
      'Protein bar discounts',
    ],
  },
  {
    id: 3,
    tag: 'FULL EXPERIENCE',
    name: 'ELITE',
    price: '99',
    period: '/MO',
    featured: false,
    features: [
      'Everything in Pro Athlete',
      'Private recovery zone',
      'Dedicated nutritionist',
      'Monthly body composition scan',
      'VIP locker with laundry',
      'Guest passes (unlimited)',
      'Priority class booking',
      'Exclusive merchandise',
    ],
  },
];
