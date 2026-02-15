import type { MetaFunction } from "@remix-run/node";
import Contact from "~/components/home/contact/Contact";
import QuickLinks from "~/components/home/intro/QuickLinks";
import MyJourney from "~/components/home/journey/MyJourney";
import meImage from "~/assets/images/me.jpg";
import Projects from "../components/home/projects/Projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Ian Vexler" },
    { name: "description", content: "Full-Stack Software Engineer — Portfolio" },
  ];
};

export default function Index() {
  const skills = [
    "Full-Stack",
    "Mobile",
    "Python",
    "C#",
    "TypeScript",
    "React",
    "React Native",
    "ASP.NET",
    "Ruby on Rails",
    "REST APIs",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "API Integration",
    "Machine Learning",
    "Optimisation",
    "Bluetooth",
    "Agile Development",
    "GitHub",
    "Cross-Platform",
    "Ubuntu",
  ];

  return (
    <div>
      {/* Hero — split layout */}
      <section id="home" className="relative py-24 md:py-32 min-h-[70vh] flex items-center">
        <div className="absolute inset-0 border-b border-border" />
        <div className="relative max-w-6xl mx-auto px-4 w-full">
          <div className="text-center max-w-2xl mx-auto">
            <div className="h-px w-12 bg-accent mx-auto mb-8 animate-fade-in-up" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 animate-fade-in-up [animation-delay:60ms] [animation-fill-mode:both]">
              <span className="text-text">Ian</span>{" "}
              <span className="text-accent">Vexler</span>
            </h1>
            <p className="text-lg text-text-muted mb-10 animate-fade-in-up [animation-delay:120ms] [animation-fill-mode:both]">
              Full-Stack Software Engineer
            </p>
            <div className="flex justify-center animate-fade-in-up [animation-delay:180ms] [animation-fill-mode:both]">
              <QuickLinks />
            </div>
            <div className="mt-14 pt-10 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-text-muted mb-4 animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:both]">
                Skills & Technologies
              </p>
              <div className="flex flex-wrap justify-center gap-2 animate-fade-in-up [animation-delay:250ms] [animation-fill-mode:both]">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs text-text-muted bg-surface border border-border rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About — accent bar + card layout */}
      <section className="py-20 md:py-24 bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
            <div className="flex flex-col md:items-end md:text-right">
              <h2 className="text-2xl font-serif text-text mb-2">About Me</h2>
              <div className="h-px w-16 bg-accent mb-6 md:ml-auto" />
              <div className="flex justify-center md:justify-end">
                <img
                  src={meImage}
                  alt="Ian Vexler"
                  className="rounded-lg w-36 h-36 md:w-44 md:h-44 object-cover ring-1 ring-border"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-text-muted leading-relaxed">
                Software engineer building bespoke solutions across healthcare,
                education and industrial sectors. I work end-to-end on products,
                from understanding user requirements to designing and developing
                tailored systems. Day-to-day involves full-stack development in
                close collaboration with clients and cross-functional teams.
              </p>
              <p className="text-text-muted leading-relaxed">
                Strong academic interest in data-driven systems and machine
                learning. During my degree I focused on predictive models and
                optimisation, particularly in sports analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MyJourney />

      <Projects />

      <Contact />
    </div>
  );
};
