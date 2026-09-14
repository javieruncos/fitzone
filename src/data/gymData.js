import strengthFloor from '../assets/images/strength-floor.jpg';
import functionalZone from '../assets/images/functional.jpg';
import freeWeightsZone from '../assets/images/free-weights.jpg';
import cardioZone from '../assets/images/cardio.jpg';
import lockersZone from '../assets/images/lockers.jpg';
import aboutPhoto from '../assets/images/about.jpg';
import trainersStrength from '../assets/images/trainers-strength.jpg';
import trainersFunctional from '../assets/images/trainers-functional.jpg';
import trainerMarcus from '../assets/images/trainer-marcus.jpg';
import trainerElena from '../assets/images/trainer-elena.jpg';
import trainerJaxson from '../assets/images/trainer-jaxson.jpg';
import trainerSarah from '../assets/images/trainer-sarah.jpg';

export const navLinks = [
  { name: 'INICIO', href: '#home', active: true },
  { name: 'NOSOTROS', href: '#about' },
  { name: 'PROGRAMAS', href: '#programs' },
  { name: 'ENTRENADORES', href: '#trainers' },
  { name: 'MEMBRESÍAS', href: '#membership' },
  { name: 'ESPACIOS', href: '#facilities' },
  { name: 'FAQ', href: '#faq' },
];

export const featuresData = [
  {
    icon: 'Dumbbell',
    title: 'EQUIPAMIENTO MODERNO',
    description: 'Máquinas y equipos de primer nivel para entrenar en serio.'
  },
  {
    icon: 'UserCheck',
    title: 'ENTRENADORES EXPERTOS',
    description: 'Entrenadores certificados que te acompañan en cada paso.'
  },
  {
    icon: 'ClipboardList',
    title: 'PLANES PERSONALIZADOS',
    description: 'Rutinas y nutrición adaptadas a tus objetivos y tu estilo de vida.'
  },
  {
    icon: 'Users',
    title: 'COMUNIDAD QUE ACOMPAÑA',
    description: 'Un ambiente positivo que te mantiene motivado y constante.'
  }
];

export const contactInfo = [
  {
    icon: 'MapPin',
    title: 'DIRECCIÓN',
    lines: ['123 Fitness Street,', 'Coimbatore, Tamil Nadu 641001']
  },
  {
    icon: 'Phone',
    title: 'TELÉFONO',
    lines: ['+91 91596 81276']
  },
  {
    icon: 'Mail',
    title: 'EMAIL',
    lines: ['hello@fitzone.com']
  },
  {
    icon: 'Clock',
    title: 'HORARIOS',
    lines: ['Lun - Sáb: 5:30 AM - 10:00 PM']
  }
];

export const trainersData = [
  {
    id: 1,
    name: 'Marcus Vance',
    role: 'RESPONSABLE DE FUERZA',
    certifications: ['CSCS', 'USA-W'],
    image: trainerMarcus,
    socials: { instagram: '#', tiktok: '#' },
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'FUNCIONAL & HYROX',
    certifications: ['HYROX MASTER', 'CF-L2'],
    image: trainerElena,
    socials: { instagram: '#', tiktok: '#' },
  },
  {
    id: 3,
    name: 'Jaxson Reed',
    role: 'ENTRENADOR DE POWERLIFTING',
    certifications: ['IPL PRO', 'NSCA-CPT'],
    image: trainerJaxson,
    socials: { instagram: '#', tiktok: '#' },
  },
  {
    id: 4,
    name: 'Sarah Chen',
    role: 'RECUPERACIÓN Y MOVILIDAD',
    certifications: ['EXOS', 'FMS'],
    image: trainerSarah,
    socials: { instagram: '#', tiktok: '#' },
  },
];

