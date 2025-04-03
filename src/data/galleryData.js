import {
  COMPANY_NAME
} from "/src/consts.ts";

// Dynamically import all images from the folder
const images = import.meta.glob("/public/gallery/*.{jpeg,jpg,png,gif,webp}", { eager: true });

const galleryData = {
  data: {
    // SEO Header Stuff
    pageTitle: `Gallery | ${COMPANY_NAME}`,
    pageDescription:
      "Explore Speedway Flight Training’s photo gallery featuring images of our fleet, training sessions, student achievements, and life at Atlanta Speedway Airport. See what makes us the top choice for aspiring pilots in Southern Georgia.",
    pageKeywords:
      "flight training photos, Speedway Flight Training gallery, aviation school images, pilot training Hampton, fleet and facilities gallery, student pilot achievements",

    // Top Header
    header: {
      stars: false,
      imagePath: "/src/assets/placeholder.webp",
      imageAlt: "The inside of one of our planes",
      headerH1: `Gallery <br><span>Snapshots of Speedway</span>`,
      paragraph: `Step inside Speedway Flight Training through our photo gallery. From well-maintained aircraft to moments of achievement and camaraderie, these snapshots capture the essence of our aviation community.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll",
          primary: false,
        },
        {
          name: "Contact Us",
          link: "/contact",
          primary: false,
        },
      ],
    },

    // Dynamically populate pictures array
    pictures: Object.keys(images).map((path) => {
      const filename = path.split("/").pop(); // Get file name for alt text
      return {
        imagePath: path,
        imagePathPub: path.replace("/public", ""), // Remove `/public` URL
        imageAlt: filename?.replace(/[-_]/g, " ").replace(/\.[^/.]+$/, "") || "Gallery image", // Generate alt text from filename
      };
    }),
  },
};

export default galleryData;
