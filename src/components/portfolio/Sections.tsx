import { motion } from "framer-motion";
import {
  Download, Mail, Github, Linkedin, Phone, MapPin, ExternalLink,
  Trophy, Award, Code2, Medal, Star, GraduationCap, Briefcase, Sparkles,
  Brain, Bot, Globe, Wrench, Users, Cpu, FileText, Calendar, CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  PROFILE, STATS, SKILLS, EXPERIENCE, PROJECTS, ACHIEVEMENTS,
  POSITIONS, CERTIFICATES, EDUCATION, TYPING_ROLES,
} from "@/lib/portfolio-data";
import profilePic from "@/assets/madhavi.jpeg";
import { Particles } from "./Particles";
import { TypingText } from "./TypingText";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const iconMap = { Trophy, Award, Code2, Medal, Star, GraduationCap } as const;
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Programming: Cpu, "AI / ML": Brain, "Agentic AI": Bot,
  "Web Development": Globe, Tools: Wrench, "Soft Skills": Users,
};

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <div className="mx-auto inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        <Sparkles className="h-3 w-3 text-[var(--brand)]" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-bold md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {sub && <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="absolute inset-0 -z-10"><Particles /></div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Software, GenAI &amp; AI/ML roles
          </div>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
            <span className="block">Hi, I&apos;m</span>
            <span className="text-gradient">{PROFILE.name}</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-2 font-display text-lg md:text-2xl">
            <span className="text-muted-foreground">I&apos;m a</span>
            <TypingText words={TYPING_ROLES} className="font-semibold text-foreground" />
          </div>

          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            {PROFILE.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PROFILE.resumeUrl}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px]"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.02]">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass inline-flex h-11 w-11 items-center justify-center rounded-xl transition hover:scale-105">
              <Github className="h-4 w-4" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass inline-flex h-11 w-11 items-center justify-center rounded-xl transition hover:scale-105">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] opacity-30 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-2 shadow-glow">
            <img
              src={profilePic}
              alt={`${PROFILE.name} portrait`}
              width={768} height={768}
              className="aspect-square w-full rounded-3xl object-cover"
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 flex justify-between rounded-2xl glass px-4 py-3 text-xs">
              <div>
                <div className="font-semibold">Gen AI Intern</div>
                <div className="text-muted-foreground">@ Amdocs</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">NIT Agartala</div>
                <div className="text-muted-foreground">B.Tech ECE</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="About Me" title="A builder at the intersection of AI & engineering" />
        <div className="grid gap-8 md:grid-cols-3">
          <Reveal className="glass md:col-span-2 rounded-2xl p-8">
            <div className="text-lg leading-relaxed text-foreground/90">
               <p>
                 I&apos;m <span className="text-gradient font-semibold">CH. Yudaya Madhavi</span>, currently a{" "}
                 <strong>Gen AI Intern at Amdocs</strong> I completed my B.Tech in Electronics and
                 Communication Engineering at <strong>NIT Agartala</strong>. I build AI-powered solutions,
                 LLM-based applications, intelligent agents, and automation systems using modern technologies
                 such as LangChain, LangGraph, Hugging Face, Agent SDKs, and FastAPI.
               </p>

               <p className="mt-4 text-muted-foreground">
                 My passion lies in{" "}
                 <strong className="text-foreground">
                   Generative AI, Agentic AI, Machine Learning, and Software Development
                 </strong>.
                 I enjoy designing multi-agent systems, developing RAG-based applications,
                 integrating AI workflows, and building scalable products that solve real-world problems.
                 Through my internship and project experience, I have worked on agent orchestration,
                 workflow automation, conversational AI, vector databases, and production-ready AI solutions
                 that improve efficiency and decision-making.
               </p>

               <p className="mt-4 text-muted-foreground">
                 Beyond technical skills, I bring strong problem-solving, teamwork, leadership, and
                 communication abilities. As an active student leader and continuous learner,
                 I thrive in collaborative environments and enjoy transforming complex ideas into impactful products.
                 My goal is to leverage AI and emerging technologies to build innovative solutions and contribute
                 meaningfully to forward-thinking engineering teams.
               </p>
             </div>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-4">
            {[
              { icon: Brain, label: "AI/ML Focus", value: "GenAI · Agents · LLMs" },
              { icon: Briefcase, label: "Current Role", value: "Gen AI Intern · Amdocs" },
              { icon: GraduationCap, label: "Education", value: "NIT Agartala · ECE" },
            ].map((i) => (
              <div key={i.label} className="glass flex items-start gap-3 rounded-2xl p-4">
                <div className="rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] p-2 text-primary-foreground shadow-glow">
                  <i.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</div>
                  <div className="font-semibold">{i.value}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
export function Stats() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass grid grid-cols-2 gap-6 rounded-3xl p-6 md:grid-cols-5 md:p-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="text-center">
              <div className="font-display text-3xl font-bold md:text-4xl">
                <span className="text-gradient"><Counter to={s.value} suffix={s.suffix} /></span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Skills" title="Technical Toolkit" sub="A focused stack across AI, software engineering, and product." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, i) => {
            const Icon = categoryIcons[s.category] ?? Sparkles;
            return (
              <Reveal key={s.category} delay={i * 0.05}>
                <div className="glass group h-full rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] p-2 text-primary-foreground">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{s.category}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span key={it} className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-foreground/90 transition group-hover:border-[var(--brand)]/40">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand)] via-[var(--brand-2)] to-transparent md:left-1/2" />
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.08}>
              <div className={`relative mb-10 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-glow md:left-1/2" />
                <div className="pl-10 md:pl-0 md:pr-12 md:text-right">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    <Calendar className="mr-1 inline h-3 w-3" /> {e.period}
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-bold">{e.company}</h3>
                  <div className="text-[var(--brand-2)]">{e.role}</div>
                </div>
                <div className="pl-10 md:pl-12">
                  <div className="glass rounded-2xl p-5">
                    <ul className="space-y-2 text-sm text-foreground/90">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Projects" title="Selected Work" sub="A mix of AI/ML systems and applied data products." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-glow">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={p.image} alt={p.title}
                    loading="lazy" width={1024} height={640}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 text-[11px]">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2 pt-2">
                    <a href={p.github} target="_blank" rel="noreferrer" className="glass inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition hover:scale-[1.02]">
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Achievements" title="Recognition & Wins" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = (iconMap as Record<string, React.ComponentType<{ className?: string }>>)[a.icon] ?? Trophy;
            return (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-glow">
                  <div className="rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] p-3 text-primary-foreground shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{a.title}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <SectionHeading eyebrow="Leadership" title="Positions of Responsibility" />
        <div className="grid gap-5 md:grid-cols-2">
          {POSITIONS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] p-2 text-primary-foreground">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{p.title}</h3>
                    <div className="text-xs text-muted-foreground">{p.org}</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CERTIFICATES ---------------- */
export function Certificates() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="certificates" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Certificates" />
        <div className="grid gap-5 md:grid-cols-2">
          {CERTIFICATES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <button
                onClick={() => setOpen(i)}
                className="glass group flex w-full items-start gap-4 rounded-2xl p-6 text-left transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] p-3 text-primary-foreground shadow-glow">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold">{c.title}</h3>
                  <div className="text-sm text-[var(--brand-2)]">{c.issuer}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
              </button>
            </Reveal>
          ))}
        </div>

        {open !== null && (
          <div
            role="dialog" aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur"
            onClick={() => setOpen(null)}
          >
            <div className="glass max-w-md rounded-2xl p-8 text-center" onClick={(e) => e.stopPropagation()}>
              <FileText className="mx-auto h-10 w-10 text-[var(--brand)]" />
              <h3 className="mt-4 font-display text-2xl font-bold">{CERTIFICATES[open].title}</h3>
              <div className="mt-1 text-sm text-[var(--brand-2)]">{CERTIFICATES[open].issuer}</div>
              <p className="mt-3 text-sm text-muted-foreground">{CERTIFICATES[open].description}</p>
              <button
                onClick={() => setOpen(null)}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- EDUCATION ---------------- */
export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow="Education" title="Academic Background" />
        <div className="space-y-5">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.05}>
              <div className="glass flex flex-col gap-4 rounded-2xl p-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] p-3 text-primary-foreground shadow-glow">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{e.school}</h3>
                    <div className="text-sm text-muted-foreground">{e.degree}</div>
                  </div>
                </div>
                <div className="md:text-right">
                  <div className="inline-flex rounded-full bg-secondary/50 px-3 py-1 text-xs font-semibold">
                    {e.grade}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(fd.get("subject") || "Portfolio inquiry"));
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\n\n${fd.get("message")}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Opening your email client…");
    }, 600);
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Contact" title="Let's build something together" sub="Open to opportunities in Software Engineering, GenAI, AI/ML, and Agentic AI." />
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <Reveal className="glass space-y-4 rounded-2xl p-6">
            {[
              { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
              { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
              { icon: Linkedin, label: "LinkedIn", value: PROFILE.linkedinLabel, href: PROFILE.linkedin },
              { icon: Github, label: "GitHub", value: PROFILE.githubLabel, href: PROFILE.github },
              { icon: MapPin, label: "Location", value: PROFILE.location },
            ].map((c) => {
              const Inner = (
                <div className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-secondary/60">
                  <div className="rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] p-2 text-primary-foreground">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="font-medium">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
                  {Inner}
                </a>
              ) : <div key={c.label}>{Inner}</div>;
            })}
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Field name="name" label="Name" required maxLength={100} />
                <Field name="email" label="Email" type="email" required maxLength={255} />
              </div>
              <Field name="subject" label="Subject" required maxLength={150} />
              <div>
                <label htmlFor="message" className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea
                  id="message" name="message" required maxLength={2000} rows={5}
                  className="w-full rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none ring-0 transition focus:border-[var(--brand)] focus:bg-input"
                  placeholder="Tell me about the role or project…"
                />
              </div>
              <button
                type="submit" disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px] disabled:opacity-60"
              >
                {submitting ? "Sending…" : (<><Mail className="h-4 w-4" /> Send Message</>)}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required, maxLength }: { name: string; label: string; type?: string; required?: boolean; maxLength?: number }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        id={name} name={name} type={type} required={required} maxLength={maxLength}
        className="w-full rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none transition focus:border-[var(--brand)] focus:bg-input"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="border-t border-border/60 pt-12 pb-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-display text-lg font-bold text-gradient">{PROFILE.name}</div>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Generative AI Engineer building agents, automation systems, and full-stack products.
            </p>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">Quick Links</div>
            <ul className="grid grid-cols-2 gap-1 text-sm">
              {["About","Skills","Projects","Experience","Education","Contact"].map((s) => (
                <li key={s}><a href={`#${s.toLowerCase()}`} className="hover:text-foreground text-muted-foreground transition">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">Connect</div>
            <div className="flex flex-wrap gap-2">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass inline-flex h-10 w-10 items-center justify-center rounded-full"><Github className="h-4 w-4" /></a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass inline-flex h-10 w-10 items-center justify-center rounded-full"><Linkedin className="h-4 w-4" /></a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="glass inline-flex h-10 w-10 items-center justify-center rounded-full"><Mail className="h-4 w-4" /></a>
              <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-4 text-sm"><Download className="h-3.5 w-3.5" /> Resume</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div>Built with React, Tailwind &amp; Framer Motion.</div>
        </div>
      </div>
    </footer>
  );
}
