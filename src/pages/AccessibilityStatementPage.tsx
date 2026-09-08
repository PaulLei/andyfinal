import { Link } from "react-router-dom";
import LegalDocument, { LegalSection } from "../components/LegalDocument";

export default function AccessibilityStatementPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Accessibility Statement"
      lastUpdated="September 7, 2026"
    >
      <p
        className="text-base leading-8"
        style={{ color: "#6e647b", fontWeight: 300 }}
      >
        Neurologic Solutions Inc. aims to make this website usable by as many
        people as possible, including people who use keyboards, screen readers,
        and browser settings such as reduced motion.
      </p>

      <LegalSection id="measures" title="1. What we have implemented">
        <ul className="list-disc space-y-2 pl-5">
          <li>A skip link to the main content</li>
          <li>Page language set to English</li>
          <li>Labeled navigation, menus, and form fields</li>
          <li>Keyboard-visible focus styles</li>
          <li>Escape to close menus and cookie settings</li>
          <li>Reduced-motion handling for the homepage video</li>
          <li>Alternative text on key images</li>
        </ul>
      </LegalSection>

      <LegalSection id="standard" title="2. Standard we follow">
        <p>
          We work toward the Web Content Accessibility Guidelines (WCAG) 2.2
          Level AA. This statement describes our current marketing website. It
          is not a certified audit or a VPAT.
        </p>
      </LegalSection>

      <LegalSection id="limits" title="3. Known limits">
        <p>
          Some older pages, embedded media, PDFs, third-party widgets (including
          the contact-form processor), and complex product diagrams may not yet
          meet every WCAG criterion. We will continue to improve these areas.
        </p>
      </LegalSection>

      <LegalSection id="feedback" title="4. Feedback">
        <p>
          If you have trouble using the Site, email{" "}
          <a
            href="mailto:info@neurologicsolutions.net?subject=Accessibility%20feedback"
            className="underline underline-offset-4"
            style={{ color: "#2f2738" }}
          >
            info@neurologicsolutions.net
          </a>{" "}
          with “Accessibility feedback” in the subject line. Please include the
          page URL and a short description of the problem. We will try to
          provide the information another way.
        </p>
        <p>
          Related policies:{" "}
          <Link
            to="/privacy"
            className="underline underline-offset-4"
            style={{ color: "#2f2738" }}
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            to="/terms"
            className="underline underline-offset-4"
            style={{ color: "#2f2738" }}
          >
            Terms of Use
          </Link>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
