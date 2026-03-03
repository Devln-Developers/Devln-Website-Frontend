import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Placeholder article data — replace with real CMS/DB fetch by slug
const article = {
  title: "Web Application Development",
  sections: [
    {
      heading: "Web Application Development",
      body: "Web application development is the process of creating dynamic websites that function as applications. These applications are designed to perform specific tasks, providing users with interactive experiences that go beyond static web pages. The development process typically involves various programming languages, frameworks, and tools that work together to offer functionality, usability, and a seamless user interface. Developers often utilize languages such as HTML, CSS, and JavaScript, alongside backend technologies like Node.js, Python, or Ruby on Rails, to build robust applications. The focus is on creating a user-centric design, ensuring that the application is responsive, accessible, and efficient across different devices and platforms. Additionally, the integration of databases, APIs, and cloud services is critical to enable data storage, retrieval, and processing. As web technologies evolve, developers must stay updated on emerging trends, security practices, and user feedback to continuously improve their applications.",
    },
    {
      heading: "Web Application Development",
      body: "Web application development is the process of creating dynamic websites that function as applications. These applications are designed to perform specific tasks, providing users with interactive experiences that go beyond static web pages. The development process typically involves various programming languages, frameworks, and tools that work together to offer functionality, usability, and a seamless user interface. Developers often utilize languages such as HTML, CSS, and JavaScript, alongside backend technologies like Node.js, Python, or Ruby on Rails, to build robust applications. The focus is on creating a user-centric design, ensuring that the application is responsive, accessible, and efficient across different devices and platforms. Additionally, the integration of databases, APIs, and cloud services is critical to enable data storage, retrieval, and processing. As web technologies evolve, developers must stay updated on emerging trends, security practices, and user feedback to continuously improve their applications.",
    },
    {
      heading: "Web Application Development",
      body: "Web application development is the process of creating dynamic websites that function as applications. These applications are designed to perform specific tasks, providing users with interactive experiences that go beyond static web pages. The development process typically involves various programming languages, frameworks, and tools that work together to offer functionality, usability, and a seamless user interface. Developers often utilize languages such as HTML, CSS, and JavaScript, alongside backend technologies like Node.js, Python, or Ruby on Rails, to build robust applications. The focus is on creating a user-centric design, ensuring that the application is responsive, accessible, and efficient across different devices and platforms. Additionally, the integration of databases, APIs, and cloud services is critical to enable data storage, retrieval, and processing. As web technologies evolve, developers must stay updated on emerging trends, security practices, and user feedback to continuously improve their applications.",
    },
  ],
};

export function generateStaticParams() {
  return [
    { slug: "mobile-app-design" },
    { slug: "top-10-baby-enjoyment-1" },
    { slug: "top-10-baby-enjoyment-2" },
    { slug: "top-10-baby-enjoyment-3" },
    { slug: "top-10-baby-enjoyment-4" },
    { slug: "top-10-baby-enjoyment-5" },
  ];
}

export default function BlogPostPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <article className="app-px py-10 md:py-14">

          {/* Back link */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8 px-4 py-2 rounded-button"
            style={{ backgroundColor: '#F7F7F7' }}
          >
            ← Go Back
          </Link>

          {/* Hero image */}
          <div className="w-full rounded-2xl overflow-hidden mb-10 md:mb-14">
            <Image
              src="/assets/icons/Article-Dummy-Image.svg"
              alt="Article hero"
              width={1200}
              height={525}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Article sections */}
          <div className="max-w-3xl flex flex-col gap-10 md:gap-14">
            {article.sections.map((section, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {section.heading}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
