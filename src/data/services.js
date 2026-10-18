// Verified service catalog — sourced from the current reclamationcntr.com
// Services page on 2026-10-18. Keep this file in sync with what the center
// actually offers before publishing changes.

import {
  Brain,
  Pill,
  HeartHandshake,
  Zap,
  Users,
  MessageCircleHeart,
  ShieldCheck,
  Layers,
  Activity,
  Stethoscope,
  Ribbon,
  Leaf,
  Home,
  Flag,
  BedDouble,
} from 'lucide-react'

export const services = [
  {
    slug: 'psychiatric-care',
    title: 'Psychiatric Care',
    icon: Brain,
    short:
      'Comprehensive evaluations, accurate diagnoses, and personalized treatment plans for children, adolescents, adults, and seniors.',
    description:
      'Our board-certified psychiatric providers deliver comprehensive mental health evaluations, accurate diagnoses, medication management, and personalized treatment plans for every stage of life. We care for people living with depression, anxiety, bipolar disorder, PTSD, ADHD, schizophrenia, and other psychiatric conditions using evidence-based, compassionate approaches.',
    highlights: [
      'Comprehensive psychiatric evaluations',
      'Care for children, adolescents, adults, and seniors',
      'Treatment for depression, anxiety, bipolar disorder, PTSD, ADHD, and more',
      'Evidence-based, compassionate approach',
    ],
  },
  {
    slug: 'therapy',
    title: 'Mental Health Therapy',
    icon: MessageCircleHeart,
    short:
      'Individual, family, couples, and group counseling that helps you heal, grow, and move forward with confidence.',
    description:
      'Our licensed therapists provide individual, family, couples, and group counseling using evidence-based approaches such as Cognitive Behavioral Therapy (CBT), trauma-informed care, motivational interviewing, and solution-focused therapy. We walk alongside you through life’s challenges while promoting emotional healing, resilience, and personal growth.',
    highlights: [
      'Individual, family, couples, and group counseling',
      'CBT, trauma-informed care, and motivational interviewing',
      'Solution-focused, personalized support',
      'A safe, judgment-free space to be heard',
    ],
  },
  {
    slug: 'medication-management',
    title: 'Medication Management',
    icon: Pill,
    short:
      'Careful evaluation, prescribing, and monitoring so your treatment works safely and effectively for you.',
    description:
      'Our psychiatric providers carefully evaluate, prescribe, and monitor medications to help manage mental health conditions safely and effectively. We work closely with each client to optimize treatment, reduce symptoms, minimize side effects, and support long-term emotional wellness.',
    highlights: [
      'Thoughtful evaluation before prescribing',
      'Ongoing monitoring and adjustment',
      'Focus on minimizing side effects',
      'Coordination with your therapy and medical care',
    ],
  },
  {
    slug: 'substance-abuse-treatment',
    title: 'Substance Use Treatment',
    icon: HeartHandshake,
    short:
      'Compassionate, evidence-based outpatient care that empowers lasting recovery from alcohol and drug addiction.',
    description:
      'Our outpatient substance use treatment program provides compassionate, evidence-based care for individuals struggling with alcohol and drug addiction. Through individual counseling, relapse prevention, dual diagnosis treatment, recovery planning, and community support, we empower clients to achieve lasting recovery.',
    highlights: [
      'Individual counseling and recovery planning',
      'Relapse prevention skills',
      'Dual diagnosis treatment',
      'Connection to community support',
    ],
  },
  {
    slug: 'dual-diagnosis',
    title: 'Dual Diagnosis Care',
    icon: Layers,
    short:
      'Integrated treatment for co-occurring mental health and substance use conditions — treated together, not separately.',
    description:
      'Many individuals experience both a mental health condition and a substance use disorder at the same time. Our integrated Dual Diagnosis Program treats both conditions together through coordinated psychiatric care, therapy, medication management, and recovery-focused support to improve long-term outcomes.',
    highlights: [
      'Coordinated psychiatric and recovery care',
      'One team, one integrated plan',
      'Therapy and medication management together',
      'Focus on long-term outcomes',
    ],
  },
  {
    slug: 'tms-therapy',
    title: 'TMS Therapy',
    icon: Zap,
    short:
      'A non-invasive, FDA-approved, medication-free option for treatment-resistant depression and OCD.',
    description:
      'Transcranial Magnetic Stimulation (TMS) is a non-invasive, FDA-approved treatment for individuals experiencing depression, OCD, and other treatment-resistant mental health conditions. Using gentle magnetic stimulation, TMS offers a safe, medication-free option for individuals who have not found adequate relief from traditional therapies.',
    highlights: [
      'Non-invasive and FDA-approved',
      'Medication-free treatment option',
      'For depression, OCD, and treatment-resistant conditions',
      'Gentle, well-tolerated sessions',
    ],
  },
  {
    slug: 'psychosocial-rehabilitation',
    title: 'Psychosocial Rehabilitation (PSR)',
    icon: Users,
    short:
      'Structured group support that builds daily living, coping, and social skills for more independent living.',
    description:
      'Our Psychosocial Rehabilitation (PSR) Program helps individuals develop the daily living, coping, communication, and social skills needed to live more independently. Through structured group activities and individualized support, clients build confidence, strengthen relationships, and improve overall functioning within their communities.',
    highlights: [
      'Daily living and coping skills',
      'Structured, supportive group activities',
      'Confidence and relationship building',
      'Greater independence in the community',
    ],
  },
  {
    slug: 'case-management',
    title: 'Case Management',
    icon: ShieldCheck,
    short:
      'A dedicated advocate connecting you with housing, transportation, employment, benefits, and community resources.',
    description:
      'Our Targeted Case Management team connects clients with essential community resources, healthcare providers, housing assistance, transportation, employment support, educational programs, and public benefits. We coordinate services that promote independence, stability, and overall well-being.',
    highlights: [
      'Housing and transportation assistance',
      'Employment and education support',
      'Help navigating public benefits',
      'Coordination across all your providers',
    ],
  },
  {
    slug: 'primary-care',
    title: 'Primary Care',
    icon: Stethoscope,
    short:
      'Whole-person medical care — preventive visits, chronic disease management, and screenings — coordinated with your behavioral health team.',
    description:
      'Our primary care services focus on whole-person wellness by providing preventive care, chronic disease management, wellness exams, health screenings, medication management, and coordination with behavioral health services. We believe physical and mental health work together to support lifelong wellness.',
    highlights: [
      'Preventive care and wellness exams',
      'Chronic disease management',
      'Health screenings',
      'Seamless coordination with behavioral health',
    ],
  },
  {
    slug: 'youth-family-services',
    title: 'Youth & Family Services',
    icon: Home,
    short:
      'Family-centered behavioral healthcare that strengthens relationships and helps children and teens thrive.',
    description:
      'Our Youth & Family Services provide comprehensive, family-centered behavioral healthcare designed to strengthen relationships, improve communication, and promote healthy emotional development. We work collaboratively with parents, schools, and community partners to help children and adolescents achieve lasting success.',
    highlights: [
      'Care designed for children and adolescents',
      'Family-centered approach',
      'Collaboration with parents and schools',
      'Healthy emotional development',
    ],
  },
  {
    slug: 'hiv-aids-services',
    title: 'HIV/AIDS Services',
    icon: Ribbon,
    short:
      'Confidential, stigma-free HIV prevention, testing, PrEP/PEP navigation, and compassionate ongoing support.',
    description:
      'Our confidential HIV Services Program provides prevention education, HIV testing, PrEP and PEP navigation, linkage to medical care, case management, and behavioral health support for individuals living with or affected by HIV. We are committed to reducing stigma while improving health outcomes through compassionate, culturally responsive care.',
    highlights: [
      'Confidential testing and prevention education',
      'PrEP and PEP navigation',
      'Linkage to medical care',
      'Culturally responsive, stigma-free support',
    ],
  },
  {
    slug: 'behavioral-health',
    title: 'Behavioral Health Services',
    icon: Activity,
    short:
      'Comprehensive outpatient care that strengthens emotional, psychological, and social well-being.',
    description:
      'Reclamation Center offers comprehensive outpatient behavioral health services designed to improve emotional, psychological, and social well-being. Our multidisciplinary team provides individualized care plans that promote healthy coping skills, emotional regulation, recovery, and improved quality of life.',
    highlights: [
      'Individualized care plans',
      'Healthy coping and emotional regulation',
      'Multidisciplinary team approach',
      'Improved quality of life',
    ],
  },
  {
    slug: 'wellness-program',
    title: 'Wellness Program',
    icon: Leaf,
    short:
      'Nutrition, stress management, mindfulness, and self-care strategies for a healthier everyday life.',
    description:
      'Our Wellness Program promotes healthy lifestyles through nutrition education, stress management, physical wellness, mindfulness, emotional resilience, and self-care strategies. We empower individuals to build healthier habits that support both mental and physical well-being.',
    highlights: [
      'Nutrition education',
      'Stress management and mindfulness',
      'Physical wellness support',
      'Sustainable self-care habits',
    ],
  },
  {
    slug: 'veteran-care',
    title: 'Veteran Care',
    icon: Flag,
    short:
      'Trauma-informed mental health care, PTSD support, and resource coordination for veterans and military families.',
    description:
      'We proudly serve veterans and military families by providing compassionate mental health counseling, psychiatric care, trauma-informed treatment, PTSD support, substance use treatment, case management, and community resource coordination. Our goal is to help those who served our country achieve lasting recovery and improved quality of life.',
    highlights: [
      'PTSD and trauma-informed treatment',
      'Support for military families',
      'Substance use treatment and counseling',
      'Community resource coordination',
    ],
  },
  {
    slug: 'inpatient-services',
    title: 'Inpatient Services',
    icon: BedDouble,
    short:
      '24/7 inpatient behavioral health and dual diagnosis treatment in a safe, structured environment (coming soon through Reclamation Recovery Center).',
    description:
      'Reclamation Recovery Center will provide 24/7 inpatient behavioral health and dual diagnosis treatment in a safe, structured, and therapeutic environment. Our future inpatient program will offer comprehensive psychiatric stabilization, substance use treatment, medical supervision, and individualized recovery planning designed to support long-term healing.',
    highlights: [
      '24/7 structured, therapeutic environment',
      'Psychiatric stabilization',
      'Medical supervision',
      'Individualized recovery planning',
    ],
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
