// CHANGE Default title
export const SITE_TITLE =
  "Speedway Flight Training | Atlanta Hampton Flight School";

// CHANGE default meta description -> should only be used in homepage technically, but is there for a fallback in case a page is missed
export const SITE_DESCRIPTION =
  "Speedway Flight Training provides professional, flexible, and accelerated Part 61 flight training at Atlanta Speedway Airport in Hampton, Georgia. Our Part 141 application has been submitted to the FAA as we continue to grow. Based in Henry County, we proudly serve the greater Atlanta area, including McDonough, Stockbridge, Griffin, Fayetteville, Peachtree City, Newnan, Locust Grove, Lovejoy, and communities across Clayton, Fayette, Spalding, Coweta, and Butts counties. Whether you're starting with a Discovery Flight or pursuing your Private Pilot Certificate, Instrument Rating, Commercial Pilot License, or beyond, our experienced instructors and structured training programs offer a safe, supportive, and high-quality learning environment. Begin your aviation journey today with one of Georgia’s fastest-growing flight schools.";

// SEO tip -> keyword + city 1
// Should have between 5-10 different localities to mix and match keywords
// typical keywords = how to become a pilot, flight school near, private pilot, discovery flight, introductory flight, instrument rating, commercial certificate, certified flight instructor, airline programs, how to become an airline pilot
// CHANGE default keywords -> should only be used in homepage technically, but is there for a fallback in case a page is missed
export const KEYWORDS = [
  "Speedway Flight Training",
  "Atlanta flight school",
  "Hampton GA pilot training",
  "how to become a pilot in Georgia",
  "best flight school near Atlanta",
  "private pilot license Hampton",
  "discovery flight Atlanta Speedway",
  "PPL training Georgia",
  "instrument rating certification",
  "commercial pilot license Georgia",
  "certified flight instructor program",
  "airline career preparation",
  "zero to hero pilot training",
  "accelerated flight training Georgia",
  "Cessna 172 training aircraft",
  "modern avionics training",
  "Garmin G1000 flight training",
  "IFR training near Atlanta",
  "advanced pilot ratings Hampton",
  "multi-engine rating Georgia",
  "flight instructor jobs Atlanta",
  "checkride preparation Hampton",
  "part 61 flight school",
  "aviation school Georgia",
  "affordable flight training Atlanta",
  "pilot school with financing",
  "flight training McDonough",
  "Griffin aviation training",
  "Peachtree City flight lessons",
  "Stockbridge flight school",
  // Upgraded/added keywords for 2025
  "FAA approved flight school Georgia",
  "accelerated pilot training Atlanta",
  "flight school with job placement Georgia",
  "aviation scholarships Georgia",
  "flight school reviews Atlanta",
  "best pilot school for career changers",
  "flight training for veterans Georgia",
  "aviation degree programs Atlanta",
  "flight school open house Atlanta",
  "flight school financing options Georgia",
  "private pilot ground school Atlanta",
  "flight instructor academy Georgia",
  "aviation English training Atlanta",
  "student pilot resources Georgia",
  "flight school near Hartsfield-Jackson",
  "pilot training for international students Georgia",
].join(", ");

// Primary keywords by search intent
export const PRIMARY_KEYWORDS = {
  // Informational intent keywords
  informational:
    "how to become a pilot in Georgia, what is discovery flight, flight training requirements, pilot license cost, how long to get private pilot license, aviation career path",

  // Navigational intent keywords
  navigational:
    "Speedway Flight Training Hampton, Atlanta Speedway Airport flight school, flight training KHMP, Speedway pilot training",

  // Commercial intent keywords
  commercial:
    "best flight school near Atlanta, affordable flight training Georgia, pilot training with financing, flight school comparison",

  // Transactional intent keywords
  transactional:
    "book discovery flight Hampton, enroll in flight school Atlanta, schedule flight training, flight instructor jobs Georgia",
};

