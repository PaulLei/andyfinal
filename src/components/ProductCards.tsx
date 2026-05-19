import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    title: "EpiScalp",
    description:
      "EpiScalp quantifies any scalp EEG, normal or abnormal, to support clinicians in earlier diagnosis of epilepsy in patients with first-time seizures",
    gradient: "from-[#905c3c] via-[#7d5f78] to-[#664a85]",
    image: "/eps.png",
    link: "/episcalp",
  },
  {
    title: "EZTrack",
    description:
      "EZTrack localizes epileptogenic regions from intracranial EEG to support surgical planning in patients with drug-resistant epilepsy.",
    gradient: "from-[#664a85] via-[#7d5f78] to-[#905c3c]",
    image: "/extrack.png",
    link: "/eztrack",
  },
];

export default function ProductCards() {
  return (
    <section className="py-16 px-6 bg-[#9986bf]/10 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className={`rounded-3xl overflow-hidden bg-gradient-to-br ${product.gradient} min-h-[555px] flex flex-col group cursor-pointer transform hover:scale-[1.02] transition-all duration-500 no-underline shadow-sm hover:shadow-xl`}
            >
              <div className="p-8 sm:p-10 min-h-[220px]">
                <h3 className="text-4xl font-light mb-4 text-white">
                  {product.title}
                </h3>

                <p className="text-lg font-light leading-7 text-white/80 max-w-xl">
                  {product.description}
                </p>
              </div>

              <div className="px-6 sm:px-8">
                <div className="h-[230px] overflow-hidden bg-white rounded-2xl shadow-md flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={`${product.title} overview diagram`}
                    className="w-full h-full object-contain object-center p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="mt-auto p-8 sm:p-10">
                <div className="inline-flex items-center space-x-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-light">Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}