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
    <section id="my-journey" className="py-12 bg-white/[0.02] border-t border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-center">My Journey</h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Timeline column */}
          <div className="flex-1 lg:max-w-[58%] lg:pr-12">
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-white/80 mb-6">
                <i className="bi bi-briefcase text-accent mr-2" />
                Experience
              </h3>

              <div className="relative pl-6 before:content-[''] before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-white/20 before:to-white/[0.05] before:rounded">
                <ExperienceCard
                  title="The Curve Consulting"
                  subtitle="Software Engineer"
                  date="2025 - now"
                  className="mb-6"
                >
                  <p className="text-white/50 mb-0">
                    Returned to the company in a permanent role after a successful
                    internship. Currently working on software projects across
                    healthcare, education and industrial technology sectors,
                    collaborating closely with teams and clients to deliver quality
                    solutions.
                  </p>
                </ExperienceCard>

                <ExperienceCard
                  title="The Curve Consulting"
                  subtitle="Junior Software Engineer"
                  date="2023 - 2024"
                >
                  <p className="text-white/50 mb-0">
                    Completed a year in industry, supporting multi-sector client
                    projects and gaining hands-on experience in agile delivery and
                    software development. Worked across six projects, engaging
                    closely with clients and contributing to bespoke software
                    solutions.
                  </p>
                </ExperienceCard>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white/80 mb-6">
                <i className="bi bi-mortarboard text-accent mr-2" />
                Education
              </h3>

              <div className="relative pl-6 before:content-[''] before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-white/20 before:to-white/[0.05] before:rounded">
                <ExperienceCard
                  title="University of Sheffield"
                  subtitle="BEng Software Engineering w/ Year In Industry"
                  date="2021 - 2025"
                  className="mb-6"
                >
                  <p className="mb-2">
                    <strong>1st Class Honours</strong>
                  </p>
                  <p className="mb-2">
                    <span className="text-white/50">Award: </span>
                    Software Hut Prize — Recognized for outstanding software
                    development for a real-world client.
                  </p>
                  <p className="text-white/50 mb-0">
                    Gained a strong foundation in core software engineering
                    principles, programming and machine learning through coursework
                    and practical academic projects.
                  </p>
                </ExperienceCard>

                <ExperienceCard
                  title="NCUK"
                  subtitle="International Foundation Year Programme"
                  date="2020"
                >
                  <p className="mb-2">
                    <strong>Chemistry (B), Mathematics (A*), Physics (A)</strong>
                  </p>
                  <p className="text-white/50 mb-0">
                    Completed an engineering foundation programme equivalent to
                    A-Levels, developing core knowledge in engineering and
                    mathematics to prepare for university study.
                  </p>
                </ExperienceCard>
              </div>
            </div>
          </div>

          {/* Photo collage */}
          <div className="hidden md:block flex-1 lg:max-w-[42%] px-6 mt-12 lg:mt-0">
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
