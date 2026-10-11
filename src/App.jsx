
import { useState } from 'react'


const skills = [
  'React',
  'JavaScript',
  'Angular',
  'HTML & CSS',
  'Laravel',
  'Java',
  'C / C++',
  'Node.js',
  'MongoDB',
  'MySQL',
  'Firebase',
  'Flutter',
  'Git',
  'Linux',
  'UML',
]

const education = [
  {
    degree: 'Bachelor en Génie Logiciel et Innovation Numérique',
    school: 'EST Agadir',
  },
  {
    degree: 'DUT en Génie Informatique',
    school: 'EST Fquih Ben Salah',
  },
]

const experiences = [
  {
    title: 'Développement de FlowERP AI',
    company: 'Network Service Info — Marrakech',
    description:
      'Conception d’une plateforme SaaS intelligente de gestion des PME avec React, Express et MongoDB.',
  },
  {
    title: 'Stages en développement informatique',
    company: 'Expériences professionnelles',
    description:
      'Participation à des projets web, à la conception d’applications et à la découverte des environnements professionnels.',
  },
]


const projects = [
  {
    title: 'FlowERP AI',
    category: 'Web Apps',
    subtitle: 'MERN Stack · SaaS · AI',
    description:
      'Plateforme SaaS intelligente pour la gestion des PME : stock, ventes, clients, factures et recommandations IA.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    theme: 'from-indigo-500/30 via-violet-500/20 to-cyan-500/20',
    icon: '✦',
    featured: true,
  },
  {
    title: 'E-Learning Platform',
    category: 'Web Apps',
    subtitle: 'Application éducative',
    description:
      'Une plateforme pour faciliter l’apprentissage et organiser les ressources pédagogiques.',
    tech: ['React', 'Web', 'Database'],
    theme: 'from-violet-500/30 via-purple-500/20 to-blue-500/20',
    icon: '▣',
  },
  {
    title: 'Bureau d’ordre',
    category: 'Web Apps',
    subtitle: 'Gestion administrative',
    description:
      'Une application pour organiser et suivre les documents et les courriers administratifs.',
    tech: ['JavaScript', 'Database', 'Web'],
    theme: 'from-cyan-500/30 via-blue-500/20 to-indigo-500/20',
    icon: '▤',
  },
  {
    title: 'Covoiturage',
    category: 'Web Apps',
    subtitle: 'Mobilité · Web',
    description:
      'Une solution pour faciliter le partage de trajets entre étudiants et particuliers.',
    tech: ['JavaScript', 'Web', 'Database'],
    theme: 'from-emerald-500/25 via-cyan-500/20 to-blue-500/20',
    icon: '↗',
  },
  {
    title: 'Resource Sharing',
    category: 'Web Apps',
    subtitle: 'Partage de ressources',
    description:
      'Une plateforme de partage de ressources pédagogiques : cours, notes et fichiers.',
    tech: ['Web', 'Firebase', 'Database'],
    theme: 'from-fuchsia-500/25 via-violet-500/20 to-indigo-500/20',
    icon: '▱',
  },
]


const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#080b18] text-white"
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute -right-25 top-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="absolute -bottom-37.5 left-1/3 h-96 w-96 rounded-full bg-purple-600/15 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Navbar */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <a href="#home" className="flex items-center gap-3 text-xl font-bold">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-cyan-400 text-lg shadow-lg shadow-indigo-500/20">
            {'</>'}
          </span>
          <span>
            Mariem<span className="text-indigo-400">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-400 transition duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/15 px-5 py-2.5 text-sm transition duration-300 hover:border-indigo-400 hover:bg-indigo-500/10 md:block"
        >
          Let's talk <span className="ml-2">↗</span>
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/15 px-3 py-2 text-xl md:hidden"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="relative z-20 mx-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/95 p-5 md:hidden">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* Hero section */}
      <section className="relative z-10 mx-auto grid min-h-[80vh] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] lg:px-12">
        <div className="animate-[fadeIn_.8s_ease-out_both]">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-200">
            <span className="text-cyan-300">✦</span>
            Software Developer · AI Enthusiast
          </div>

          <p className="mb-3 text-lg text-slate-400">Hello, I'm</p>

          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Mariem
            <span className="mt-2 block bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              LAAOUD.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I build modern web applications and intelligent digital
            solutions, turning ideas into useful experiences through
            code, creativity, and continuous learning.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-6 py-3.5 font-medium shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40"
            >
              Explore my work
              <span className="transition group-hover:translate-x-1">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-medium transition duration-300 hover:border-cyan-400/50 hover:bg-white/5"
            >
              Contact me <span>✉</span>
            </a>

