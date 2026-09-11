export const navLinks = [
  { name: 'HOME', href: '#home', active: true },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROGRAMS', href: '#programs' },
  { name: 'TRAINERS', href: '#trainers' },
  { name: 'MEMBERSHIP', href: '#membership' },
  { name: 'FACILITIES', href: '#facilities' },
  { name: 'FAQ', href: '#faq' },
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
    zone: '01',
    title: 'STRENGTH TRAINING',
    description: 'Progressive overload and compound movements for serious strength.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
  },
  {
    id: 2,
    zone: '02',
    title: 'WEIGHT LOSS',
    description: 'Effective fat loss programs for a healthier you.',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
  },
  {
    id: 3,
    zone: '03',
    title: 'FUNCTIONAL TRAINING',
    description: 'Improve mobility, endurance and everyday performance.',
    image: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg',
  },
  {
    id: 4,
    zone: '04',
    title: 'YOGA & WELLNESS',
    description: 'Balance your body and mind with yoga and stretching.',
    image: 'https://images.pexels.com/photos/3822677/pexels-photo-3822677.jpeg',
  },
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

export const facilitiesData = [
  {
    id: 1,
    zone: '01',
    name: 'STRENGTH FLOOR',
    description: 'Competition-grade equipment built for serious training. From Olympic platforms to power racks engineered for progressive overload.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
    featured: true,
  },
  {
    id: 2,
    zone: '02',
    name: 'FUNCTIONAL TRAINING',
    description: 'Turf track, rigs, and performance tools designed for athletic conditioning and hybrid training disciplines.',
    image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg',
  },
  {
    id: 3,
    zone: '03',
    name: 'CARDIO ZONE',
    description: 'Dedicated cardio equipment for endurance training.',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
  },
  {
    id: 4,
    zone: '04',
    name: 'FREE WEIGHTS',
    description: 'Dumbbells, barbells and dedicated free-weight space.',
    image: 'https://images.pexels.com/photos/3820397/pexels-photo-3820397.jpeg',
  },
  {
    id: 5,
    zone: '05',
    name: 'LOCKER ROOMS',
    description: 'Modern changing facilities designed for comfort.',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Jenny Wilson',
    role: 'Member since 2023',
    text: 'I finally found a gym where I actually want to show up. The coaches push you without making it feel intimidating. Three months in and I\'m stronger than I\'ve ever been.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: 2,
    name: 'Leslie Alexander',
    role: 'Member since 2024',
    text: 'Started as a complete beginner. The personalized onboarding session made all the difference. I went from not knowing how to deadlift to hitting personal records every week.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg',
  },
  {
    id: 3,
    name: 'Marcus Thompson',
    role: 'Member since 2022',
    text: 'The community here is unmatched. It\'s not just a gym, it\'s a place where people genuinely root for each other. That\'s what keeps me coming back five days a week.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    featured: true,
  },
  {
    id: 4,
    name: 'Sarah Chen',
    role: 'Member since 2023',
    text: 'After hitting a plateau for two years, the coaches at FitZone designed a program that finally broke through it. The progress photos speak for themselves.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
  {
    id: 5,
    name: 'David Martinez',
    role: 'Member since 2024',
    text: 'The facility is world-class but what really sets FitZone apart is the energy. Every session feels like you\'re part of something bigger than just a workout.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
  },
];

export const faqData = [
  {
    id: 1,
    question: 'Do I need prior experience to start?',
    answer: 'Not at all. Our programs are designed for every fitness level, from complete beginners to advanced athletes. Your first session includes a full assessment so we can tailor everything to where you are right now.',
  },
  {
    id: 2,
    question: 'What does each membership include?',
    answer: 'Every membership includes full gym floor access, all group classes, locker rooms, and WiFi. Higher tiers add personal coaching sessions, nutrition planning, recovery zones, and guest passes.',
  },
  {
    id: 3,
    question: 'Do you offer a free trial?',
    answer: 'Yes. We offer a 7-day free trial with full access to the gym and classes. No credit card required. Just walk in, and we will set you up.',
  },
  {
    id: 4,
    question: 'Can I train with a personal coach?',
    answer: 'Absolutely. Our certified trainers offer one-on-one sessions tailored to your specific goals. You can book sessions through the app or at the front desk.',
  },
  {
    id: 5,
    question: 'What are your opening hours?',
    answer: 'We are open Monday through Saturday from 5:30 AM to 10:00 PM, and Sundays from 6:00 AM to 1:00 PM. Pro and Elite members have 24/7 access.',
  },
  {
    id: 6,
    question: 'What should I bring to my first session?',
    answer: 'Comfortable workout clothes, athletic shoes, a water bottle, and a positive attitude. We provide towels and all the equipment you need.',
  },
  {
    id: 7,
    question: 'Can I change or cancel my membership?',
    answer: 'Yes. All our plans are flexible with no long-term lock-in. You can upgrade, downgrade, or cancel anytime through your account or at the front desk.',
  },
  {
    id: 8,
    question: 'Do you have programs for beginners?',
    answer: 'We do. Our Beginner Foundation program guides you through proper form, routine structure, and nutrition basics over four weeks with dedicated coaching support.',
  },
];

export const scheduleData = [
  {
    day: 'MON',
    classes: [
      { id: 1, time: '06:00', program: 'STRENGTH TRAINING', trainer: 'Marcus Vance', duration: '60 MIN', level: 'ALL LEVELS' },
      { id: 2, time: '07:30', program: 'FUNCTIONAL TRAINING', trainer: 'Elena Rostova', duration: '45 MIN', level: 'INTERMEDIATE' },
      { id: 3, time: '09:00', program: 'YOGA & WELLNESS', trainer: 'Sarah Chen', duration: '60 MIN', level: 'ALL LEVELS' },
      { id: 4, time: '12:00', program: 'HIIT CARDIO', trainer: 'Elena Rostova', duration: '30 MIN', level: 'ALL LEVELS' },
      { id: 5, time: '17:00', program: 'POWERLIFTING', trainer: 'Jaxson Reed', duration: '75 MIN', level: 'ADVANCED' },
      { id: 6, time: '19:00', program: 'STRENGTH TRAINING', trainer: 'Marcus Vance', duration: '60 MIN', level: 'ALL LEVELS' },
    ],
  },
  {
    day: 'TUE',
    classes: [
      { id: 7, time: '06:30', program: 'HIIT CARDIO', trainer: 'Elena Rostova', duration: '45 MIN', level: 'ALL LEVELS' },
      { id: 8, time: '08:00', program: 'STRENGTH TRAINING', trainer: 'Marcus Vance', duration: '60 MIN', level: 'BEGINNER' },
      { id: 9, time: '10:00', program: 'YOGA & WELLNESS', trainer: 'Sarah Chen', duration: '60 MIN', level: 'ALL LEVELS' },
      { id: 10, time: '16:00', program: 'FUNCTIONAL TRAINING', trainer: 'Elena Rostova', duration: '45 MIN', level: 'ALL LEVELS' },
      { id: 11, time: '18:00', program: 'STRENGTH TRAINING', trainer: 'Marcus Vance', duration: '60 MIN', level: 'INTERMEDIATE' },
    ],
  },
  {
    day: 'WED',
    classes: [
      { id: 12, time: '06:00', program: 'STRENGTH TRAINING', trainer: 'Marcus Vance', duration: '60 MIN', level: 'ALL LEVELS' },
      { id: 13, time: '07:30', program: 'FUNCTIONAL TRAINING', trainer: 'Elena Rostova', duration: '45 MIN', level: 'BEGINNER' },
      { id: 14, time: '09:00', program: 'YOGA & WELLNESS', trainer: 'Sarah Chen', duration: '60 MIN', level: 'ALL LEVELS' },
      { id: 15, time: '12:00', program: 'HIIT CARDIO', trainer: 'Elena Rostova', duration: '30 MIN', level: 'INTERMEDIATE' },
      { id: 16, time: '17:00', program: 'POWERLIFTING', trainer: 'Jaxson Reed', duration: '75 MIN', level: 'ADVANCED' },
      { id: 17, time: '19:00', program: 'STRENGTH TRAINING', trainer: 'Marcus Vance', duration: '60 MIN', level: 'ALL LEVELS' },
    ],
  },
  {
    day: 'THU',
    classes: [
      { id: 18, time: '06:30', program: 'HIIT CARDIO', trainer: 'Elena Rostova', duration: '45 MIN', level: 'ALL LEVELS' },
      { id: 19, time: '08:00', program: 'FUNCTIONAL TRAINING', trainer: 'Elena Rostova', duration: '60 MIN', level: 'INTERMEDIATE' },
      { id: 20, time: '10:00', program: 'YOGA & WELLNESS', trainer: 'Sarah Chen', duration: '60 MIN', level: 'ALL LEVELS' },
      { id: 21, time: '17:00', program: 'POWERLIFTING', trainer: 'Jaxson Reed', duration: '75 MIN', level: 'ADVANCED' },
      { id: 22, time: '19:00', program: 'STRENGTH TRAINING', trainer: 'Marcus Vance', duration: '60 MIN', level: 'ALL LEVELS' },
    ],
  },
  {
    day: 'FRI',
    classes: [
      { id: 23, time: '06:00', program: 'STRENGTH TRAINING', trainer: 'Marcus Vance', duration: '60 MIN', level: 'ALL LEVELS' },
      { id: 24, time: '07:30', program: 'FUNCTIONAL TRAINING', trainer: 'Elena Rostova', duration: '45 MIN', level: 'ALL LEVELS' },
      { id: 25, time: '09:00', program: 'YOGA & WELLNESS', trainer: 'Sarah Chen', duration: '60 MIN', level: 'BEGINNER' },
      { id: 26, time: '12:00', program: 'HIIT CARDIO', trainer: 'Elena Rostova', duration: '30 MIN', level: 'ALL LEVELS' },
      { id: 27, time: '17:00', program: 'POWERLIFTING', trainer: 'Jaxson Reed', duration: '75 MIN', level: 'ADVANCED' },
      { id: 28, time: '19:00', program: 'STRENGTH TRAINING', trainer: 'Marcus Vance', duration: '60 MIN', level: 'INTERMEDIATE' },
    ],
  },
  {
    day: 'SAT',
    classes: [
      { id: 29, time: '07:00', program: 'STRENGTH TRAINING', trainer: 'Marcus Vance', duration: '60 MIN', level: 'ALL LEVELS' },
      { id: 30, time: '09:00', program: 'FUNCTIONAL TRAINING', trainer: 'Elena Rostova', duration: '60 MIN', level: 'ALL LEVELS' },
      { id: 31, time: '11:00', program: 'YOGA & WELLNESS', trainer: 'Sarah Chen', duration: '75 MIN', level: 'ALL LEVELS' },
      { id: 32, time: '14:00', program: 'POWERLIFTING', trainer: 'Jaxson Reed', duration: '75 MIN', level: 'ADVANCED' },
      { id: 33, time: '16:00', program: 'STRENGTH TRAINING', trainer: 'Marcus Vance', duration: '60 MIN', level: 'BEGINNER' },
    ],
  },
  {
    day: 'SUN',
    classes: [
      { id: 34, time: '08:00', program: 'YOGA & WELLNESS', trainer: 'Sarah Chen', duration: '75 MIN', level: 'ALL LEVELS' },
      { id: 35, time: '10:00', program: 'FUNCTIONAL TRAINING', trainer: 'Elena Rostova', duration: '60 MIN', level: 'ALL LEVELS' },
      { id: 36, time: '12:00', program: 'STRENGTH TRAINING', trainer: 'Marcus Vance', duration: '60 MIN', level: 'ALL LEVELS' },
    ],
  },
];
