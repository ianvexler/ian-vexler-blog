import ExperienceCard from "./ExperienceCard";

const MyJourney = () => {
  return (
    <section id="my-journey" className="journey-section py-5">
      <div className="container">
        <h2 className="journey-title mb-5 text-center">My Journey</h2>
        
        <div className="row align-items-start">
          {/* Timeline column */}
          <div className="col-lg-7 col-md-7 pe-5">
            <div className="journey-group mb-5">
              <h3 className="journey-subtitle mb-4">
                <i className="bi bi-mortarboard me-2" />
                Education
              </h3>
              
              <div className="timeline">
                <ExperienceCard 
                  title="University of Sheffield" 
                  subtitle="BEng Software Engineering"
                  date="2021 - 2025"
                  className="mb-4"
                >
                  <p className="mb-2">Overall grade: 1st (71%)</p>
                  <p className="text-white-50 mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </ExperienceCard>

                <ExperienceCard 
                  title="NCUK" 
                  subtitle="International Foundation Year"
                  date="2021"
                >
                  <p className="mb-0 text-white-50">
                    Chemistry (B), Mathematics (A*), Physics (A), EAPPU (B)
                  </p>
                </ExperienceCard>
              </div>
            </div>

            <div className="journey-group">
              <h3 className="journey-subtitle mb-4">
                <i className="bi bi-briefcase me-2" />
                Experience
              </h3>
              
              <div className="timeline">
                <ExperienceCard 
                  title="The Curve Consulting" 
                  subtitle="Junior Software Engineer"
                  date="2023 - 2024"
                >
                  <p className="text-white-50 mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris.
                  </p>
                </ExperienceCard>
              </div>
            </div>
          </div>

          {/* Photo collage */}
          <div className="col-lg-5 col-md-5 d-none d-md-block px-5 mt-5">
            <div className="chaos-collage">
              <div className="chaos-photo chaos-1">
                <div className="photo-placeholder border rounded" />
              </div>
              <div className="chaos-photo chaos-2">
                <div className="photo-placeholder border rounded" />
              </div>
              <div className="chaos-photo chaos-3">
                <div className="photo-placeholder border rounded" />
              </div>
              <div className="chaos-photo chaos-4">
                <div className="photo-placeholder border rounded" />
              </div>
              <div className="chaos-photo chaos-5">
                <div className="photo-placeholder border rounded" />
              </div>
              <div className="chaos-photo chaos-6">
                <div className="photo-placeholder border rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
