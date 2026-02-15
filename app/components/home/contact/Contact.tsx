import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqebrnro");

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          <div>
            <div className="h-px w-12 bg-accent mb-4" />
            <h2 className="text-2xl font-serif text-text mb-6">Get in Touch</h2>
            <p className="text-text-muted text-sm mb-8 max-w-sm">
              Whether you have a project in mind or want to connect, I'd be glad to hear from you.
            </p>
            <a
              href="https://www.linkedin.com/in/ian-vexler-73b9291b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-text-muted text-sm no-underline transition-colors duration-200 hover:text-accent border border-border rounded-lg px-4 py-3 [&_i]:text-accent [&_i]:text-lg"
            >
              <i className="bi bi-linkedin" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          <div>
            {state.succeeded ? (
              <div className="py-12 text-center bg-surface rounded-xl border border-border">
                <i className="bi bi-check-circle text-4xl text-accent mb-4 block" />
                <h4 className="text-text mb-2 font-medium">Message Sent</h4>
                <p className="text-text-muted text-sm mb-0">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-surface border border-border text-text py-3.5 px-4 text-sm rounded-lg transition-colors duration-200 placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-accent mt-1 text-xs block"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full bg-surface border border-border text-text py-3.5 px-4 text-sm rounded-lg transition-colors duration-200 placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-accent mt-1 text-xs block"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    className="w-full bg-surface border border-border text-text py-3.5 px-4 text-sm rounded-lg resize-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30"
                    rows={5}
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-accent mt-1 text-xs block"
                  />
                </div>
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-background bg-accent transition-colors duration-200 hover:bg-accent-muted disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
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
    </section>
  );
};

export default Contact;
