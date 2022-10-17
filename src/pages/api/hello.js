// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export const FAQ = [
  {
    header: "When can I access care on Doctoora?",
    text: "Our healthcare providers are available round the clock. However, we work with your schedule. Book an appointment when you want and get access to healthcare on your own time.",
  },
  {
    header: "What type of care can I get on Doctoora?",
    text: "We have 3 types of consultation on our platform.Teleconsultation which is done via video or audio, Facility visit which allows you to schedule a physical appointment with a healthcare provider at any of our facilities and Home visit, where you can schedule homecare.",
  },
  {
    header: "I want a doctor to visit me at home, is it safe?",
    text: "Yes, you are in good hands. Our healthcare professionals have been vetted by us.",
  },
  {
    header: "I cancelled my appointment, can I get a refund?",
    text: "We do not refund for cancelled appointments, you will have to use your funds to schedule another appointment.",
  },
  {
    header: "I missed my appointment, how do I reschedule?",
    text: "If you know you will not be able to make an appointment, we recommend cancelling at least 24hours before so your Doctor can be notified. To reschedule your appointment, kindly reach out to us via email or telephone.",
  },
];

export const testimonies = [
  {
    name: "Stears Business",
    text: `Not every industry needs an “Uber” model, but healthcare might. This story unpacks the Doctoora business model to see how its utilizing spare capacity to provide Nigerians with affordable healthcare.`,
    img: "/img/stears.svg",
    social: "@Stears Business",
  },
  {
    name: "Femi",
    text: `Doctoora health Is doing great stuff in the private space. The government should be focusing on the affordability of these services for Nigerians. We're lightyears behind on that.`,
    img: "/img/femi.svg",
    social: "Obaluaye_",
  },
  {
    name: "Guaranty Trust",
    text: `Health care is a right, not a privilege. That's why we gave the Doctoora team all the support they needed to re-innovate and improve the healthcare system in their community.`,
    img: "/img/gtb.svg",
    social: "@gtbank",
  },
];

export const Reasons = [
  {
    header: "Work Conveniently",
    text: `Make additional income in your spare time. We have a network of facilities in different locations where you can meet with your patients.`,
    img: "/img/convenience.svg",
  },
  {
    header: "Patient Management",
    text: `Enjoy a patient management software created just for you. Our focus is to enable you to run a thriving practice without worrying about costs and administrative issues.`,
    img: "/img/mgt.svg",
  },
  {
    header: "Access to a Community",
    text: `Our ecosystem is made up of amazing healthcare professionals. By joining us, you will have access to this ecosystem through our various community engagement programs and events.`,
    img: "/img/access.svg",
  },
  {
    header: "Flexible Payment Plan",
    text: `We offer our facilities for rent on a pay-per-use tariff plan and also on monthly subscription plans giving you the flexibility you need.`,
    img: "/img/plan.svg",
  },
];

export const facilityList = [
  {
    facility: "Victoria Island",
    location: "Victoria Island, Lagos.",
    available: [
      "Consultation room",
      "Ultrasound Scan",
      " X-ray",
      "Echocardiogram",
      "Haematology Lab",
      "ECG",
    ],
    img: "/facilities/VI.svg",
  },
  {
    facility: "Surulere",
    location: "Surulere, Lagos.",
    available: ["Consultation room", "Ultrasound Scan", "Phlebotomy"],
    img: "/facilities/Opebi.svg",
  },
  {
    facility: "Lekki Phase 1",
    location: "Lekki, Lagos.",
    available: [
      "Consultation room",
      "Ultrasound Scan",
      "In-patient Wards",
      "Surgical Theatre",
      "Haematology Lab",
    ],
    img: "/facilities/Onipanu.svg",
  },
  {
    facility: "Doctoora Lekki",
    location: "Lekki, Lagos.",
    available: ["Consultation room", "Ultrasound Scan"],
    img: "/facilities/Lekki.svg",
  },
  {
    facility: "Doctoora Surulere",
    location: "Surulere, Lagos.",
    available: ["Consultation room", "Ultrasound Scan"],
    img: "/facilities/Surulere.svg",
  },
  {
    facility: "Doctoora Banana Island",
    location: "Ikoyi, Lagos.",
    available: [
      "Consultation room",
      "Ultrasound Scan",
      "X-ray",
      "Gym/Fitness Center",
      "Haematology Lab",
    ],
    img: "/facilities/Banana.svg",
  },
  {
    facility: "Doctoora Dolphin Estate",
    location: "Ikoyi, Lagos.",
    available: [
      "Consultation room",
      "Ultrasound Scan",
      "Massage Couch",
      "Dance/Yoga Studio",
      "Physiotheraphy Bay",
    ],
    img: "/facilities/Banana.svg",
  },
];

