import { COMPANY_NAME } from "../consts";

const fastTrackStartingAtIR = {
  pageTitle: `Fast Track to the Flight Deck – Instrument Rating | ${COMPANY_NAME}`,
  pageDescription:
    "Speedway Flight Training’s Fast Track to the Flight Deck program allows pilots with a Private Pilot License (PPL) to efficiently complete their Instrument Rating, Commercial Pilot License, and Certified Flight Instructor (CFI) training.",
  pageKeywords:
    "accelerated instrument rating, fast track pilot training, professional pilot program, CPL training, aviation school Atlanta, Speedway Flight Training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/stock-adrien-brun-L87clzV761M-unsplash.webp",
    imageAlt: "Speedway Flight Training students in a simulator session",
    headerH1: `Fast Track to <br>the Flight Deck</span>`,
    paragraph: `For pilots who already have their Private Pilot License (PPL) and are looking to complete their training efficiently, Speedway’s all-inclusive program takes students from Instrument Rating (IR) through Commercial Pilot License (CPL) and Certified Flight Instructor (CFI)`,
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
    upperHeading: "Take the Next Step in Your Aviation Career",
    heading: "Fast Track to the Flight Deck – Starting at Instrument Rating",
    subHeading:
      "For pilots who already have their Private Pilot License (PPL), this structured program takes you from Instrument Rating (IR) through Commercial Pilot License (CPL) and Certified Flight Instructor (CFI).",

    title: "Overview",
    description: `
      Speedway Flight Training’s <strong>Fast Track to the Flight Deck</strong> program is designed for pilots who already hold a Private Pilot License and want to complete their training efficiently.

      <ul class="list-disc list-inside space-y-2 mt-4 mb-4">
        <li><strong>Accelerated Program:</strong> Complete in as little as <strong>10-15 months</strong></li>
        <li><strong>Estimated Cost:</strong> <strong>$74,725</strong> (Based on 218 total flight hours and ground school time with Instructor Pilot) – Additional expenses apply (see below)</li>
        <li><strong>Training Location:</strong> Speedway Flight Training facilities</li>
        <li><strong>Aircraft Used:</strong> Modern, well-maintained training fleet</li>
        <li>
          <strong>Average Flight Time Requirements:</strong>
          <ul class="list-[circle] list-inside ml-6 mt-1 space-y-1">
            <li><strong>Instrument Rating (IR)</strong> – 40 hours</li>
            <li><strong>Commercial Pilot License (CPL)</strong> – 160 hours</li>
            <li><strong>Certified Flight Instructor (CFI)</strong> – 18 hours</li>
          </ul>
        </li>
      </ul>

      This program provides <strong>one-on-one mentorship, advanced scenario-based training, and full checkride preparation</strong> to ensure you're ready for a successful aviation career.
    `,

    keyPoints: [
      "Structured Training from Instrument Rating to CFI",
      "215 Flight Hours with One-on-One Instructor Mentorship",
      "Scenario-Based Training and Real-World Flight Experience",
      "Modern, Well-Maintained Aircraft with IFR Capabilities",
      "Comprehensive Ground School & FAA Exam Preparation",
      "Full Checkride Preparation for Each Certification Level",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "218 flight hours of training",
        "One-on-one instructor mentorship",
        "Mock Oral Exams and Pre/Post Ground with Instructor Pilot",
        "Ground school & exam preparation",
        "Gleim Instrument Pilot Materials",
        "Gleim Commercial Pilot Materials",
        "Gleim Flight/Ground Instructor + FOI Materials",
        "Foggles (for instrument training)",
        "Fuel tester",
        "Advanced flight maneuvers and scenario-based training",
        "Pre-checkride preparation for each certification level",
        "Emphasis on leadership, safety, and real-world flight operations",
      ],
    },

    additionalCosts: {
      heading: "What’s Not Included (Additional Student Costs)?",
      subHeading:
        "To ensure transparency, students should budget for the following additional items:",
      items: [
        "Noise-canceling aviation headset (~$600–$1,200; Recommended brands: Bose, Lightspeed, David Clark)",
        "iPad with GPS (~$500–$700; Cellular capable, no cellular plan required)",
        "Aircraft rental insurance (~$600/year; Required for training flights)",
        "FAA Designated Pilot Examiner (DPE) practical exam fees (~$800–$1,200)",
        "FAA written exam fees (~$175)",
        "ForeFlight subscription (~$250/year; Flight planning and navigation)",
        "FAA 1st Class Medical clearance  (~$150  -  Required for those pursuing a professional pilot career)",
        "Applicable Sales Taxes",
      ],
    },

    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Fast-Track Program for Pilots Holding a PPL",
        "Comprehensive Training from Instrument Rating to CFI",
        "One-on-One Mentorship and Advanced Flight Training",
        "Real-World Scenario-Based Learning for Professional Readiness",
        "Modern Aircraft Fleet with IFR Capabilities",
        "Full Checkride Preparation for Every Certification Level",
      ],
    },

    cta: {
      imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-126.webp",
      imageAlt: "Speedway Flight Training student in a flight simulator",
      title: "Advance Your Career with Structured Training",
      description:
        "Take the next step in your aviation journey. Train with expert instructors and complete your Instrument Rating, Commercial Pilot License, and Certified Flight Instructor certification in as little as 10-15 months.",
      button: {
        name: "Apply Now",
        link: "/enroll",
      },
    },

    faqs: [
      {
        question: "How long does it take to complete the program?",
        answer:
          "Our accelerated program allows students to complete training in <strong>10-15 months</strong>. A self-paced option is also available for those needing more flexibility.",
      },
      {
        question: "Can I finance my training?",
        answer:
          "Yes! We partner with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to offer financing options. Contact us to learn more about making your flight training affordable.",
      },
      {
        question: "What kind of aircraft will I train on?",
        answer:
          "Students train on <strong>modern, well-maintained Cessna 172 aircraft</strong>, equipped for professional pilot training.",
      },
      {
        question: "Will I be ready for my checkride after training?",
        answer:
          "Yes! Our program includes <strong>comprehensive checkride preparation</strong> and <strong>scenario-based training</strong> to ensure you're fully prepared.",
      },
      {
        question: "What happens after I complete my CFI training?",
        answer:
          "Many graduates become flight instructors to build experience before transitioning into airline careers. Speedway also provides networking opportunities and career guidance.",
      },
    ],
  },
};

export default fastTrackStartingAtIR;
