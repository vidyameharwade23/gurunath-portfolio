import { profile, about, education, experience, skills, projects, competencies, languages } from "./data";
import Logo from "./Logo";
import BrandMark from "./BrandMark";

const links = ["About", "Experience", "Skills", "Projects", "Contact"];

function Section({ id, title, children }) {
  return (
    <section id={id} className="border-t-2 border-ink/10 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="display flex items-center gap-4 text-3xl md:text-4xl">
          <span className="h-8 w-3 bg-brand" aria-hidden="true" />
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

const btn = "display border-2 border-ink px-6 py-3 text-sm transition-colors";

export default function App() {
  const facts = [
    ["Engineer", profile.name],
    ["Role", profile.title],
    ["Location", profile.location],
    ["Current", "Bharti Mertiya Group Pvt. Ltd."],
    ["Tools", "Primavera P6, Plexxel, Claude AI"],
  ];

  return (
    <>
      <nav className="sticky top-0 z-10 border-b-2 border-ink bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Meharwade logo" className="h-8 w-8 object-contain" />
            <span className="display text-lg">Gurunath Meharwade</span>
          </a>
          <div className="hidden gap-7 text-base sm:flex">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="underline-offset-8 hover:underline hover:decoration-brand hover:decoration-4">{l}</a>
            ))}
          </div>
        </div>
      </nav>

      <header id="top" className="relative overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/hero-photo.jpeg')" }}
    aria-hidden="true"
  />
  <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
  <div className="relative mx-auto flex min-h-[36rem] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
    <img src="/logo.jpeg" alt="Meharwade logo" className="mb-10 w-58 md:w-64" />
    <h1 className="display text-4xl text-paper md:text-5xl">
      Planning, execution, and project controls for EPC and infrastructure projects
    </h1>
    <p className="mt-6 max-w-xl text-paper/90">
      BE in Civil Engineering from VTU. I build baseline schedules, WBS, and CPM networks in Primavera P6, track earned value, and coordinate engineering, procurement, and construction teams.
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <a href={profile.cv} download className={`${btn} bg-brand hover:bg-paper`}>Download CV</a>
      <a href="#contact" className={`${btn} border-paper text-paper hover:bg-paper hover:text-ink`}>Contact</a>
    </div>
  </div>
</header>

      <Section id="about" title="About">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="max-w-prose">{about}</p>
            <p className="mt-6 text-sm text-mute">Languages: {languages.join(", ")}</p>
          </div>
          <div className="space-y-6">
            {education.map((e) => (
              <div key={e.title} className="border-l-4 border-brand pl-5">
                <h3 className="display text-base">{e.title}</h3>
                <p className="leading-snug">{e.place}</p>
                <p className="text-mute">{e.years}, {e.score}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section id="experience" className="border-t-2 border-ink/10 py-20">
  <div className="grid gap-12 lg:grid-cols-[1fr_38rem]">
    <div className="mx-auto w-full max-w-5xl px-6 lg:mx-0 lg:max-w-none lg:pl-6 lg:pr-10">
      <h2 className="display flex items-center gap-4 text-3xl md:text-4xl">
        <span className="h-8 w-3 bg-brand" aria-hidden="true" />
        Experience
      </h2>
      <ol className="ml-2 mt-10 space-y-14 border-l-2 border-ink">
        {experience.map((e) => (
          <li key={e.company} className="relative pl-8">
            <span className="absolute -left-[9px] top-2 h-4 w-4 border-2 border-ink bg-brand" aria-hidden="true" />
            <h3 className="display text-xl">{e.role || e.company}</h3>
            {e.role && <p className="font-medium">{e.company}</p>}
            <p className="text-mute">{e.period}</p>
            {e.intro && <p className="mt-3 max-w-prose">{e.intro}</p>}
            <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 marker:text-brand">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </div>
    <div className="relative hidden lg:block">
      <div className="sticky top-50 lg:-ml-16">
        <img
          src="/site-photo.jpeg"
          alt="Site work"
          className="w-full"
        />
      </div>
    </div>
  </div>
</section>

      <Section id="skills" title="Skills">
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.group} className="border-t-4 border-brand pt-4">
              <h3 className="display text-base">{s.group}</h3>
              <ul className="mt-3 space-y-1 leading-snug">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-2 border-ink bg-card p-6 md:p-8">
          <h3 className="display text-lg">Core competencies</h3>
          <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {competencies.map((c) => (
              <li key={c} className="flex items-baseline gap-2">
                <span className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] bg-brand" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.title} className="grid border-2 border-ink bg-card md:grid-cols-[14rem_1fr]">
              <div className="display bg-brand p-6 text-lg">{project.date}</div>
              <div className="p-6 md:p-8">
                <h3 className="display text-xl md:text-2xl">{project.title}</h3>
                <p className="mt-3 max-w-prose">{project.summary}</p>
                <ul className="mt-4 max-w-prose list-disc space-y-2 pl-5 marker:text-brand">
                  {project.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <p className="max-w-prose">Get in touch about planning, project controls, or EPC coordination work.</p>
        <a href={`mailto:${profile.email}`} className="display mt-6 block break-all text-2xl underline decoration-brand decoration-4 underline-offset-8 md:text-3xl">{profile.email}</a>
        <p className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
          <a href={profile.phoneHref} className="underline underline-offset-4">{profile.phone}</a>
          <a href={profile.linkedin} className="underline underline-offset-4">LinkedIn</a>
        </p>
      </Section>

      <footer className="border-t-2 border-ink py-6 text-center text-sm text-mute">© 2026 {profile.name}</footer>
    </>
  );
}
