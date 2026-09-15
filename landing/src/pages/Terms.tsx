import { useEffect } from 'react';
import Logo from '../components/ui/Logo';

const PAGE_TITLE = 'Terms of Service | CrowdSolve';
const PAGE_DESCRIPTION =
  'Terms governing subscriptions, free trials, account usage, AI tools, cancellations, and participation in the CrowdSolve founder community.';

const EMAIL = 'tim@crowdsolve.eco';

function EmailLink({ bold = false }: { bold?: boolean }) {
  const link = (
    <a href={`mailto:${EMAIL}`} className="text-brand-600 underline hover:text-brand-700">
      {EMAIL}
    </a>
  );
  return bold ? <strong>{link}</strong> : link;
}

export default function Terms() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    document.querySelector('meta[name="description"]')?.setAttribute('content', PAGE_DESCRIPTION);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <header className="pt-10 pb-6 px-6">
        <a href="/" className="inline-flex items-center">
          <Logo className="h-10" />
        </a>
      </header>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-brand-900 mb-3">Terms of Service</h1>
          <p className="text-sm font-bold text-brand-600 uppercase tracking-wide mb-12">
            Effective Date: September 15, 2026
          </p>

          <p className="text-slate-600 leading-relaxed mb-6">
            Welcome to CrowdSolve. These Terms of Service ("Terms") govern your access to
            and use of the CrowdSolve website, community, curriculum, events, AI tools, and
            related services (collectively, the "Service").
          </p>
          <p className="text-slate-600 leading-relaxed mb-12">
            By creating an account, beginning a free trial, purchasing a subscription, or
            otherwise using CrowdSolve, you agree to these Terms.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              1. What CrowdSolve Provides
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              CrowdSolve is a founder development platform designed to help entrepreneurs
              explore, validate, and grow startup ideas. The Service may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>Startup education and curriculum</li>
              <li>Community access</li>
              <li>Founder working sessions, workshops, and events</li>
              <li>Tools for customer discovery and market validation</li>
              <li>Feedback and guidance from mentors or CrowdSolve team members</li>
              <li>AI-assisted tools, including Marvin, CrowdSolve's AI startup assistant</li>
              <li>
                Other resources, programs, and services that CrowdSolve may introduce from
                time to time
              </li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              CrowdSolve provides education, tools, feedback, and community support. We do
              not guarantee that participation will result in funding, revenue, customers,
              product-market fit, business success, or any other particular outcome.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              2. Eligibility and Your Account
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You must be at least 18 years old and legally capable of entering into an
              agreement to use the Service.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              You are responsible for maintaining the accuracy of your account information
              and for activity occurring through your account.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You may not share your account credentials with another person or allow
              another person to use CrowdSolve through your paid account unless CrowdSolve
              has expressly permitted it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              3. Seven-Day Free Trial
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              New subscribers may receive a <strong>7-day free trial</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              No subscription fee will be charged during the trial period. Unless you cancel
              before the end of the 7-day trial, your account will automatically convert to
              a paid monthly subscription at the price shown when you sign up.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              By beginning a free trial and providing a payment method, you authorize
              CrowdSolve and its payment provider to charge that payment method when the
              trial ends and on a recurring monthly basis thereafter until you cancel or
              pause your subscription.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You may cancel during the trial period to avoid being charged.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              4. Monthly Subscription and Billing
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              After the free trial, CrowdSolve subscriptions are billed monthly in advance
              at the price presented to you when you subscribe.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Your subscription will automatically renew each month unless you cancel or
              pause it.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              CrowdSolve may change subscription pricing in the future. If we do, existing
              subscribers will receive reasonable advance notice before the new price
              applies to them.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Unless required by law or otherwise agreed by CrowdSolve, subscription
              payments already made are non-refundable.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              5. Cancelling Your Subscription
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You may cancel your monthly subscription <strong>at any time</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Cancellation does not require navigating an automated cancellation process.
              Simply send us written notice by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>
                Emailing <EmailLink />, or
              </li>
              <li>
                Sending Tim Wolters a direct message through the CrowdSolve community or
                another communication channel you normally use with CrowdSolve.
              </li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-4">
              We will process your cancellation promptly after receiving your request.
            </p>
            <p className="text-slate-600 leading-relaxed mb-2">
              Once your cancellation becomes effective:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>Future subscription charges will stop.</li>
              <li>Your CrowdSolve access will be terminated.</li>
              <li>
                Your startup information and account data will be removed from the active
                CrowdSolve platform.
              </li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-4">
              Because some information may temporarily remain in routine system backups or
              may need to be retained for accounting, legal, fraud-prevention, or regulatory
              purposes, deletion from every backup system may not occur immediately. Any
              retained information will no longer be used to provide your CrowdSolve account
              and will be deleted or anonymized in accordance with our normal
              data-retention practices.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If you think you were charged after properly cancelling, contact <EmailLink />{' '}
              and we will investigate the issue.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              6. Pausing Your Subscription
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Instead of cancelling, you may request that your CrowdSolve subscription be{' '}
              <strong>paused</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              To pause your subscription, send written notice to <EmailLink /> or send Tim
              Wolters a direct message.
            </p>
            <p className="text-slate-600 leading-relaxed mb-2">While your account is paused:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>Monthly subscription billing is suspended.</li>
              <li>
                Your account, startup profile, curriculum progress, and other information
                are maintained within CrowdSolve.
              </li>
              <li>
                You may continue to receive CrowdSolve announcements, notifications, program
                information, and community updates.
              </li>
              <li>
                You may retain access to portions of the CrowdSolve platform that CrowdSolve
                makes available to paused members.
              </li>
              <li>
                You may <strong>not participate in subscriber-only working sessions,
                coaching sessions, or similar programming</strong>.
              </li>
              <li>
                You may <strong>not receive individualized feedback, analysis, or
                assistance from Marvin or other CrowdSolve AI tools regarding your
                startup</strong>.
              </li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-4">
              You may reactivate your subscription at any time by notifying CrowdSolve. Your
              normal subscription billing and full member access will resume when your
              account is reactivated.
            </p>
            <p className="text-slate-600 leading-relaxed">
              CrowdSolve may periodically contact paused members to determine whether they
              would like to reactivate or cancel their account.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              7. Your Startup Information and Intellectual Property
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>
                You retain ownership of the startup ideas, business information, documents,
                research, intellectual property, and other materials that you provide to
                CrowdSolve.
              </strong>
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              By submitting information to CrowdSolve, you give us a limited license to
              store, process, analyze, display, and otherwise use that information as
              reasonably necessary to operate the Service and provide the features you
              request.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              CrowdSolve does not acquire ownership of your startup or your intellectual
              property merely because you participate in the Service.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We may use aggregated or de-identified information to understand how founders
              use CrowdSolve, improve the Service, and evaluate program effectiveness,
              provided that this information does not reasonably identify you or disclose
              your confidential startup information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              8. Community Information Is Not Automatically Confidential
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              CrowdSolve includes community features that encourage founders to communicate
              with one another.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Information that you voluntarily post in community discussions, events,
              comments, profiles, or other shared areas may be visible to other CrowdSolve
              members.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              You should not post trade secrets, confidential information, personally
              sensitive information, or third-party information in a shared area unless you
              are comfortable sharing it with the members who have access to that area.
            </p>
            <p className="text-slate-600 leading-relaxed">
              While we expect CrowdSolve members to respect one another and the
              confidentiality of fellow founders, CrowdSolve cannot guarantee that another
              community member will keep information confidential unless a separate
              confidentiality agreement applies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              9. Marvin and Other AI-Assisted Features
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              CrowdSolve may provide access to artificial intelligence tools, including{' '}
              <strong>Marvin</strong>, to help founders think through startup ideas, customer
              discovery, positioning, market research, experiments, and other aspects of
              building a company.
            </p>
            <p className="text-slate-600 leading-relaxed mb-2">
              AI-generated responses have limitations.
            </p>
            <p className="text-slate-600 leading-relaxed mb-2">Marvin may:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>Produce incomplete or inaccurate information.</li>
              <li>Misinterpret information you provide.</li>
              <li>
                Make recommendations that are inappropriate for your particular
                circumstances.
              </li>
              <li>Generate information that appears authoritative but is incorrect.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-4">
              You are responsible for evaluating AI-generated information before relying on
              it.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Marvin and other CrowdSolve AI tools are intended to assist your thinking and
              are{' '}
              <strong>
                not a substitute for professional legal, accounting, tax, investment,
                financial, medical, or other regulated professional advice
              </strong>
              .
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              You remain responsible for all decisions you make concerning your startup.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Information provided to AI-assisted features may be processed by technology
              providers that CrowdSolve uses to operate those features, subject to the
              applicable privacy and data-processing arrangements governing those services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              10. Founder and Mentor Feedback
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Advice, feedback, coaching, mentorship, workshops, and community discussions
              provided through CrowdSolve represent opinions and educational guidance.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Mentors, speakers, advisors, community members, and other participants may
              have different perspectives, and CrowdSolve does not guarantee the accuracy or
              suitability of their recommendations.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You remain solely responsible for business, financial, legal, product,
              fundraising, hiring, and other decisions related to your startup.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">11. Acceptable Use</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We want CrowdSolve to be a useful and respectful founder community.
            </p>
            <p className="text-slate-600 leading-relaxed mb-2">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>Harass, threaten, or abuse other members.</li>
              <li>Misrepresent your identity or business.</li>
              <li>Use CrowdSolve for illegal activities.</li>
              <li>Attempt to gain unauthorized access to another user's information.</li>
              <li>Scrape, copy, or systematically extract CrowdSolve content without permission.</li>
              <li>Upload malware or intentionally interfere with the Service.</li>
              <li>
                Use another founder's confidential information or intellectual property
                without permission.
              </li>
              <li>
                Use CrowdSolve primarily to spam, solicit, or market unrelated products or
                services to other members.
              </li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              CrowdSolve may suspend or terminate accounts that materially violate these
              expectations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              12. CrowdSolve Content and Intellectual Property
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Except for information provided by users, CrowdSolve owns or licenses the
              curriculum, software, designs, branding, instructional materials, AI prompts
              and workflows, videos, written content, tools, and other intellectual property
              used to provide the Service.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Your subscription gives you a limited, personal, non-exclusive right to use
              these materials for your own startup development.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Unless CrowdSolve gives you permission, you may not reproduce, resell,
              sublicense, publish, create a competing service from, or commercially
              distribute CrowdSolve materials.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">13. Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              CrowdSolve may rely on third-party platforms and service providers for
              community hosting, payments, video conferencing, artificial intelligence,
              email, analytics, and other functionality.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Those services may have their own terms and privacy policies.
            </p>
            <p className="text-slate-600 leading-relaxed">
              CrowdSolve is not responsible for outages, changes, security incidents, or
              other actions of third-party providers that are outside CrowdSolve's
              reasonable control.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">14. Changes to the Service</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              CrowdSolve is an evolving startup platform. We may add, change, replace, or
              discontinue features, curriculum, programming, AI capabilities, events, or
              other portions of the Service.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may also modify these Terms from time to time.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              If we make a material change that significantly affects existing subscribers,
              we will provide reasonable notice through email, the CrowdSolve community, or
              the Service.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Continued use of CrowdSolve following the effective date of updated Terms
              constitutes acceptance of those Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              15. Availability and Disclaimer of Warranties
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              CrowdSolve strives to provide a valuable and reliable Service, but we cannot
              guarantee uninterrupted or error-free operation.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              To the fullest extent permitted by law, the Service is provided{' '}
              <strong>"as is" and "as available"</strong> without warranties of any kind,
              whether express or implied.
            </p>
            <p className="text-slate-600 leading-relaxed mb-2">We do not guarantee:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>Business success</li>
              <li>Investment or fundraising</li>
              <li>Customer acquisition</li>
              <li>Revenue</li>
              <li>Product-market fit</li>
              <li>Accuracy of AI-generated information</li>
              <li>Availability of particular mentors, events, features, or opportunities</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Entrepreneurship involves substantial uncertainty and risk. You are
              responsible for how you apply what you learn through CrowdSolve.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">16. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              To the fullest extent permitted by applicable law, CrowdSolve and its
              officers, employees, contractors, mentors, advisors, and affiliates will not
              be liable for indirect, incidental, special, consequential, or punitive
              damages arising from your use of the Service or decisions you make based on
              information obtained through CrowdSolve.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              To the fullest extent permitted by law, CrowdSolve's total liability for any
              claim relating to the Service will not exceed the amount you paid CrowdSolve
              during the six months immediately preceding the event giving rise to the
              claim.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nothing in these Terms limits liability that cannot legally be limited or
              excluded.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              17. Suspension or Termination by CrowdSolve
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              CrowdSolve may suspend or terminate an account for material violations of
              these Terms, misuse of the Service, abuse of other community members,
              nonpayment, fraudulent activity, or conduct that creates a significant risk to
              CrowdSolve or its community.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whenever reasonably practical, we will attempt to address issues with a member
              before terminating an account.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">18. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              These Terms will be governed by the laws of the{' '}
              <strong>State of Colorado</strong>, without regard to conflict-of-law
              principles.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Any dispute that cannot be resolved informally will be brought in a court of
              competent jurisdiction located in Colorado, unless applicable law requires
              otherwise.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Before beginning formal legal proceedings, you and CrowdSolve agree to make a
              reasonable good-faith effort to resolve the issue directly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">19. Severability</h2>
            <p className="text-slate-600 leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the
              remaining provisions will continue in effect.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">20. Entire Agreement</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms, together with any applicable program-specific terms, payment
              terms, or Privacy Policy made available by CrowdSolve, constitute the
              agreement between you and CrowdSolve concerning your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-900 mb-4">21. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Questions, cancellation requests, pause requests, or concerns about these
              Terms can be sent to:
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong>CrowdSolve</strong>
              <br />
              <strong>Email: </strong>
              <EmailLink bold />
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
