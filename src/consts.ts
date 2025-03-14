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
  "Speedway Flight Training, Atlanta Speedway flight school, how to become a pilot, flight school near Atlanta, private pilot, discovery flight, introductory flight, instrument rating, commercial certificate, certified flight instructor, airline programs, how to become an airline pilot, flight training, pilot training, aviation school in Georgia, Cessna 172 training, discovery flights Atlanta, pilot school near me, flight training in Hampton, Peachtree City, McDonough, Griffin, Stockbridge";

export const OG_IMAGE = "/speedway-flight-training-hampton-georgia-logo-red.png";

// CHANGE client business info
export const COMPANY_NAME = "Speedway Flight Training";
export const COMPANY_NAME_CAPS = "SPEEDWAY FLIGHT TRAINING";
export const COMPANY_NICKNAME = "Speedway";
export const LOGO_PRIMARY = "/speedway-flight-training-written-logo.png";
export const LOGO_SECONDARY = "/speedway-flight-training-written-logo.png";
export const PHONE_NUMBER = "(678) 697-5647";
export const ADDRESS_LINE_1 = "123 Aviation Drive";
export const ADDRESS_LINE_2 = "Hampton, GA 30228";
export const AIRPORT = "Atlanta Speedway Airport";
export const AIRPORT_CODE = "ATL";
export const ADDRESS = "123 Aviation Drive, Hampton, GA 30228";
export const ADDRESS_CITY = "Hampton";
export const ADDRESS_STATE = "Georgia";
export const ADDRESS_ZIP = "30228";
export const GMAPS = "https://maps.app.goo.gl/example";
export const EMAIL_ADDRESS = "info@speedwayflighttraining.com";
export const FACEBOOK_URL = "https://www.facebook.com/speedwayflighttraining";
export const INSTAGRAM_URL = "https://www.instagram.com/speedwayflighttraining/";
export const LINKEDIN_URL = "";
export const X_URL = "";
export const YOUTUBE_URL = "";
export const YELP_URL = "https://www.yelp.com/biz/speedway-flight-training";
export const GITHUB_URL = "";

export const LOCATIONS = [
  {
    title: `Atlanta Speedway Airport<br><small class="text-xs -mt-3">ATL</small>`,
    address: "123 Aviation Drive",
    city: "Hampton",
    state: "GA",
    zip: "30228",
    gMaps: "https://maps.app.goo.gl/example",
    phone: "(678) 555-1234",
    forwardPhone: "(678) 555-5678",
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
