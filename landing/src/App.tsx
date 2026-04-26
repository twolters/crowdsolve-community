import {
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Zap,
  MessageSquare,
  Calendar,
  Clock,
  Award,
  XCircle,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';
import { motion } from 'motion/react';
import ApplicationForm from './ApplicationForm';

const Logo = ({ className = "h-8" }: { className?: string }) => (
  <img src="/images/crowdsolve-logo.png" alt="CrowdSolve" className={className} />
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-brand-900/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="/" className="flex items-center">
        <Logo className="h-10" />
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#benefits" className="hover:text-brand-900 transition-colors">Benefits</a>
        <a href="#how-it-works" className="hover:text-brand-900 transition-colors">Program</a>
        <a href="#team" className="hover:text-brand-900 transition-colors">Team</a>
        <a href="#who-its-for" className="hover:text-brand-900 transition-colors">Who it's for</a>
      </div>
      <a
        href="#apply"
        className="bg-brand-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/10"
      >
        Apply for Beta
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Beta Cohort Now Open
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-brand-900 leading-[1.08] mb-8">
          Building something new is lonely.{' '}
          <span className="text-brand-600 italic font-light">It doesn't have to be.</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
          CrowdSolve Beta is a 10-week program for early-stage founders who need structure, honest feedback, and people who actually get it. No equity taken.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="#apply"
            className="group bg-brand-900 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 hover:bg-brand-800 transition-all shadow-xl shadow-brand-900/20"
          >
            Apply for the Beta
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-brand-900">Free to apply · Starts April 20</span>
            <span className="text-xs text-slate-500">Rolling review · Limited spots</span>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Background image with organic shape — visual anchor for the hero */}
    <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-25">
      <img
        src="/images/hero-bg.png"
        alt=""
        className="w-full h-full object-cover rounded-bl-[200px]"
      />
    </div>
  </section>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Cody",
      role: "Solo founder, clean energy",
      photo: "/images/cody.png",
      content: "I can get a little distracted by the next shiny object and so this forces me to sit down and go okay... I'm following a set of guidelines that is moving my business forward."
    },
    {
      name: "Mel",
      role: "Founder, sustainable consumer goods",
      photo: "/images/mel.jpg",
      content: "It gets lonely. It gets really lonely. Just to look at what people are going through — their wins — that gives me energy."
    },
    {
      name: "Frank",
      role: "Founder, climate infrastructure",
      photo: "/images/frank.jpg",
      content: "It's really the outside input, feedback, focusing on some of the important components that need to be in place to be successful."
    }
  ];

  return (
    <section className="py-28 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">Here's what it's actually like.</h2>
          <div className="w-20 h-1.5 bg-brand-500 rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-2xl bg-white border border-brand-900/5"
            >
              <p className="text-2xl text-slate-800 italic leading-snug mb-8">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-brand-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Clarity on what you're actually building",
      desc: "Nail down your problem statement, solution hypothesis, and who your customer actually is — so you stop building on assumptions.",
      icon: Lightbulb
    },
    {
      title: "Focus when everything feels urgent",
      desc: "A set of guidelines that cuts through the noise and moves your business forward — not just your to-do list.",
      icon: Target
    },
    {
      title: "People who actually get it",
      desc: "A small cohort of founders building right alongside you — bouncing ideas, sharing wins, and holding each other accountable.",
      icon: Users
    },
    {
      title: "Outside perspective that changes your direction",
      desc: "Feedback and coaching that helps you see the core components you've been glossing over — before they become expensive mistakes.",
      icon: MessageSquare
    },
    {
      title: "A launchpad to funding",
      desc: "Connections to mentors, investors, and networks that matter at your stage. Eligible for non-dilutive grant funding through our partner 1000 Gretas — no equity taken.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="benefits" className="py-28 bg-brand-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold mb-4">What you'll walk away with.</h2>
          <p className="text-brand-200 text-lg font-medium">Structure that leads to progress.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-500 rounded-2xl flex items-center justify-center mb-6">
                <b.icon className="w-6 h-6 text-brand-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-brand-100 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      period: "Weeks 1–3",
      title: "Sharpen Your Idea",
      desc: "Nail your problem statement, solution hypothesis, and founder fit. Know what you're building and why you're the one to build it."
    },
    {
      period: "Weeks 4–10",
      title: "Validate Your Market",
      desc: "Define your ICP, run customer discovery, test your assumptions. Come back with evidence, not opinions."
    }
  ];

  const formats = [
    {
      title: "Every other week: Live Sessions",
      desc: "Walk through a module with Tim and the cohort. Workshop your answers, get unstuck in real time.",
      icon: Zap
    },
    {
      title: "Every other week: Office Hours",
      desc: "Deep-dive coaching for 2-3 founders per session. Bring your hardest problem, leave with a next step.",
      icon: MessageSquare
    },
    {
      title: "Every week: Founder Workouts",
      desc: "A structured co-working hour. Show up, commit to one thing, get it done. Simple accountability that actually works.",
      icon: Clock
    },
    {
      title: "3 Sessions: Expert AMAs",
      desc: "Curated conversations with operators and investors focused on where you are right now — sourcing customers, validating demand, positioning your offer.",
      icon: Users
    },
    {
      period: "Week 10",
      title: "Pitch Competition",
      desc: "Present your pitch deck to a panel of mentors, investors, and peers. Walk away with real feedback — and the proof that you can tell your story.",
      icon: Award
    }
  ];

  return (
    <section id="how-it-works" className="py-28 bg-cream textured-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-brand-900 mb-4">10 weeks. One clear path.</h2>
          <p className="text-slate-600 text-lg font-medium">A structured curriculum for founders who are ready to move fast.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <h3 className="text-2xl font-medium text-brand-900 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-brand-600" />
              The Curriculum
            </h3>
            {steps.map((s, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-brand-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-500 border-4 border-cream" />
                <div className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-2">{s.period}</div>
                <h4 className="text-xl font-bold text-brand-900 mb-3">{s.title}</h4>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-brand-900 flex items-center gap-3">
              <Users className="w-6 h-6 text-brand-600" />
              The Format
            </h3>
            <div className="grid gap-4">
              {formats.map((f, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-brand-900/5 flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-brand-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-900 mb-1">{f.title}</h4>
                    <p className="text-sm text-slate-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team = [
    {
      name: "Tim Wolters",
      title: "Founder & CEO",
      photo: "/images/tim.png",
      bio: "Three-time founder with exits in enterprise SaaS, edtech, and clean energy. Tim has spent 15+ years building and scaling startups from napkin sketch to acquisition. He's been through Techstars, advised for the Watson Institute and New Venture Challenge, and now channels everything he's learned into CrowdSolve — because the best way to build the next generation of climate companies is to stop letting founders figure it out alone. He designed the curriculum, runs the coaching, and won't let you off the hook."
    },
    {
      name: "Patrick McHeyser",
      title: "Co-Founder & COO",
      photo: "/images/patrick.jpeg",
      bio: "Software architect turned startup operator. Patrick builds the systems that make CrowdSolve run — from the community platform and engagement tools to the operational backbone that keeps a cohort of ambitious founders moving in the same direction. Before CrowdSolve, he shipped products across fintech, proptech, and developer tools. He brings a builder's mindset to everything: if it can be automated, measured, or made 10x better, he's already working on it."
    }
  ];

  return (
    <section id="team" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-brand-900 mb-4">Who's running this.</h2>
          <p className="text-slate-600 text-lg font-medium">Operators who've been where you are — and built their way out.</p>
        </div>

        {/* Presentation photo */}
        <div className="mb-20 rounded-2xl overflow-hidden">
          <img
            src="/images/tim-patrick-presenting.png"
            alt="Tim and Patrick presenting CrowdSolve to founders"
            className="w-full h-64 md:h-96 object-cover object-top"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {team.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <img
                src={person.photo}
                alt={person.name}
                className="w-28 h-28 rounded-2xl object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-brand-900">{person.name}</h3>
                <div className="text-sm font-semibold text-brand-600 mb-3">{person.title}</div>
                <p className="text-slate-600 leading-relaxed">{person.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoItsFor = () => (
  <section id="who-its-for" className="py-28 bg-brand-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-brand-900 mb-4">This isn't for everyone.</h2>
        <p className="text-slate-600 text-lg font-medium">
          Everyone gets real attention, real feedback, and real accountability. That's why we're selective about who we bring in.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-10 rounded-2xl bg-white border border-brand-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-brand-900" />
            </div>
            <h3 className="text-2xl font-bold text-brand-900">You're a fit if:</h3>
          </div>
          <ul className="space-y-6">
            {[
              "You have a startup idea you're serious about pursuing",
              "You're early-stage — pre-revenue, pre-product, or just getting started",
              "You can commit ~5 hours/week for 10 weeks",
              "You want to be pushed, not just supported"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-10 rounded-2xl bg-white border border-brand-900/5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
              <XCircle className="w-6 h-6 text-slate-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">This probably isn't for you if:</h3>
          </div>
          <ul className="space-y-6">
            {[
              "You're looking for a course you can do passively",
              "You already have a funded product in market",
              "You're not ready to put your idea in front of other people"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 text-slate-500">
                <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ApplySection = () => (
  <section id="apply" className="py-28 bg-cream">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-brand-900 mb-4">Apply for the Beta.</h2>
        <p className="text-slate-600 text-lg font-medium">
          We're not looking for the perfect idea. We're looking for founders who show up, help each other, and take action.
        </p>
      </div>
      <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 md:p-10 border border-brand-900/5 shadow-sm">
        <ApplicationForm />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-brand-900/5 bg-white">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <a href="/" className="flex items-center">
        <Logo className="h-8" />
      </a>
      <div className="text-slate-500 text-sm">
        © 2026 CrowdSolve. All rights reserved.
      </div>
      <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
        <a href="#" className="hover:text-brand-900">Privacy</a>
        <a href="#" className="hover:text-brand-900">Terms</a>
        <a href="#" className="hover:text-brand-900">Contact</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <Benefits />
        <HowItWorks />
        <Team />
        <WhoItsFor />
        <ApplySection />
      </main>
      <Footer />
    </div>
  );
}
