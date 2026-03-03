import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const featuredPost = {
  title: "Mobile App Design",
  excerpt:
    "Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit Lorem Ipsum Sit Amit",
  href: "/blogs/mobile-app-design",
};

const articles = [
  {
    title: "Top 10 Baby Enjoyment Thing",
    excerpt:
      "Discover the ultimate joy for your little one with our curated selection...",
    href: "/blogs/top-10-baby-enjoyment-1",
  },
  {
    title: "Top 10 Baby Enjoyment Thing",
    excerpt:
      "Discover the ultimate joy for your little one with our curated selection...",
    href: "/blogs/top-10-baby-enjoyment-2",
  },
  {
    title: "Top 10 Baby Enjoyment Thing",
    excerpt:
      "Discover the ultimate joy for your little one with our curated selection...",
    href: "/blogs/top-10-baby-enjoyment-3",
  },
  {
    title: "Top 10 Baby Enjoyment Thing",
    excerpt:
      "Discover the ultimate joy for your little one with our curated selection...",
    href: "/blogs/top-10-baby-enjoyment-4",
  },
  {
    title: "Top 10 Baby Enjoyment Thing",
    excerpt:
      "Discover the ultimate joy for your little one with our curated selection...",
    href: "/blogs/top-10-baby-enjoyment-5",
  },
];

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="app-px py-16 md:py-20">

          {/* Page heading */}
          <h1 className="text-4xl md:text-5xl font-bold italic text-gray-900 mb-10 md:mb-12">
            Blogs
          </h1>

          {/* Featured post */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-20 md:mb-24">
            {/* Featured image */}
            <div className="w-full rounded-2xl overflow-hidden">
              <Image
                src="/assets/icons/Article-Dummy-Image.svg"
                alt="Featured article"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {featuredPost.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <Link
                href={featuredPost.href}
                className="inline-flex items-center gap-1 text-[#13C4B2] text-sm font-medium hover:underline mt-2"
              >
                Get a Quote →
              </Link>
            </div>
          </div>

          {/* More Articles */}
          <h2 className="text-3xl md:text-4xl font-bold italic text-gray-900 mb-8 md:mb-10">
            More Articles
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {articles.map((article, i) => (
              <div key={i} className="flex flex-col gap-3">
                {/* Card image */}
                <div className="w-full rounded-xl overflow-hidden">
                  <Image
                    src="/assets/icons/Article-Dummy-Image.svg"
                    alt={article.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Card content */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold text-gray-900 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-1 text-[#13C4B2] text-xs font-medium hover:underline mt-1"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
