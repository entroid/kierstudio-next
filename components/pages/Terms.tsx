import { InfoPage } from "@/components/InfoPage";

export default function Terms() {
  return (
    <InfoPage title="Terms of Service" backHref="/" backLabel="Back to Home">
      <h2>Agreement to Terms</h2>
      <p>
        These Terms of Service constitute a legally binding agreement made between you and our
        studio concerning your access to and use of this website. By accessing the site, you agree
        to be bound by these Terms.
      </p>

      <h2>Intellectual Property Rights</h2>
      <p>
        The site and its original content, features, and functionality are owned by our studio and
        are protected by international copyright, trademark, and other intellectual property laws.
      </p>

      <h2>User Representations</h2>
      <p>
        By using the site, you represent and warrant that all information you submit is true,
        accurate, and complete, and that you have the legal capacity to comply with these Terms.
      </p>

      <h2>Prohibited Activities</h2>
      <p>
        You may not access or use the site for any purpose other than that for which we make the
        site available. Prohibited activity includes, but is not limited to: unauthorized use,
        interference with security features, or use in violation of any applicable law or
        regulation.
      </p>

      <h2>Termination</h2>
      <p>
        We reserve the right to terminate or suspend access to our site immediately, without prior
        notice or liability, for any reason, including without limitation if you breach the Terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        For questions about these Terms, contact us at{" "}
        <a href="mailto:info@kierstudio.com">info@kierstudio.com</a>.
      </p>
    </InfoPage>
  );
}
