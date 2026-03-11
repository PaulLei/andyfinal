import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    otherSubject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Header */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs tracking-widest uppercase text-white/80 font-semibold">
            Get in Touch
          </span>

          <h1 className="text-4xl md:text-5xl font-light mt-4 mb-6 leading-tight">
            Contact Us
          </h1>

          <p className="text-lg text-white/90 font-light max-w-2xl mx-auto">
            Have questions or interested in partnering with us? We would love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">

          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="space-y-12">

              {/* Phone */}
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal mb-2">Phone</h3>
                    <a
                      href="tel:+16175498316"
                      className="text-gray-600 font-light hover:text-slate-900 transition-colors"
                    >
                      +1 (617) 549-8316
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal mb-2">Email</h3>
                    <a
                      href="mailto:help@neurologicsolutions.net"
                      className="text-gray-600 font-light hover:text-slate-900 transition-colors"
                    >
                      info@neurologicsolutions.net
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal mb-2">Address</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Neurologic Solutions Inc.
                      <br />
                      301 W 29th ST.
                      <br />
                      Baltimore, MD 21218
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-lg font-normal mb-4">Follow Us</h3>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/company/neurologic-solutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12">

              <h2 className="text-3xl font-light mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-2">
                    Subject
                  </label>

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="demo">Request a Demo</option>
                    <option value="careers">Careers / Job Opportunities</option>
                    <option value="other">Other</option>
                  </select>

                  {formData.subject === "other" && (
                    <input
                      type="text"
                      name="otherSubject"
                      value={formData.otherSubject}
                      onChange={handleChange}
                      placeholder="Please specify your topic"
                      className="mt-3 w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                      required
                    />
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition-all font-light"
                >
                  Send Message
                </button>

              </form>

              <p className="text-sm text-gray-500 font-light mt-6">
                We typically respond within 24 business hours.
              </p>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}