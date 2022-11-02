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
    header: "How are Healthcare Providers on Doctoora Chosen?",
    text: "Our pool of healthcare providers are professionals and specialists with years of proven expertise in their field. Our professionals are put through a vetting process to verify their documentations before they are approved to see patients.",
  },
  {
    header: "What device do I need for teleconsulting?",
    text: "An internet enabled laptop or smartphone is all you need.",
  },
  {
    header: "Will my teleconsultation session be recorded?",
    text: "No. We do not record audio/video consultations.",
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
    social: "@stearsbusiness",
  },
  {
    name: "Moe",
    text: `There’s a Nigerian startup I am so excited about. 
    It is called Doctoora. They use a co-working 
    approach to provide equipment etc to medical 
    professionals so they can provide quality health 
    care services for a fraction of the overhead 
    costs. Can’t wait to see how they grow!`,
    img: "/img/moe.svg",
    social: "@Mochievous",
  },
  {
    name: "Guaranty Trust",
    text: `Health care is a right, not a privilege. That's why we gave the Doctoora team all the support they needed to re-innovate and improve the healthcare system in their community.`,
    img: "/img/gtb.svg",
    social: "@gtbank",
  },
  {
    name: "Moalsalafi",
    text: `I used Doctoora two weeks ago when I got 
    really sick. It is very convenient and 
    customer-centric. Great service - I would do 
    it again!`,
    img: "/img/moal.svg",
    social: "@Moalsalafi",
  },
  {
    name: "Femi",
    text: `Doctoora health Is doing great stuff in the private space. The government should be focusing on the affordability of these services for Nigerians. We're lightyears behind on that.`,
    img: "/img/femi.svg",
    social: "obaluaye_",
  },
  {
    name: "Deo volente Dux",
    text: `Amazing stuff you guys are doing at "Doctoora".
    This platform for ease in private medical 
    practice is commendable 👍👏.
    We're hoping that soon there'd be facilities in other part of the country. Kudos`,
    img: "/img/deo.svg",
    social: "@DikeNY_MD",
  },
  
];

export const proTestimonies = [
  {
    name: "Dr. Shakirat Gold Olufadi",
    text: `“ I have believed in the Doctoora mission and vision right from the very start and I was one of the first consultants to sign up on the platform. Doctoora has not only met my expectations, they have even surpassed it. In Nigeria, specialists (especially for a sanctuary specialty like dermatology) are not readily available. With Doctoora, you can get to see any specialist that you need. Whether you're looking to see a specialist physically or virtually, Doctoora has you covered. For a visual specialty like Dermatology, I have found the virtual bookings convenient for both the patient and doctor and the results are comparable to a physical consultation. Their customer service is also topnotch- giving all the support to the specialists in good time. I call Doctoora the brand that tailors healthcare to your needs because that's the best way to describe the brand!” `,
    img: "/img/DrShakirat.svg",
    social: "",
  },
  {
    name: "Dr Kafayah Ogunsola ",
    text: `“ For any Clinician who is deeply invested in building a sustainable private practice, I would recommend contacting the Doctoora team. Since 2019, when I started utilizing their very conducive out-patient facility, I have successfully and proudly built a private practice that continues to deliver global scale mental health care services to my local and international clients.”`,
    img: "/img/DrKafaya.svg",
    social: "MBBS; FWACP (psych.)",
    social2: "MD, EmpathySpace Therapy Hub, Lagos"
  },
  {
    name: "Dr. Ayodele Akenzua",
    text: `“ Doctoora, Doctoora, Doctoora! Where do I even start from?
    The Doctoora platform is a lifesaver, especially at a time like this when businesses are struggling to stay afloat in the present economy.
    It reduces the headache of startup costs and overheads and allows you as a medical entrepreneur to do your business and still make time for other things.
    Did I forget to mention that the environment is friendly and cozy? It literally takes away the scary feeling some patients have of visiting the hospital to see a healthcare provider.
    Honestly, I can go on and on about how Doctoora has helped my private practice, but I will leave it to you to give it a try. You will be happy you did.”`,
    img: "/img/drayodele.svg",
    social: "",
  },
  {
    name: "Nurse Peace Emem Jonathan",
    text: `“ Ever since I discovered Doctoora, I have believed in excellent medical practice. You have swift response to health care needs. Excellent staffing, quick delivery and wonderful results. I am happy to have chosen you for my care delivery services.”`,
    img: "/img/noimage.png",
    social: "",
  },
  {
    name: "Dr. Hakeem Olaosebikan",
    text: `“ Doctoora Health has revolutionized private clinical practice in Lagos, it is a very laudable innovation where many doctors can come together to use a facility and it actually reduces proliferation of hospitals and allows a focused clinical practice which is what we need as a nation. It helps some doctors who don’t want to go through the hassle of setting up a facility for their practice by making use of the facility. Another aspect is that a patient can book online which allows the patients’ medical records to be uploaded online during the consultation and their telemedicine aspect of it is another beautiful innovation. It is my prayer that Doctoora Health continues to grow.” `,
    img: "/img/DrHakeem.svg",
    social: "Consultant Rheumatologist.",
  },
  {
    name: "Dr. Njoku Golden",
    text: `“ It was a fantastic experience really, saw a couple of patients. The ability to attend to patients in the comfort of their homes was key.” `,
    img: "/img/noimage.png",
    social: "",
  },
  {
    name: "Dr. Nwanekezie Obiechina Alexis",
    text: `“ Doctoora Health has been seamless in connecting me with patients, especially during these times when the basic salary of one job isn’t enough. Communication when setting up home visits and online consultations has been excellent so far.” `,
    img: "/img/DrAlexis.svg",
    social: "",
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
    img: "/facilities/Surulere.svg",
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
    img: "/facilities/Lekki.svg",
  },
  {
    facility: "Alaba",
    location: "Ojo, Lagos.",
    available: ["Consultation room", "Ultrasound Scan"],
    img: "/facilities/Alaba.svg",
  },
  {
    facility: "Banana Island",
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
    facility: "Dolphin Estate",
    location: "Ikoyi, Lagos.",
    available: [
      "Consultation room",
      "Ultrasound Scan",
      "Massage Couch",
      "Dance/Yoga Studio",
      "Physiotheraphy Bay",
    ],
    img: "/facilities/Dolphin.svg",
  },
];

