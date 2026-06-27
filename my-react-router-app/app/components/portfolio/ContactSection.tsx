import { useState, type FormEvent } from "react";
import { SOCIAL_LINKS } from "../../data/portfolioData";
import { GitHubIcon, LinkedInIcon, SectionHeader } from "./icons";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(
    null,
  );

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Name is required";
    } else if (values.name.trim().length < 2) {
      nextErrors.name = "Name must be at least 2 characters";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Message is required";
    } else if (values.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToast(null);

    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToast({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });
      setValues({ name: "", email: "", message: "" });
      setErrors({});

      setTimeout(() => setToast(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section scroll-reveal">
      <div className="section-container">
        <SectionHeader subtitle="Get In Touch" title="Contact Me" />
        <div className="contact-grid">
          <div className="contact-info glass-card">
            <h3>Let&apos;s Collaborate!</h3>
            <p>
              I am open to talking about internships, projects, freelance
              opportunities, or just chatting about artificial intelligence and
              backend design. Drop me a line!
            </p>

            <div className="contact-methods">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-item"
                aria-label="Ahmed's GitHub profile (opens in new tab)"
              >
                <div className="contact-icon">
                  <GitHubIcon size={20} />
                </div>
                <span>github.com/Ahmed111Hatem</span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-item"
                aria-label="Ahmed's LinkedIn profile (opens in new tab)"
              >
                <div className="contact-icon">
                  <LinkedInIcon />
                </div>
                <span>linkedin.com/in/ahmed-hatem-416205322</span>
              </a>
            </div>
          </div>

          <div className="contact-form-container glass-card">
            <form className="contact-form" noValidate onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder=" "
                  autoComplete="name"
                  value={values.name}
                  className={errors.name ? "invalid" : undefined}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <label htmlFor="name">Your Name</label>
                <span className="error-msg" aria-live="polite">
                  {errors.name}
                </span>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder=" "
                  autoComplete="email"
                  value={values.email}
                  className={errors.email ? "invalid" : undefined}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <label htmlFor="email">Email Address</label>
                <span className="error-msg" aria-live="polite">
                  {errors.email}
                </span>
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder=" "
                  rows={5}
                  value={values.message}
                  className={errors.message ? "invalid" : undefined}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, message: e.target.value }))
                  }
                />
                <label htmlFor="message">Your Message</label>
                <span className="error-msg" aria-live="polite">
                  {errors.message}
                </span>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1 }}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <svg
                  className="submit-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  width={16}
                  height={16}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>

              {toast && (
                <div
                  className={`form-toast ${toast.type}`}
                  role="alert"
                  aria-hidden="false"
                >
                  {toast.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
