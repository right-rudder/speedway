import { COMPANY_NAME } from "../consts";

const spinEndorsementData = {
  pageTitle: `Spin Endorsement | ${COMPANY_NAME}`,
  pageDescription:
    "Complete your FAA spin endorsement at Speedway Flight Training. This one-day program helps future CFIs build confidence and meet regulatory stall/spin training requirements.",
  pageKeywords:
    "spin endorsement, CFI spin training, FAA spin endorsement, stall recovery training, spin maneuvers, flight instructor requirements",
  header: {
    stars: false,
    imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-96.webp",
    imageAlt: "Student and instructor performing spin training in certified aircraft",
    headerH1: `Spin </br>Endorsement`,
    paragraph: `Meet the FAA requirement for your flight instructor certificate and sharpen your stall/spin recovery skills. Speedway’s Spin Endorsement program offers a focused, one-day course with expert instruction and certified aircraft.`,
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
    upperHeading: "Complete Your",
    heading: "Spin Endorsement",
    subHeading:
      "Required for flight instructor applicants and beneficial for all pilots, this program builds spin recovery proficiency in a structured environment.",
    title: "Overview",
    description: `
      Gain confidence and meet regulatory requirements with Speedway Flight Training’s Spin Endorsement program. This essential course is required for future flight instructors and is an excellent way to sharpen stall/spin awareness and recovery skills in a controlled environment.
      <br/><br/>
      🛩 <strong>Accelerated Format:</strong> Complete in <strong>1 day</strong>.<br/>
      💰 <strong>Estimated Cost:</strong> <strong>$595</strong> (Includes 1.5 hours of flight instruction time & 1.5 hours of ground school).<br/>
      📍 <strong>Location:</strong> Speedway Flight Training at <strong>Atlanta Speedway Airport (KHMP)</strong>.<br/>
      ✈️ <strong>Aircraft:</strong> Certified for spin maneuvers with dual controls.<br/>
      📜 <strong>FAA Requirement:</strong> Endorsement required for CFIs under <strong>14 CFR §61.183(i)</strong>.<br/>
      <br/>
      This course includes <strong>briefing, in-flight instruction, and a logbook endorsement</strong> upon demonstrating proficiency.
    `,

    keyPoints: [
      "Earn FAA-required spin endorsement for CFI certification",
      "One-on-one instruction in spin-capable aircraft",
      "Hands-on stall, incipient spin, and spin recovery training",
      "Convenient single-day scheduling",
      "Safe, structured training environment with experienced CFIs",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "Up to 1.5 hours of dual instruction focused on stall recognition, incipient spins, and spin recovery",
        "Pre-flight briefing and post-flight debriefing",
        "One-on-one instruction with a qualified spin-endorsed instructor",
        "FAA-compliant spin endorsement upon successful demonstration of proficiency",
      ],
    },

    additionalCosts: {
      heading: "What’s Not Included (Additional Student Costs)?",
      items: [
        "Noise-canceling aviation headset (~$600 - $1,100  -  Recommended brands: Bose, Lightspeed, David Clark)",
        "iPad with GPS (~$500 - $700  -  Cellular capable, no cellular plan required)",
        "Aircraft rental insurance (~$600/year  -  Required for training flights)",
        "ForeFlight subscription (~$250/year  -  For flight planning and in-flight navigation)",
        "FAA 1st Class Medical clearance (~$150  -  Required for those pursuing a professional pilot career)",
      ],
    },

    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Meet CFI spin endorsement requirements",
        "Sharpen stall/spin awareness and recovery skills",
        "Train with highly experienced instructors in a safe, structured environment",
        "Convenient single-day scheduling option",
        "FAA endorsement provided upon successful completion",
      ],
    },

    cta: {
      imagePath: "/src/assets/stock-victor-zhuk-3MYtBMg8Ex4-unsplash.webp",
      imageAlt: "Speedway aircraft parked outside hangar at KHMP",
      title: "Ready to Earn Your Spin Endorsement?",
      description:
        "Speedway Flight Training makes it easy to complete your spin training and meet FAA CFI requirements. Schedule your one-day session and train with confidence.",
      button: {
        name: "Apply Now",
        link: "/enroll",
      },
    },

    faqs: [
      {
        question: "Is the Spin Endorsement required for all CFIs?",
        answer:
          "Yes. Under FAA regulation 14 CFR §61.183(i), all applicants for a flight instructor certificate must receive spin training and a logbook endorsement.",
      },
      {
        question: "Can I complete the Spin Endorsement in one day?",
        answer:
          "Most students complete the training in a single session, including ground briefing, in-flight instruction, and debrief.",
      },
      {
        question: "What aircraft is used for the spin training?",
        answer:
          "We use certified aircraft equipped for spin maneuvers and dual controls to ensure safety and compliance.",
      },
      {
        question: "Do I need this endorsement if I already have a CFI?",
        answer:
          "If you already hold a valid spin endorsement, you don’t need to repeat it unless required by your employer or for proficiency purposes.",
      },
    ],
  },
};

export default spinEndorsementData;