export const team = [
  {
    img: "/about/DrDebo.svg",
    name: "Dr Debo Odulana",
    post: "Founder/CEO",
  },
  // {
  //   img: "/about/Beatrix.svg",
  //   name: "Beatrix Wu",
  //   post: "Co-Founder",
  // },
  // {
  //   img: "/about/DrShakira.svg",
  //   name: "Dr Shakirah Saliu",
  //   post: "Co-Founder",
  // },
  // {
  //   img: "/about/Alecia.svg",
  //   name: "Aleccia Esson",
  //   post: "Co-Founder",
  // },
  {
    img: "/about/dammy.png",
    name: "Damilola Adelekan",
    post: "Product Manager",
  },
  {
    img: "/about/Ayoola.png",
    name: "Adagunodo Ayoola",
    post: "CTO",
  },
  {
    img: "/about/Matthew.png",
    name: "Matthew Aloba",
    post: "Frontend Engineer",
  },
  {
    img: "/about/Nathan.png",
    name: "Nathaniel Nelson-Omueti",
    post: "UX Designer",
  }, 
  {
    img: "/about/Amara.png",
    name: "Amarachi Peace N.",
    post: "Executive Assistant | Chief of Staff",
  },
  {
    img: "/about/DrDarl.png",
    name: "Dr. Darlington Amadi",
    post: "Medical Officer (Surulere)",
  },
  {
    img: "/about/Peculiar.png",
    name: "Peculiar Umensofor",
    post: "Quality Assurance Nurse (Surulere)",
  },
];

// export const team2 = [
//   {
//     img: "/about/Amara.png",
//     name: "Amarachi Peace N.",
//     post: "Executive Assistant | Chief of Staff",
//   },
//   {
//     img: "/about/DrDarl.png",
//     name: "Dr. Darlington Amadi",
//     post: "Medical Officer (Surulere)",
//   },
//   {
//     img: "/about/Peculiar.png",
//     name: "Peculiar Umensofor",
//     post: "Quality Assurance Nurse (Surulere)",
//   },
// ];

export const team3 = [
  {
    img: "/about/Omotoyosi.png",
    name: "Omotoyosi Awosusi",
    post: "Provider Liaison Lead",
  },
  {
    img: "/about/Gloria.png",
    name: "Umeadi Gloria Adaora",
    post: "Business Manager",
  }
]

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
      "Healthcare Facility Rentals.",
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
      "Healthcare Service Integration.",
      "Delivery, Maternal & Child Health.",
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
    title: "Integration",
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

export const proServPortal = [
  {
    title: "Scheduling Tool",
    note: "We provide computerized administration processes such as scheduling systems to assist professionals in managing their calendars and increasing productivity.",
  },
  {
    title: "Billing",
    note: "Earning money has never been easier thanks to our billing system. Professionals can use our platform to receive payments from their patients, set fixed rates, offer discount vouchers to select patients, and enjoy seamless transactions with our payment gateways.",
  },
  {
    title: "Locum Placement",
    note: "Take advantage of our extensive network of healthcare providers across the country to achieve a flexible work-life balance. Gain access to our available roles, specializations, and locations.",
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
export const servicesList = [
  {
    title: 'Skin & Body Care',
    slug: '/skin-body-care'
  },
  {
    title: 'Dermatology',
    slug: '/dermatology'
  },
  {
    title: 'Plastic Surgery',
    slug: '/plastic-surgery'
  },
  {
    title: 'Aesthetic Medicine',
    slug: '/aesthetic-medicine'
  },
  {
    title: 'Bone Muscle',
    slug: '/bone-muscle'
  },
  {
    title: 'Orthopedic Surgery',
    slug: '/orthopaedic-surgery'
  },
  {
    title: 'Rheumatology',
    slug: '/rheumatology'
  },
  {
    title: 'Physiotherapy',
    slug: '/physiotherapy'
  },
  {
    title: 'Podiatry',
    slug: '/podiatry'
  },
  {
    title: 'Occupational Therapy',
    slug: '/occupational-therapy'
  },
  {
    title: 'Brains & Nerves',
    slug: '/brain-nerves'
  },
  {
    title: 'Neurology',
    slug: '/neurology'
  },
  {
    title: 'Neurosurgery',
    slug: '/neurosurgery'
  },
  {
    title: 'Spine Surgery',
    slug: '/spine-surgery'
  },
  {
    title: 'Speech Therapy',
    slug: '/speech-therapy'
  }
];

