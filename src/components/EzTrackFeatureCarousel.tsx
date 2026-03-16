import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Heart, Wind, Users, HardDriveUpload,Network,Lightbulb, ShieldPlus, MessageSquareCode} from 'lucide-react';

const features = [
  {
    title: 'Upload any 20 minute 10-20 montage scalp EEG',
    header: 'Step 1 ',
    icon: HardDriveUpload,
    color: 'from-[#ce7f57] to-[#d9945a]',
  },
  {
    title: 'Dynamic network modeling quantifies channel-to-channel interactions across time ',
    header: 'Step 2',
    icon: Network,
    color: 'from-[#ce7f57] to-[#d9945a]',
  },
  {
    title: 'Under Fragility and source-sink analysis identifies unique dynamics within the network weather',
    header: 'Step 3',
    icon: Lightbulb,
    color: 'from-[#ce7f57] to-[#d9945a]',
  },
  {
    title: ' A trained classifier uses nodal fragility and source-sink connectivity features as inputs',
    header: 'Step 4',
    icon: ShieldPlus,
    color: 'from-[#ce7f57] to-[#d9945a]',
  },
  {
    title: 'EpiScalp produces a risk score (0-100) to assist neurologists in diagnosing epilepsy',
    header: 'Step 5',
    icon: MessageSquareCode,
    color: 'from-[#ce7f57] to-[#d9945a]',
  },
];

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6 bg-gray-50 bg-[#9986bf]/10">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#9986bf]">
            The EZTrack Process
            <br />
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-[#ce7f57] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {feature.header}
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="min-w-full p-12 md:p-20 flex flex-col md:flex-row items-center gap-12"
                >
                  <div className="flex-1">

                    <div
                      className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-light mb-4">
                      {feature.title}
                    </h3>

                    <div className="flex gap-2">
                      {features.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveIndex(i)}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            i === activeIndex ? 'w-8 bg-[#ce7f57]' : 'w-1 bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                  </div>

                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 aspect-square flex items-center justify-center">
                      <div
                        className={`w-full h-full rounded-2xl bg-gradient-to-br ${feature.color} opacity-20`}
                      ></div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/eztrack"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#ce7f57] text-white font-medium hover:bg-[#9986bf] transition-colors duration-300"
          >
            View more
          </Link>
        </div>

      </div>
    </section>
  );
}