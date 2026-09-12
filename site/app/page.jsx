import Header from '../components/Header';
import HeroPortrait from '../components/HeroPortrait';
import CvUnlock from '../components/CvUnlock';
import Deck from '../components/Deck';
import SkillsJourney from '../components/SkillsJourney';
import { portfolioData } from '../lib/data';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Gamepad2,
  Puzzle,
  Trophy,
  Footprints,
  Video,
  Laptop,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  ArrowUp,
} from 'lucide-react';

const socialIcons = { Facebook, Twitter, Linkedin, Instagram, Github };
const hobbyIcons = { Gamepad2, Puzzle, Trophy, Footprints, Video, Laptop };

const gradients = [
  'from-rose-500 to-pink-600',
  'from-violet-500 to-fuchsia-600',
  'from-cyan-500 to-blue-600',
  'from-amber-500 to-orange-600',
  'from-emerald-500 to-teal-600',
  'from-indigo-500 to-sky-600',
  'from-lime-500 to-green-600',
  'from-fuchsia-500 to-rose-600',
  'from-sky-500 to-indigo-600',
];

function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {lead && <p className="text-lg text-muted">{lead}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-surface to-dark px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <HeroPortrait />
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Hello, World.
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
          I'm {portfolioData.personal.name}.
        </h1>
        <p className="text-xl text-muted md:text-2xl">
          {portfolioData.personal.title}
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
        <div className="h-8 w-5 rounded-full border-2 border-white/20 p-1">
          <div className="h-2 w-full rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}

function About() {
  const { fullName, email, location } = portfolioData.personal;

  return (
    <section className="flex min-h-screen items-center bg-dark px-6 py-24">
      <div className="mx-auto w-full max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          About
        </p>
        <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
          Let me introduce myself.
        </h2>
        <p className="text-lg leading-relaxed text-muted md:text-xl">
          {portfolioData.personal.profile}
        </p>

        <ul className="mx-auto mt-10 max-w-md space-y-4 text-left text-sm">
          <li className="flex justify-between gap-4 border-b border-white/5 pb-2">
            <span className="font-semibold text-white">Fullname:</span>
            <span className="text-muted">{fullName}</span>
          </li>
          <li className="flex justify-between gap-4 border-b border-white/5 pb-2">
            <span className="font-semibold text-white">Location:</span>
            <span className="text-muted">
              {location.city}, {location.country}
            </span>
          </li>
          <li className="flex justify-between gap-4 border-b border-white/5 pb-2">
            <span className="font-semibold text-white">Email:</span>
            <span className="text-muted">{email}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Timeline({ items, icon }) {
  const Icon = icon;

  return (
    <div className="relative space-y-10">
      <div className="absolute left-4 top-0 h-full w-px bg-white/10" />
      {items.map((item, i) => (
        <div key={i} className="relative pl-14">
          <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-dark text-accent">
            <Icon size={14} />
          </span>
          <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-white">
              {item.position || item.level}
            </h3>
            <span className="text-sm font-medium text-accent">{item.period}</span>
          </div>
          <p className="mb-2 text-sm font-medium text-zinc-400">
            {item.company || item.institution}
          </p>
          <ul className="list-disc space-y-1 pl-4 text-muted">
            {item.description.map((point, j) => (
              <li key={j}>{point.replace(/^•\s*/, '')}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <section className="flex min-h-screen items-center bg-surface px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading eyebrow="Work Experience" title="Professional Journey." />
        <Timeline items={portfolioData.workExperience} icon={Linkedin} />
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="flex min-h-screen items-center bg-dark px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading eyebrow="Education" title="Academic Background." />
        <Timeline items={portfolioData.education} icon={Laptop} />
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="flex min-h-screen items-center bg-surface px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Check Out Some of My Works."
          lead="A diverse collection of web applications and digital solutions I've developed, from enterprise platforms to innovative startups."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, i) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-dark p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={`mb-5 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} text-center`}
              >
                <span className="text-xl font-bold text-white drop-shadow-md">
                  {project.title}
                </span>
              </div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white group-hover:text-accent">
                  {project.title}
                </h3>
                <ExternalLink size={18} className="text-muted" />
              </div>
              <p className="text-sm text-accent">{project.type}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hobbies() {
  return (
    <section className="flex min-h-screen items-center bg-dark px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Hobbies"
          title="Beyond the Code."
          lead="When I'm not coding, you'll find me exploring these passions that keep me balanced and inspired."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.hobbies.map((hobby) => {
            const Icon = hobbyIcons[hobby.icon] || Laptop;
            return (
              <div
                key={hobby.name}
                className="rounded-2xl bg-surface/50 p-6 transition-colors hover:bg-surface"
              >
                <Icon size={32} className="mb-4 text-accent" />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {hobby.name}
                </h3>
                <p className="text-sm text-muted">{hobby.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { email, secondaryEmail, phone } = portfolioData.personal;
  const { street, village, barangay, city, postalCode, country } =
    portfolioData.personal.location;

  const items = [
    {
      icon: MapPin,
      title: 'Where to find me',
      content: `${street}, ${barangay}, ${city}, ${postalCode} ${country}`,
    },
    {
      icon: Mail,
      title: 'Email Me At',
      content: email,
    },
    {
      icon: Phone,
      title: 'Call Me At',
      content: `Phone: ${phone}`,
    },
  ];

  return (
    <section className="flex min-h-screen items-center bg-surface px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading eyebrow="Contact" title="Let's work together." />

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-dark p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white">
                  {item.title}
                </h3>
                <p className="whitespace-pre-line text-muted">{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {portfolioData.personal.fullName}. All
          rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {portfolioData.socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];
            if (!Icon) return null;
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-accent"
                aria-label={link.platform}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <a
          href="#home"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-accent hover:text-accent"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}

const sections = [
  { id: 'home', children: <Hero /> },
  {
    id: 'journey',
    children: (
      <section className="bg-surface">
        <SkillsJourney />
      </section>
    ),
  },
  { id: 'about', children: <About /> },
  { id: 'experience', children: <Experience /> },
  { id: 'education', children: <Education /> },
  { id: 'projects', children: <Projects /> },
  { id: 'hobbies', children: <Hobbies /> },
  {
    id: 'contact',
    children: (
      <>
        <Contact />
        <Footer />
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Deck sections={sections} />
      </main>
      <CvUnlock />
    </>
  );
}