export const membershipsData = [
  {
    id: 1,
    tag: 'ACCESO POR DÍA',
    name: 'PASE DIARIO',
    price: '15',
    period: '/DÍA',
    featured: false,
    features: [
      'Acceso total a la sala',
      'Vestuarios y duchas',
      'WiFi liberado',
      'Entrada por única vez',
    ],
  },
  {
    id: 2,
    tag: 'MÁS POPULAR',
    name: 'PRO ATLETA',
    price: '59',
    period: '/MES',
    badge: 'RECOMENDADO',
    featured: true,
    features: [
      'Acceso ilimitado 24/7',
      'Todas las clases grupales incluidas',
      'Sauna y baño de vapor',
      '1 sesión con entrenador / mes',
      'Acceso a la app de nutrición',
      'Pases de invitado (2 / mes)',
      'Descuentos en la barra proteica',
    ],
  },
  {
    id: 3,
    tag: 'EXPERIENCIA TOTAL',
    name: 'ÉLITE',
    price: '99',
    period: '/MES',
    featured: false,
    features: [
      'Todo lo del Pro Atleta',
      'Zona privada de recuperación',
      'Nutricionista dedicado',
      'Evaluación corporal mensual',
      'Locker VIP con lavandería',
      'Pases de invitado (ilimitados)',
      'Reserva prioritaria de clases',
      'Merchandising exclusivo',
    ],
  },
];

export const facilitiesData = [
  {
    id: 1,
    zone: '01',
    name: 'SALA DE FUERZA',
    description: 'Equipamiento de nivel competición para entrenar en serio. Plataformas olímpicas y racks pensados para la sobrecarga progresiva.',
    image: strengthFloor,
    featured: true,
  },
  {
    id: 2,
    zone: '02',
    name: 'ENTRENAMIENTO FUNCIONAL',
    description: 'Pista de turf, racks y herramientas para el acondicionamiento atlético y el entrenamiento híbrido.',
    image: functionalZone,
  },
  {
    id: 3,
    zone: '03',
    name: 'ZONA DE CARDIO',
    description: 'Equipos de cardio dedicados para entrenar la resistencia.',
    image: cardioZone,
  },
  {
    id: 4,
    zone: '04',
    name: 'PESOS LIBRES',
    description: 'Mancuernas, barras y un espacio dedicado a los pesos libres.',
    image: freeWeightsZone,
  },
  {
    id: 5,
    zone: '05',
    name: 'VESTUARIOS',
    description: 'Vestuarios modernos pensados para tu comodidad.',
    image: lockersZone,
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Jenny Wilson',
    role: 'Socio desde 2023',
    text: 'Por fin encontré un gimnasio al que me dan ganas de venir. Los entrenadores te exigen sin intimidar.',
    rating: 5,
    avatar: aboutPhoto,
  },
  {
    id: 2,
    name: 'Leslie Alexander',
    role: 'Socio desde 2024',
    text: 'Empecé de cero. La primera evaluación marcó la diferencia: pasé de no saber hacer peso muerto a mejorar mis marcas cada semana.',
    rating: 5,
    avatar: trainersFunctional,
  },
  {
    id: 3,
    name: 'Marcus Thompson',
    role: 'Socio desde 2022',
    text: 'La comunidad acá es única. No es solo un gimnasio: es un lugar donde todos te alientan de verdad.',
    rating: 5,
    avatar: trainersStrength,
    featured: true,
  },
  {
    id: 4,
    name: 'Sarah Chen',
    role: 'Socio desde 2023',
    text: 'Después de dos años estancada, los entrenadores de FitZone me armaron un programa que por fin rompió el techo.',
    rating: 5,
    avatar: trainersFunctional,
  },
  {
    id: 5,
    name: 'David Martinez',
    role: 'Socio desde 2024',
    text: 'La instalación es de primer nivel, pero lo que distingue a FitZone es la energía.',
    rating: 5,
    avatar: freeWeightsZone,
  },
];

