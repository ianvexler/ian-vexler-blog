import type { MetaFunction } from "@remix-run/node";
import { Badge } from "react-bootstrap";
import { QuickLinks } from "~/components/home/intro";
import { MyJourney } from "~/components/home/journey";
import { Projects } from "~/components/home/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Ian Vexler" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const skills = ['React', 'Typescript', 'Node.js', 'Python', 'Ruby on Rails', '.NET', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB'];

  return (
    <div>
      <section id="home">
        <div className="intro min-vh-50 d-flex align-items-center justify-content-center px-3 position-relative">
          <div className="text-center position-relative z-1">
            <span className="greeting d-block text-uppercase fw-light text-white-50 mb-3">
              Hello, I'm
            </span>
            <h1 className="name display-3 fw-semibold mb-4">
              <span className="first-name">Ian</span> <span className="last-name">Vexler</span>
            </h1>
            <div className="title-row d-flex align-items-center justify-content-center gap-3 gap-md-4">
              <span className="line" />
              <span className="fs-5 text-white-50">Full-Stack Software Engineer</span>
              <span className="line" />
            </div>
          </div>
        </div>

        <QuickLinks />

        <div className="d-flex justify-content-center mt-4">
          <div className="skills-list d-flex flex-wrap justify-content-center gap-2">
            {skills.map((skill) => (
              <Badge key={skill} className="skill-tag px-3 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="about-section py-5 mt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-11">
                <div className="about-card p-4 p-md-5 rounded-4">
                  <div className="row align-items-center">
                    <div className="col-md-4 mb-4 mb-md-0 text-center">
                      {/* TODO: Add image */}
                      <p>Placeholder</p>
                    </div>
                    <div className="col-md-8">
                      <h2 className="about-title mb-4">
                        About Me
                      </h2>
                      <p className="about-text mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris.
                      </p>
                      <p className="about-text mb-0">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MyJourney />

      <Projects />
    </div>
  );
}
