import { Link } from "react-router-dom";
import LegalDocument, { LegalSection } from "../components/LegalDocument";

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="September 7, 2026"
    >
      <p
        className="text-base leading-8"
        style={{ color: "#6e647b", fontWeight: 300 }}
      >
        Neurologic Solutions Inc. (“Neurologic Solutions,” “we,” “us,” or
        “our”) explains here how we collect, use, and share information when you
        visit neurologicsolutions.net and related pages (the “Site”). This
        policy is written for this marketing website. It does not describe
        patient-care systems, hospital EHR integrations, or product deployments
        under a separate customer contract or business associate agreement.
      </p>

      <LegalSection id="who" title="1. Who we are">
        <p>
          Neurologic Solutions Inc. develops EEG analytics software, including
          EpiScalp™ and EZTrack™. For privacy questions, email{" "}
          <a
            href="mailto:info@neurologicsolutions.net"
            className="underline underline-offset-4"
            style={{ color: "#2f2738" }}
          >
            info@neurologicsolutions.net
          </a>{" "}
          or call +1 (617) 549-8316.
        </p>
      </LegalSection>

      <LegalSection id="scope" title="2. Scope">
        <p>
          This policy covers information collected through the Site, including
          the contact form, cookie and consent tools, and standard server or
          hosting logs. It does not apply to third-party sites we link to, such
          as LinkedIn or publication hosts. Those services have their own
          policies.
        </p>
        <p>
          Do not submit protected health information (PHI) or other sensitive
          medical records through the Site or the contact form. This website is
          not intended as a HIPAA-covered patient portal.
        </p>
      </LegalSection>

      <LegalSection id="collect" title="3. Information we collect">
        <p>
          <strong style={{ color: "#2f2738", fontWeight: 500 }}>
            Information you provide.
          </strong>{" "}
          If you contact us, we collect your name, email address, subject,
          message, and any other details you include. We also record that you
          agreed to this policy when you submit the form.
        </p>
        <p>
          <strong style={{ color: "#2f2738", fontWeight: 500 }}>
            Technical data.
          </strong>{" "}
          Our hosting provider and content delivery network may automatically
          collect IP address, browser type, device type, referring URL, pages
          requested, dates and times of access, and similar log data needed to
          operate and secure the Site.
        </p>
        <p>
          <strong style={{ color: "#2f2738", fontWeight: 500 }}>
            Cookies and similar technologies.
          </strong>{" "}
          We store your cookie preference in your browser. Optional analytics or
          marketing cookies are not used unless you enable those categories. See
          the{" "}
          <Link to="/cookies" className="underline underline-offset-4" style={{ color: "#2f2738" }}>
            Cookie Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection id="notice" title="4. Notice at collection (California)">
        <p>
          If you are a California resident, we collect the following categories
          of personal information from the Site, for the purposes in this
          policy, and retain them as described in the Retention section:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Identifiers, such as name, email address, and IP address;
          </li>
          <li>
            Internet or electronic activity, such as pages viewed, browser type,
            and cookie choices; and
          </li>
          <li>
            Professional or other information you choose to include in a
            message.
          </li>
        </ul>
        <p>
          We collect this information directly from you and automatically from
          your device. We do not sell it or share it for cross-context
          behavioral advertising. We disclose it to service providers as needed
          to operate the Site and respond to you. You can use{" "}
          <strong style={{ color: "#2f2738", fontWeight: 500 }}>
            Your Privacy Choices
          </strong>{" "}
          in the footer, or send a browser Global Privacy Control (GPC) signal,
          which we honor by keeping analytics and marketing cookies off.
        </p>
      </LegalSection>

      <LegalSection id="use" title="5. How we use information">
        <p>We use Site information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>respond to inquiries and partnership or support requests;</li>
          <li>operate, secure, and improve the Site;</li>
          <li>remember cookie choices and honor opt-outs;</li>
          <li>comply with law and enforce our Terms of Use; and</li>
          <li>
            measure traffic only if you have allowed analytics cookies.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="legal-bases" title="6. Legal bases (EEA, UK, and similar laws)">
        <p>Where GDPR or UK GDPR applies, we rely on:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong style={{ color: "#2f2738", fontWeight: 500 }}>
              Consent
            </strong>{" "}
            for optional cookies and for sending us a message through the
            contact form;
          </li>
          <li>
            <strong style={{ color: "#2f2738", fontWeight: 500 }}>
              Legitimate interests
            </strong>{" "}
            to operate a secure website, prevent abuse, and respond to business
            inquiries, where those interests are not overridden by your rights;
            and
          </li>
          <li>
            <strong style={{ color: "#2f2738", fontWeight: 500 }}>
              Legal obligation
            </strong>{" "}
            when we must retain or disclose information to comply with law.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="sharing" title="7. How we share information">
        <p>
          We do not sell personal information. We do not share personal
          information for cross-context behavioral advertising. We may share
          information with:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            service providers who process data for us, including Formspree for
            contact-form delivery, and our website hosting and email providers;
          </li>
          <li>professional advisors, such as lawyers or accountants; and</li>
          <li>
            authorities or counterparties if required by law, legal process, or
            to protect rights, safety, or the Site.
          </li>
        </ul>
        <p>
          If we are involved in a merger, financing, or sale of assets,
          information may be transferred as part of that transaction, subject to
          appropriate protections.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="8. Retention">
        <p>
          Contact messages are kept as long as needed to respond and for a
          reasonable business-records period afterward, unless a longer period
          is required by law. Cookie preference data remains in your browser
          until you clear it or change your choice. Server logs are retained
          according to our hosting provider’s standard cycles.
        </p>
      </LegalSection>

      <LegalSection id="transfers" title="9. International transfers">
        <p>
          We are based in the United States. If you access the Site from another
          country, your information may be processed in the United States, where
          data protection rules may differ. Where required, we use appropriate
          safeguards with processors, such as standard contractual clauses.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="10. Your privacy rights">
        <p>
          Depending on where you live, you may have rights to access, correct,
          delete, or receive a copy of personal information, to restrict or
          object to certain processing, and to withdraw consent. You may also
          have the right to lodge a complaint with a supervisory authority.
        </p>
        <p>
          <strong style={{ color: "#2f2738", fontWeight: 500 }}>
            California (CCPA/CPRA).
          </strong>{" "}
          California residents may request to know, delete, or correct personal
          information we hold about them from the Site, and to opt out of sale
          or sharing. We do not sell or share personal information as defined by
          the CPRA, and we do not use or disclose sensitive personal information
          collected via this Site for purposes that require a separate limit-use
          right. We will not discriminate against you for exercising these
          rights. You may use an authorized agent as permitted by law. We honor
          Global Privacy Control as an opt-out of sale and sharing, and as a
          request to keep analytics and marketing cookies off.
        </p>
        <p>
          To make a request, email{" "}
          <a
            href="mailto:info@neurologicsolutions.net?subject=Privacy%20Request"
            className="underline underline-offset-4"
            style={{ color: "#2f2738" }}
          >
            info@neurologicsolutions.net
          </a>{" "}
          with “Privacy Request” in the subject line. We will verify your
          request as required by applicable law.
        </p>
      </LegalSection>

      <LegalSection id="children" title="11. Children">
        <p>
          The Site is intended for clinicians, researchers, partners, and other
          adults. We do not knowingly collect personal information from children
          under 16. If you believe a child has submitted information, contact us
          and we will delete it.
        </p>
      </LegalSection>

      <LegalSection id="security" title="12. Security">
        <p>
          We use reasonable administrative and technical measures appropriate to
          a public marketing website. No method of transmission or storage is
          completely secure. Please avoid sending passwords, medical records, or
          other highly sensitive data through the contact form.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="13. Changes">
        <p>
          We may update this policy from time to time. The “Last updated” date
          at the top will change when we do. Continued use of the Site after an
          update means you should review the revised policy.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
