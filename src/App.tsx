import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  ChevronRight,
  Globe,
  Mail,
  Sparkles,
} from "lucide-react";

const EMAIL = "hola@blackintelligencemarketing.com";

function Pill({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-white/80 backdrop-blur-sm hover:bg-white/10 transition-colors " +
        className
      }
    >
      {children}
    </Comp>
  );
}

function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
}) {
  const Comp: any = href ? "a" : "button";
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 font-mono text-sm transition-colors";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "bg-white/10 text-white hover:bg-white/15 border border-white/10";
  return (
    <Comp
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
    </Comp>
  );
}

function Card({
  title,
  desc,
  icon,
  bullets,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  bullets: string[];
}) {
  return (
    <div className="rounded-card border border-white/10 bg-bim-panel p-7 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-lg font-semibold text-bim-text">
            {title}
          </div>
          <div className="mt-2 font-mono text-sm text-bim-muted">{desc}</div>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
          {icon}
        </div>
      </div>
      <ul className="mt-5 space-y-2 font-mono text-sm text-bim-muted">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <BadgeCheck className="mt-0.5 h-4 w-4 text-white/70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bim-bg text-bim-text">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-bim-bg/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-mono text-sm font-semibold tracking-tight">
                Black Intelligence Marketing
              </div>
              <div className="font-mono text-[11px] text-white/60">
                Servicios · Performance · Web · Creativo
              </div>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <Pill href={`mailto:${EMAIL}`}>
              <Mail className="h-4 w-4" />
              {EMAIL}
            </Pill>
            <Button href={`mailto:${EMAIL}`} variant="ghost">
              Contacto <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-[28px] border border-white/10 bg-bim-panel p-10 shadow-soft">
                <div className="flex flex-wrap gap-2">
                  <Pill>
                    <Building2 className="h-4 w-4" />
                    BIM
                  </Pill>
                  <Pill>
                    <Globe className="h-4 w-4" />
                    CDMX · Remote
                  </Pill>
                </div>

                <h1 className="mt-7 font-mono text-4xl font-semibold leading-tight tracking-tight">
                  Marketing sin humo.
                  <span className="block text-white/70">Ejecución rápida.</span>
                </h1>

                <p className="mt-5 max-w-xl font-mono text-sm leading-relaxed text-bim-muted">
                  Landing lista para venta: servicios claros, entregables, y
                  contacto directo. Aquí ponemos placeholders y lo afinamos con
                  casos y oferta final.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={`mailto:${EMAIL}`}>
                    Pedir propuesta <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    href="#servicios"
                    variant="ghost"
                  >
                    Ver servicios <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { k: "Tiempo", v: "24–72h para propuesta" },
                    { k: "Formato", v: "Retainer o proyecto" },
                    { k: "Enfoque", v: "ventas / leads" },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="rounded-card border border-white/10 bg-white/5 p-5"
                    >
                      <div className="font-mono text-xs uppercase tracking-widest text-white/50">
                        {x.k}
                      </div>
                      <div className="mt-2 font-mono text-sm text-white/80">
                        {x.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-6">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
                  <div className="font-mono text-xs uppercase tracking-widest text-white/50">
                    Quick offer
                  </div>
                  <div className="mt-3 font-mono text-lg font-semibold">
                    Setup de prospección + CRM mínimo
                  </div>
                  <p className="mt-2 font-mono text-sm text-bim-muted">
                    Para equipos comerciales: base, etapas, mensajes, y control.
                  </p>
                  <div className="mt-6">
                    <Button href={`mailto:${EMAIL}`} variant="ghost">
                      Quiero esto <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
                  <div className="font-mono text-xs uppercase tracking-widest text-white/50">
                    Nota
                  </div>
                  <div className="mt-3 font-mono text-sm text-bim-muted">
                    Placeholder: aquí van casos / logos / testimonios.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-6xl px-4 pb-16">
          <div className="mb-8">
            <div className="font-mono text-xs uppercase tracking-widest text-white/50">
              Servicios
            </div>
            <h2 className="mt-2 font-mono text-2xl font-semibold">
              Lo que hacemos
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              title="Performance"
              desc="Ads + medición + optimización"
              icon={<BarChart3 className="h-5 w-5" />}
              bullets={["Setup", "Optimización semanal", "Reporte ejecutivo"]}
            />
            <Card
              title="Web"
              desc="Landing + conversion"
              icon={<Globe className="h-5 w-5" />}
              bullets={["Copy + UI", "Implementación", "SEO básico"]}
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="font-mono text-sm text-white/70">
              © {new Date().getFullYear()} Black Intelligence Marketing
            </div>
            <div className="flex items-center gap-2">
              <Button href={`mailto:${EMAIL}`} variant="ghost">
                {EMAIL} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
