import { COMPANY_NAME } from "../consts";

export const scholarshipPage = {
  pageTitle: `Speedway Scholarship Fund | ${COMPANY_NAME}`,
  pageDescription:
    "The Speedway Scholarship Fund supports aspiring pilots with financial need, helping them pursue flight training and launch their aviation careers. Join us in expanding access to aviation through scholarships and community support.",
  pageKeywords:
    "pilot scholarship, aviation scholarship, flight training financial aid, become a pilot, Speedway Scholarship Fund, aviation school Atlanta, Speedway Flight Training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-120-croped.webp",
    imageAlt: "Speedway Flight Training students and instructors preparing for flights",
    headerH1: `Speedway Scholarship Fund`,
    paragraph: `The Speedway Scholarship Fund was created to make flight training more accessible individuals who need financial assistance. Whether you're applying or looking to donate, your involvement helps change lives and elevate futures in aviation.`,
    buttons: [
      {
        name: "The Scholarship",
        link: "https://speedwayscholarship.com",
        primary: false,
      },
      {
        name: "Donate Now",
        link: "https://speedwayscholarship.com/donate/",
        primary: false,
      },
    ],
  },
};

export const scholarship = {
  upperHeading: "Scholarship",
  heading: "Speedway Scholarship Fund – Empowering the Next Generation of Pilots",
  descriptions: [
    `At ${COMPANY_NAME}, we believe that financial limitations should never stand in the way of achieving your dream of flight. The Speedway Scholarship Fund was established to support passionate, motivated individuals pursuing a career in aviation, providing financial assistance for training and certification costs.`
  ],
  steps: [
    {
      title: "Who Can Apply?",
      link: "https://speedwayscholarship.com/#requirements",
      paragraphs: [
        "The Speedway Scholarship Fund is open to aspiring pilots who demonstrate a strong passion for aviation, academic promise, and financial need.",
        "Applicants must be at least 17 years old, eligible to study and train in the United States, and committed to completing a full training program at Speedway Flight Training."
      ],
      imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-132.webp",
      imageAlt: "Speedway Flight Training student after their first solo flight"
    },
    {
      title: "What Does the Scholarship Cover?",
      link: "https://speedwayscholarship.com/#program",
      paragraphs: [
        "Scholarship awards may cover partial or full tuition for key certification programs, including the Private Pilot License (PPL), Instrument Rating, Commercial Pilot License (CPL), and Flight Instructor certifications (CFI/CFII).",
        "Award amounts vary based on available funding and individual applicant qualifications. In some cases, the scholarship may also cover materials, checkride fees, or other training-related costs."
      ],
      imagePath: "/src/assets/stock-kristina-delp-xx7EiLeralM-unsplash.webp",
      imageAlt: "Speedway student practicing IFR flight techniques"
    },
    {
      title: "How to Apply",
      link: "https://speedwayscholarship.com/#program",
      paragraphs: [
        "To apply, complete our online scholarship application form and submit a personal statement outlining your aviation goals, background, and financial need. You’ll also need to provide two letters of recommendation and academic transcripts (if available).",
        "Applications are reviewed on a rolling basis. Selected candidates may be invited for an interview or discovery flight as part of the final selection process."
      ],
      imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-71.webp",
      imageAlt: "Speedway Flight Training student practicing commercial maneuvers"
    }
  ],
  finalParagraph:
    "The Speedway Scholarship Fund is more than just financial aid — it's a commitment to your future in aviation. Whether you're just starting or ready to take the next step, we’re here to help make your dreams of flight take off.",
  finalButton: {
    name: "Apply for the Scholarship",
    link: "https://speedwayscholarship.com/apply/",
    primary: true
  }
};

