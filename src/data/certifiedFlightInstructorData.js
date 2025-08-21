import {
  COMPANY_NAME,
  PROGRAM_KEYWORDS,
  LOCATION_KEYWORDS,
  PRIMARY_KEYWORDS,
} from "../consts";

const certifiedFlightInstructorData = {
  pageTitle: `Become a Certified Flight Instructor (CFI) | Build Flight Hours | ${COMPANY_NAME}`,
  pageDescription:
    "Turn your passion for aviation into a teaching career. Complete your CFI training in 4–6 weeks with personalized instruction, mentorship, and checkride prep. Financing available.",
  pageKeywords: `${PROGRAM_KEYWORDS.flightInstructor}, ${LOCATION_KEYWORDS.primary}, flight instructor jobs Georgia, build flight hours teaching, CFI certification Atlanta, flight instructor career path, FOI exam preparation, teaching methodology aviation, CFI checkride preparation, how to become a flight instructor, build hours for airlines, aviation instructor training, 4-week CFI program`,

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/cessna-172-in-flight-over-hampton-ga-croped.webp",
    imageAlt: "Speedway Flight Training instructor guiding a student pilot",
    headerH1: `Certified Flight <br>INSTRUCTOR (CFI)</span>`,
    paragraph: `Turn your passion for aviation into a career with Speedway’s Certified Flight Instructor program. This course is designed to refine your flying skills, enhance your instructional techniques, and prepare you to teach the next generation of pilots`,
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
    upperHeading: "Train to Become a",
    heading: "Certified Flight Instructor",
    subHeading:
      "Accelerate your aviation career by becoming a flight instructor. Gain teaching experience and help future pilots reach their goals.",

    title: "Overview",
    description: `
      Becoming a Certified Flight Instructor (CFI) is the gateway to building time, refining your skills, and launching a career in aviation. Whether you plan to teach full-time or just need to build hours toward your next rating, Speedway Flight Training offers a flexible, structured path to success.
      <ul class="list-disc list-inside space-y-2 mt-4 mb-4">
        <li><strong>Accelerated Program:</strong> Complete in as little as <strong>4–6 weeks</strong>.</li>
        <li><strong>Flexible Option:</strong> Train at your own pace.</li>
        <li><strong>Estimated Cost:</strong> <strong>$7,100</strong> (Based on 18 flight lesson hours & 25 ground lesson hours) – Additional expenses apply (see below)</li>
        <li><strong>Training Location:</strong> Speedway Flight Training facilities</li>
        <li><strong>Aircraft Used:</strong> Modern, well-maintained fleet</li>
        <li><strong>FAA Minimum Requirements:</strong> 15 hours of flight training and successful completion of the Fundamentals of Instruction (FOI) and Certified Flight Instructor (CFI) exams</li>
      </ul>

      All CFI applicants must hold a Commercial Pilot Certificate and Instrument Rating. Our program prepares you not only for the practical test, but for success in the real world of flight instruction.
    `,

    keyPoints: [
      "Master instructional techniques & advanced maneuvers",
      "25 hours of ground school with Instructor Pilot",
      "Mock orals and pre/post ground included",
      "Gleim FOI + Instructor kit included",
      "Scenario-based instruction methodology",
      "Emphasis on safety, leadership & instructional quality",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "18 flight hours of training (FAA minimum: 15 hours)",
        "25 ground school hours with Instructor Pilot",
        "Mock Oral Exams and Pre/Post Ground with Instructor Pilot",
        "Gleim Flight/Ground Instructor + FOI Kit",
        "Advanced maneuvers and instructional proficiency training",
        "One-on-one instructor mentorship",
        "Ground school & exam preparation (covers instructional techniques, FAA regulations, and teaching methodologies)",
        "Scenario-based teaching techniques",
        "Pre-checkride preparation and evaluation",
        "Emphasis on safety, instructional quality, and leadership in aviation training",
      ],
    },

    additionalCosts: {
      heading: "What’s Not Included (Additional Student Costs)?",
      subHeading:
        "To ensure transparency, students should budget for the following additional items:",
      items: [
        "Noise-canceling aviation headset (~$600–$1,200 — Recommended: Bose, Lightspeed, David Clark)",
        "iPad with GPS (~$500–$700 — Cellular capable, no plan required)",
        "Aircraft rental insurance (~$600/year — Required for training flights)",
        "FAA Designated Pilot Examiner (DPE) practical exam fees (~$1,000–$1,500)",
        "FAA written exam fees (~$175)",
        "ForeFlight subscription (~$250/year — Flight planning & in-flight navigation)",
        "FAA 1st Class Medical (~$150 — Required for pro pilot track)",
        "Applicable sales taxes",
      ],
    },

    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Accelerated or flexible training options",
        "One-on-one mentorship with experienced instructors",
        "Includes 18 hours of flight and 25 hours of ground instruction",
        "Scenario-based learning and real-world teaching prep",
        "Modern aircraft fleet and immersive learning environment",
        "Pathway to employment and hour-building opportunities",
      ],
    },

    cta: {
      imagePath: "/src/assets/speedway-flight-training-aircraft-maintenance-check.webp",
      imageAlt: "Speedway Flight Training instructor preparing a student for flight",
      title: "Fast Track to the Flight Deck – Apply Today!",
      description:
        "Get started on your aviation career with Speedway Flight Training. Our CFI program is designed to prepare you to instruct with confidence. Reach out to our team and secure your spot today!",
      button: {
        name: "Apply Now",
        link: "/enroll",
      },
    },

    faqs: [
      {
        question: "How long does it take to complete CFI training?",
        answer:
          "Most students finish in <strong>4–6 weeks</strong> with our accelerated program. A flexible, self-paced option is also available.",
      },
      {
        question: "Can I finance my CFI program?",
        answer:
          "Yes. Financing is available through <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a>. Contact us to explore affordable monthly payments.",
      },
      {
        question: "What aircraft will I train on?",
        answer:
          "You'll train in our <strong>modern, well-maintained fleet</strong> of Cessna 172 aircraft.",
      },
      {
        question: "Will this prepare me for my CFI checkride?",
        answer:
          "Absolutely. The program includes mock orals, checkride prep flights, and one-on-one coaching to make sure you're ready.",
      },
      {
        question: "What happens after I earn my CFI certificate?",
        answer:
          "Many graduates begin instructing to build hours and move toward commercial and airline opportunities. Ask about job placement support.",
      },
    ],
  },
};

export default certifiedFlightInstructorData;
