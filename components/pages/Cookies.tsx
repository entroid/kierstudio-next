import { InfoPage } from "@/components/InfoPage";

export default function Cookies() {
  return (
    <InfoPage title="Cookie Policy" backHref="/" backLabel="Back to Home">
      <h2>What Are Cookies</h2>
      <p>
        Cookies are small text files that are placed on your device to help the site provide a
        better user experience. They are widely used to remember user preferences, store
        information, and provide anonymized tracking data to third-party applications.
      </p>

      <h2>How We Use Cookies</h2>
      <p>
        We use cookies to remember your preferences (like theme), maintain session information, and
        analyze site traffic to improve our services.
      </p>

      <h2>Managing Cookies</h2>
      <p>
        You can control and/or delete cookies as you wish. You can delete all cookies that are
        already on your device and set most browsers to prevent them from being placed. If you do
        this, however, you may have to manually adjust some preferences every time you visit the
        site and some services and functionalities may not work.
      </p>

      <h2>Third-Party Cookies</h2>
      <p>
        Some cookies may be set by third-party services that appear on our pages. We do not control
        the operation of these cookies. Please check the relevant third-party website for details of
        their cookie policy.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about our Cookie Policy, contact us at{" "}
        <a href="mailto:info@kierstudio.com">info@kierstudio.com</a>.
      </p>
    </InfoPage>
  );
}
