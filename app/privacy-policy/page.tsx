import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Full-width header row */}
        <div className="app-px pt-12 md:pt-16 mb-10">
          <h1 className="font-[family-name:var(--font-playfair)] text-[56px] font-extrabold text-black leading-tight">
            Privacy Policy
          </h1>
        </div>

        <section className="app-px pb-12 md:pb-16 max-w-4xl">

          {/* Intro */}
          <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] leading-relaxed mb-10">
            DEVln is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and safeguard your information when
            you use our services.
          </p>

          <div className="flex flex-col gap-8">
            {/* 1 */}
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-[18px] font-semibold text-black mb-3">
                1. Information We Collect
              </h2>
              <ul className="flex flex-col gap-1.5 font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] leading-relaxed">
                <li>
                  <span className="font-normal text-[#747474]">Contact information:</span>{" "}
                  Name, email address, phone number
                </li>
                <li>
                  <span className="font-normal text-[#747474]">Business details:</span>{" "}
                  Company name, role, billing and payment details
                </li>
                <li>
                  <span className="font-normal text-[#747474]">Project Materials:</span>{" "}
                  Content, images, logos, and other materials you provide for
                  web/design development
                </li>
                <li>
                  <span className="font-normal text-[#747474]">Payment Information:</span>{" "}
                  Processed securely through third-party payment processors (we
                  do not store payment card details)
                </li>
                <li>
                  <span className="font-normal text-[#747474]">Communication Data:</span>{" "}
                  Messages sent via email, Instagram DMs, contact forms, or
                  other channels
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-[18px] font-semibold text-black mb-3">
                2. How We Collect Information
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] mb-2">
                We collect information through:
              </p>
              <ul className="flex flex-col gap-1 font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] list-disc list-inside leading-relaxed">
                <li>Contact forms on our website</li>
                <li>Email correspondence</li>
                <li>Instagram direct messages</li>
                <li>Google Forms</li>
                <li>Phone calls</li>
                <li>Project briefing documents</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-[18px] font-semibold text-black mb-3">
                3. How We Use Your Information
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] mb-2">
                We use your information to:
              </p>
              <ul className="flex flex-col gap-1 font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] list-disc list-inside leading-relaxed mb-4">
                <li>Deliver our services (web design/development, marketing)</li>
                <li>Communicate project updates and deliverables</li>
                <li>Process payments</li>
                <li>
                  Provide technical support and maintenance (when requested)
                </li>
                <li>Respond to enquiries and support requests</li>
                <li>
                  We do not use your information for marketing purposes unless
                  you explicitly opt in
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-[18px] font-semibold text-black mb-3">
                4. Data Sharing
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] mb-2">
                We may share your information with:
              </p>
              <ul className="flex flex-col gap-1.5 font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] list-disc list-inside leading-relaxed mb-3">
                <li>
                  <span className="font-normal text-[#747474]">Our Team:</span>{" "}
                  Internal team members (developers, designers) who work on your
                  project
                </li>
                <li>
                  <span className="font-normal text-[#747474]">Service Providers:</span>{" "}
                  Hosting providers, domain registrars, and payment processors
                  necessary to deliver services
                </li>
                <li>
                  <span className="font-normal text-[#747474]">Legal Requirements:</span>{" "}
                  When required by law or to protect our rights
                </li>
              </ul>
              <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474]">
                We do not sell, rent, or trade your personal information to
                third parties.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-[18px] font-semibold text-black mb-3">
                5. Data Storage and Security
              </h2>
              <ul className="flex flex-col gap-1 font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] list-disc list-inside leading-relaxed">
                <li>We store your data securely using industry-standard practices</li>
                <li>
                  Data is retained only until your project is complete, unless
                  ongoing maintenance or support is required
                </li>
                <li>
                  After project completion, data is deleted unless you request
                  otherwise
                </li>
                <li>
                  We use secure communication channels and encrypted storage
                  where applicable
                </li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-[18px] font-semibold text-black mb-3">
                6. Your Rights
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] mb-2">
                You have the right to:
              </p>
              <ul className="flex flex-col gap-1.5 font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] list-disc list-inside leading-relaxed mb-3">
                <li>
                  <span className="font-normal text-[#747474]">Access:</span>{" "}
                  Request a copy of the data we hold about you
                </li>
                <li>
                  <span className="font-normal text-[#747474]">Correction:</span>{" "}
                  Request correction of inaccurate or incomplete data
                </li>
                <li>
                  <span className="font-normal text-[#747474]">Deletion:</span>{" "}
                  Request deletion of your data after project completion
                </li>
                <li>
                  <span className="font-normal text-[#747474]">Objection:</span>{" "}
                  Object to how we process your data
                </li>
                <li>
                  <span className="font-normal text-[#747474]">Portability:</span>{" "}
                  Request your data in a transferable format
                </li>
              </ul>
              <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474]">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:team@devln.co.uk"
                  className="text-[#38D6C4] hover:underline"
                >
                  team@devln.co.uk
                </a>
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-[18px] font-semibold text-black mb-3">
                7. Cookies and Tracking
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] leading-relaxed">
                Our website may use cookies and analytics tools such as Google
                Analytics to improve user experience. You can disable cookies in
                your browser settings, though this may affect website
                functionality.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-[18px] font-semibold text-black mb-3">
                8. International Data Transfers
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] leading-relaxed">
                We operate worldwide with headquarters in the United Kingdom.
                Your data may be processed in various locations depending on
                project requirements. We ensure appropriate safeguards are in
                place for international data transfers, in compliance with
                applicable data protection laws.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-[18px] font-semibold text-black mb-3">
                9. Data Protection Laws
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] mb-2">
                We comply with:
              </p>
              <ul className="flex flex-col gap-1 font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] list-disc list-inside leading-relaxed">
                <li>UK GDPR (General Data Protection Regulation)</li>
                <li>Data Protection Act 2018</li>
                <li>
                  Applicable data protection laws in jurisdictions where we
                  operate
                </li>
              </ul>
            </div>

            {/* 10 */}
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-[18px] font-semibold text-black mb-3">
                10. Third-Party Links
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] leading-relaxed">
                Our services may include links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites. We encourage you to review their privacy policies.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-[18px] font-semibold text-black mb-3">
                11. Changes to This Policy
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page. Continued use of our services
                constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-[18px] font-semibold text-black mb-3">
                12. Contact Us
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] mb-3">
                If you have questions about this Privacy Policy or how we handle
                your data, please contact us:
              </p>
              <div className="flex flex-col gap-1 font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474]">
                <p>DEVln</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:team@devln.co.uk"
                    className="text-[#38D6C4] hover:underline"
                  >
                    team@devln.co.uk
                  </a>
                </p>
                <p>Headquarters: United Kingdom</p>
              </div>
            </div>

            {/* Footer note */}
            <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#747474] border-t border-gray-100 pt-6">
              By using our services, you acknowledge that you have read and
              understood this Privacy Policy.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
