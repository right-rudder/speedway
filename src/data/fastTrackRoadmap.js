import { COMPANY_NAME } from "../consts";

const fastTrackRoadmap = {
  upperHeading: "Roadmap",
  heading: "Fast Track to the Flight Deck – Your Path to an Airline Career",
  descriptions: [
    `Achieve your dream of becoming an airline pilot with ${COMPANY_NAME}. Our Fast Track to the Flight Deck program provides an efficient and structured path from zero experience to a professional aviation career.`
  ],
  steps: [
    {
      title: "Step 1: Earn a Private Pilot License (PPL)",
      link: "/programs/private-pilot-course",
      paragraphs: [
        "The journey begins with earning your Private Pilot License (PPL). This certification introduces you to aviation fundamentals, including aircraft operations, flight navigation, and air traffic communication.",
        "At Speedway Flight Training, our PPL course is designed to give you hands-on flight experience with expert one-on-one instruction. This is your first major milestone toward becoming a professional pilot."
      ],
      imagePath: "/src/assets/speedway-private-pilot-training.jpg",
      imageAlt: "Speedway Flight Training student after their first solo flight"
    },
    {
      title: "Step 2: Add an Instrument Rating (IR)",
      link: "/programs/instrument-rating",
      paragraphs: [
        "An Instrument Rating (IR) is your next step, allowing you to fly in various weather conditions and under Instrument Flight Rules (IFR). This is an essential qualification for any pilot pursuing a career in commercial aviation.",
        "Our IR program at Speedway focuses on precision, advanced navigation, and decision-making skills in IFR environments, preparing you for professional operations."
      ],
      imagePath: "/src/assets/speedway-instrument-training.jpg",
      imageAlt: "Speedway student practicing IFR flight techniques"
    },
    {
      title: "Step 3: Earn a Commercial Pilot License (CPL)",
      link: "/programs/commercial-pilot",
      paragraphs: [
        "With your PPL and IR completed, the next step is obtaining a Commercial Pilot License (CPL), which allows you to fly professionally and be compensated for your flights.",
        "At Speedway, our CPL training emphasizes advanced maneuvers, professionalism, and flight proficiency. This certification sets the foundation for commercial airline careers."
      ],
      imagePath: "/src/assets/speedway-commercial-pilot-training.jpg",
      imageAlt: "Speedway Flight Training student practicing commercial maneuvers"
    },
    {
      title: "Step 4: Earn a Flight Instructor Certificate (CFI)",
      link: "/programs/certified-flight-instructor",
      paragraphs: [
        "Becoming a Certified Flight Instructor (CFI) is a strategic step for building flight hours efficiently while earning income. This role strengthens your aviation knowledge and instructional skills.",
        "At Speedway, we offer a structured CFI program that prepares you to train the next generation of pilots while working toward your ultimate career goals."
      ],
      imagePath: "/src/assets/speedway-flight-instructor-training.jpg",
      imageAlt: "Speedway instructor and student in a pre-flight briefing"
    },
    {
      title: "Step 5: Add a Certified Flight Instructor - Instrument (CFII)",
      link: "/programs/certified-flight-instructor-instrument",
      paragraphs: [
        "Enhancing your credentials with a Certified Flight Instructor - Instrument (CFII) rating allows you to train students in instrument flight procedures, further increasing your flight hours and expertise.",
        "At Speedway, our CFII program refines your instructional techniques and prepares you to mentor pilots through IFR training."
      ],
      imagePath: "/src/assets/speedway-cfii-training.jpg",
      imageAlt: "Speedway instructor reviewing instrument navigation techniques"
    },
    {
      title: "Step 6: Build Flight Hours & Gain Experience",
      paragraphs: [
        "Once you have earned your CFI and CFII, the next step is accumulating flight hours to meet Airline Transport Pilot (ATP) eligibility. Airlines typically require 1,500 hours of total flight time.",
        "Many pilots gain experience by working as flight instructors, flying charter operations, or engaging in other commercial flying opportunities."
      ],
      imagePath: "/src/assets/speedway-building-flight-hours.jpg",
      imageAlt: "Speedway graduate logging flight hours as a CFI"
    },
    {
      title: "Step 7: Interview with Airlines & Begin ATP Training",
      paragraphs: [
        "When you reach 1,500 flight hours, you're eligible for the Airline Transport Pilot (ATP) certificate, the final requirement for becoming an airline pilot.",
        "Airline interviews assess your technical knowledge, decision-making skills, and readiness for commercial operations. Successful candidates receive conditional job offers and formal ATP training with their airline."
      ],
      imagePath: "/src/assets/speedway-airline-career-prep.jpg",
      imageAlt: "Speedway graduate at an airline interview session"
    },
    {
      title: "Step 8: Begin Your Airline Career",
      paragraphs: [
        "After meeting ATP requirements, you'll begin your career as a First Officer at a regional airline. This is your opportunity to gain real-world airline experience, preparing you for long-term success.",
        "With continuous training and experience, you can progress to Captain and eventually transition to major airlines, achieving your goal of flying for a commercial airline."
      ],
      imagePath: "/src/assets/speedway-first-officer-training.jpg",
      imageAlt: "First Officer preparing for a flight in an airline cockpit"
    }
  ],
  finalParagraph:
    "Ready to take the first step toward becoming an airline pilot? Enroll in Speedway Flight Training’s Fast Track to the Flight Deck program and accelerate your journey to the skies.",
  finalButton: {
    name: "Apply Now",
    link: "/apply",
    primary: true
  }
};

export default fastTrackRoadmap;
