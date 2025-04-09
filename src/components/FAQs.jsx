import { useState, useEffect } from "react";
import Accordion from "./accordion";
import { EMAIL_ADDRESS, COMPANY_NAME } from "../consts";

export default function FAQs({ faqs, type }) {
  const [open, setOpen] = useState("");
  const handleClick = (e) => {
    if (open === e.target.id) {
      console.log("closing", e.target.id);
      setOpen("");
    } else {
      console.log("opening", e.target.id);
      setOpen(e.target.id);
    }
  };

  // Generate FAQ schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question || faq.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer || faq.content,
      },
    })),
  };

  // Convert schema to string for inclusion in script tag
  const faqSchemaString = JSON.stringify(faqSchema);

  // Add schema to document head
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = faqSchemaString;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [faqSchemaString]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-12 lg:pt-16 lg:pb-12">
        <div className="mx-auto max-w-4xl">
          <p className="mx-auto mt-12 uppercase text-lg lg:text-xl lg:max-w-3xl font-sans text-center font-bold tracking-tight text-sky-400">
            {type}
          </p>
          <h2 className="mx-auto mb-3 text-4xl lg:text-6xl lg:max-w-3xl font-title text-center font-bold tracking-tight text-sky-950">
            Frequently Asked Questions
          </h2>
          <dl className="flex flex-col gap-2 mt-6">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                index={index}
                faq={faq}
                toggled={faq.title === open}
                onShow={handleClick}
              />
            ))}
          </dl>
        </div>
        <p className="text-center mt-12 text-gray-600">
          If you have any additional questions please send us an email to{" "}
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="text-sky-500 hover:underline"
          >
            {EMAIL_ADDRESS}
          </a>
        </p>
      </div>
    </div>
  );
}
