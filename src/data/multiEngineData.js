import {
  COMPANY_NAME,
  PROGRAM_KEYWORDS,
  LOCATION_KEYWORDS,
  PRIMARY_KEYWORDS,
} from "../consts";

const multiEngineData = {
  pageTitle: `Multi-Engine Add-On Package | Twin Engine Training | ${COMPANY_NAME}`,
  pageDescription:
    "Enhance your skills and expand your career opportunities with Speedway’s Multi-Engine Add-On Package. Accelerated one-week training in the Tecnam P2006T, designed for airline and corporate pilot preparation.",
  pageKeywords: `${PROGRAM_KEYWORDS.multiEngine}, ${LOCATION_KEYWORDS.primary}, multi-engine add-on, twin engine training Georgia, Tecnam P2006T training, accelerated multi-engine course, airline pilot preparation, corporate pilot training, multi-engine checkride prep`,

  // Top Header
  header: {
    stars: false,
    imagePath:
      "/src/assets/fleet-N605VA_Tecnam P2006T MKII-back_atlanta-airport_Speedway_Flight-School_Pilot-training.png",
    imageAlt: "Multi-engine aircraft at Speedway Flight Training",
    headerH1: `Multi-Engine <br>ADD-ON`,
    paragraph: `Enhance your skills and expand your career opportunities with Speedway’s Multi-Engine Add-On program. This accelerated course prepares pilots for airline and corporate flight operations with advanced multi-engine training.`,
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
    upperHeading: "Enhance Your Skills With the",
    heading: "Multi-Engine Add-On Package",
    subHeading:
      "Advanced multi-engine training designed to prepare pilots for professional airline and corporate operations.",

    title: "Program Overview",
    description: `
      Speedway’s <strong>Multi-Engine Add-On Package</strong> is designed for pilots looking to <strong>expand their qualifications and career opportunities</strong> through focused, professional-level training.
      <br/><br/>
      🚀 <strong>Accelerated Program:</strong> Designed to be completed in <strong>1 week</strong><br/>
      ✈️ <strong>Training Location:</strong> Speedway Flight Training facilities<br/>
      💰 <strong>Cost:</strong> <strong>$6,000</strong> (includes up to <strong>10 flight instruction hours</strong>; additional expenses apply)<br/>
      🛩 <strong>Aircraft Used:</strong> <strong>Tecnam P2006T</strong> with <strong>G1000 avionics suite</strong><br/>
      <br/>
      This course emphasizes <strong>advanced multi-engine maneuvers</strong>, <strong>emergency procedures</strong>, and <strong>checkride readiness</strong> with one-on-one instruction from experienced multi-engine instructors.
    `,

    keyPoints: [
      "Accelerated One-Week Multi-Engine Add-On Program",
      "Up to 10 Flight Hours in a Tecnam P2006T (G1000)",
      "One-on-One Instruction with Experienced ME Instructors",
      "Advanced Multi-Engine Maneuvers & Emergency Procedures",
      "Focused Pre-Checkride Preparation",
      "Designed for Airline & Corporate Pilot Career Paths",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "Up to 10 flight hours of multi-engine training",
        "One-on-one instruction with experienced multi-engine instructors",
        "Ground school & exam preparation",
        "Advanced multi-engine flight maneuvers and emergency procedures",
        "Pre-checkride preparation and evaluation",
      ],
    },

    additionalCosts: {
      heading: "What’s Not Included (Additional Student Costs)?",
      items: [
        "Noise-canceling aviation headset (~$600 - $1,100; Recommended: Bose, Lightspeed, David Clark)",
        "iPad with GPS (~$500 - $700; Cellular capable, no cellular plan required)",
        "Aircraft rental insurance (~$600/year; Required for training flights)",
        "FAA Designated Pilot Examiner (DPE) practical exam fees (~$800 - $1,200)",
        "FAA written exam fees (~$175)",
        "ForeFlight subscription (~$250/year; Flight planning & in-flight navigation)",
        "FAA 1st Class Medical clearance (~$150; Required for professional pilot career paths)",
      ],
    },

    benefits: {
      heading: "Why Choose Speedway’s Multi-Engine Add-On?",
      items: [
        "Complete Your Multi-Engine Add-On in Just One Week",
        "Train in a Modern Tecnam P2006T with G1000 Avionics",
        "Professional-Level Instruction Focused on Real-World Operations",
        "Ideal Preparation for Airline and Corporate Flying",
        "Focused Checkride Preparation with Experienced Instructors",
        "Train in a Supportive, Career-Oriented Aviation Environment",
      ],
    },

    cta: {
      imagePath: "/src/assets/stock-david-b-o27uCBOPbG0-unsplash.webp",
      imageAlt: "Multi-engine cockpit view at Speedway Flight Training",
      title: "Fast Track to the Flight Deck",
      description:
        "Apply today and take the next step toward your professional aviation career. Our team is ready to help you secure your spot and succeed in multi-engine operations.",
      button: {
        name: "Apply Now",
        link: "/enroll",
      },
    },

    faqs: [
      {
        question: "How long does the Multi-Engine Add-On take?",
        answer:
          "This program is designed to be completed in <strong>approximately one week</strong>, depending on scheduling and weather conditions.",
      },
      {
        question: "How much does the Multi-Engine Add-On cost?",
        answer:
          "The total cost is <strong>$6,000</strong>, which includes up to <strong>10 flight instruction hours</strong>. Additional student expenses apply.",
      },
      {
        question: "What aircraft will I fly during training?",
        answer:
          "Training is conducted in the <strong>Tecnam P2006T</strong>, equipped with a <strong>Garmin G1000 avionics suite</strong>.",
      },
      {
        question: "Is this program suitable for airline or corporate pilots?",
        answer:
          "Yes. This add-on is specifically designed to prepare pilots for <strong>airline and corporate flight operations</strong>.",
      },
      {
        question: "How do I get started?",
        answer:
          "You can <a href='/enroll' class='hover:underline text-primary-600'>apply online</a> or contact us at <strong>info@SpeedwayFT.com</strong> to secure your spot.",
      },
    ],
  },
};

export default multiEngineData;
