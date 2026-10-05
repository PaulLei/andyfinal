import { Link } from "react-router-dom";
import LegalDocument, { LegalSection } from "../components/LegalDocument";

export default function CookiePolicyPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Cookie Policy"
      lastUpdated="September 7, 2026"
    >
      <p
        className="text-base leading-8"
        style={{ color: "#6e647b", fontWeight: 300 }}
      >
        This Cookie Policy explains how Neurologic Solutions Inc. uses cookies
        and similar technologies on this Site, and how you can control them. It
        should be read together with our{" "}
        <Link to="/privacy" className="underline underline-offset-4" style={{ color: "#2f2738" }}>
          Privacy Policy
        </Link>
        .
      </p>

      <LegalSection id="what" title="1. What cookies are">
        <p>
          Cookies are small text files stored on your device. Similar
          technologies include local storage, pixels, and scripts. They can be
          first-party (set by us) or third-party (set by a provider such as a
          form or analytics service).
        </p>
      </LegalSection>

      <LegalSection id="how" title="2. How we use cookies">
        <p>
          We use a consent record so the Site can remember your choice. We do
          not load analytics or advertising tags unless you enable those
          categories. Necessary technologies may still run so the Site and
          contact form can function.
        </p>
      </LegalSection>

      <LegalSection id="types" title="3. Categories">
        <p>
          <strong style={{ color: "#2f2738", fontWeight: 500 }}>
            Necessary.
          </strong>{" "}
          Required to provide the Site, keep it secure, process contact
          submissions, and store your cookie preference. These do not require
          opt-in under typical EU/UK guidance because they are strictly
          necessary.
        </p>
        <p>
          <strong style={{ color: "#2f2738", fontWeight: 500 }}>
            Functional.
          </strong>{" "}
          Optional features that remember settings or improve experience. Off
          until you allow them.
        </p>
        <p>
          <strong style={{ color: "#2f2738", fontWeight: 500 }}>
            Analytics.
          </strong>{" "}
          Optional measurement of how the Site is used. Off until you allow
          them. We currently do not load a third-party analytics product unless
          this category is enabled and a tag is later configured.
        </p>
        <p>
          <strong style={{ color: "#2f2738", fontWeight: 500 }}>
            Marketing.
          </strong>{" "}
          Optional advertising or remarketing technologies. Off until you allow
          them. We currently do not run advertising pixels unless this category
          is enabled and a tag is later configured.
        </p>
      </LegalSection>

      <LegalSection id="table" title="4. Cookies and storage we use">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <caption className="sr-only">
              List of cookies and local storage used on this website
            </caption>
            <thead>
              <tr className="border-b" style={{ borderColor: "rgba(47, 39, 56, 0.10)" }}>
                <th className="py-2 pr-4 font-medium" style={{ color: "#2f2738" }}>
                  Name
                </th>
                <th className="py-2 pr-4 font-medium" style={{ color: "#2f2738" }}>
                  Category
                </th>
                <th className="py-2 font-medium" style={{ color: "#2f2738" }}>
                  Purpose and duration
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b align-top" style={{ borderColor: "rgba(47, 39, 56, 0.10)" }}>
                <td className="py-3 pr-4">nls_cookie_consent</td>
                <td className="py-3 pr-4">Necessary</td>
                <td className="py-3">
                  Stores your cookie categories and the date of your choice in
                  local storage until you clear site data or update settings.
                </td>
              </tr>
              <tr className="align-top">
                <td className="py-3 pr-4">Formspree session cookies</td>
                <td className="py-3 pr-4">Necessary</td>
                <td className="py-3">
                  Set by Formspree when you submit the contact form, to deliver
                  the message and protect against abuse. Duration is determined
                  by Formspree.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection id="choices" title="5. Your choices">
        <p>
          You can Accept all, Reject optional, or open Cookie settings from the
          banner or the footer. You can also control cookies in your browser,
          including blocking or deleting them. Blocking necessary cookies may
          prevent parts of the Site, including the contact form, from working.
        </p>
        <p>
          If you are in the EEA or UK, optional cookies are used only after you
          opt in. If you are in California, we do not sell or share personal
          information for cross-context behavioral advertising. Limiting
          optional cookies is an additional control you can use at any time.
          If your browser sends a Global Privacy Control (GPC) signal, we keep
          analytics and marketing cookies off. You can also open Your Privacy
          Choices in the footer.
        </p>
      </LegalSection>

      <LegalSection id="updates" title="6. Updates">
        <p>
          We will update this policy if we add analytics, advertising, or other
          cookies. Check the “Last updated” date and review Cookie settings
          after material changes.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
