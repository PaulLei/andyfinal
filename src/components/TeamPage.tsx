import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import { hasProfileBio } from "../data/teamProfiles";

type Person = {
  name: string;
  role: string;
  image?: string;
  bioSlug?: string;
};

type Section = {
  heading: string;
  people: Person[];
};

const sections: Section[] = [
  {
    heading: "Team",
    people: [
      {
        name: "Andrew Gotshalk",
        role: "CEO",
        image: "/AndrewG.jpg",
        bioSlug: "andrew-gotshalk",
      },
      {
        name: "Sridevi Sarma, PhD",
        role: "President and Co-Founder",
        image: "/SrideviS.jpg",
        bioSlug: "sridevi-sarma",
      },
      {
        name: "Jorge Gonzelez-Martinez, MD PhD",
        role: "CMO and Co-Founder",
        image: "/JorgeG.jpg",
        bioSlug: "jorge-gonzelez-martinez",
      },
      {
        name: "Mark Hays, PhD",
        role: "Director of Product Development",
        image: "/MarkH.jpg",
        bioSlug: "mark-hays",
      },
      {
        name: "Golnoosh Kamali, PhD",
        role: "Director of Site Engagement",
        image: "/GolnooshK.jpg",
        bioSlug: "golnoosh-kamali",
      },
    ],
  },
  {
    heading: "Consultants",
    people: [
      {
        name: "John Gale, PhD",
        role: "Domain Expert",
        image: "/JohnG.jpg",
        bioSlug: "john-gale",
      },
      {
        name: "Kristín Gunnarsdóttir",
        role: "Data Scientist",
        image: "/KristinG.jpg",
      },
      {
        name: "Chas McKhann",
        role: "Business Consultant",
        image: "/ChasM.jpg",
      },
    ],
  },
  {
    heading: "Board Of Advisors",
    people: [
      {
        name: "William S Anderson, MA, MD, PhD",
        role: "Advisor",
        image: "/WilliamA.jpg",
        bioSlug: "william-s-anderson",
      },
      {
        name: "Chuck Montague, PhD",
        role: "Advisor",
        image: "/ChuckM.jpg",
        bioSlug: "chuck-montague",
      },
      {
        name: "Ian Tolfree, PhD",
        role: "Advisor",
        image: "/IanT.jpg",
        bioSlug: "ian-tolfree",
      },
      {
        name: "Myron Weisfeldt, MD",
        role: "Advisor",
        image: "/MyronW.jpg",
      },
    ],
  },
];

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .replace(/,.*$/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <div className="flex h-[300px] w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
        <span className="text-xl font-semibold text-slate-700">{initials}</span>
      </div>
    </div>
  );
}

function PersonImage({ person }: { person: Person }) {
  const safeName = person.name.replace(/,.*$/, "");

  if (!person.image) {
    return <InitialsAvatar name={person.name} />;
  }

  return (
    <div className="relative h-[300px] w-full overflow-hidden bg-slate-100">
      <img
        src={person.image}
        alt={safeName}
        className="h-full w-full object-cover object-[center_top]"
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget;
          const fallback = img.nextElementSibling as HTMLElement | null;
          img.style.display = "none";
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div className="hidden h-full w-full">
        <InitialsAvatar name={person.name} />
      </div>
    </div>
  );
}

function PersonCard({ person }: { person: Person }) {
  const showBio = hasProfileBio(person.bioSlug);
  const cardClasses =
    "group block overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl";

  const content = (
    <>
      <PersonImage person={person} />

      <div className="px-5 py-5 text-center">
        <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-blue-600">
          {person.name}
        </div>

        <div className="mt-2 min-h-[2.75rem] text-sm leading-6 text-slate-600">
          {person.role}
        </div>

        {showBio ? (
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors group-hover:text-blue-600">
            <span>View bio</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        ) : (
          <div className="mt-4 h-[20px]" />
        )}
      </div>
    </>
  );

  if (!showBio || !person.bioSlug) {
    return <div className={cardClasses}>{content}</div>;
  }

  return (
    <Link to={`/about/${person.bioSlug}`} className={cardClasses}>
      {content}
    </Link>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 pt-10 pb-12 md:pt-12 md:pb-14">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-10 top-8 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl" />
          <div className="absolute right-10 top-16 h-72 w-72 rounded-full bg-cyan-100/25 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-4 flex items-center gap-3">
            <Users className="h-7 w-7 text-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              People
            </span>
          </div>

          <h1 className="text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Neurologic Solutions
          </h1>

          <p className="mt-4 max-w-3xl text-lg font-medium text-slate-600">
            Team, consultants, and advisors supporting Neurologic Solutions.
          </p>

          <p className="mt-6 text-sm text-slate-600">
            Neurologic Solutions was founded in 2016 by Dr. Sridevi Sarma, inventor
            and Professor of Biomedical Engineering at Johns Hopkins University,
            along with Dr. Jorge Gonzalez-Martinez, former lead neurosurgeon of the
            Cleveland Clinic and current neurosurgeon at UPMC. The company combines
            biomedical engineering innovation with clinical expertise in epilepsy care.
          </p>
        </div>
      </section>

      <div className="px-6 py-10 md:py-5">
        <div className="mx-auto max-w-7xl space-y-12">
          {sections.map((section) => (
            <section key={section.heading}>
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-slate-100 pb-4">
                <h2 className="text-3xl font-light tracking-tight text-slate-900 md:text-4xl">
                  {section.heading}
                </h2>
                <div className="hidden h-px flex-1 bg-slate-100 md:block" />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {section.people.map((person) => (
                  <PersonCard key={person.name} person={person} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}