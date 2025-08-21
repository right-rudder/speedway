import {
  COMPANY_NAME,
  PROGRAM_KEYWORDS,
  LOCATION_KEYWORDS,
  PRIMARY_KEYWORDS,
} from "../consts";

const commercialPilotData = {
  pageTitle: `Commercial Pilot License Training | Professional Pilot Career | ${COMPANY_NAME}`,
  pageDescription:
    "Turn your passion into a profession with our 6-8 month Commercial Pilot License program at Atlanta Speedway Airport. Real-world scenario training, advanced maneuvers, and guaranteed airline interview preparation. Financing available!",
  pageKeywords: `${PROGRAM_KEYWORDS.commercial}, ${LOCATION_KEYWORDS.primary}, professional pilot pathway Georgia, airline career preparation Atlanta, commercial pilot checkride prep Hampton, 250 flight hours program, CPL training with financing, advanced flight maneuvers, real-world scenario training, Garmin avionics training, complex aircraft endorsement, commercial pilot job preparation`,

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-71.webp",
    imageAlt:
      "Speedway Flight Training commercial pilot student preparing for a flight",
    headerH1: `Commercial Pilot <br>LICENSE</span>`,
    paragraph:
      "Advance your aviation career with structured commercial flight training. This program enhances your flight proficiency and prepares you for real-world professional operations.",
    buttons: [
      {
        name: "Apply Now",
        link: "/enroll",
        primary: false,
      },
      {
        name: "Request Info",
        link: "/contact",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Train for a Career in Aviation with a",
    heading: "Commercial Pilot License",
    subHeading:
      "Refine your flying skills and prepare for professional pilot opportunities with our structured CPL program. Train for real-world commercial operations and build the experience needed to fly professionally.",

    title: "Overview",
    description: `
      Speedway Flight Training’s <strong>Commercial Pilot License (CPL) program</strong> is designed for pilots looking to <strong>turn their passion into a career</strong>. This structured program refines your flying skills, improves decision-making, and prepares you for commercial aviation.

      <ul class="list-disc list-inside space-y-2 mt-4 mb-4">
        <li><strong>Accelerated Program:</strong> Complete in as little as <strong>6–8 months</strong></li>
        <li><strong>Flexible Option:</strong> Train at your own pace</li>
        <li><strong>Estimated Cost:</strong> <strong>$53,700</strong> (based on 160 flight hours; additional costs apply)</li>
        <li><strong>Training Location:</strong> Speedway Flight Training facilities at Atlanta Speedway Airport (KHMP)</li>
        <li><strong>Aircraft Used:</strong> Modern, well-maintained Cessna 172 fleet</li>
        <li><strong>FAA Minimum Requirements:</strong> 250 total flight hours, including 100 hours as pilot-in-command (PIC) and 50 hours cross-country</li>
      </ul>

      This program includes <strong>advanced maneuvers, mock exams, flight proficiency training, and full checkride prep</strong>—all designed to launch your professional pilot career.
    `,

    keyPoints: [
      "Accelerated Commercial Pilot License in 6–8 Months",
      "Master Advanced Maneuvers and Flight Proficiency",
      "Scenario-Based Training for Real-World Flight Ops",
      "Structured Ground School and FAA Exam Prep",
      "Build PIC and Cross-Country Hours for Career Readiness",
      "Mock Oral Exams and Full Checkride Preparation",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "160 flight training hours (FAA minimum: 250 total flight hours required)",
        "Commercial training with one-on-one Instructor Pilot guidance",
        "Mock Oral Exams and Pre/Post Ground with Instructor Pilot",
        "Gleim Deluxe Commercial Pilot Kit",
        "Foggles (for simulated instrument training)",
        "Fuel tester",
        "Advanced maneuvers and flight proficiency training",
        "Ground school & exam preparation",
        "Scenario-based training for real-world commercial flight operations",
        "Pre-checkride preparation and evaluation",
      ],
    },

    additionalCosts: {
      heading: "What’s Not Included (Additional Student Costs)?",
      items: [
        "Noise-canceling aviation headset (~$600–$1,200; Recommended: Bose, Lightspeed, David Clark)",
        "iPad with GPS (~$500–$700; Cellular capable, no cellular plan required)",
        "Aircraft rental insurance (~$600/year; Required for training flights)",
        "FAA Designated Pilot Examiner (DPE) practical exam fees (~$800–$1,200)",
        "FAA written exam fees (~$175)",
        "ForeFlight subscription (~$250/year; Flight planning and navigation)",
        "FAA 1st Class Medical clearance (~$150; Required for professional pilots)",
        "Applicable sales tax on course materials and equipment",
      ],
    },

    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Accelerated timeline — earn your CPL in 6–8 months",
        "Personalized training from experienced commercial instructors",
        "Scenario-based training prepares you for real-world operations",
        "Modern fleet with glass cockpit avionics and ADS-B in/out",
        "Mentorship to guide you into your next step: ME or CFI",
        "Safe, structured, and professional flight school environment",
      ],
    },

    cta: {
      imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-133.webp",
      imageAlt: "Speedway Flight Training commercial pilot student in flight",
      title: "Fast Track Your Career with a Commercial Pilot License",
      description:
        "Advance your aviation career with expert training at Speedway Flight Training. Enroll in our Commercial Pilot License program today and gain the skills needed for professional flight operations.",
      button: {
        name: "Apply Now",
        link: "/enroll",
      },
    },

    faqs: [
      {
        question: "How long does it take to earn my Commercial Pilot License?",
        answer:
          "With our accelerated program, students can complete training in <strong>6–8 months</strong>. A self-paced program is also available for those needing more flexibility.",
      },
      {
        question: "Can I finance my training?",
        answer:
          "Yes! We partner with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to offer flexible flight training financing options. Contact us to learn more.",
      },
      {
        question: "What kind of aircraft will I train on?",
        answer:
          "Students train on our <strong>modern Cessna 172 fleet</strong>, equipped with Garmin G5, Garmin 650Xi, and GFC 500 autopilot (in select aircraft).",
      },
      {
        question: "Will I be ready for my checkride after training?",
        answer:
          "Yes. We include <strong>mock oral exams, scenario-based flight training</strong>, and pre-checkride evaluations to make sure you're fully prepared.",
      },
      {
        question: "What happens after I get my CPL?",
        answer:
          "Most students continue with a <strong>Multi-Engine Rating</strong> and/or <strong>CFI Certification</strong> to build time and gain experience toward airline careers.",
      },
    ],
  },
};

export default commercialPilotData;