export const faqData = [
  {
    id: 1,
    question: '¿Necesito experiencia previa para empezar?',
    answer: 'Para nada. Nuestros programas están pensados para todos los niveles, desde principiantes hasta atletas avanzados. Tu primera sesión incluye una evaluación completa para adaptar todo a tu punto de partida.',
  },
  {
    id: 2,
    question: '¿Qué incluye cada membresía?',
    answer: 'Todas incluyen acceso total a la sala, todas las clases grupales, vestuarios y WiFi. Los planes superiores suman sesiones con entrenador, plan nutricional, zona de recuperación y pases de invitado.',
  },
  {
    id: 3,
    question: '¿Tienen prueba gratuita?',
    answer: 'Sí. Prueba 7 días gratis con acceso total al gimnasio y las clases. Sin tarjeta de crédito. Acércate y te activamos en el momento.',
  },
  {
    id: 4,
    question: '¿Puedo entrenar con un entrenador personal?',
    answer: 'Claro. Nuestros entrenadores certificados ofrecen sesiones individuales adaptadas a tu objetivo. Puedes reservar por la app o en recepción.',
  },
  {
    id: 5,
    question: '¿Cuáles son los horarios?',
    answer: 'Abrimos de lunes a sábado de 5:30 AM a 10:00 PM. Los socios Pro y Élite tienen acceso 24/7.',
  },
  {
    id: 6,
    question: '¿Qué llevo a mi primera sesión?',
    answer: 'Ropa cómoda, zapatillas, botella de agua y actitud. Las toallas y todo el equipo los ponemos nosotros.',
  },
  {
    id: 7,
    question: '¿Puedo cambiar o cancelar mi membresía?',
    answer: 'Sí. Todos los planes son flexibles y sin permanencia. Puedes subir, bajar o cancelar cuando quieras desde tu cuenta o en recepción.',
  },
  {
    id: 8,
    question: '¿Tienen programas para principiantes?',
    answer: 'Sí. Nuestro programa inicial te guía en técnica, estructura de rutina y nutrición básica durante cuatro semanas, con acompañamiento dedicado.',
  },
];

