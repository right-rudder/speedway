import { COMPANY_NAME } from "../consts";

const cfiiPilotData = {
  pageTitle: `Certified Flight Instructor – Instrument (CFII) | ${COMPANY_NAME}`,
  pageDescription:
    "Take your instructional skills to the next level with Speedway Flight Training’s Certified Flight Instructor – Instrument (CFII) program. Learn to teach instrument flight procedures and expand your career opportunities as an aviation educator.",
  pageKeywords:
    "certified flight instructor instrument, CFII training Georgia, IFR instructor course, CFII Atlanta, teach instrument flight, CFII program, instructor flight training Georgia",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-129-croped.webp",
    imageAlt: "Speedway Flight Training CFII student and instructor during IFR simulator training",
    headerH1: `Flight Instructor <br>INSTRUMENT (CFII)</span>`,
    paragraph: `Take your instructional skills to the next level with Speedway’s CFII program. Learn to teach instrument flight techniques and expand your professional opportunities in aviation education.`,
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
    upperHeading: "Advance Your Instructor Credentials with a",
    heading: "Certified Flight Instructor – Instrument (CFII) Rating",
    subHeading:
      "Speedway’s CFII program builds on your existing flight instructor experience, preparing you to teach instrument flight training and expand your aviation career opportunities.",

    title: "Overview",
    description: `
      Speedway Flight Training’s <strong>Certified Flight Instructor – Instrument (CFII)</strong> program is designed for current CFIs who want to expand their teaching capabilities to include instrument flight instruction.
      <br/><br/>
      🚀 <strong>Accelerated Program:</strong> Complete in as little as <strong>2–3 weeks</strong>.<br/>
      💰 <strong>Estimated Cost:</strong> <strong>$3,700</strong> (based on <strong>8 flight training hours</strong> and <strong>15 ground lesson hours</strong>; additional expenses apply).<br/>
      ✈️ <strong>Training Location:</strong> Speedway Flight Training facilities.<br/>
      🛩 <strong>Aircraft Used:</strong> Modern, well-maintained fleet equipped for <strong>IFR training</strong>.<br/>
      📜 <strong>Minimum Requirements:</strong> <strong>8 hours</strong> of instrument flight instructor training.<br/>
      <br/>
      This course focuses on <strong>advanced IFR instruction techniques, scenario-based training, and simulator practice</strong> to prepare you for teaching instrument-rated students and enhancing your professional credentials.
    `,

    keyPoints: [
      "Accelerated CFII program completed in as little as 2–3 weeks",
      "8 hours of instrument flight training and 15 hours of ground instruction",
      "One-on-one mentorship from experienced CFII instructors",
      "Scenario-based teaching methods for real-world preparation",
      "Ground school and FAA exam preparation included",
      "Comprehensive pre-checkride evaluation and preparation",
    ],

    // What's Included
    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "8 flight hours of instrument instructor training and 15 hours of ground lessons",
        "One-on-one instruction with experienced CFII mentors",
        "Ground school & exam preparation",
        "Gleim Flight/Ground Instructor + FOI Kit",
        "Advanced instrument instruction techniques and simulator training",
        "Scenario-based IFR teaching methodologies",
        "Pre-checkride preparation and evaluation",
      ],
    },

    // Additional Costs
    additionalCosts: {
      heading: "What’s Not Included (Additional Student Costs)?",
      items: [
        "Noise-canceling aviation headset (~$600 - $1,200; Recommended: Bose, Lightspeed, David Clark)",
        "iPad with GPS (~$500 - $700; Cellular capable, no cellular plan required)",
        "Aircraft rental insurance (~$600/year; Required for training flights)",
        "FAA Designated Pilot Examiner (DPE) practical exam fees (~$800 - $1,200)",
        "FAA written exam fees (~$175)",
        "ForeFlight subscription (~$250/year; Flight planning & in-flight navigation)",
        "FAA 1st Class Medical clearance (~$150; Required for professional pilots)",
      ],
    },

    // Benefits
    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Accelerated CFII training in as little as 2–3 weeks",
        "Mentorship from active, experienced CFII instructors",
        "Access to IFR-equipped aircraft and simulators",
        "Scenario-based instruction and advanced teaching techniques",
        "Safety-first training environment focused on professionalism",
        "Comprehensive checkride preparation for instrument instructor certification",
      ],
    },

    // CTA
    cta: {
      imagePath: "/src/assets/stock-koon-chakhatrakan-SA-ALYhGjj8-unsplash.webp",
      imageAlt: "Speedway CFII instructor preparing student for checkride",
      title: "Expand Your Career as an Instrument Instructor",
      description:
        "Train with Speedway Flight Training and earn your CFII in a focused, professional environment. Build your skills and prepare to guide future pilots through instrument training.",
      button: {
        name: "Apply Now",
        link: "/enroll",
      },
    },

    // FAQs
    faqs: [
      {
        question: "How long does it take to complete the CFII program?",
        answer:
          "With our accelerated training model, most students complete the CFII program in <strong>2–3 weeks</strong>, depending on their schedule and proficiency.",
      },
      {
        question: "What are the prerequisites for this program?",
        answer:
          "You must already hold a <strong>Commercial Pilot License with Instrument Rating</strong> and a <strong>Certified Flight Instructor (CFI)</strong> certificate before beginning CFII training.",
      },
      {
        question: "Is simulator training included?",
        answer:
          "Yes. The program integrates <strong>simulator-based IFR instruction</strong> alongside real-world flight training to prepare you for advanced instrument instruction.",
      },
      {
        question: "Can I teach IFR students after earning my CFII?",
        answer:
          "Absolutely. The CFII rating authorizes you to train students pursuing their <strong>Instrument Rating</strong> under Part 61 or Part 141 (if applicable).",
      },
      {
        question: "Do you offer financing options?",
        answer:
          "Yes! Speedway partners with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to provide flexible financing solutions for flight training students.",
      },
    ],
  },
};

export default cfiiPilotData;
