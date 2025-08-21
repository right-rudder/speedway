import {
  COMPANY_NAME,
  PROGRAM_KEYWORDS,
  LOCATION_KEYWORDS,
  PRIMARY_KEYWORDS,
} from "../consts";

const instrumentRatingData = {
  pageTitle: `Instrument Rating Training | IFR Certification | ${COMPANY_NAME}`,
  pageDescription:
    "Master IFR flying in just 6-8 weeks at Atlanta Speedway Airport! Our Instrument Rating program features advanced avionics training, simulator sessions, and one-on-one instruction designed for real-world conditions. Financing available.",
  pageKeywords: `${PROGRAM_KEYWORDS.instrument}, ${LOCATION_KEYWORDS.primary}, IFR certification Hampton GA, all-weather flying training, Garmin G1000 IFR training, instrument approach procedures Georgia, FAA instrument checkride prep, IFR cross-country training, IMC flying certification, advanced avionics training Atlanta, instrument pilot certification, 6-week IFR program, affordable instrument rating`,

  header: {
    stars: true,
    imagePath: "/src/assets/speedway-ft-fleet-n7350g-new-panel-hampton-pilot-training-IMG_2587.jpg",
    imageAlt: "Speedway Flight Training aircraft flying in instrument conditions",
    headerH1: `Instrument <br>RATING`,
    paragraph: `Expand your flight skills and master IFR procedures with Speedway Flight Training’s Instrument Rating program. Train with expert instructors and gain confidence flying in low-visibility conditions.`,
    buttons: [
      { name: "Apply Now", link: "/enroll", primary: false },
      { name: "Request Info", link: "/contact", primary: false },
    ],
  },

  details: {
    upperHeading: "Take Your Training Further With an",
    heading: "Instrument Rating",
    subHeading:
      "Enhance your safety, skillset, and career prospects with advanced instrument training. Learn IFR navigation, flight planning, and emergency procedures to fly in all weather conditions.",

    title: "Overview",
    description: `
      <strong>Expand your skills and fly in all weather conditions with confidence.</strong> This program provides advanced training in instrument navigation, flight planning, and situational awareness to make you a safer and more capable pilot.
      <br/><br/>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Accelerated Program:</strong> Complete in as little as 6–8 weeks</li>
        <li><strong>Flexible Option:</strong> Train at your own pace</li>
        <li><strong>Estimated Cost:</strong> $13,925 (based on 40 flight instruction hours and 18.5 ground lesson hours) — Additional expenses apply</li>
        <li><strong>Training Location:</strong> Speedway Flight Training facilities</li>
        <li><strong>Aircraft Used:</strong> Modern, well-maintained fleet equipped for IFR training</li>
        <li><strong>FAA Minimum Requirements:</strong> 40 hours of instrument flight training, including simulated instrument training and cross-country flight time</li>
      </ul>
    `,

    keyPoints: [
      "Advanced IFR Training for Safe Flight in Low Visibility",
      "Master Instrument Navigation and Flight Planning",
      "Comprehensive Ground School & FAA Exam Preparation",
      "Hands-On IFR Training with Modern Avionics & Flight Simulators",
      "Structured Learning Path with One-on-One Instructor Guidance",
      "Emphasis on Safety-First Decision Making",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "Instrument training with one-on-one Instructor Pilot guidance",
        "Mock Oral Exams and Pre/Post Ground with Instructor Pilot",
        "Gleim Deluxe Instrument Pilot Kit",
        "Foggles (for simulated instrument training)",
        "Fuel tester",
        "Advanced ground school & exam preparation (covers IFR flight procedures, weather interpretation, and emergency scenarios)",
        "IFR flight training using modern avionics and flight simulators",
        "Pre-checkride preparation and flight review",
        "Emphasis on safety-first decision-making, aligning with Speedway's core values",
      ],
    },

    additionalCosts: {
      heading: "What’s Not Included (Additional Student Costs)?",
      items: [
        "Noise-canceling aviation headset (~$600 - $1,200 – Recommended brands: Bose, Lightspeed, David Clark)",
        "iPad with GPS (~$500 - $700 – Cellular capable, no cellular plan required)",
        "Aircraft rental insurance (~$600/year – Required for training flights)",
        "FAA Designated Pilot Examiner (DPE) practical exam fees (~$800-$1,200)",
        "FAA written exam fees (~$175)",
        "ForeFlight subscription (~$250/year – For flight planning and in-flight navigation)",
        "FAA 1st Class Medical clearance (~$150 – Required for those pursuing a professional pilot career)",
        "Applicable Sales Taxes",
      ],
    },

    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Accelerated Training: Earn your Instrument Rating in 6–8 weeks",
        "Expert Instructors: Personalized one-on-one IFR mentorship",
        "Comprehensive Training: Ground school, simulators, and real-world IFR flights",
        "State-of-the-Art Training Fleet: Learn on modern, well-maintained IFR aircraft",
        "Career Readiness: Build experience for commercial and airline careers",
        "Commitment to Safety & Integrity: Train in a structured, safety-first environment",
      ],
    },

    cta: {
      imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-129.webp",
      imageAlt: "Speedway Flight Training student practicing IFR navigation",
      title: "Advance Your Flight Skills with an Instrument Rating",
      description:
        "Take control in IFR conditions with expert training at Speedway Flight Training. Enroll in our Instrument Rating program today and gain the skills to fly safely in all weather conditions.",
      button: {
        name: "Apply Now",
        link: "/enroll",
      },
    },

    faqs: [
      {
        question: "How long does it take to earn my Instrument Rating?",
        answer:
          "With our accelerated program, students can complete training in <strong>6–8 weeks</strong>. A self-paced program is also available for those needing more scheduling flexibility.",
      },
      {
        question: "Can I finance my training?",
        answer:
          "Yes! We partner with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to offer financing options. Contact us to learn more about making your flight training affordable.",
      },
      {
        question: "What kind of aircraft will I train on?",
        answer:
          "Students train on <strong>modern, well-maintained IFR-certified aircraft</strong>, equipped with advanced avionics for instrument training.",
      },
      {
        question: "Will I be ready for my checkride after training?",
        answer:
          "Yes! Our program includes <strong>comprehensive checkride preparation</strong> and <strong>simulated practical exams</strong> to ensure you're fully prepared.",
      },
      {
        question: "What happens after I get my Instrument Rating?",
        answer:
          "Many students continue their training for a <strong>Commercial Pilot License (CPL)</strong> or <strong>Certified Flight Instructor-Instrument (CFII)</strong> certification.",
      },
    ],
  },
};

export default instrumentRatingData;
