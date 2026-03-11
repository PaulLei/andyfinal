import { Link, useParams } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";
import { teamProfilesBySlug } from "../data/teamProfiles";

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .replace(/,.*$/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
        <span className="text-2xl font-semibold text-slate-700">{initials}</span>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const { person } = useParams();
  const profile = person ? teamProfilesBySlug[person] : undefined;

  if (!profile || profile.bio.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-light tracking-tight text-slate-900">
              Bio not available
            </h1>
            <p className="mt-4 text-slate-600">
              This person does not currently have a published bio page.
            </p>
            <Link
              to="/team"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Team
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 pt-10 pb-12 md:pt-12 md:pb-14">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-10 top-8 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl" />
          <div className="absolute right-10 top-16 h-72 w-72 rounded-full bg-cyan-100/25 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <Link
            to="/team"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Team
          </Link>

          <div className="grid items-start gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12">
            <div className="self-start overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="h-[380px] w-full overflow-hidden bg-slate-100">
                {profile.image ? (
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="h-full w-full object-cover object-[center_top]"
                  />
                ) : (
                  <InitialsAvatar name={profile.name} />
                )}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <User className="h-6 w-6 text-blue-600" />
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Background
                </span>
              </div>

              <h1 className="text-4xl font-light leading-tight tracking-tight text-slate-900 md:text-5xl">
                {profile.name}
              </h1>

              <p className="mt-4 text-lg font-medium text-slate-600">
                {profile.role}
              </p>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
                {profile.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}