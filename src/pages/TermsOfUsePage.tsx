import { Link } from "react-router-dom";
import LegalDocument, { LegalSection } from "../components/LegalDocument";

export default function TermsOfUsePage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms of Use"
      lastUpdated="September 7, 2026"
    >
      <p
        className="text-base leading-8"
        style={{ color: "#6e647b", fontWeight: 300 }}
      >
        These Terms of Use (“Terms”) govern your access to the Neurologic
        Solutions Inc. website. By using the Site, you agree to these Terms. If
        you do not agree, do not use the Site.
      </p>

      <LegalSection id="site" title="1. About the Site">
        <p>
          The Site provides general information about Neurologic Solutions,
          EpiScalp™, EZTrack™, research, news, and how to contact us. Content is
          for informational purposes. It is not medical advice, a diagnosis, or
          a substitute for professional clinical judgment. Product availability,
          regulatory status, and intended use may vary by jurisdiction and are
          described more specifically in product labeling and customer
          agreements.
        </p>
      </LegalSection>

      <LegalSection id="not-advice" title="2. No medical or professional advice">
        <p>
          Nothing on the Site creates a physician–patient relationship. Always
          seek the advice of qualified clinicians for medical questions.
          Publication summaries and clinical-evidence descriptions are
          educational and may not reflect every study limitation or current
          labeling.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" title="3. Eligibility">
        <p>
          You must be at least 18 years old, or the age of majority in your
          place of residence, to use the Site. You agree to use the Site only
          for lawful purposes and in a way that does not harm the Site, other
          users, or Neurologic Solutions.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="4. Intellectual property">
        <p>
          The Site, including text, graphics, logos, trademarks (including
          Neurologic Solutions, EpiScalp™, and EZTrack™), videos, and layout, is
          owned by Neurologic Solutions or its licensors and is protected by
          intellectual-property laws. You may view and print pages for personal
          or internal business evaluation. You may not copy, scrape, reverse
          engineer, or commercially reuse Site materials without our prior
          written consent, except as allowed by law.
        </p>
      </LegalSection>

      <LegalSection id="user-content" title="5. Contact submissions">
        <p>
          If you send us a message or other material through the Site, you grant
          Neurologic Solutions a non-exclusive license to use that content to
          respond and to operate our business. You represent that your
          submission is accurate, that you have the right to send it, and that
          it does not include confidential patient records or other information
          you are not authorized to share. See our{" "}
          <Link to="/privacy" className="underline underline-offset-4" style={{ color: "#2f2738" }}>
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection id="third-parties" title="6. Third-party services and links">
        <p>
          The Site may link to publications, news, LinkedIn, or other websites.
          Contact-form delivery is processed by Formspree. We are not
          responsible for third-party content, terms, or privacy practices.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" title="7. Disclaimers">
        <p>
          THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT
          PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, WHETHER EXPRESS,
          IMPLIED, OR STATUTORY, INCLUDING MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. We do not warrant
          that the Site will be uninterrupted, error-free, or free of harmful
          components, or that content is complete or current.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="8. Limitation of liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEUROLOGIC SOLUTIONS AND ITS
          OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
          DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR
          USE OF THE SITE. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF THE
          SITE WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (US $100). Some
          jurisdictions do not allow certain limitations; in those places, our
          liability is limited to the fullest extent permitted.
        </p>
      </LegalSection>

      <LegalSection id="indemnity" title="9. Indemnity">
        <p>
          You agree to indemnify and hold harmless Neurologic Solutions from
          claims, damages, and expenses (including reasonable attorneys’ fees)
          arising from your misuse of the Site or your violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection id="law" title="10. Governing law">
        <p>
          These Terms are governed by the laws of the Commonwealth of
          Massachusetts, excluding conflict-of-law rules. Courts located in
          Massachusetts will have exclusive jurisdiction, except where
          applicable consumer law gives you the right to bring claims in your
          home jurisdiction.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes">
        <p>
          We may revise these Terms by posting an updated version on the Site.
          The “Last updated” date will change when we do. Continued use after
          changes constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact">
        <p>
          Neurologic Solutions Inc.
          <br />
          Email: info@neurologicsolutions.net
          <br />
          Phone: +1 (617) 549-8316
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
