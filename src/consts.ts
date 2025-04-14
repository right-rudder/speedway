// CHANGE Default title
export const SITE_TITLE =
  "Speedway Flight Training | Atlanta Hampton Flight School";

// CHANGE default meta description -> should only be used in homepage technically, but is there for a fallback in case a page is missed
export const SITE_DESCRIPTION =
  "Speedway Flight Training, based in Hampton, Georgia, at Atlanta Speedway Airport, provides high-quality flight training for aspiring and experienced pilots. Serving the greater Atlanta area, including McDonough, Griffin, Peachtree City, Stockbridge, and Fayetteville, we offer private pilot, instrument, and commercial training with experienced instructors and a well-maintained fleet. Whether you're beginning your aviation journey or advancing your skills, our safe and professional training environment prepares you for success. Explore our programs, take a discovery flight, or start your pilot training today.";

// SEO tip -> keyword + city 1
// Should have between 5-10 different localities to mix and match keywords
// typical keywords = how to become a pilot, flight school near, private pilot, discovery flight, introductory flight, instrument rating, commercial certificate, certified flight instructor, airline programs, how to become an airline pilot
// CHANGE default keywords -> should only be used in homepage technically, but is there for a fallback in case a page is missed
export const KEYWORDS =
  "Speedway Flight Training, Atlanta flight school, Hampton GA pilot training, how to become a pilot in Georgia, best flight school near Atlanta, private pilot license Hampton, discovery flight Atlanta Speedway, PPL training Georgia, instrument rating certification, commercial pilot license Georgia, certified flight instructor program, airline career preparation, zero to hero pilot training, accelerated flight training Georgia, Cessna 172 training aircraft, modern avionics training, Garmin G1000 flight training, IFR training near Atlanta, advanced pilot ratings Hampton, multi-engine rating Georgia, flight instructor jobs Atlanta, checkride preparation Hampton, part 61 flight school, aviation school Georgia, affordable flight training Atlanta, pilot school with financing, flight training McDonough, Griffin aviation training, Peachtree City flight lessons, Stockbridge flight school";

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

export const OG_IMAGE =
  "/speedway-flight-training-hampton-georgia-logo-red.png";

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
