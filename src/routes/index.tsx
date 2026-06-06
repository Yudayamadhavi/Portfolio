import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Loader } from "@/components/portfolio/Loader";
import {
  Hero, About, Stats, Skills, Experience, Projects,
  Achievements, Certificates, Education, Contact, Footer,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CH. Yudaya Madhavi — Generative AI Engineer & Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of CH. Yudaya Madhavi — Generative AI Engineer, AI/ML Developer, and Full Stack Developer. Gen AI Intern at Amdocs, B.Tech ECE at NIT Agartala.",
      },
      { name: "author", content: "CH. Yudaya Madhavi" },
      { property: "og:title", content: "CH. Yudaya Madhavi — Generative AI Engineer" },
      { property: "og:description", content: "Building AI agents, agentic workflows, and full-stack solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "CH. Yudaya Madhavi",
          jobTitle: "Generative AI Engineer",
          email: "mailto:yudaya2004@gmail.com",
          telephone: "+91 9177904194",
          alumniOf: "National Institute of Technology Agartala",
          sameAs: [
            "https://github.com/Yudaya3006",
            "https://www.linkedin.com/in/chelluri-yudayamadhavi-462b16290/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-dvh">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
