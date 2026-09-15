import LegalPageLayout from '../components/layout/LegalPageLayout';
import EmailLink from '../components/ui/EmailLink';

const EMAIL = 'tim@crowdsolve.eco';

export default function Privacy() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      pageTitle="Privacy Policy | CrowdSolve"
      description="How CrowdSolve collects, uses, and shares information, including startup data, community content, and AI tools like Marvin."
      effectiveDate="September 15, 2026"
    >
      <p className="text-slate-600 leading-relaxed mb-6">
        CrowdSolve respects your privacy and recognizes that founders may share sensitive
        business information while using our platform.
      </p>
      <p className="text-slate-600 leading-relaxed mb-6">
        This Privacy Policy explains what information CrowdSolve collects, how we use it,
        when we share it, and the choices you have regarding your information.
      </p>
      <p className="text-slate-600 leading-relaxed mb-6">
        This Privacy Policy applies to the CrowdSolve website, community, curriculum,
        events, AI tools, including Marvin, and other services we provide (collectively,
        the "Service").
      </p>
      <p className="text-slate-600 leading-relaxed mb-12">
        By using CrowdSolve, you acknowledge the practices described in this Privacy
        Policy.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">1. Information We Collect</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          We collect information that you provide directly to CrowdSolve, information
          generated through your use of the Service, and limited information provided by
          third-party services that help us operate CrowdSolve.
        </p>

        <h3 className="text-lg font-bold text-brand-900 mb-3">Account Information</h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          When you create or maintain a CrowdSolve account, we may collect information such
          as:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-6">
          <li>Your name</li>
          <li>Email address</li>
          <li>Profile information</li>
          <li>Company or startup name</li>
          <li>Job title or role</li>
          <li>Profile photo</li>
          <li>Location</li>
          <li>Login and account information</li>
          <li>Subscription status</li>
        </ul>

        <h3 className="text-lg font-bold text-brand-900 mb-3">
          Startup and Business Information
        </h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          CrowdSolve is designed to help founders develop and validate businesses. As a
          result, you may choose to provide information about your startup, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>Startup ideas</li>
          <li>Business descriptions</li>
          <li>Customer problems</li>
          <li>Target markets and customer segments</li>
          <li>Business models</li>
          <li>Market research</li>
          <li>Customer discovery information</li>
          <li>Interview notes</li>
          <li>Competitive research</li>
          <li>Product concepts</li>
          <li>Go-to-market plans</li>
          <li>Financial or business assumptions</li>
          <li>Experiments and results</li>
          <li>Pitch materials</li>
          <li>Website or marketing copy</li>
          <li>Startup milestones</li>
          <li>Founder questions and challenges</li>
          <li>
            Other materials submitted through the curriculum, community, or AI tools
          </li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-6">
          You retain ownership of the startup information and intellectual property you
          provide to CrowdSolve.
        </p>

        <h3 className="text-lg font-bold text-brand-900 mb-3">
          Curriculum and Activity Information
        </h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          We may collect information about how you use CrowdSolve, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-6">
          <li>Curriculum progress</li>
          <li>Lessons completed</li>
          <li>Exercises submitted</li>
          <li>Events or sessions attended</li>
          <li>Comments and community activity</li>
          <li>Feedback you request or receive</li>
          <li>Interaction with mentors or CrowdSolve team members</li>
          <li>Participation in programs, cohorts, and working sessions</li>
          <li>Use of Marvin or other CrowdSolve tools</li>
        </ul>

        <h3 className="text-lg font-bold text-brand-900 mb-3">Community Content</h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          If you post comments, questions, profiles, updates, files, or other information in
          community areas of CrowdSolve, that information may be visible to other members
          who have access to those areas.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          You should not assume that information posted in a shared community area is
          confidential.
        </p>

        <h3 className="text-lg font-bold text-brand-900 mb-3">Communications</h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          We may collect information when you communicate with CrowdSolve, including
          emails, direct messages, support requests, feedback, surveys, interviews, and
          other correspondence.
        </p>

        <h3 className="text-lg font-bold text-brand-900 mb-3">Payment Information</h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          If you purchase a CrowdSolve subscription or program, payment information is
          processed by our third-party payment providers.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          CrowdSolve generally does not store your complete credit card number or bank
          account information. We may receive limited transaction information such as:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-6">
          <li>Subscription status</li>
          <li>Amount paid</li>
          <li>Payment date</li>
          <li>Payment method type</li>
          <li>Transaction identifier</li>
          <li>Billing contact information</li>
        </ul>

        <h3 className="text-lg font-bold text-brand-900 mb-3">
          Technical and Usage Information
        </h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          When you use CrowdSolve, we and the technology providers we use may automatically
          collect information such as:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device type</li>
          <li>Operating system</li>
          <li>Pages viewed</li>
          <li>Features used</li>
          <li>Referring pages</li>
          <li>Dates and times of access</li>
          <li>Login activity</li>
          <li>Approximate geographic information</li>
          <li>Cookies and similar technologies</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          We use this information primarily to operate, secure, understand, and improve the
          Service.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">2. How We Use Information</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          CrowdSolve may use information we collect to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>Create and maintain your account.</li>
          <li>Provide access to the CrowdSolve curriculum and community.</li>
          <li>Personalize your founder experience.</li>
          <li>Track your curriculum progress.</li>
          <li>Provide feedback and recommendations.</li>
          <li>Operate Marvin and other AI-assisted tools.</li>
          <li>Facilitate mentoring, workshops, cohorts, and founder sessions.</li>
          <li>Communicate with you about your account.</li>
          <li>Send program announcements, opportunities, events, and community updates.</li>
          <li>Process subscriptions and payments.</li>
          <li>Respond to support requests.</li>
          <li>Understand how founders use CrowdSolve.</li>
          <li>
            Improve our curriculum, software, AI tools, programs, and user experience.
          </li>
          <li>Measure program effectiveness.</li>
          <li>Develop new CrowdSolve features and services.</li>
          <li>Detect fraud, misuse, or security problems.</li>
          <li>Protect CrowdSolve, its users, and its community.</li>
          <li>Meet legal, regulatory, accounting, and tax obligations.</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-4">
          We may also use aggregated or de-identified information for analytics, research,
          program evaluation, product improvement, or reporting.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Aggregated or de-identified information is information that does not reasonably
          identify an individual founder or disclose identifiable confidential startup
          information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">
          3. Marvin and Artificial Intelligence
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          CrowdSolve uses artificial intelligence to help founders work through startup
          development activities.
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">Marvin may use information you provide to:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>Analyze your startup idea.</li>
          <li>Respond to founder questions.</li>
          <li>Review curriculum exercises.</li>
          <li>Identify gaps or inconsistencies.</li>
          <li>Suggest experiments.</li>
          <li>Provide feedback on customer discovery.</li>
          <li>Help with positioning, messaging, or market research.</li>
          <li>Recommend next steps.</li>
          <li>Provide other startup-related assistance.</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-4">
          To provide these features, information you submit may be transmitted to
          third-party technology providers that provide artificial intelligence models,
          cloud infrastructure, data processing, or related services to CrowdSolve.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          We take reasonable steps to select reputable providers and configure our services
          in ways that are appropriate for CrowdSolve's use.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          However, founders should use judgment when deciding what information to submit to
          an AI system.
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">You should avoid providing information such as:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>Passwords</li>
          <li>Authentication credentials</li>
          <li>Social Security numbers</li>
          <li>Complete financial account numbers</li>
          <li>Highly sensitive personal information</li>
          <li>Health information</li>
          <li>Information that you do not have permission to disclose</li>
          <li>Third-party trade secrets or confidential information</li>
          <li>Other information that is not reasonably necessary for startup development</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          Marvin's outputs may be incomplete or inaccurate. You are responsible for
          evaluating recommendations before acting on them.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">4. How We Share Information</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          CrowdSolve does not sell your personal information to advertisers.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          We may share information in the following circumstances.
        </p>

        <h3 className="text-lg font-bold text-brand-900 mb-3">Service Providers</h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          We use third-party companies to help operate CrowdSolve.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          These providers may include companies that provide:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>Community hosting</li>
          <li>Cloud infrastructure</li>
          <li>Artificial intelligence</li>
          <li>Payment processing</li>
          <li>Email delivery</li>
          <li>Video conferencing</li>
          <li>Website hosting</li>
          <li>Analytics</li>
          <li>Customer support</li>
          <li>Authentication</li>
          <li>Database services</li>
          <li>Software development and monitoring</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-6">
          These providers may process information on CrowdSolve's behalf as necessary to
          perform their services.
        </p>

        <h3 className="text-lg font-bold text-brand-900 mb-3">Community Members</h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          Information you voluntarily post in shared community areas may be visible to other
          CrowdSolve members with access to those areas.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          Your private startup exercises, AI conversations, or other non-public information
          are not intentionally made available to other founders unless you choose to share
          them or the particular CrowdSolve feature is designed for collaborative
          participation.
        </p>

        <h3 className="text-lg font-bold text-brand-900 mb-3">
          Mentors, Advisors, and Program Personnel
        </h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          When appropriate to provide a CrowdSolve program or service, startup information
          may be available to mentors, advisors, coaches, instructors, program
          administrators, or CrowdSolve personnel involved in supporting you.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          We expect people working with CrowdSolve to treat founder information
          responsibly.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          However, unless a separate confidentiality agreement has been established,
          participation in CrowdSolve should not be interpreted as creating an
          attorney-client, fiduciary, employment, investment, or other legally privileged
          relationship.
        </p>

        <h3 className="text-lg font-bold text-brand-900 mb-3">Partner Programs</h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          You may access CrowdSolve through an accelerator, university, nonprofit
          organization, employer, grant program, or other partner.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          If your participation is sponsored or administered by a partner, we may share
          limited information with that organization, such as:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>Your participation status</li>
          <li>Program enrollment</li>
          <li>Curriculum progress</li>
          <li>Attendance</li>
          <li>Completion information</li>
          <li>Aggregate program results</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-6">
          We will not intentionally provide a partner with confidential startup materials
          beyond what is reasonably necessary for the program unless you have been informed
          that such sharing is part of that program.
        </p>

        <h3 className="text-lg font-bold text-brand-900 mb-3">
          Legal and Safety Requirements
        </h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          We may disclose information when we reasonably believe disclosure is necessary
          to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-6">
          <li>Comply with law or legal process.</li>
          <li>Respond to a valid government request.</li>
          <li>Enforce CrowdSolve agreements or policies.</li>
          <li>Investigate fraud or misuse.</li>
          <li>Protect the security of CrowdSolve.</li>
          <li>Protect the rights or safety of CrowdSolve users or others.</li>
        </ul>

        <h3 className="text-lg font-bold text-brand-900 mb-3">Business Transactions</h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          If CrowdSolve is involved in a merger, acquisition, financing, reorganization,
          sale of assets, or similar business transaction, information may be transferred as
          part of that transaction.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Any successor organization would be expected to handle personal information
          consistently with applicable law and the commitments described in this Privacy
          Policy.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">
          5. We Do Not Sell Founder Startup Information
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          CrowdSolve's business is helping founders develop companies, not selling founder
          data.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          We do not sell individual founder profiles, startup plans, customer research,
          curriculum responses, or Marvin conversations to advertisers, data brokers,
          investors, or other third parties.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Nothing in CrowdSolve participation gives CrowdSolve ownership of your startup or
          its intellectual property.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">
          6. Information Shared With Investors and Startup Ecosystem Partners
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          CrowdSolve may introduce founders to investors, accelerators, grant programs,
          mentors, customers, corporate partners, or other opportunities.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          We will not intentionally share your confidential startup information with an
          investor or potential business partner merely because you use CrowdSolve.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Where possible, founders control whether they want to participate in an
          introduction, opportunity, pitch event, application, or similar process.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Information that you have intentionally made public, such as your startup name,
          website, public pitch description, founder bio, or publicly available company
          information, may be used by CrowdSolve to facilitate relevant opportunities.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">7. Cookies and Analytics</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          CrowdSolve and the third-party services we use may use cookies and similar
          technologies.
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">These technologies may help us:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>Keep you logged in.</li>
          <li>Remember preferences.</li>
          <li>Maintain security.</li>
          <li>Understand how the Service is used.</li>
          <li>Diagnose technical problems.</li>
          <li>Measure website and program performance.</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          Your browser may allow you to block or delete cookies. Some CrowdSolve
          functionality may not work correctly if certain cookies are disabled.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">8. Email and Communications</h2>
        <p className="text-slate-600 leading-relaxed mb-2">CrowdSolve may send you:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>Account notices</li>
          <li>Program information</li>
          <li>Community notifications</li>
          <li>Event announcements</li>
          <li>Startup opportunities</li>
          <li>Curriculum reminders</li>
          <li>Product updates</li>
          <li>Subscription information</li>
          <li>Other communications related to CrowdSolve</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-4">
          You may unsubscribe from promotional email communications using the unsubscribe
          mechanism provided in those emails when available or by contacting us.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          You may continue to receive communications necessary to operate your account,
          administer your subscription, respond to you, or provide important
          Service-related notices.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Paused CrowdSolve members may continue receiving CrowdSolve notifications,
          announcements, and community updates while their information remains on the
          platform.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">9. Cancelling Your Account</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          You may cancel your CrowdSolve subscription at any time by sending written notice
          to:
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          <EmailLink email={EMAIL} bold />
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          You may also request cancellation through a direct message to Tim Wolters.
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">When your account is cancelled:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>Future subscription charges will stop.</li>
          <li>Your active CrowdSolve account will be terminated.</li>
          <li>
            Your startup information and account data will be removed from the active
            CrowdSolve platform.
          </li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-4">
          Some information may remain temporarily in system backups.
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">
          CrowdSolve may also retain limited information where reasonably necessary for:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>Accounting</li>
          <li>Tax reporting</li>
          <li>Fraud prevention</li>
          <li>Legal compliance</li>
          <li>Resolving disputes</li>
          <li>Enforcing agreements</li>
          <li>Maintaining transaction records</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          Information retained for these purposes will not be treated as an active
          CrowdSolve account.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">10. Paused Accounts</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Instead of cancelling, you may ask CrowdSolve to pause your membership.
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">While your membership is paused:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>Your subscription billing is suspended.</li>
          <li>Your account remains in the CrowdSolve system.</li>
          <li>Your startup information and curriculum progress are maintained.</li>
          <li>You may continue receiving CrowdSolve updates and notifications.</li>
          <li>You will not have access to subscriber-only sessions.</li>
          <li>
            You will not receive individualized startup feedback through Marvin or other
            subscriber-only AI capabilities.
          </li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-4">
          Because maintaining your information is part of the pause service, account data
          will not be deleted while your membership remains paused.
        </p>
        <p className="text-slate-600 leading-relaxed">
          You may ask to reactivate or cancel your paused membership at any time.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">11. Data Retention</h2>
        <p className="text-slate-600 leading-relaxed mb-2">
          CrowdSolve retains personal information for as long as reasonably necessary to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>Provide the Service.</li>
          <li>Maintain an active or paused account.</li>
          <li>Fulfill the purposes described in this Privacy Policy.</li>
          <li>Maintain appropriate business records.</li>
          <li>Meet legal, tax, accounting, or regulatory requirements.</li>
          <li>Prevent fraud or abuse.</li>
          <li>Resolve disputes.</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-4">
          When information is no longer reasonably necessary, we may delete, anonymize, or
          aggregate it.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Backup copies may persist for a reasonable period after information has been
          removed from active systems.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">12. Your Privacy Choices</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Depending on where you live and applicable law, you may have rights concerning
          your personal information.
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">
          These rights may include the ability to request that CrowdSolve:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>Tell you what personal information we maintain about you.</li>
          <li>Provide access to certain personal information.</li>
          <li>Correct inaccurate personal information.</li>
          <li>Delete certain personal information.</li>
          <li>Provide a portable copy of certain information.</li>
          <li>Restrict or object to certain uses of your information.</li>
          <li>Honor other privacy rights provided by applicable law.</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-2">You may make a privacy request by emailing:</p>
        <p className="text-slate-600 leading-relaxed mb-4">
          <EmailLink email={EMAIL} bold />
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          We may need to verify your identity before fulfilling a request.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Some information may be exempt from deletion or other requests where CrowdSolve
          has a legitimate or legal reason to retain it.
        </p>
        <p className="text-slate-600 leading-relaxed">
          You will not be discriminated against for exercising privacy rights available to
          you under applicable law.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">13. Data Security</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          CrowdSolve uses reasonable administrative, technical, and organizational measures
          intended to protect information against unauthorized access, disclosure,
          alteration, or destruction.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          However, no internet service, cloud platform, database, or electronic
          communication system can be guaranteed to be completely secure.
        </p>
        <p className="text-slate-600 leading-relaxed">
          You are responsible for maintaining the security of your login credentials and
          should notify CrowdSolve if you believe your account has been compromised.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">
          14. Third-Party Links and Services
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          CrowdSolve may contain links to external websites, applications, services,
          funding opportunities, partner programs, and other third-party resources.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          CrowdSolve does not control the privacy practices of those third parties.
        </p>
        <p className="text-slate-600 leading-relaxed">
          If you leave CrowdSolve or provide information directly to another organization,
          that organization's privacy policy will govern its handling of your information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">15. Children's Privacy</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          CrowdSolve is intended for entrepreneurs and other adults and is not directed to
          children under the age of 18.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          We do not knowingly collect personal information from children under 18 through
          the Service.
        </p>
        <p className="text-slate-600 leading-relaxed">
          If you believe a person under 18 has provided personal information to CrowdSolve,
          contact us so we can review and, where appropriate, remove the information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">16. International Users</h2>
        <p className="text-slate-600 leading-relaxed mb-4">CrowdSolve is based in the United States.</p>
        <p className="text-slate-600 leading-relaxed mb-4">
          If you access CrowdSolve from another country, your information may be processed
          or stored in the United States or in other countries where CrowdSolve's
          technology providers operate.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Privacy and data protection laws in those countries may differ from the laws
          where you live.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Where required by applicable law, CrowdSolve will take reasonable steps to
          provide appropriate protections for international transfers of personal
          information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">
          17. Changes to This Privacy Policy
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          CrowdSolve may update this Privacy Policy as our platform, programs, technology,
          or legal obligations evolve.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          If we make material changes, we will provide reasonable notice through the
          CrowdSolve platform, email, or another appropriate communication channel.
        </p>
        <p className="text-slate-600 leading-relaxed">
          The effective date at the top of this Privacy Policy indicates when the current
          version became effective.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-brand-900 mb-4">18. Contact CrowdSolve</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          If you have questions, concerns, deletion requests, or other privacy requests,
          contact:
        </p>
        <p className="text-slate-600 leading-relaxed">
          <strong>CrowdSolve</strong>
          <br />
          <strong>Email: </strong>
          <EmailLink email={EMAIL} bold />
        </p>
      </section>
    </LegalPageLayout>
  );
}
