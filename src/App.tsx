import React, { useMemo, useState } from "react";
import {
  ArrowDown,
  ChevronRight,
  Minimize2,
  Maximize2,
  Sun,
  Moon,
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

import { Reveal } from "./components/Reveal";
import { NeuronBackground } from "./components/NeuronBackground";
import { servicesData } from "./data/services";

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

function IconButton({
  onClick,
  children,
  title,
}: {
  onClick: () => void;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-3 text-white/80 hover:bg-white/10"
    >
      {children}
    </button>
  );
}

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [compact, setCompact] = useState(false);

  const activeService = useMemo(
    () => servicesData.find((s) => s.id === activeId) ?? null,
    [activeId]
  );

  const isDark = theme === "dark";

  return (
    <div className={cn("min-h-screen", isDark ? "bg-bim-bg" : "bg-white")}> 
      <div className={cn("relative overflow-hidden", isDark ? "text-bim-text" : "text-black")}> 
        <NeuronBackground theme={theme} />

        <header className="relative z-10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
            <div className="font-mono text-sm tracking-tight">
              <span className={cn("font-semibold", isDark ? "text-white" : "text-black")}>
                Black Intelligence Marketing
              </span>
              <span className={cn("ml-3", isDark ? "text-white/60" : "text-black/60")}>
                Blindaje · Conversación · Core Digital
              </span>
            </div>

            <div className="flex items-center gap-2">
              <IconButton
                onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                title="Cambiar tema"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </IconButton>
              <IconButton
                onClick={() => setCompact((v) => !v)}
                title={compact ? "Vista normal" : "Vista compacta"}
              >
                {compact ? (
                  <Maximize2 className="h-5 w-5" />
                ) : (
                  <Minimize2 className="h-5 w-5" />
                )}
              </IconButton>
            </div>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto max-w-6xl px-4 pb-16 pt-10">
            <Reveal>
              <h1
                className={cn(
                  "font-mono text-4xl font-semibold leading-tight tracking-tight sm:text-5xl",
                  isDark ? "text-white" : "text-black"
                )}
              >
                Inteligencia digital para dominar la percepción.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p
                className={cn(
                  "mt-5 max-w-2xl font-mono text-sm leading-relaxed",
                  isDark ? "text-white/70" : "text-black/70"
                )}
              >
                Versión inicial con placeholders + motor visual (neuronas). Lo
                dejamos exacto cuando me pegues el archivo completo.
              </p>
            </Reveal>

            <div className="mt-10 flex items-center gap-3">
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-mono text-sm text-white/80 hover:bg-white/10"
              >
                Ver servicios <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="mailto:hola@blackintelligencemarketing.com"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-3 font-mono text-sm",
                  isDark
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-black text-white hover:bg-black/90"
                )}
              >
                Solicitar contacto <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          <section id="servicios" className="mx-auto max-w-6xl px-4 pb-20">
            <Reveal>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div
                    className={cn(
                      "font-mono text-xs uppercase tracking-widest",
                      isDark ? "text-white/50" : "text-black/50"
                    )}
                  >
                    Servicios
                  </div>
                  <h2
                    className={cn(
                      "mt-2 font-mono text-2xl font-semibold",
                      isDark ? "text-white" : "text-black"
                    )}
                  >
                    Áreas de intervención
                  </h2>
                </div>

                <div
                  className={cn(
                    "hidden items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs sm:flex",
                    isDark
                      ? "border-white/10 bg-white/5 text-white/70"
                      : "border-black/10 bg-black/5 text-black/70"
                  )}
                >
                  <Lightbulb className="h-4 w-4" />
                  Click en un servicio para ver detalles
                </div>
              </div>
            </Reveal>

            <div className={cn("mt-8 grid gap-6", compact ? "md:grid-cols-3" : "md:grid-cols-2")}>
              {servicesData.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.id} delay={idx * 60}>
                    <button
                      type="button"
                      onClick={() => setActiveId(s.id)}
                      className={cn(
                        "group w-full rounded-card border p-7 text-left shadow-soft transition-colors",
                        isDark
                          ? "border-white/10 bg-bim-panel hover:bg-white/5"
                          : "border-black/10 bg-white hover:bg-black/5"
                      )}
                    >
                      <Icon className={cn("h-8 w-8", isDark ? "text-white" : "text-black")} />
                      <div className={cn("mt-4 font-mono text-lg font-semibold", isDark ? "text-white" : "text-black")}>
                        {s.category}
                      </div>
                      <div className={cn("mt-2 font-mono text-sm", isDark ? "text-white/65" : "text-black/65")}>
                        {s.description}
                      </div>
                      <div className={cn("mt-5 inline-flex items-center gap-2 font-mono text-xs", isDark ? "text-white/60" : "text-black/60")}>
                        Ver detalles <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>

            {activeService && (
              <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="font-mono text-xl font-semibold text-white">
                      {activeService.category}
                    </div>
                    <div className="mt-2 max-w-3xl font-mono text-sm text-white/70">
                      {activeService.details}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveId(null)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-white/70 hover:bg-white/10"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Cerrar
                  </button>
                </div>

                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {activeService.items.map((it) => (
                    <div key={it} className="flex items-start gap-2 font-mono text-sm text-white/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-white/60" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </main>

        <footer className="relative z-10 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="font-mono text-sm text-white/60">
                © {new Date().getFullYear()} Black Intelligence Marketing
              </div>
              <a
                href="mailto:hola@blackintelligencemarketing.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-mono text-sm text-white/80 hover:bg-white/10"
              >
                hola@blackintelligencemarketing.com <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
