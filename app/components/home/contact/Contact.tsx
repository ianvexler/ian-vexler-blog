import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqebrnro");

  return (
    <section id="contact" className="py-12 bg-white/[0.02] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-5/12 mb-12 lg:mb-0">
              <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>

              <a
                href="https://www.linkedin.com/in/ian-vexler-73b9291b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 text-base no-underline transition-all duration-300 hover:text-white [&_i]:text-accent [&_i]:text-xl [&:hover_i]:scale-110"
              >
                <i className="bi bi-linkedin" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            <div className="lg:w-6/12 lg:pl-12">
              {state.succeeded ? (
                <div className="text-center py-12">
                  <i className="bi bi-check-circle text-4xl text-green-500 mb-6 block" />
                  <h4 className="mb-2">Message Sent!</h4>
                  <p className="text-white/50 mb-0">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full bg-card-bg border border-white/[0.08] text-white py-3.5 px-4 text-[0.95rem] rounded-[10px] transition-all duration-300 placeholder:text-white/40 focus:bg-card-bg-hover focus:border-accent/40 focus:outline-none focus:ring-[3px] focus:ring-accent/10"
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-red-500 mt-1 text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full bg-card-bg border border-white/[0.08] text-white py-3.5 px-4 text-[0.95rem] rounded-[10px] transition-all duration-300 placeholder:text-white/40 focus:bg-card-bg-hover focus:border-accent/40 focus:outline-none focus:ring-[3px] focus:ring-accent/10"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 mt-1 text-sm"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      className="w-full bg-card-bg border border-white/[0.08] text-white py-3.5 px-4 text-[0.95rem] rounded-[10px] resize-none transition-all duration-300 placeholder:text-white/40 focus:bg-card-bg-hover focus:border-accent/40 focus:outline-none focus:ring-[3px] focus:ring-accent/10"
                      rows={5}
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-500 mt-1 text-sm"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-base text-background bg-gradient-to-br from-accent to-accent-light shadow-[0_4px_20px_rgba(232,185,35,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(232,185,35,0.4)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      <i
                        className={`bi ${
                          state.submitting ? "bi-hourglass-split" : "bi-send"
                        }`}
                      />
                      {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
