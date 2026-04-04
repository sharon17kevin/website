import { Clock, User } from "lucide-react";

const posts = [
  {
    title: "Introducing Luagro: Fresh Produce, Delivered",
    excerpt:
      "Our first product is live. Learn how Luagro is connecting local farmers directly to households with 60-minute delivery.",
    date: "March 15, 2026",
    author: "Luvimes Team",
    category: "Product Launch",
  },
  {
    title: "Why We Started Luvimes",
    excerpt:
      "The story behind our company — what drives us to build technology that makes a real difference in people's lives.",
    date: "March 1, 2026",
    author: "Luvimes Team",
    category: "Company",
  },
  {
    title: "Building for Communities, Not Just Users",
    excerpt:
      "How we approach product development with a community-first mindset and what that means in practice.",
    date: "February 20, 2026",
    author: "Luvimes Team",
    category: "Engineering",
  },
];

export default function LuvimesBlogPage() {
  return (
    <div className="bg-[#f8faf6] min-h-screen">
      {/* Blog Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center space-y-6">
          <div className="inline-block bg-[#eef4ea] text-[#3a5a34] px-4 py-1 rounded-full text-sm font-bold">
            News & Insights
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#3a5a34]">
            The Luvimes Blog
          </h1>
          <p className="text-xl text-[#1a1a1a]/60 max-w-2xl mx-auto">
            Updates, stories, and insights from our team as we build technology
            that matters.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eef4ea] hover:shadow-lg transition-shadow"
            >
              <div className="bg-[#eef4ea] h-48 flex items-center justify-center">
                <span className="text-[#3a5a34]/30 text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <div className="p-8 space-y-4">
                <div className="text-sm text-[#1a1a1a]/40 flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} /> {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#3a5a34] group-hover:text-[#5a8a52] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#1a1a1a]/60 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="inline-block text-sm font-bold text-[#3a5a34] underline underline-offset-4 decoration-2 decoration-[#97C93C]">
                  Read More
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
