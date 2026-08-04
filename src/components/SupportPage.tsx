import { HelpCircle, MessageSquare, BookOpen, Zap, CheckCircle, Users } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'How do I set up EpiScalp™?',
        a: 'Our setup wizard will guide you through the installation process. Download the software from your account dashboard and follow the on-screen instructions.',
      },
      {
        q: 'What are the system requirements?',
        a: 'EpiScalp™ requires Windows 10+ or macOS 10.15+, 8GB RAM, and a stable internet connection.',
      },
      {
        q: 'How long does training take?',
        a: 'Most users complete training in 2-3 hours. We provide video tutorials and live webinars.',
      },
    ],
  },
  {
    category: 'EEG Analysis',
    items: [
      {
        q: 'What file formats does EZTrack™ support?',
        a: 'We support EDF, EEG, and other standard clinical EEG formats. Custom formats can be added upon request.',
      },
      {
        q: 'How accurate is the seizure detection?',
        a: 'Our algorithms achieve 94% sensitivity in detecting seizure onset zones with standard clinical EEGs.',
      },
      {
        q: 'Can I customize analysis parameters?',
        a: 'Yes, advanced users can customize frequency bands, sensitivity levels, and analysis parameters.',
      },
    ],
  },
  {
    category: 'Billing & Account',
    items: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards, wire transfers, and institutional payments.',
      },
      {
        q: 'Is there a free trial available?',
        a: 'Yes, we offer a 30-day free trial with full feature access. No credit card required.',
      },
      {
        q: 'How do I cancel my subscription?',
        a: 'You can cancel anytime from your account settings. No penalties or long-term contracts.',
      },
    ],
  },
];

const supportChannels = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant answers from our support team',
    availability: 'Available Mon-Fri, 9 AM - 5 PM EST',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us your questions anytime',
    availability: 'Response within 24 hours',
  },
  {
    icon: Users,
    title: 'Community Forum',
    description: 'Connect with other users and experts',
    availability: 'Available 24/7',
  },
  {
    icon: Zap,
    title: 'Video Tutorials',
    description: 'Step-by-step guides for every feature',
    availability: 'On-demand access',
  },
];

import { Mail } from 'lucide-react';

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Header */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 mb-6">
            <HelpCircle className="w-6 h-6 text-amber-600" />
            <span className="text-xs tracking-widest uppercase text-amber-600 font-semibold">
              Support Center
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            How Can We Help?
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Find answers, tutorials, and get in touch with our support team.
          </p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-normal mb-2">{channel.title}</h3>
                  <p className="text-sm text-gray-600 font-light mb-4">
                    {channel.description}
                  </p>
                  <p className="text-xs text-amber-600 font-semibold">
                    {channel.availability}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-light mb-3">Knowledge Base</h2>
            <p className="text-gray-600 font-light">
              Browse our comprehensive FAQ and find answers to common questions.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap gap-3 mb-12">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full text-sm font-light transition-all ${
                  activeCategory === index
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {faq.category}
              </button>
            ))}
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            {faqs[activeCategory].items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-amber-200 transition-all opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full p-6 flex items-start justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="text-left flex-1">
                    <h3 className="text-lg font-normal text-gray-900">
                      {item.q}
                    </h3>
                  </div>
                  <div
                    className={`ml-4 flex-shrink-0 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-600 font-light leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials */}
      <section className="py-24 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-light mb-3">Video Tutorials</h2>
            <p className="text-gray-600 font-light">
              Learn how to use our products with step-by-step video guides.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Getting Started with EpiScalp™',
                duration: '5 min',
              },
              {
                title: 'Uploading and Analyzing EEG Data',
                duration: '8 min',
              },
              {
                title: 'Interpreting Analysis Results',
                duration: '6 min',
              },
              {
                title: 'Advanced Settings',
                duration: '10 min',
              },
              {
                title: 'Exporting Reports',
                duration: '4 min',
              },
              {
                title: 'Team Collaboration Features',
                duration: '7 min',
              },
            ].map((tutorial, index) => (
              <div
                key={index}
                className="group cursor-pointer opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl h-40 flex items-center justify-center mb-4 group-hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-normal mb-2 group-hover:text-amber-600 transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-sm text-gray-500 font-light">
                  {tutorial.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-12 text-center border border-amber-200">
          <h2 className="text-4xl font-light mb-6">Still Need Help?</h2>
          <p className="text-lg text-gray-600 font-light mb-8">
            Can't find what you're looking for? Our support team is ready to help.
          </p>
          <button className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all font-light">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