export const scheduleData = [
  {
    day: 'LUN',
    classes: [
      { id: 1, time: '06:00', program: 'ENTRENAMIENTO DE FUERZA', trainer: 'Marcus Vance', duration: '60 MIN', level: 'TODOS LOS NIVELES' },
      { id: 2, time: '07:30', program: 'ENTRENAMIENTO FUNCIONAL', trainer: 'Elena Rostova', duration: '45 MIN', level: 'INTERMEDIO' },
      { id: 3, time: '09:00', program: 'YOGA Y BIENESTAR', trainer: 'Sarah Chen', duration: '60 MIN', level: 'TODOS LOS NIVELES' },
      { id: 4, time: '12:00', program: 'HIIT CARDIO', trainer: 'Elena Rostova', duration: '30 MIN', level: 'TODOS LOS NIVELES' },
      { id: 5, time: '17:00', program: 'POWERLIFTING', trainer: 'Jaxson Reed', duration: '75 MIN', level: 'AVANZADO' },
      { id: 6, time: '19:00', program: 'ENTRENAMIENTO DE FUERZA', trainer: 'Marcus Vance', duration: '60 MIN', level: 'TODOS LOS NIVELES' },
    ],
  },
  {
    day: 'MAR',
    classes: [
      { id: 7, time: '06:30', program: 'HIIT CARDIO', trainer: 'Elena Rostova', duration: '45 MIN', level: 'TODOS LOS NIVELES' },
      { id: 8, time: '08:00', program: 'ENTRENAMIENTO DE FUERZA', trainer: 'Marcus Vance', duration: '60 MIN', level: 'PRINCIPIANTE' },
      { id: 9, time: '10:00', program: 'YOGA Y BIENESTAR', trainer: 'Sarah Chen', duration: '60 MIN', level: 'TODOS LOS NIVELES' },
      { id: 10, time: '16:00', program: 'ENTRENAMIENTO FUNCIONAL', trainer: 'Elena Rostova', duration: '45 MIN', level: 'TODOS LOS NIVELES' },
      { id: 11, time: '18:00', program: 'ENTRENAMIENTO DE FUERZA', trainer: 'Marcus Vance', duration: '60 MIN', level: 'INTERMEDIO' },
    ],
  },
  {
    day: 'MIÉ',
    classes: [
      { id: 12, time: '06:00', program: 'ENTRENAMIENTO DE FUERZA', trainer: 'Marcus Vance', duration: '60 MIN', level: 'TODOS LOS NIVELES' },
      { id: 13, time: '07:30', program: 'ENTRENAMIENTO FUNCIONAL', trainer: 'Elena Rostova', duration: '45 MIN', level: 'PRINCIPIANTE' },
      { id: 14, time: '09:00', program: 'YOGA Y BIENESTAR', trainer: 'Sarah Chen', duration: '60 MIN', level: 'TODOS LOS NIVELES' },
      { id: 15, time: '12:00', program: 'HIIT CARDIO', trainer: 'Elena Rostova', duration: '30 MIN', level: 'INTERMEDIO' },
      { id: 16, time: '17:00', program: 'POWERLIFTING', trainer: 'Jaxson Reed', duration: '75 MIN', level: 'AVANZADO' },
      { id: 17, time: '19:00', program: 'ENTRENAMIENTO DE FUERZA', trainer: 'Marcus Vance', duration: '60 MIN', level: 'TODOS LOS NIVELES' },
    ],
  },
  {
    day: 'JUE',
    classes: [
      { id: 18, time: '06:30', program: 'HIIT CARDIO', trainer: 'Elena Rostova', duration: '45 MIN', level: 'TODOS LOS NIVELES' },
      { id: 19, time: '08:00', program: 'ENTRENAMIENTO FUNCIONAL', trainer: 'Elena Rostova', duration: '60 MIN', level: 'INTERMEDIO' },
      { id: 20, time: '10:00', program: 'YOGA Y BIENESTAR', trainer: 'Sarah Chen', duration: '60 MIN', level: 'TODOS LOS NIVELES' },
      { id: 21, time: '17:00', program: 'POWERLIFTING', trainer: 'Jaxson Reed', duration: '75 MIN', level: 'AVANZADO' },
      { id: 22, time: '19:00', program: 'ENTRENAMIENTO DE FUERZA', trainer: 'Marcus Vance', duration: '60 MIN', level: 'TODOS LOS NIVELES' },
    ],
  },
  {
    day: 'VIE',
    classes: [
      { id: 23, time: '06:00', program: 'ENTRENAMIENTO DE FUERZA', trainer: 'Marcus Vance', duration: '60 MIN', level: 'TODOS LOS NIVELES' },
      { id: 24, time: '07:30', program: 'ENTRENAMIENTO FUNCIONAL', trainer: 'Elena Rostova', duration: '45 MIN', level: 'TODOS LOS NIVELES' },
      { id: 25, time: '09:00', program: 'YOGA Y BIENESTAR', trainer: 'Sarah Chen', duration: '60 MIN', level: 'PRINCIPIANTE' },
      { id: 26, time: '12:00', program: 'HIIT CARDIO', trainer: 'Elena Rostova', duration: '30 MIN', level: 'TODOS LOS NIVELES' },
      { id: 27, time: '17:00', program: 'POWERLIFTING', trainer: 'Jaxson Reed', duration: '75 MIN', level: 'AVANZADO' },
      { id: 28, time: '19:00', program: 'ENTRENAMIENTO DE FUERZA', trainer: 'Marcus Vance', duration: '60 MIN', level: 'INTERMEDIO' },
    ],
  },
  {
    day: 'SÁB',
    classes: [
      { id: 29, time: '07:00', program: 'ENTRENAMIENTO DE FUERZA', trainer: 'Marcus Vance', duration: '60 MIN', level: 'TODOS LOS NIVELES' },
      { id: 30, time: '09:00', program: 'ENTRENAMIENTO FUNCIONAL', trainer: 'Elena Rostova', duration: '60 MIN', level: 'TODOS LOS NIVELES' },
      { id: 31, time: '11:00', program: 'YOGA Y BIENESTAR', trainer: 'Sarah Chen', duration: '75 MIN', level: 'TODOS LOS NIVELES' },
      { id: 32, time: '14:00', program: 'POWERLIFTING', trainer: 'Jaxson Reed', duration: '75 MIN', level: 'AVANZADO' },
      { id: 33, time: '16:00', program: 'ENTRENAMIENTO DE FUERZA', trainer: 'Marcus Vance', duration: '60 MIN', level: 'PRINCIPIANTE' },
    ],
  },
];
