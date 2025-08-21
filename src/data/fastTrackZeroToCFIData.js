import { COMPANY_NAME } from "../consts";

const fastTrackZeroToCFIData = {
  pageTitle: `Fast Track to the Flight Deck | ${COMPANY_NAME}`,
  pageDescription:
    "Speedway Flight Training’s Fast Track to the Flight Deck program takes students from zero experience to Certified Flight Instructor (CFI) in as little as 12-18 months. Train with expert instructors, modern aircraft, and a structured curriculum designed for career-focused pilots.",
  pageKeywords:
    "accelerated flight training, zero to cfi, professional pilot program, fast track pilot training, airline pilot career, aviation school Atlanta, Speedway Flight Training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-120-croped.webp",
    imageAlt: "Speedway Flight Training students and instructors preparing for flights",
    headerH1: `Fast Track to <br>the Flight Deck</span>`,
    paragraph: `An all-inclusive, structured program designed to take you from zero experience to a Certified Flight Instructor (CFI). Build flight hours, gain real-world experience, and launch your professional aviation career.`,
    buttons: [
      {
        name: "Apply Now",
        link: "/enroll",
        primary: false,
      },
      {
        name: "Roadmap",
        link: "#info",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Accelerate Your Aviation Career",
    heading: "Fast Track to the Flight Deck",
    subHeading:
      "Designed for aspiring pilots looking for an efficient and structured path to a professional aviation career, Speedway’s all-inclusive program takes students from zero flight hours to Certified Flight Instructor (CFI)",

    title: "Overview",
    description: `
      Speedway Flight Training’s <strong>Fast Track to the Flight Deck</strong> program is built for students who want to efficiently transition from zero flight hours to CFI certification. This immersive training experience prioritizes safety, professionalism, and structured progress.

      <ul class="list-disc list-inside space-y-2 mt-4 mb-4">
        <li><strong>Accelerated Program:</strong> Complete in as little as <strong>12–18 months</strong></li>
        <li><strong>Estimated Cost:</strong> <strong>$91,900</strong> (Based on 268 total flight hours and ground school time with Instructor Pilot) – Additional expenses apply (see below)</li>
        <li><strong>Training Location:</strong> Speedway Flight Training facilities</li>
        <li><strong>Aircraft Used:</strong> Modern, well-maintained training fleet</li>
        <li>
          <strong>Average Flight Time Requirements:</strong>
          <ul class="list-[circle] list-inside ml-6 mt-1 space-y-1">
            <li><strong>Private Pilot License (PPL)</strong> – 50 hours</li>
            <li><strong>Instrument Rating (IR)</strong> – 40 hours</li>
            <li><strong>Commercial Pilot License (CPL)</strong> – 160 hours</li>
            <li><strong>Certified Flight Instructor (CFI)</strong> – 18 hours</li>
          </ul>
        </li>
      </ul>

      This program offers <strong>structured ground school, real-world training scenarios, mock exams, and one-on-one mentorship</strong> to prepare students for a successful and professional future in aviation.
    `,

    keyPoints: [
      "Complete Training from Zero to CFI in 12–18 Months",
      "Includes PPL, Instrument, CPL, and CFI Ratings",
      "268 Flight Hours with One-on-One Instructor Mentorship",
      "Mock Oral Exams and Pre/Post Ground with Instructor Pilot",
      "Structured Ground School & FAA Exam Preparation",
      "Real-World Flight Training and Scenario-Based Instruction",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "268 flight hours of training",
        "One-on-one instructor mentorship",
        "Mock Oral Exams and Pre/Post Ground with Instructor Pilot",
        "Ground school & exam preparation",
        "Gleim Deluxe Private Pilot Kit",
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
        "Accelerated Path from Zero to CFI Certification",
        "Personalized One-on-One Mentorship",
        "Structured, FAA-Aligned Curriculum",
        "Scenario-Based Instruction for Real-World Readiness",
        "Highly Maintained Fleet of Modern Aircraft",
        "Culture of Safety, Integrity, and Professionalism",
      ],
    },

    // Preserved original CTA
    cta: {
      imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-128.webp",
      imageAlt: "Speedway Flight Training students in a classroom session",
      title: "Launch Your Aviation Career with Speedway",
      description:
        "Train with expert instructors, gain hands-on experience, and complete your flight training in as little as 12-18 months. Start your journey toward a professional aviation career today!",
      button: {
        name: "Apply Now",
        link: "/enroll",
      },
    },

    faqs: [
      {
        question: "How long does it take to complete the Fast Track to the Flight Deck program?",
        answer:
          "Our accelerated program allows students to complete training in <strong>12–18 months</strong>. A self-paced option is also available for those needing more flexibility.",
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
          "Yes! Our program includes <strong>comprehensive checkride preparation</strong> and <strong>scenario-based flight training</strong> to ensure you're fully prepared.",
      },
      {
        question: "What happens after I complete my CFI training?",
        answer:
          "Many graduates become flight instructors to build experience before transitioning into airline careers. Speedway also provides networking opportunities and guidance for career progression.",
      },
    ],
  },
};

export default fastTrackZeroToCFIData;
