import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import { hasProfileBio } from "../data/teamProfiles";

type Person = {
  name: string;
  role: string;
  image?: string;
  bioSlug?: string;
  linkedIn?: string;
};

type Section = {
  heading: string;
  people: Person[];
};

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
    heading: "Advisors",
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
        bioSlug: "myron-weisfeldt",
       
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
        linkedIn: "https://www.linkedin.com/in/kristin-maria-gunnarsdottir/?originalSubdomain=is",
      },
      {
        name: "Chas McKhann",
        role: "Business Consultant",
        image: "/ChasM.jpg",
        linkedIn: "https://www.linkedin.com/in/chasmckhann/",
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
    <div
      className="flex h-[300px] w-full items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${BRAND.purpleSoft}, rgba(255,255,255,0.7))`,
      }}
    >
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full border bg-white shadow-sm"
        style={{ borderColor: BRAND.line }}
      >
        <span className="text-xl font-semibold" style={{ color: BRAND.ink }}>
          {initials}
        </span>
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
    <div
      className="relative h-[300px] w-full overflow-hidden"
      style={{ backgroundColor: "rgba(47, 39, 56, 0.04)" }}
    >
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
  const showBio = person.bioSlug ? hasProfileBio(person.bioSlug) : false;
  const hasLinkedIn = !!person.linkedIn;

  const cardClasses =
    "group flex flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";

  const content = (
    <>
      <PersonImage person={person} />

      <div className="px-6 py-6 text-center flex flex-col justify-between flex-1">
        <div>
          <div
            className="text-[12px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: BRAND.purpleDark }}
          >
            {person.name}
          </div>

          <div
            className="mt-3 text-sm leading-6"
            style={{ color: BRAND.muted }}
          >
            {person.role}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center">
          {(showBio || hasLinkedIn) && (
            <div
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: BRAND.muted }}
            >
              <span className="group-hover:text-[color:var(--hover-color)] [--hover-color:#7e6aa7]">
                {hasLinkedIn ? "View profile" : "View bio"}
              </span>
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                style={{ color: BRAND.purpleDark }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );

  if (hasLinkedIn) {
    return (
      <a
        href={person.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
        style={{
          borderColor: BRAND.line,
          backgroundColor: BRAND.card,
        }}
      >
        {content}
      </a>
    );
  }

  if (!showBio || !person.bioSlug) {
    return (
      <div
        className={cardClasses}
        style={{
          borderColor: BRAND.line,
          backgroundColor: BRAND.card,
        }}
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      to={`/about/${person.bioSlug}`}
      className={cardClasses}
      style={{
        borderColor: BRAND.line,
        backgroundColor: BRAND.card,
      }}
    >
      {content}
    </Link>
  );
}

export default function TeamPage() {
  return (
    <div
      className="min-h-screen pt-20"
      style={{
        backgroundColor: BRAND.bg,
        fontFamily:
          '"Typo Grotesk Rounded", "Typo Grotesk Rounded Light", Arial, sans-serif',
      }}
    >
      <section className="relative overflow-hidden px-6 pt-10 pb-12 md:pt-12 md:pb-14">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute left-10 top-8 h-72 w-72 rounded-full blur-3xl"
            style={{ background: BRAND.purpleSoft }}
          />
          <div
            className="absolute right-10 top-16 h-72 w-72 rounded-full blur-3xl"
            style={{ background: BRAND.orangeSoft }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-4 flex items-center gap-3">
            <Users className="h-7 w-7" style={{ color: BRAND.purpleDark }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: BRAND.purpleDark }}
            >
              People
            </span>
          </div>

          <h1
            className="text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: BRAND.ink }}
          >
            Neurologic Solutions
          </h1>

          <p
            className="mt-4 max-w-3xl text-lg font-medium"
            style={{ color: BRAND.muted }}
          >
            Team, consultants, and advisors supporting Neurologic Solutions.
          </p>

          <p className="mt-6 text-sm" style={{ color: BRAND.muted }}>
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
              <div
                className="mb-6 flex items-end justify-between gap-4 border-b pb-4"
                style={{ borderColor: BRAND.line }}
              >
                <h2
                  className="text-3xl font-light tracking-tight md:text-4xl"
                  style={{ color: BRAND.ink }}
                >
                  {section.heading}
                </h2>
                <div
                  className="hidden h-px flex-1 md:block"
                  style={{ backgroundColor: BRAND.line }}
                />
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