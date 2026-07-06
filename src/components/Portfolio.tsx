import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Terminal,
  Shield,
  Cpu,
  Network,
  Lock,
  Globe,
  ChevronRight,
  Send,
  MapPin,
  GraduationCap,
  Trophy,
  Award,
} from "lucide-react";
import { HeroScene } from "./HeroScene";
import { MatrixRain } from "./MatrixRain";
import { Nav } from "./Nav";
import { TiltCard } from "./TiltCard";
import { TerminalLog } from "./TerminalLog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const SOCIALS = {
  github: "https://github.com/Nithin-dot-k",
  linkedin: "https://linkedin.com/in/nithin-k-994979291",
  tryhackme: "https://tryhackme.com/p/nithinjr76",
  email: "nithinjr76@gmail.com",
};

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), {
      threshold: 0.15,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function SectionTitle({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div className="mb-12">
      <div className="font-mono text-xs text-cyan mb-2 flex items-center gap-2">
        <ChevronRight className="h-3 w-3" />
        <span>{tag}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        <span className="text-neon">{title}</span>
      </h2>
      {sub && <p className="mt-3 text-muted-foreground max-w-2xl">{sub}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-14 flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 grid lg:grid-cols-2 gap-8 items-center relative z-10">
        <div className="flicker-in">
          <div className="font-mono text-xs text-cyan mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neon animate-pulse" />
            <span>SYSTEM ONLINE · SECURE CHANNEL ESTABLISHED</span>
          </div>
          <p className="font-mono text-sm text-muted-foreground mb-2">
            <span className="text-neon">$</span> whoami
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-4">
            <span className="glitch text-neon">Nithin K</span>
          </h1>
          <p className="font-mono text-sm sm:text-base text-cyan mb-4">
            &gt; Systems &amp; Full-Stack Engineer <span className="text-muted-foreground">//</span>{" "}
            Secure System Architect
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6">
            <MapPin className="h-3.5 w-3.5" />
            <span>Coimbatore / Erode, India</span>
          </div>
          <p className="text-base sm:text-lg text-foreground/80 max-w-xl mb-8 leading-relaxed">
            Engineering <span className="text-neon">secure-by-default</span> systems without
            compromising fluid user experience.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-neon text-primary-foreground hover:bg-neon/90 font-mono uppercase tracking-wider text-xs"
            >
              <a href="#projects">
                <Terminal className="mr-2 h-4 w-4" /> View Projects
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glow-border-cyan bg-transparent font-mono uppercase tracking-wider text-xs text-cyan hover:bg-neon-cyan/10"
            >
              <a href="/resume.pdf" download="Nithin_K_Resume.pdf">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-neon transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-neon transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={SOCIALS.tryhackme}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-neon transition-colors font-mono text-xs flex items-center gap-1"
              aria-label="TryHackMe"
            >
              <Shield className="h-4 w-4" /> THM · Top 25%
            </a>
            <a
              href={`mailto:${SOCIALS.email}`}
              className="text-muted-foreground hover:text-neon transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="relative h-[380px] sm:h-[500px] lg:h-[560px] panel scanlines rounded-lg overflow-hidden">
          <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-3 py-2 border-b border-border bg-[#05070a]/60 backdrop-blur">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-destructive/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
              <span className="h-2 w-2 rounded-full bg-neon/70" />
            </div>
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              net_topology.viz
            </span>
            <span className="font-mono text-[10px] text-cyan">42 nodes · encrypted</span>
          </div>
          <HeroScene />
          <div className="absolute bottom-0 inset-x-0 z-10 px-3 py-1.5 border-t border-border bg-[#05070a]/60 backdrop-blur flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <span>drag to rotate · mouse-reactive</span>
            <span className="text-neon flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" /> LIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { ref, visible } = useReveal();
  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={visible ? "fade-up" : "opacity-0"}>
          <SectionTitle tag="cat /etc/philosophy" title="About // Philosophy" />
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <div
            className={`lg:col-span-2 panel scanlines rounded-lg p-6 sm:p-8 ${visible ? "fade-up" : "opacity-0"}`}
          >
            <p className="text-foreground/85 leading-relaxed mb-5">
              Software Engineer combining <span className="text-neon">offensive cybersecurity</span>{" "}
              knowledge with robust full-stack development skills. Experienced engineering secure
              web architectures using React.js and FastAPI, plus hands-on experience building
              secure, low-level process managers.
            </p>
            <p className="text-foreground/85 leading-relaxed">
              Passionate about mitigating vulnerabilities and integrating{" "}
              <span className="text-cyan">proactive security boundaries</span> into modern
              applications and AI workflows.
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-mono text-xs text-muted-foreground mb-2">// specialization</p>
              <p className="text-sm text-foreground/80">
                Building low-latency backend systems, isolating cryptographic tenant environments,
                optimizing database partitions, and designing modern frontend interfaces.
              </p>
            </div>
          </div>
          <div
            className={`space-y-4 ${visible ? "fade-up" : "opacity-0"}`}
            style={{ animationDelay: "150ms" }}
          >
            <div className="panel rounded-lg p-5 glow-border">
              <div className="font-mono text-xs text-neon mb-2 flex items-center gap-2">
                <Lock className="h-3.5 w-3.5" /> CORE_PHILOSOPHY
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed">
                Designing robust, "secure-by-default" containerized microservices and backend
                architectures without compromising on fluid, responsive user experiences.
              </p>
            </div>
            <div className="panel rounded-lg p-5">
              <div className="font-mono text-xs text-cyan mb-3 flex items-center gap-2">
                <GraduationCap className="h-3.5 w-3.5" /> EDUCATION
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">B.E. in CSE (Cyber Security)</p>
                <p className="text-muted-foreground text-xs mt-1">
                  Dr. N.G.P. Institute of Technology
                </p>
                <p className="font-mono text-xs text-cyan mt-2">2023 – 2027 · CGPA 7.7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILLS = [
  { tag: "SYS_LANG", icon: Cpu, items: ["Rust", "Java", "Python", "Bash", "JavaScript", "Go"] },
  { tag: "UI_STACK", icon: Terminal, items: ["React.js", "Next.js", "Tailwind CSS"] },
  { tag: "SEC_TOOL", icon: Shield, items: ["Wireshark", "Nmap", "Burp Suite", "Ethical Hacking"] },
  { tag: "NET_PROTO", icon: Network, items: ["TCP/IP", "DNS", "HTTP", "FTP", "Telnet", "SMTP"] },
  {
    tag: "SEC_DOM",
    icon: Lock,
    items: ["Network Security", "Web App Security", "Cryptography", "AI Security"],
  },
  { tag: "PLAT_OS", icon: Globe, items: ["TryHackMe (Top 25%)", "Supabase", "FastAPI"] },
];

function TechSpecs() {
  const { ref, visible } = useReveal();
  return (
    <section
      id="specs"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={visible ? "fade-up" : "opacity-0"}>
          <SectionTitle
            tag="./scan --stack"
            title="Tech Specs"
            sub="Operational toolkit and combat-tested competencies."
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((s, i) => (
            <TiltCard key={s.tag} className={visible ? "fade-up" : "opacity-0"}>
              <div
                className="panel rounded-lg p-5 h-full glow-border hover:glow-border-cyan transition-all"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-neon">
                    <s.icon className="h-4 w-4" />
                    <span>{s.tag}</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    0x{i.toString(16).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="font-mono text-xs px-2 py-1 rounded bg-neon-cyan/10 text-cyan border border-neon-cyan/20"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    name: "InsightStream",
    tag: "Multi-Tenant SaaS Knowledge Base (RAG)",
    stack: ["Next.js", "Supabase", "Clerk", "Groq"],
    desc: "Enterprise B2B SaaS document intelligence platform. Cryptographic tenant isolation via Clerk Organizations and JWTs securing PostgreSQL partitions. Hardened SPA security with session-change listener flushing in-memory state on logout. Optimized Cohere vector ingestion (1024-d) bypassing edge-function timeouts.",
    log: [
      "[AUTH] Clerk session verified ✓",
      "[DB] Supabase Row-Level Security: ACTIVE",
      "[VEC] Cohere 1024-d embedding ingestion: SUCCESS",
    ],
    status: "PROD",
    repo: "https://github.com/Nithin-dot-k/insight-stream",
  },
  {
    name: "ORE",
    tag: "Open Runtime Environment for LLMs · Ongoing",
    stack: ["Rust", "Hugging Face Candle", "Axum"],
    desc: 'Kernel-level process manager in Rust to securely virtualize/orchestrate local AI inference. "Context Firewall" module blocking heuristic prompt injections and redacting PII via regex. Semaphore-based GPU scheduler + SSD Pager to multiplex model weights. Semantic Bus with zero-copy embedding caching for isolated IPC.',
    log: [
      "[BUILD] rustc compile: 4.2s",
      "[GPU] thread-ring bound to device 0",
      "[FIREWALL] heuristic prompt-injection scan: PASS",
      "[SSD] page allocation: OK",
    ],
    status: "WIP",
    repo: "https://github.com/Nithin-dot-k/ore-kernel",
  },
  {
    name: "CryptGuard",
    tag: "Secure Client-Side File Encryption",
    stack: ["React.js", "Web Crypto API"],
    desc: "Client-side AES-GCM 256-bit encryption with PBKDF2 key derivation (100k iterations) and automatic session flush.",
    log: [
      "[CRYPTO] context loaded",
      "[KDF] PBKDF2 100,000 iterations: DERIVED",
      "[SESSION] auto-expire listener: 15m ACTIVE",
    ],
    status: "PROD",
    repo: "https://github.com/Nithin-dot-k/CryptoGaurd-Project",
  },
  {
    name: "PhishGuard",
    tag: "AI-Powered Phishing Detection System",
    stack: ["Python", "FastAPI", "Scikit-learn", "Chrome Ext"],
    desc: "Hybrid detection combining Random Forest ML with heuristic + brand-impersonation analysis via Chrome Extension to cut false positives. Async FastAPI achieves sub-200ms latency.",
    log: [
      "[SERVER] FastAPI: RUNNING",
      "[MODEL] Random Forest loaded — accuracy 98.4%",
      "[LATENCY] request processed in 187ms",
    ],
    status: "PROD",
    repo: "https://github.com/Nithin-dot-k/PhishGuard-ML",
  },
  {
    name: "Smart Backup",
    tag: "Incremental Backup System",
    stack: ["Bash", "Rsync"],
    desc: "Automated incremental backups with versioning strategy and directory compression, pushed to remote server.",
    log: [
      "[SCAN] target directory analyzed",
      "[SYNC] file diff check: 42 changed",
      "[COMPRESS] incremental archive created",
      "[PUSH] remote server sync: CONFIRMED",
    ],
    status: "PROD",
    repo: "https://github.com/Nithin-dot-k/smart-backup-bash",
  },
];

function Projects() {
  const { ref, visible } = useReveal();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={visible ? "fade-up" : "opacity-0"}>
          <SectionTitle
            tag="ls -la ~/projects"
            title="Projects"
            sub="Selected builds — click any card to open its runtime log."
          />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <TiltCard key={p.name} className={visible ? "fade-up" : "opacity-0"}>
              <div
                onClick={() => setOpen(open === i ? null : i)}
                className={`panel rounded-lg p-6 cursor-pointer transition-all ${open === i ? "glow-border" : "hover:glow-border-cyan"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-mono text-[10px] text-cyan uppercase tracking-widest mb-1">
                      proj_{String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-bold text-neon">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.tag}</p>
                  </div>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded border ${p.status === "WIP" ? "text-yellow-400 border-yellow-500/40 bg-yellow-500/10" : "text-neon border-neon/40 bg-neon/10"}`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-neon-cyan/10 text-cyan border border-neon-cyan/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="font-mono text-[10px] text-muted-foreground flex items-center gap-1">
                    <ChevronRight
                      className={`h-3 w-3 transition-transform ${open === i ? "rotate-90 text-neon" : ""}`}
                    />
                    {open === i ? "close_log" : "exec_log()"}
                  </div>

                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-[10px] text-cyan hover:text-neon flex items-center gap-1 transition-colors"
                  >
                    <Github className="h-3 w-3" /> view_repo
                  </a>
                </div>
                {open === i && <TerminalLog lines={p.log} active={open === i} />}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

const TIMELINE = [
  {
    type: "INTERN",
    icon: Shield,
    title: "Cybersecurity & Ethical Hacking Intern",
    org: "Hackup Technology Pvt. Ltd., Coimbatore",
    date: "Jun – Jul 2025",
    detail:
      "Vulnerability analysis with Nmap, traffic analysis with Wireshark, XAMPP local server deployment, Ngrok secure tunneling.",
  },
  {
    type: "CTF",
    icon: Trophy,
    title: "KubSTU CTF 2026 (International)",
    org: "287 / 1280 teams · 51 countries",
    date: "May 2026",
    detail:
      "International capture-the-flag competition — offensive security & exploitation challenges.",
  },
  {
    type: "CTF",
    icon: Trophy,
    title: "THCON 2026 & Maltego Community OSINT CTF",
    org: "Active participant",
    date: "2026",
    detail: "OSINT-focused capture-the-flag events, reconnaissance and intel gathering.",
  },
  {
    type: "CERT",
    icon: Award,
    title: "Privacy and Security in Online Social Media",
    org: "NPTEL · Grade A (Elite + Silver)",
    date: "Cert.",
    detail: "Advanced coursework in social-media threat modelling and data privacy.",
  },
  {
    type: "CERT",
    icon: Award,
    title: "CISSP Certification",
    org: "Red Team Leaders",
    date: "Cert.",
    detail: "Information security professional certification track.",
  },
];

function Experience() {
  const { ref, visible } = useReveal();
  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={visible ? "fade-up" : "opacity-0"}>
          <SectionTitle
            tag="./history --log"
            title="Experience // CTF // Certs"
            sub="Operational timeline."
          />
        </div>
        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon/60 via-neon-cyan/30 to-transparent" />
          <div className="space-y-6">
            {TIMELINE.map((t, i) => (
              <div
                key={i}
                className={`relative pl-12 sm:pl-16 ${visible ? "fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute left-0 sm:left-2 top-1 grid place-items-center h-8 w-8 rounded-md panel glow-border">
                  <t.icon className="h-4 w-4 text-neon" />
                </div>
                <div className="panel scanlines rounded-lg p-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-neon/10 text-neon border border-neon/30">
                      {t.type}
                    </span>
                    <span className="font-mono text-xs text-cyan">{t.date}</span>
                  </div>
                  <h3 className="font-bold text-foreground">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{t.org}</p>
                  <p className="text-sm text-foreground/80">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  // Paste your Web3Forms access key here:
  const WEB3FORMS_ACCESS_KEY = "da898e3f-f6b4-4db3-8ff1-9c15e19e3c1a";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("All fields required.");
      return;
    }
    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message queued · encrypted channel ✓");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(result.message || "Transmission failed.");
      }
    } catch (error) {
      toast.error("Transmission gateway offline.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={visible ? "fade-up" : "opacity-0"}>
          <SectionTitle tag="./ping --secure" title="Contact" sub="Open a secure channel." />
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div
            className={`panel scanlines rounded-lg p-6 sm:p-8 ${visible ? "fade-up" : "opacity-0"}`}
          >
            <div className="font-mono text-xs text-cyan mb-4">// endpoints</div>
            <a
              href={`mailto:${SOCIALS.email}`}
              className="flex items-center gap-3 py-3 border-b border-border hover:text-neon transition-colors group"
            >
              <Mail className="h-4 w-4 text-neon" />
              <span className="font-mono text-sm">{SOCIALS.email}</span>
              <ChevronRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 py-3 border-b border-border hover:text-neon transition-colors group"
            >
              <Github className="h-4 w-4 text-neon" />
              <span className="font-mono text-sm">github.com/Nithin-dot-k</span>
              <ChevronRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 py-3 border-b border-border hover:text-neon transition-colors group"
            >
              <Linkedin className="h-4 w-4 text-neon" />
              <span className="font-mono text-sm">linkedin.com/in/nithin-k-994979291</span>
              <ChevronRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={SOCIALS.tryhackme}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 py-3 hover:text-neon transition-colors group"
            >
              <Shield className="h-4 w-4 text-neon" />
              <span className="font-mono text-sm">tryhackme.com/p/nithinjr76 · Top 25%</span>
              <ChevronRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <div className="mt-6 pt-6 border-t border-border font-mono text-xs text-muted-foreground">
              <div>
                status: <span className="text-neon">online</span>
              </div>
              <div>
                encryption: <span className="text-cyan">TLS 1.3 · AES-256-GCM</span>
              </div>
              <div>
                latency: <span className="text-neon">~42ms</span>
              </div>
            </div>
          </div>
          <form
            onSubmit={submit}
            className={`panel rounded-lg p-6 sm:p-8 glow-border ${visible ? "fade-up" : "opacity-0"}`}
            style={{ animationDelay: "150ms" }}
          >
            <div className="font-mono text-xs text-cyan mb-4">// send_packet()</div>
            <div className="space-y-4">
              <div>
                <label className="font-mono text-xs text-muted-foreground mb-1 block">--name</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-[#05070a] border-border font-mono text-sm focus-visible:ring-neon"
                  placeholder="anonymous"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground mb-1 block">
                  --email
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-[#05070a] border-border font-mono text-sm focus-visible:ring-neon"
                  placeholder="you@domain.com"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground mb-1 block">
                  --message
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-[#05070a] border-border font-mono text-sm min-h-32 focus-visible:ring-neon"
                  placeholder="> your payload here"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-neon text-primary-foreground hover:bg-neon/90 font-mono uppercase tracking-wider text-xs"
              >
                {sending ? (
                  "transmitting..."
                ) : (
                  <>
                    <Send className="mr-2 h-3.5 w-3.5" /> transmit
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="font-mono text-sm text-neon cli-cursor">nithin@secure-system:~$</div>
        <div className="flex items-center gap-4">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-neon"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-neon"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={SOCIALS.tryhackme}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-neon"
          >
            <Shield className="h-4 w-4" />
          </a>
          <a href={`mailto:${SOCIALS.email}`} className="text-muted-foreground hover:text-neon">
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <div className="font-mono text-[10px] text-muted-foreground">
          © {new Date().getFullYear()} · built &amp; secured by nithin_k
        </div>
      </div>
    </footer>
  );
}

export function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <MatrixRain />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechSpecs />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