export const team = [
  {
    img: "/about/DrDebo.svg",
    name: "Dr Debo Odulana",
    post: "Co-Founder/CEO",
  },
  {
    img: "/about/Beatrix.svg",
    name: "Beatrix Wu",
    post: "Co-Founder",
  },
  {
    img: "/about/DrShakira.svg",
    name: "Dr Shakirah Saliu",
    post: "Co-Founder",
  },
  {
    img: "/about/Alecia.svg",
    name: "Aleccia Esson",
    post: "Co-Founder",
  },
];

export const impact = [
  {
    img: "/about/Impact2.png",
    name: "Sickle cell Awareness",
    post: "Ojo, Lagos",
  },
  {
    img: "/about/Impact1.png",
    name: "Measles Awareness",
    post: "Makoko, Lagos",
  },
  {
    img: "/about/impact1.webp",
    name: "Sickle cell Awareness",
    post: "Ojo, Lagos",
  },
  {
    img: "/about/Impact4.png",
    name: "EndoCare Campaign",
    post: "Surulere, Lagos",
  },
];

export const keyOfferings = [
  {
    name: "Facility",
    img: "/about/keyoff1.svg",
    list: [
      "Healthcare Facility Rentals & Management Rentals.",
      "Facility Management.",
      "Interior Decoration / Healthcare Architecture & Design.",
    ],
  },
  {
    name: "Health Care",
    img: "/about/keyoff2.svg",
    list: [
      "Healthcare Professional Bookings.",
      "Healthcare Management & Financial Risk Protection.",
      "Healthcare Management Consulting & Investments.",
      "Healthcare Service Integration & Delivery Maternal & Child Health.",
      "Mental Health, Elderly Care, Home Care & Emergency & Ambulatory Care.",
      "Food and Nutrition.",
    ],
  },
];

export const corporateServices = [
  {
    title: "Convenience",
    note: "No stress or queues. Find the best service via our platform. Interact with preferred service providers via telemedicine, in clinic or at your home.",
  },

  {
    title: "Efficiency",
    note: "Our services stand out because we focus on efficiency. Coupled with a passionate quality assurance team that work on steroids! Quality is guaranteed.",
  },
  {
    title: "Intergration",
    note: "We have integrated over 6000 healthcare service access points in Nigeria. Top doctors, clinics, hospitals, labs, gyms & pharmacies into one platform, for you.",
  },
  {
    title: "Digital",
    note: "No more paper based contracts, care requests, letters of approval and other needless hassles. Go to the dashboard to access all you need, anytime, anywhere.",
  },
];

export const servPortal = [
  {
    title: "Flexible and Affordable Pricing",
    note: "Choose your preferred pricing from postpaid, monthly/annual payment or pay-as-you-go options. Prepaid pay-as-you-go credits have an extended validity period of 18months and unused credits can be rolled over.",
  },
  {
    title: "Dedicated Admin Portal",
    note: "Manage all your staff health needs in one place. You add /remove employees and assign spending limits/ health resources with ease.",
  },
  {
    title: "Easy Staff Health Management",
    note: "Order pre-employment medicals, drug testing and request employee health reports with our easy to use platform.",
  },
];

export const pricing = [
  {
    title: "Post-Paid",
    note: "Sign a corporate retainer-ship for a selection of services and pay at pre-agreed intervals based on staff consumption. Our service agreement will detail our tariffs for services nationwide.",
  },
  {
    title: "Pay-As-You-Go",
    note: "Save money on healthcare when you purchase Doctoora credits. Credits can be spent on any of healthcare service on our platform and at our physical locations. Credits have 18 month validity period and you can roll-over any used credits. Buy in credits bulk and allocate to staff at will.",
  },
  {
    title: "Monthly/Yearly",
    note: "Our limited packages offer you the option of selecting from our predesigned bouquets. So whether you want to offer your staff only telemedicine or you want the full range of services, the choice is entirely up to your HR team. Enjoy unbeatable pricing with pay monthly or yearly plans. Get high quality service for your people, every time.",
  },
];

export const comServices = [
  {
    name: "Mental Care",
    img: "/services/mental.svg",
  },
  {
    name: "Oral Care",
    img: "/services/oral.svg",
  },
  {
    name: "Eye Care",
    img: "/services/eyecare.svg",
  },
  {
    name: "Maternal Care",
    img: "/services/mentalcare.svg",
  },
];

export const bannerButtons = [
  {
    active: true,
    name: "Telemedicine",
    pos: "one",
    image: "search/Tele1.svg",
    image2: "search/Tele2.svg",
  },
  {
    active: false,
    name: "Facility Visit",
    pos: "two",
    image: "/search/Facility.svg",
    image2: "/search/Facility2.svg",
  },
  {
    active: false,
    name: "Home Visit",
    pos: "three",
    image: "/search/home.svg",
    image2: "/search/home2.svg",
  },
];