// Secondary keywords by program type
export const PROGRAM_KEYWORDS = {
  privatePilot:
    "private pilot license Georgia, PPL training Atlanta, learn to fly Hampton, beginner pilot training, recreational flying certification",

  instrument:
    "instrument rating Georgia, IFR training Atlanta, fly in all weather conditions, instrument flight rules certification, Garmin G1000 training",

  commercial:
    "commercial pilot license Atlanta, CPL training Georgia, professional pilot career, airline preparation training, advanced flight certifications",

  multiEngine:
    "multi-engine rating Hampton, twin engine training Georgia, complex aircraft certification, MEL rating Atlanta, airline pilot preparation",

  flightInstructor:
    "CFI training Georgia, become flight instructor Atlanta, flight instructor certification, teaching aviation skills, build flight hours instructing",
};

// Location-focused keywords
export const LOCATION_KEYWORDS = {
  primary:
    "Hampton GA flight school, Atlanta Speedway Airport training, KHMP flight training",

  secondary:
    "McDonough flight lessons, Griffin aviation school, Peachtree City pilot training, Stockbridge flight instruction, Fayetteville flying lessons, Atlanta south metro flight school",
};

export const OG_IMAGE = "/Speedway-OG-image.png";

export const FAVICON =
  "/speedway-flight-training-hampton-georgia-logo-color.webp";

export const LOGO = "/speedway-flight-training-hampton-georgia-logo-color.webp";

export const LOGO_ASSETS =
  "/src/assets/speedway-flight-training-hampton-georgia-logo-color.webp";

// CHANGE client business info
export const COMPANY_NAME = "Speedway Flight Training";
export const COMPANY_NAME_CAPS = "SPEEDWAY FLIGHT TRAINING";
export const COMPANY_NICKNAME = "Speedway";
export const LOGO_PRIMARY = "/speedway-flight-training-written-logo.png";
export const LOGO_SECONDARY = "/speedway-flight-training-written-logo.png";
export const PHONE_NUMBER = "(678) 944-7379";
export const ADDRESS_LINE_1 = "474 Speedway Blvd";
export const ADDRESS_LINE_2 = "Hampton, GA 30228";
export const AIRPORT = "Atlanta Speedway Airport";
export const AIRPORT_CODE = "ATL";
export const ADDRESS = "474 Speedway Blvd, Hampton, GA 30228";
export const ADDRESS_CITY = "Hampton";
export const ADDRESS_STATE = "Georgia";
export const ADDRESS_ZIP = "30228";
export const GMAPS = "https://maps.app.goo.gl/jgGYGrkLEd8Mjuu19";
export const EMAIL_ADDRESS = "info@SpeedwayFT.com";
export const FACEBOOK_URL =
  "https://www.facebook.com/people/Speedway-Flight-Training/61574840653146/#";
export const INSTAGRAM_URL =
  "https://www.instagram.com/speedway_flight_training/";
export const LINKEDIN_URL = "";
export const X_URL = "";
export const YOUTUBE_URL = "";
export const YELP_URL = "https://www.yelp.com/biz/speedway-flight-training";
export const GITHUB_URL = "";

export const LOCATIONS = [
  {
    title: `Atlanta Speedway Airport<br><small class="text-xs -mt-3">ATL</small>`,
    address: "474 Speedway Blvd",
    city: "Hampton",
    state: "GA",
    zip: "30228",
    gMaps: "https://maps.app.goo.gl/jgGYGrkLEd8Mjuu19",
    phone: "(678) 944-7379",
    forwardPhone: "(678) 944-7379",
  },
];

export const COURSES = [
  {
    1: {
      title: "Private Pilot",
      path: "private-pilot-course",
    },
    2: {
      title: "Instrument Rating",
      path: "instrument-rating",
    },
    3: {
      title: "Commercial Pilot",
      path: "commercial-pilot-training",
    },
  },
];

export const FLEET = [
  {
    1: {
      title: "N7350G - Cessna 172K Skyhawk",
      path: "cessna-172k",
    },
    2: {
      title: "N46269 - Cessna 172L Skyhawk",
      path: "cessna-172l",
    },
    3: {
      title: "N21648 Cessna 172M Skyhawk",
      path: "cessna-172m",
    },
  },
];
