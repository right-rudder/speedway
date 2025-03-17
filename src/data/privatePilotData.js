import { COMPANY_NAME } from "../consts";

const privatePilotData = {
  pageTitle: `Private Pilot License | ${COMPANY_NAME}`,
  pageDescription:
    "Start your aviation journey with Speedway Flight Training’s Private Pilot License (PPL) program. Train with expert instructors and gain the foundational skills needed to become a licensed pilot at Atlanta Speedway Airport.",
  pageKeywords:
    "private pilot license Georgia, flight school Hampton, learn to fly, PPL certification, aviation school Atlanta, beginner pilot training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/placeholder.jpg",
    imageAlt: "A Speedway Flight Training aircraft on the ramp at Atlanta Speedway Airport",
    headerH1: `Private Pilot <br>LICENSE</span>`,
    paragraph: `Begin your aviation journey with Speedway Flight Training’s Private Pilot License program. Learn to fly in a structured, student-focused environment with expert instructors and well-maintained aircraft.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/enroll-now",
        primary: false,
      },
      {
        name: "Program Guide",
        link: "/path",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Get Started With a",
    heading: "Private Pilot License",
    subHeading:
      "A Private Pilot License (PPL) is your first step into aviation, whether you want to fly for fun or pursue a professional career.",

    title: "Overview",
    description: `
      Earning your Private Pilot License (PPL) at Speedway Flight Training is the first milestone toward becoming a certified pilot. Our structured program equips students with the essential skills to operate an aircraft safely and confidently.
      <br/>
      <br/>
      Through a combination of **ground school instruction** and **hands-on flight training**, you’ll master aerodynamics, navigation, meteorology, airspace regulations, radio communication, and emergency procedures. You'll gain experience in real-world flight planning, takeoffs, landings, and cross-country operations.
      <br/>
      <br/>
      Speedway Flight Training’s location at **Atlanta Speedway Airport (KHMP)** provides an **ideal training environment**—a **non-towered airport** with minimal traffic, offering efficient training while still providing exposure to **Class B airspace (ATL)**. Our goal is to ensure that you graduate with not only the knowledge but also the confidence to take to the skies as a licensed private pilot.
    `,

    keyPoints: [
      "Expert Instruction from Certified Flight Instructors (CFIs)",
      "FAA-Certified Training Program",
      "Hands-On Flight Experience in Well-Maintained Cessna 172s",
      "Ideal Training Location: Non-Towered Airport with Access to Class B Airspace",
    ],

    cta: {
      imagePath: "/src/assets/placeholder.jpg",
      imageAlt: "Speedway Flight Training student preflighting a Cessna 172",
      title: "Start Your Aviation Journey",
      description:
        "Take the first step toward your dream of flying. Train with experienced instructors and earn your Private Pilot License in a professional yet welcoming environment.",
      button: {
        name: "Enroll Now",
        link: "/enroll-at-speedway",
      },
    },

    faqs: [
      {
        question: "How long does it take to get a Private Pilot License?",
        answer:
          "The time frame varies based on training frequency, but most students complete their PPL in 3-6 months.",
      },
      {
        question: "Do I need prior experience?",
        answer:
          "No prior flying experience is necessary! Our program is designed for beginners looking to start their aviation journey.",
      },
      {
        question: "What does the training include?",
        answer:
          "Our PPL program includes in-air flight training, ground school, and FAA exam preparation to help you obtain your Private Pilot Certificate.",
      },
      {
        question: "Where does flight training take place?",
        answer:
          "Training is conducted at **Atlanta Speedway Airport (KHMP)**, a non-towered airport offering an ideal learning environment with quick access to practice areas.",
      },
    ],
  },
};

export default privatePilotData;
