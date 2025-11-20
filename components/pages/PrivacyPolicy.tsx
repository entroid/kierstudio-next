import { InfoPage } from "@/components/InfoPage";

export default function PrivacyPolicy() {
  return (
    <InfoPage title="Privacy Policy" backHref="/" backLabel="Back to Home">
      <h2>Introduction</h2>
      <p>
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information
        when you visit our website. Please read this policy carefully. If you do not agree with the
        terms of this privacy policy, please do not access the site.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect information that you voluntarily provide to us when you contact us, subscribe
        to our newsletter, or submit a form. This may include your name, email address, project
        details, and any other information you choose to provide.
      </p>
      <p>
        We may also collect certain information automatically when you visit the site, such as your
        IP address, browser type, operating system, access times, and pages viewed. This information
        is used to maintain the security and operation of our site and for analytics.
      </p>

      <h2>Use of Your Information</h2>
      <p>We use the collected information to:</p>
      <ul>
        <li>Respond to inquiries and provide services</li>
        <li>Improve our website and user experience</li>
        <li>Send administrative information and updates</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>Sharing of Your Information</h2>
      <p>
        We do not sell your personal information. We may share information with trusted service
        providers who perform services for us (e.g., email delivery) and are bound to protect your
        information, or when required by law.
      </p>

      <h2>Cookies and Tracking Technologies</h2>
      <p>
        We may use cookies and similar technologies to improve site functionality and analyze usage.
        You can control cookies through your browser settings. Disabling cookies may affect some
        features of the site.
      </p>

      <h2>Data Security</h2>
      <p>
        We use reasonable administrative, technical, and physical security measures to protect your
        personal information. However, no method of transmission over the Internet or method of
        electronic storage is 100% secure.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfill the purposes
        outlined in this policy unless a longer retention period is required or permitted by law.
      </p>

      <h2>Your Rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, or delete your personal
        information. To exercise these rights, contact us using the details below.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our site may contain links to third-party websites. We are not responsible for the content
        or privacy practices of such sites. We encourage you to read their privacy policies.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Our services are not directed to individuals under the age of 13, and we do not knowingly
        collect personal information from children.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at{" "}
        <a href="mailto:info@kierstudio.com">info@kierstudio.com</a>.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The updated version will be indicated
        by an updated "Last updated" date and will be effective as soon as it is accessible.
      </p>
    </InfoPage>
  );
}
