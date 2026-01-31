import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service (Formspree, Netlify Forms, etc.)
    const mailtoLink = `mailto:ianvexler@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-5 mb-lg-0">
                <h2 className="contact-title mb-4">Get in Touch</h2>
                
                <a 
                  href="https://www.linkedin.com/in/ian-vexler-73b9291b5/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="linkedin-link d-inline-flex align-items-center gap-2 text-decoration-none"
                >
                  <i className="bi bi-linkedin" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

              <div className="col-lg-6 offset-lg-1">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control contact-input"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control contact-input"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control contact-input contact-textarea"
                      rows={5}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-contact d-inline-flex align-items-center gap-2 px-4 py-3 rounded-pill fw-medium">
                    <i className="bi bi-send" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