<a
  href="/Mariem-Laaoud-CV.pdf"
  download="Mariem-Laaoud-CV.pdf"
  className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-6 py-3.5 font-medium text-indigo-200 transition duration-300 hover:-translate-y-1 hover:bg-indigo-400/20"
>
  Download CV <span>↓</span>
</a>

          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              LinkedIn ↗
            </a>

            <span className="h-px w-12 bg-white/20" />

            <span className="text-xs tracking-wide text-slate-500">
              OPEN TO OPPORTUNITIES
            </span>
          </div>
        </div>

        {/* Developer card */}
        <div className="hero-float relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-5 rounded-4xl bg-linear-to-br from-indigo-500/20 via-purple-500/10 to-cyan-400/20 blur-2xl" />

          <div className="relative rounded-4xl border border-white/10 bg-white/4 p-5 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <span className="font-mono text-xs text-slate-500">
                mariem.js
              </span>
            </div>

            <div className="space-y-4 py-7 font-mono text-sm leading-7 sm:text-base">
              <p className="text-purple-300">
                <span className="text-slate-500">01 </span>
                const developer = {'{'}
              </p>

              <p className="pl-7 text-slate-300">
                name: <span className="text-emerald-300">'Mariem'</span>,
              </p>

              <p className="pl-7 text-slate-300">
                role: <span className="text-emerald-300">'Software Dev'</span>,
              </p>

              <p className="pl-7 text-slate-300">
                focus: <span className="text-cyan-300">'Web & AI'</span>,
              </p>

              <p className="pl-7 text-slate-300">
                mindset:{' '}
                <span className="text-emerald-300">'Keep building'</span>
              </p>

              <p className="text-purple-300">{'}'}</p>

              <p className="wrap-break-word pt-3 text-slate-500">
                <span className="text-indigo-300">→</span>{' '}
                turning ideas into reality_
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-indigo-400/15 bg-indigo-400/[0.07] p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500/30 to-cyan-400/20 text-xl text-cyan-300">
                {'</>'}
              </div>

              <div>
                <p className="font-medium">Building with purpose</p>
                <p className="mt-1 text-xs text-slate-500">
                  Code · Design · Innovation
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-20 rounded-2xl border border-white/10 bg-slate-900/90 p-3 text-2xl shadow-xl sm:-right-8">
            <span className="text-cyan-300">✦</span>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-slate-500 transition hover:text-white md:flex"
        >
          Scroll to explore <span>↓</span>
        </a>
      </section>


{/* About section */}
<section
  id="about"
  className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12"
