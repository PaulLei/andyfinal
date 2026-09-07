import { Mail, Phone, Linkedin } from "lucide-react";
import { useEffect, useState, type ChangeEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";

const BRAND = {
  purple: "#9986bf",
  purpleDark: "#7e6aa7",
  purpleSoft: "rgba(153, 134, 191, 0.12)",
  purpleBorder: "rgba(153, 134, 191, 0.28)",
  orange: "#ce7f57",
  orangeDark: "#b96d46",
  orangeSoft: "rgba(206, 127, 87, 0.12)",
  orangeBorder: "rgba(206, 127, 87, 0.28)",
  ink: "#2f2738",
  muted: "#6e647b",
  line: "rgba(47, 39, 56, 0.10)",
  bg: "#fcfaf8",
  card: "#ffffff",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    otherSubject: "",
    message: "",
  });

  // Formspree form ID from:
  // https://formspree.io/f/xgaeznpo
  const [state, handleSubmit, reset] = useForm("xgaeznpo");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "subject" && value !== "other"
        ? { otherSubject: "" }
        : {}),
    }));
  };

  // Clear the visible form fields after a successful submission.
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        otherSubject: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleSendAnother = () => {
    reset();
  };

  return (
    <div
      className="min-h-screen pt-24"
      style={{
        backgroundColor: BRAND.bg,
        color: BRAND.ink,
        fontFamily:
          '"Typo Grotesk Rounded", "Typo Grotesk Rounded Light", Arial, sans-serif',
      }}
    >
      {/* Header */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 md:pt-24 md:pb-18">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute left-[-4rem] top-0 h-80 w-80 rounded-full blur-3xl"
            style={{ background: BRAND.purpleSoft }}
          />

          <div
            className="absolute right-[-3rem] bottom-0 h-80 w-80 rounded-full blur-3xl"
            style={{ background: BRAND.orangeSoft }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="w-full text-center">
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: BRAND.purpleDark }}
            >
              Get in Touch
            </span>

            <h1
              className="mt-4 text-4xl leading-tight md:text-5xl lg:text-6xl"
              style={{ fontWeight: 300 }}
            >
              Contact Us
            </h1>

            <p
              className="mx-auto mt-5 max-w-2xl text-lg leading-8"
              style={{
                color: BRAND.muted,
                fontWeight: 300,
              }}
            >
              Have questions or interested in partnering with us? We would love
              to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-10 sm:py-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 lg:gap-10">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              {/* Phone */}
              <div
                className="rounded-[2rem] border p-6"
                style={{
                  borderColor: BRAND.line,
                  backgroundColor: BRAND.card,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                    style={{
                      background: BRAND.purpleSoft,
                    }}
                  >
                    <Phone
                      className="h-5 w-5"
                      style={{
                        color: BRAND.purpleDark,
                      }}
                    />
                  </div>

                  <div>
                    <h3
                      className="text-lg"
                      style={{
                        fontWeight: 300,
                      }}
                    >
                      Phone
                    </h3>

                    <a
                      href="tel:+16175498316"
                      className="mt-2 block transition-colors"
                      style={{
                        color: BRAND.muted,
                      }}
                    >
                      +1 (617) 549-8316
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                className="rounded-[2rem] border p-6"
                style={{
                  borderColor: BRAND.line,
                  backgroundColor: BRAND.card,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                    style={{
                      background: BRAND.orangeSoft,
                    }}
                  >
                    <Mail
                      className="h-5 w-5"
                      style={{
                        color: BRAND.orangeDark,
                      }}
                    />
                  </div>

                  <div>
                    <h3
                      className="text-lg"
                      style={{
                        fontWeight: 300,
                      }}
                    >
                      Email
                    </h3>

                    <a
                      href="mailto:info@neurologicsolutions.net"
                      className="mt-2 block transition-colors"
                      style={{
                        color: BRAND.muted,
                      }}
                    >
                      info@neurologicsolutions.net
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div
                className="rounded-[2rem] border p-6"
                style={{
                  borderColor: BRAND.line,
                  backgroundColor: BRAND.card,
                }}
              >
                <h3
                  className="text-lg"
                  style={{
                    fontWeight: 300,
                  }}
                >
                  Follow Us
                </h3>

                <div className="mt-4 flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/company/neurologic-solutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Neurologic Solutions on LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl transition-all"
                    style={{
                      background: BRAND.purpleSoft,
                      color: BRAND.purpleDark,
                    }}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div
              className="rounded-[2rem] border p-8 md:p-10"
              style={{
                borderColor: BRAND.line,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(153,134,191,0.04) 100%)",
              }}
            >
              {state.succeeded ? (
                /* Success Message */
                <div
                  className="flex min-h-[500px] flex-col items-center justify-center text-center"
                  aria-live="polite"
                >
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full"
                    style={{
                      background: BRAND.purpleSoft,
                    }}
                  >
                    <Mail
                      className="h-7 w-7"
                      style={{
                        color: BRAND.purpleDark,
                      }}
                    />
                  </div>

                  <h2
                    className="mt-6 text-3xl"
                    style={{
                      fontWeight: 300,
                    }}
                  >
                    Thank You!
                  </h2>

                  <p
                    className="mt-4 max-w-md text-base leading-7"
                    style={{
                      color: BRAND.muted,
                      fontWeight: 300,
                    }}
                  >
                    Your message has been sent successfully. We appreciate you
                    contacting us and will get back to you as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={handleSendAnother}
                    className="mt-7 rounded-2xl px-7 py-3 text-white transition-all"
                    style={{
                      background:
                        "linear-gradient(90deg, #9986bf 0%, #7e6aa7 45%, #ce7f57 100%)",
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2
                    className="text-3xl"
                    style={{
                      fontWeight: 300,
                    }}
                  >
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm"
                        style={{
                          color: BRAND.ink,
                        }}
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="w-full rounded-2xl border bg-white px-4 py-3 outline-none transition-all"
                        style={{
                          borderColor: BRAND.line,
                          color: BRAND.ink,
                        }}
                        placeholder="John Doe"
                      />

                      <ValidationError
                        field="name"
                        prefix="Name"
                        errors={state.errors}
                        className="mt-2 text-sm"
                        style={{
                          color: BRAND.orangeDark,
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm"
                        style={{
                          color: BRAND.ink,
                        }}
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="w-full rounded-2xl border bg-white px-4 py-3 outline-none transition-all"
                        style={{
                          borderColor: BRAND.line,
                          color: BRAND.ink,
                        }}
                        placeholder="your@email.com"
                      />

                      <ValidationError
                        field="email"
                        prefix="Email"
                        errors={state.errors}
                        className="mt-2 text-sm"
                        style={{
                          color: BRAND.orangeDark,
                        }}
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm"
                        style={{
                          color: BRAND.ink,
                        }}
                      >
                        Subject
                      </label>

                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border bg-white px-4 py-3 outline-none transition-all"
                        style={{
                          borderColor: BRAND.line,
                          color: BRAND.ink,
                        }}
                      >
                        <option value="">Select a topic</option>
                        <option value="Partnership Inquiry">
                          Partnership Inquiry
                        </option>
                        <option value="Technical Support">
                          Technical Support
                        </option>
                        <option value="Pricing Information">
                          Pricing Information
                        </option>
                        <option value="Request a Demo">Request a Demo</option>
                        <option value="Careers / Job Opportunities">
                          Careers / Job Opportunities
                        </option>
                        <option value="other">Other</option>
                      </select>

                      <ValidationError
                        field="subject"
                        prefix="Subject"
                        errors={state.errors}
                        className="mt-2 text-sm"
                        style={{
                          color: BRAND.orangeDark,
                        }}
                      />

                      {formData.subject === "other" && (
                        <>
                          <label htmlFor="otherSubject" className="sr-only">
                            Please specify your topic
                          </label>

                          <input
                            id="otherSubject"
                            type="text"
                            name="otherSubject"
                            value={formData.otherSubject}
                            onChange={handleChange}
                            placeholder="Please specify your topic"
                            className="mt-3 w-full rounded-2xl border bg-white px-4 py-3 outline-none transition-all"
                            style={{
                              borderColor: BRAND.line,
                              color: BRAND.ink,
                            }}
                            required
                          />

                          <ValidationError
                            field="otherSubject"
                            prefix="Topic"
                            errors={state.errors}
                            className="mt-2 text-sm"
                            style={{
                              color: BRAND.orangeDark,
                            }}
                          />
                        </>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm"
                        style={{
                          color: BRAND.ink,
                        }}
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full resize-none rounded-2xl border bg-white px-4 py-3 outline-none transition-all"
                        style={{
                          borderColor: BRAND.line,
                          color: BRAND.ink,
                        }}
                        placeholder="Tell us how we can help..."
                      />

                      <ValidationError
                        field="message"
                        prefix="Message"
                        errors={state.errors}
                        className="mt-2 text-sm"
                        style={{
                          color: BRAND.orangeDark,
                        }}
                      />
                    </div>

                    {/* General Formspree Error */}
                    <ValidationError
                      errors={state.errors}
                      className="rounded-2xl border px-4 py-3 text-sm"
                      style={{
                        borderColor: BRAND.orangeBorder,
                        background: BRAND.orangeSoft,
                        color: BRAND.orangeDark,
                      }}
                    />

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full rounded-2xl py-3 text-white transition-all disabled:cursor-not-allowed disabled:opacity-60"
                      style={{
                        background:
                          "linear-gradient(90deg, #9986bf 0%, #7e6aa7 45%, #ce7f57 100%)",
                      }}
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>

                  <p
                    className="mt-6 text-sm"
                    style={{
                      color: BRAND.muted,
                      fontWeight: 300,
                    }}
                  >
                    We typically respond within 24 business hours.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}