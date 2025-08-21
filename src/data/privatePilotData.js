import {
  COMPANY_NAME,
  PROGRAM_KEYWORDS,
  LOCATION_KEYWORDS,
  PRIMARY_KEYWORDS,
} from "../consts";

const privatePilotData = {
  pageTitle: `Private Pilot License in 8 Weeks | Hampton GA Flight School | ${COMPANY_NAME}`,
  pageDescription:
    "Get your Private Pilot License (PPL) in just 8 weeks at Atlanta Speedway Airport! Our accelerated program includes one-on-one training, modern Cessna aircraft, and 100% checkride success rate. Financing options available.",
  pageKeywords: `${PROGRAM_KEYWORDS.privatePilot}, ${LOCATION_KEYWORDS.primary}, accelerated PPL training Hampton, 8-week pilot license Georgia, private pilot checkride preparation, Cessna 172 training Hampton, flight school financing options, FAA private pilot requirements, best pilot training Atlanta area, learn to fly KHMP airport, introductory flight lessons Georgia`,

  header: {
    stars: true,
    imagePath:
      "/src/assets/atlanta-airport-Speedway-Flight-Training-132-croped.webp",
    imageAlt:
      "Speedway Flight Training aircraft on the runway at Atlanta Speedway Airport",
    headerH1: `Private Pilot <br>LICENSE</span>`,
    paragraph: `The foundation of your aviation journey. Train with expert instructors, gain real-world flight experience, and complete your Private Pilot License in as little as 8 weeks with Speedway Flight Training.`,
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

  details: {
    upperHeading: "Get Started With a",
    heading: "Private Pilot License",
    subHeading:
      "Your journey to becoming a pilot starts here. Whether you're flying recreationally or pursuing a career in aviation, this program provides the essential skills and knowledge to succeed.",

    title: "Overview",
    description: `
      Speedway Flight Training’s <strong>Private Pilot License (PPL) program</strong> is the foundation of your aviation journey. This program provides you with the essential skills and knowledge to become a certified Private Pilot, while equipping you with high-quality training materials and tools to enhance your learning experience.
      <br/><br/>
      <ul class="list-disc pl-6">
        <li><strong>Accelerated Program:</strong> Complete in as little as <strong>8 weeks</strong></li>
        <li><strong>Flexible Option:</strong> Train at your own pace</li>
        <li><strong>Estimated Cost:</strong> <strong>$17,175</strong> (Based on 50 flight training hours and 18.5 ground lesson hours – additional expenses apply)</li>
        <li><strong>Aircraft Used:</strong> Modern, well-maintained fleet</li>
        <li><strong>Training Location:</strong> Speedway Flight Training facilities at <strong>Atlanta Speedway Airport (KHMP)</strong></li>
        <li><strong>FAA Minimum Requirements:</strong> 40 flight hours (students typically require 50+ hours)</li>
      </ul>
      <br/>
      If you're looking to earn your wings in a structured, fast-paced, and safety-driven environment, this is your launchpad. Our instructors are passionate about aviation and fully committed to your success, on the checkride and beyond.
    `,

    keyPoints: [
      "Accelerated Training: Complete in as little as 8 weeks",
      "Flexible Self-Paced Option Available",
      "FAA-Approved Training Curriculum",
      "One-on-One Instruction from Expert CFIs",
      "Hands-On Experience in Modern, Well-Maintained Aircraft",
      "Comprehensive Checkride Preparation",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "50 flight hours of training (FAA minimum: 40 hours)",
        "One-on-one instructor training with experienced flight instructors",
        "Mock Oral Exams and Pre/Post Ground with Instructor Pilot",
        "Ground school & exam preparation (covers FAA regulations, navigation, and flight planning)",
        "Gleim Deluxe Private Pilot Kit",
        "Foggles (for instrument training practice)",
        "Fuel tester",
        "Pre-checkride preparation (maneuver refinement and test readiness)",
        "Safety-focused training environment that aligns with our core value of prioritizing student well-being",
      ],
    },

    additionalCosts: {
      heading: "What’s Not Included (Additional Student Costs)?",
      items: [
        "Noise-canceling aviation headset (~$600 - $1,200 – Recommended brands: Bose, Lightspeed, David Clark)",
        "iPad with GPS (~$500 - $700 – Cellular capable, no cellular plan required)",
        "Aircraft rental insurance (~$600/year – Required for training flights)",
        "FAA Designated Pilot Examiner (DPE) practical exam fees (~$800–$1,200)",
        "FAA written exam fees (~$175)",
        "ForeFlight subscription (~$250/year – For flight planning and in-flight navigation)",
        "FAA 1st Class Medical clearance (~$150 – Required for those pursuing a professional pilot career)",
        "Applicable Sales Taxes",
      ],
    },

    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Accelerated Training: Get your Private Pilot License in just 8 weeks",
        "Expert Instructors: Personalized, one-on-one training with highly qualified CFIs",
        "Structured Learning Path: Comprehensive ground school + in-flight experience",
        "State-of-the-Art Training Fleet: Learn on modern, well-maintained aircraft",
        "Career Readiness: Build a strong foundation for advanced ratings & commercial aviation",
        "Commitment to Safety & Integrity: Your training experience is backed by Speedway’s core values",
      ],
    },

    cta: {
      imagePath:
        "/src/assets/atlanta-airport-Speedway-Flight-Training-130.webp",
      imageAlt: "Speedway Flight Training student preflighting a Cessna 172",
      title: "Fast Track Your Aviation Journey",
      description:
        "Take the first step toward your dream of flying. Train with experienced instructors and earn your Private Pilot License in a structured, professional, and safety-focused environment.",
      button: {
        name: "Apply Now",
        link: "/enroll",
      },
    },

    faqs: [
      {
        question: "How long does it take to earn my Private Pilot License?",
        answer:
          "With our accelerated program, students can complete training in <strong>8 weeks</strong>. A self-paced program is also available for those needing more scheduling flexibility.",
      },
      {
        question: "Can I finance my training?",
        answer:
          "Yes! We partner with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to offer financing options. Contact us to learn more about making your flight training affordable.",
      },
      {
        question: "What kind of aircraft will I train on?",
        answer:
          "Students train on <strong>modern, well-maintained aircraft</strong> suitable for both VFR and IFR flight training.",
      },
      {
        question: "Will I be ready for my checkride after training?",
        answer:
          "Absolutely! Our program includes <strong>checkride preparation and simulated practical exams</strong> to ensure you're fully prepared.",
      },
      {
        question: "What happens after I get my PPL?",
        answer:
          "Many students continue their training for an <strong>Instrument Rating (IR), Commercial Pilot License (CPL), or Certified Flight Instructor (CFI) rating</strong>.",
      },
    ],
  },
};

export default privatePilotData;
