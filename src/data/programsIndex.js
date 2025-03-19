import { COMPANY_NAME } from "../consts";

const programsIndex = {
  pageTitle: `Flight Training Programs | ${COMPANY_NAME}`,
  pageDescription:
    "Explore Speedway Flight Training’s comprehensive flight programs, from Private Pilot License to advanced ratings. Train with expert instructors and accelerate your path to an aviation career.",
  pageKeywords:
    "flight training programs, private pilot license, instrument rating, commercial pilot, multi-engine rating, certified flight instructor, aviation school Atlanta, pilot training Georgia",

  header: {
    stars: true,
    imagePath: "/src/assets/0717d82c-98cc-4117-8c86-a44a99f09820-color.webp",
    imageAlt: "Speedway Flight Training aircraft lineup at the airport",
    headerH1: `Flight Training <br>PROGRAMS</span>`,
    paragraph: `Speedway Flight Training offers structured flight programs designed for both aspiring and advancing pilots. Whether you're starting your journey or preparing for a professional aviation career, our expert instructors and well-maintained fleet provide the best environment for success.`,
    buttons: [
      {
        name: "Get Started",
        link: "/contact",
        primary: false,
      },
    ],
  },
};

export default programsIndex;
