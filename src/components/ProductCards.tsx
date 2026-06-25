import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    title: "EpiScalp",
    description:
      "EpiScalp quantifies any scalp EEG, normal or abnormal, to support clinicians in earlier diagnosis of epilepsy in patients with first-time seizures.",
    gradient: "from-[#905c3c] via-[#7d5f78] to-[#664a85]",
    image: "/extrack.png",
    link: "/episcalp",
  },
  {
    title: "EZTrack",
    description:
      "EZTrack localizes epileptogenic regions from intracranial EEG to support surgical planning in patients with drug-resistant epilepsy.",
    gradient: "from-[#664a85] via-[#7d5f78] to-[#905c3c]",
    image: "/eps.png",
    link: "/eztrack",
  },
];

export default function ProductCards() {
  return (
    <section className="bg-[#9986bf]/10 px-6 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-stretch gap-5 md:grid-cols-2">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className={`group flex min-h-[430px] cursor-pointer flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${product.gradient} no-underline shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-xl`}
            >
              <div className="p-6 pb-4 sm:p-7 sm:pb-5">
                <h3 className="mb-3 text-3xl font-light text-white sm:text-4xl">
                  {product.title}
                </h3>

                <p className="max-w-xl text-base font-light leading-6 text-white/80 sm:text-lg sm:leading-7">
                  {product.description}
                </p>
              </div>

              <div className="px-5 sm:px-6">
                <div className="flex h-[190px] items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md sm:h-[210px]">
                  <img
                    src={product.image}
                    alt={`${product.title} overview diagram`}
                    className="h-full w-full object-contain object-center p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="mt-auto p-6 pt-5 sm:p-7 sm:pt-5">
                <div className="inline-flex items-center space-x-2 text-white transition-transform duration-300 group-hover:translate-x-2">
                  <span className="font-light">Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}