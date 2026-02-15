import ExperienceCard from "./ExperienceCard";

import img1 from "~/assets/images/IMG_4309.jpg";
import img2 from "~/assets/images/1718273049513.jpg";
import img3 from "~/assets/images/IMG_3464.jpg";
import img4 from "~/assets/images/9d749a57-e454-4c0e-b2ce-a4ff82af1801.JPG";
import img5 from "~/assets/images/IMG_1363.jpg";
import img6 from "~/assets/images/IMG_0654.JPG";
import img7 from "~/assets/images/A74FF877-8CBC-47D8-BA7D-95D66C991128_1_105_c.jpeg";
import img8 from "~/assets/images/2867640e-c7b1-4b1d-9194-086f33f5d1c2.JPG";

const MyJourney = () => {
  return (
    <section id="my-journey" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <div className="h-px w-12 bg-accent mb-4" />
          <h2 className="text-2xl font-serif text-text">
            My Journey
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Timeline column */}
          <div className="flex-1 lg:max-w-[52%] mr-0 xl:mr-10">
            <div className="mb-14">
              <h3 className="text-lg font-sans font-semibold mb-3">
                Experience
              </h3>

              <div className="relative pl-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-border before:rounded">
                <ExperienceCard
                  title="The Curve Consulting"
                  subtitle="Software Engineer"
                  date="Sep. 2025 — now"
                  className="mb-8"
                >
                  <p className="text-text-muted text-sm mb-0 leading-relaxed">
                    Returned in a permanent role after a successful internship.
                    Working on software projects across healthcare, education and
                    industrial technology, collaborating closely with teams and
                    clients to deliver quality solutions.
                  </p>
                </ExperienceCard>

                <ExperienceCard
                  title="The Curve Consulting"
                  subtitle="Junior Software Engineer"
                  date="Jul. 2023 — Sep.2024"
                >
                  <p className="text-text-muted text-sm mb-0 leading-relaxed">
                    Year in industry supporting multi-sector client projects.
                    Gained hands-on experience in agile delivery and software
                    development. Worked across six projects, engaging closely
                    with clients and contributing to bespoke software solutions.
                  </p>
                </ExperienceCard>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-sans font-semibold mb-3">
                Education
              </h3>

              <div className="relative pl-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-border before:rounded">
                <ExperienceCard
                  title="University of Sheffield"
                  subtitle="BEng Software Engineering w/ Year In Industry"
                  date="Sep. 2021 — Jun. 2025"
                  className="mb-8"
                >
                  <p className="text-text mb-2 text-sm">
                    <strong>1st Class Honours</strong>
                  </p>
                  <p className="text-text-muted text-sm mb-2 leading-relaxed">
                    Software Hut Prize — Recognised for outstanding software
                    development for a real-world client.
                  </p>
                  <p className="text-text-muted text-sm mb-0 leading-relaxed">
                    Foundation in core software engineering principles,
                    programming and machine learning through coursework and
                    practical projects.
                  </p>
                </ExperienceCard>

                <ExperienceCard
                  title="NCUK"
                  subtitle="International Foundation Year Programme"
                  date="2020"
                >
                  <p className="text-text text-sm mb-2">
                    <strong>Chemistry (B), Mathematics (A*), Physics (A)</strong>
                  </p>
                  <p className="text-text-muted text-sm mb-0 leading-relaxed">
                    Engineering foundation equivalent to A-Levels, developing
                    core knowledge in engineering and mathematics for university
                    study.
                  </p>
                </ExperienceCard>
              </div>
            </div>
          </div>

          {/* Photo collage — unchanged structure */}
          <div className="hidden md:block flex-1 lg:max-w-[48%] min-h-[700px]">
            <div className="chaos-collage">
              <div className="chaos-photo chaos-1">
                <img src={img1} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-2">
                <img src={img2} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-3">
                <img src={img3} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-4">
                <img src={img4} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-5">
                <img src={img5} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-6">
                <img src={img6} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-7">
                <img src={img7} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-8">
                <img src={img8} alt="Journey photo" className="chaos-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