>
  <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
    Get to know me
  </p>

  <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
    About <span className="text-indigo-400">Me</span>
  </h2>

  <div className="mt-10 grid gap-8 md:grid-cols-2">
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
      <h3 className="text-xl font-semibold">Who I am</h3>

      <p className="mt-5 leading-8 text-slate-400">
        I am a software development graduate passionate about building
        web applications and exploring artificial intelligence.
        I enjoy solving problems, learning new technologies, and
        transforming ideas into practical digital solutions.
      </p>

      <p className="mt-4 leading-8 text-slate-400">
        My goal is to keep growing as a developer while contributing
        to useful and innovative projects.
      </p>
    </div>

    <div className="rounded-3xl border border-indigo-400/15 bg-linear-to-br from-indigo-500/10 to-cyan-500/5 p-7">
      <h3 className="text-xl font-semibold">Education</h3>

      <div className="mt-6 space-y-6">
        {education.map((item) => (
          <div key={item.degree} className="border-l-2 border-indigo-400 pl-4">
            <h4 className="font-medium leading-7">{item.degree}</h4>
            <p className="mt-1 text-sm text-slate-400">{item.school}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Skills section */}
<section
  id="skills"
  className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-12"
>
  <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
    Technologies
  </p>

  <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
    My <span className="text-indigo-400">Skills</span>
  </h2>

  <p className="mt-5 max-w-2xl leading-7 text-slate-400">
    Technologies and tools I have used during my studies, projects,
    and software development experience.
  </p>

  <div className="mt-9 flex flex-wrap gap-3">
    {skills.map((skill) => (
      <span
        key={skill}
        className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-white"
      >
        {skill}
      </span>
    ))}
  </div>
</section>

{/* Experience section */}
<section
  id="experience"
  className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-12"
>
  <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
    My journey
  </p>

  <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
    Experience & <span className="text-indigo-400">Projects</span>
  </h2>

  <div className="mt-10 space-y-5">
    {experiences.map((item) => (
      <article
        key={item.title}
        className="rounded-2xl border border-white/10 bg-white/3 p-6 transition duration-300 hover:border-indigo-400/30 sm:p-8"
      >
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm text-indigo-300">{item.company}</p>
        <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
      </article>
    ))}
  </div>
</section>


      {/* Projects Section */}
      <section
        id="projects"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12"
      >
        <div className="mb-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
            My work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            A selection of projects that reflect my journey in software
            development, problem-solving, and digital innovation.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/[0.05]"
            >
              {/* Mini interface preview */}
              <div
                className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.theme} p-5`}
              >
                <div className="absolute inset-0 bg-[#080b18]/20" />

                <div className="relative h-full rounded-xl border border-white/15 bg-[#0b1020]/90 p-3 shadow-2xl transition duration-500 group-hover:scale-[1.03]">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm">
                      {project.icon}
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      {project.title}
                    </span>
                    <span className="ml-auto flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-rose-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-300" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                  </div>

                  <div className="grid h-[calc(100%-2.5rem)] grid-cols-[0.65fr_2fr] gap-3 pt-3">
                    <div className="space-y-2 rounded-lg bg-white/[0.04] p-2">
                      <div className="h-2 w-full rounded bg-indigo-400/70" />
                      <div className="h-2 w-4/5 rounded bg-white/10" />
                      <div className="h-2 w-full rounded bg-white/10" />
                      <div className="h-2 w-3/5 rounded bg-white/10" />
                    </div>

                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-10 rounded-lg border border-indigo-400/20 bg-indigo-400/10" />
                        <div className="h-10 rounded-lg border border-cyan-400/20 bg-cyan-400/10" />
                        <div className="h-10 rounded-lg border border-violet-400/20 bg-violet-400/10" />
                      </div>

                      <div className="flex h-12 items-end gap-2 rounded-lg bg-white/[0.04] p-2">
                        {[35, 65, 45, 85, 55, 95, 70].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-gradient-to-t from-indigo-600 to-cyan-300"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>

                      <div className="h-2 w-2/3 rounded bg-white/10" />
                    </div>
                  </div>
                </div>

                {project.featured && (
                  <span className="absolute right-4 top-4 rounded-full border border-indigo-300/30 bg-indigo-500/80 px-3 py-1 text-xs font-medium">
                    ✦ Featured
                  </span>
                )}
              </div>

              {/* Project information */}
              <div className="p-6">
                <p className="mb-2 text-xs uppercase tracking-wider text-indigo-300">
                  {project.subtitle}
                </p>

                <h3 className="text-xl font-semibold transition group-hover:text-indigo-300">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-sm text-slate-500">
                    Project showcase
                  </span>
                  <span className="float-right text-indigo-300">
                    {'</>'}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-12 lg:p-16">
          {/* Decorative gradients */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
                Get in touch
              </p>

              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                Let's build
                <span className="block bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                  something great.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-slate-400">
                I'm open to new opportunities, internships, and exciting
                projects. If you have an idea or would like to work together,
                feel free to reach out.
              </p>

              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-6 py-3.5 font-medium shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40"
              >
                Say hello <span>↗</span>
              </a>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-5 transition duration-300 hover:border-indigo-400/40 hover:bg-indigo-400/[0.06]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-xl text-indigo-300">
                  @
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-slate-500">Email</span>
                  <span className="mt-1 block break-all font-medium text-slate-200">
                    laaoudmariem@gmail.com
                  </span>
                </span>
                <span className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-indigo-300">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-5 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-sm font-bold text-cyan-300">
                  in
                </span>
                <span className="flex-1">
                  <span className="block text-sm text-slate-500">LinkedIn</span>
                  <span className="mt-1 block font-medium text-slate-200">
                    Connect with me
                  </span>
                </span>
                <span className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-300">
                  ↗
                </span>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-5 transition duration-300 hover:border-violet-400/40 hover:bg-violet-400/[0.06]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-lg text-violet-300">
                  {'</>'}
                </span>
                <span className="flex-1">
                  <span className="block text-sm text-slate-500">GitHub</span>
                  <span className="mt-1 block font-medium text-slate-200">
                    Explore my code
                  </span>
                </span>
                <span className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-violet-300">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row lg:px-12">
          <p>
            © {new Date().getFullYear()} Mariem LAAOUD. All rights reserved.
          </p>
          <p>
            Designed with care <span className="text-indigo-400">✦</span> Built with React
          </p>
        </div>
      </footer>

      
    </main>
  )
}

export default App
