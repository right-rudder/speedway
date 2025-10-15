// /src/data/programs/singleEngineAddOn.js

import {
  COMPANY_NAME,
  PROGRAM_KEYWORDS,
  LOCATION_KEYWORDS,
  PRIMARY_KEYWORDS,
} from "../consts";

const singleEngineAddOn = {
  pageTitle: `Single-Engine Add-On | Hampton GA Flight School | ${COMPANY_NAME}`,
  pageDescription:
    "Add single-engine privileges to your pilot certificate with Speedway Flight Training. Efficient 2–3 week program, one-on-one training, modern IFR aircraft, and checkride prep.",
  pageKeywords: `${PROGRAM_KEYWORDS.singleEngineAddOn}, ${LOCATION_KEYWORDS.primary}, single engine add on Hampton GA, add single engine rating Georgia, flight school KHMP, FAA single engine add-on, multi to single engine transition training`,

  header: {
    stars: true,
    imagePath:
      "/src/assets/atlanta-airport-Speedway-Flight-Training-31.webp",
    imageAlt: "CFI and student beside aircraft during checkride preparation",
    headerH1: `Single-Engine <br>Add-On</span>`,
    paragraph: `Add single-engine privileges to your pilot certificate with our efficient and accelerated program. Ideal for commercial and multi-engine pilots seeking to expand their certificate with minimal delay.`,
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
    upperHeading: "Expand Your Certificate With a",
    heading: "Single-Engine Add-On",
    subHeading:
      "Whether you’re transitioning from a multi-engine rating or seeking broader flying privileges, this focused program will prepare you quickly and confidently for your single-engine checkride.",

    title: "Overview",
    description: `
      Speedway Flight Training’s <strong>Single-Engine Add-On</strong> program is designed for pilots who already hold a multi-engine certificate and want to add single-engine privileges. This accelerated course provides focused training on single-engine aircraft operations, VFR and IFR procedures, and checkride maneuvers — with one-on-one instruction every step of the way.
      <br/><br/>
      <ul class="list-disc pl-6">
        <li><strong>Accelerated Program:</strong> Complete in <strong>2–3 weeks</strong></li>
        <li><strong>Estimated Cost:</strong> <strong>$2,800</strong> (Based on 7 flight hours and 6 hours of ground instruction – additional expenses apply)</li>
        <li><strong>Training Location:</strong> Speedway Flight Training at <strong>Atlanta Speedway Airport (KHMP)</strong></li>
        <li><strong>Aircraft Used:</strong> Modern, well-maintained fleet equipped for IFR training</li>
        <li><strong>Minimum Requirements:</strong> 7 flight hours of single-engine training</li>
      </ul>
      <br/>
      If you're looking for an efficient way to add this critical rating to your certificate, our program is structured to move you quickly from training to checkride — without compromising quality or safety.
    `,

    keyPoints: [
      "Accelerated Timeline: Finish in as little as 2–3 weeks",
      "Focused Training on Single-Engine Aircraft",
      "Experienced One-on-One Instruction",
      "IFR-Capable Aircraft with Modern Avionics",
      "Efficient Checkride Preparation",
      "Flexible Scheduling Options",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "Up to 7 flight hours in single-engine aircraft",
        "6 hours of ground instruction with a certified flight instructor",
        "One-on-one mentorship and scenario-based instruction",
        "Pre-checkride training and mock oral prep",
        "Safety-focused curriculum tailored to your experience level",
      ],
    },

    additionalCosts: {
      heading: "What’s Not Included (Additional Student Costs)?",
      subHeading:
        "To ensure full transparency, please budget for the following items in addition to the base training cost:",
      items: [
        "Noise-canceling aviation headset (~$600 - $1,200 – Bose, Lightspeed, David Clark recommended)",
        "iPad with GPS (~$500 - $700 – cellular version, no data plan needed)",
        "Aircraft rental insurance (~$600/year – required for training flights)",
        "FAA Designated Pilot Examiner (DPE) practical exam fees (~$800–$1,200)",
        "FAA written exam fees (~$175)",
        "ForeFlight subscription (~$250/year – for charts, EFB, and flight planning)",
        "FAA 1st Class Medical clearance (~$150 – for career-track pilots)",
      ],
    },

    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Accelerated Timeline: Add your rating in 2–3 weeks",
        "Modern IFR-Capable Fleet: Garmin-equipped single-engine aircraft",
        "Expert Instructors: One-on-one support from experienced CFIs",
        "Structured Training: Focused syllabus with checkride readiness",
        "Convenient Location: Train at KHMP, near Atlanta’s airspace",
        "Proven Track Record: High pass rates and student satisfaction",
      ],
    },

    cta: {
      imagePath:
        "/src/assets/atlanta-airport-Speedway-Flight-Training-69.webp",
      imageAlt: "IFR-equipped Cessna 172 parked on ramp with skyline in background",
      title: "Add a Single-Engine Rating with Confidence",
      description:
        "Train efficiently, fly confidently, and expand your flying privileges with Speedway’s single-engine add-on program. Let’s get your checkride scheduled.",
      button: {
        name: "Apply Now",
        link: "/enroll",
      },
    },

    faqs: [
      {
        question: "Who is eligible for this program?",
        answer:
          "This program is intended for pilots who already hold a multi-engine rating on a commercial or ATP certificate and want to add single-engine privileges. Speak with our admissions team to confirm your eligibility.",
      },
      {
        question: "How many hours of flight training are included?",
        answer:
          "The program includes up to <strong>7 flight hours</strong> and 6 hours of ground instruction. Additional hours can be scheduled if needed based on your proficiency and checkride readiness.",
      },
      {
        question: "Do I need a written exam?",
        answer:
          "No additional written exam is required if you're adding a single-engine rating to an existing commercial or ATP certificate.",
      },
      {
        question: "What aircraft will I fly during training?",
        answer:
          "We use modern, IFR-capable Cessna 172s equipped with Garmin avionics including G5, 650XI, and GFC 500 autopilot (where applicable).",
      },
      {
        question: "Can I finance this program?",
        answer:
          "Yes — we partner with <a href='https://stratus.finance' target='_blank' class='text-primary-600 hover:underline'>Stratus Financial</a> for affordable flight training financing. You may also bundle this rating into a broader career-track package.",
      },
    ],
  },
};

export default singleEngineAddOn;
