import type { MetaFunction } from "@remix-run/node";
import { Contact } from "~/components/home/contact";
import { QuickLinks } from "~/components/home/intro";
import { MyJourney } from "~/components/home/journey";
import meImage from "~/assets/images/me.jpg";
import { Projects } from "../components/home/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Ian Vexler" },
    { name: "description", content: "Welcome to Remix!" },
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
      <section id="home">
        <div className="min-h-[50vh] flex items-center justify-center px-4 relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-4/5 before:h-full before:bg-[radial-gradient(ellipse_at_center_top,rgba(232,185,35,0.06)_0%,transparent_60%)] before:pointer-events-none">
          <div className="text-center relative z-10">
            <span className="block uppercase font-light text-white/50 mb-3 tracking-[0.2em] animate-fade-in-up">
              Hello, I'm
            </span>
            <h1 className="text-5xl sm:text-6xl font-semibold mb-6 animate-fade-in-up [animation-delay:150ms] [animation-fill-mode:both]">
              <span className="bg-gradient-to-br from-white to-white/85 bg-clip-text text-transparent">
                Ian
              </span>{" "}
              <span className="bg-gradient-to-br from-accent via-accent-light to-accent bg-clip-text text-transparent">
                Vexler
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3 md:gap-4 animate-fade-in-up [animation-delay:300ms] [animation-fill-mode:both]">
              <span className="w-[30px] sm:w-[60px] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <span className="text-lg text-white/50">Full-Stack Software Engineer</span>
              <span className="w-[30px] sm:w-[60px] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>
        </div>

        <QuickLinks />

        <div className="flex justify-center mt-6">
          <div className="flex flex-wrap justify-center gap-2 max-w-[600px] animate-fade-in-up [animation-delay:500ms] [animation-fill-mode:both] px-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs font-normal rounded text-white/75 bg-transparent border border-white/15 transition-all duration-300 hover:bg-accent/10 hover:border-accent/35 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="p-4 md:p-6 rounded-2xl bg-surface border border-white/[0.08]">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/3 text-center">
                    <img
                      src={meImage}
                      alt="Ian Vexler"
                      className="rounded-2xl max-w-[200px] w-full mx-auto"
                    />
                  </div>
                  <div className="md:w-2/3 md:pl-6">
                    <h2 className="text-2xl font-semibold mb-6">About Me</h2>
                    <p className="text-base leading-relaxed text-white/70 mb-6">
                      I'm a software engineer with a background in building bespoke
                      solutions of across healthcare, education and industrial sectors.
                      I enjoy working end-to-end on products, from understanding real
                      user requirements to designing and developing systems tailored
                      for their needs. My day-to-day work includes full-stack
                      development in close collaboration with clients and
                      cross-functional teams.
                    </p>
                    <p className="text-base leading-relaxed text-white/70 mb-0">
                      Alongside industry experience, I have a strong academic interest
                      in data-driven systems and machine learning. During my degree, I
                      focused on applying predictive models and optimisation
                      techniques to real problems, particularly in the context of
                      sports analytics.
                    </p>
                  </div>
                </div>
              </div>
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
