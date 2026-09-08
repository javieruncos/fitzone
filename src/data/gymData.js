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
    role: 'CEO',
    company: 'Vertex Fitness',
    text: 'Working with FitZone was truly exceptional. Their team was profoundly insightful and highly dedicated, quickly grasping our vision and transforming it into a reality that exceeded all expectations.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: 2,
    name: 'Leslie Alexander',
    role: 'Managing Director',
    company: 'Peak Performance',
    text: 'The expertise and commitment demonstrated by the FitZone team was remarkable. They brought a level of professionalism and creativity that set a new standard for our industry.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg',
  },
  {
    id: 3,
    name: 'Marcus Thompson',
    role: 'Head Coach',
    company: 'Iron District',
    text: 'FitZone understood exactly what we needed. Their strategic approach and attention to detail resulted in a complete transformation of our brand presence and client engagement.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    featured: true,
  },
  {
    id: 4,
    name: 'Sarah Chen',
    role: 'Operations Manager',
    company: 'Core Athletics',
    text: 'From the initial consultation to the final delivery, every step was handled with precision. The results speak for themselves — our membership increased by 40% in just three months.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
  {
    id: 5,
    name: 'David Martinez',
    role: 'Founder',
    company: 'Beast Mode Gym',
    text: 'The level of dedication and craftsmanship is unmatched. FitZone delivered a solution that perfectly aligned with our brand identity and resonated with our target audience.',
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
