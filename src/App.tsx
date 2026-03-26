import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";

import { Reveal } from "./components/Reveal";
import { NeuronBackground } from "./components/NeuronBackground";
import { servicesData, type Service } from "./data/services";

type Theme = "dark" | "light";
type View = "home" | "service" | "contact";

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [currentView, setCurrentView] = useState<View>("home");
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const activeService = useMemo<Service | null>(() => {
    if (!activeServiceId) return null;
    return servicesData.find((s) => s.id === activeServiceId) ?? null;
  }, [activeServiceId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView, activeServiceId]);

  const toggleTheme = () => setTheme((p) => (p === "dark" ? "light" : "dark"));

  const openService = (service: Service) => {
    setActiveServiceId(service.id);
    setCurrentView("service");
  };

  const isDark = theme === "dark";

  // Clases dinámicas (como tu snippet)
  const bgMain = isDark ? "bg-[#050505]" : "bg-gray-50";
  const textMain = isDark ? "text-white" : "text-gray-900";
  const bgCard = isDark ? "bg-[#0a0a0a]" : "bg-white";
  const borderSubtle = isDark ? "border-white/10" : "border-gray-200";
  const textMuted = isDark ? "text-gray-400" : "text-gray-600";

  const ServiceView = () => {
    if (!activeService) return null;
    const Icon = activeService.icon;

    return (
      <div className={cn("min-h-screen pt-32 pb-24 px-8", bgMain, textMain)}>
        <div className="container mx-auto max-w-4xl">
          <button
            onClick={() => setCurrentView("home")}
            className="flex items-center gap-2 mb-12 text-yellow-500 hover:text-yellow-600 font-bold uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Regresar
          </button>

          <Reveal type="fade-up">
            <div className="text-yellow-500 mb-6">
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-tight">
              {activeService.category}
            </h1>
            <p className={cn("text-xl md:text-2xl font-medium mb-12 leading-relaxed", textMuted)}>
              {activeService.description}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <Reveal type="fade-left" delay={200}>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-widest">
                Ejecución Estratégica
              </h3>
              <p className={cn("text-lg leading-relaxed", textMuted)}>
                {activeService.details}
              </p>
            </Reveal>

            <Reveal type="fade-up" delay={400}>
              <div
                className={cn(
                  "p-8 border-2 rounded-xl",
                  isDark
                    ? "border-yellow-500/30 bg-black/50"
                    : "border-yellow-500 bg-yellow-50/50"
                )}
              >
                <h3 className="text-xl font-bold mb-6 uppercase tracking-widest">
                  Entregables
                </h3>
                <ul className="space-y-4">
                  {activeService.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setCurrentView("contact")}
                  className="mt-10 w-full py-4 bg-yellow-500 text-black font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors"
                >
                  Solicitar Implementación
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    );
  };

  const ContactView = () => (
    <div
      className={cn(
        "min-h-screen pt-32 pb-24 px-8 flex items-center",
        bgMain,
        textMain
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <button
          onClick={() => setCurrentView("home")}
          className="flex items-center gap-2 mb-12 text-yellow-500 hover:text-yellow-600 font-bold uppercase tracking-widest transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Volver al Inicio
        </button>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal type="fade-left">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
              Inicia tu <br />
              <span className="text-yellow-500">Blindaje.</span>
            </h1>
            <p className={cn("text-xl font-medium mb-12 max-w-md", textMuted)}>
              Agenda una sesión confidencial de diagnóstico con nuestros
              directores de estrategia. La discreción es absoluta.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-yellow-500 mb-1">
                  Email Directo
                </p>
                <p className="text-2xl font-medium">estrategia@bim.agency</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-yellow-500 mb-1">
                  Línea Cifrada
                </p>
                <p className="text-2xl font-medium">+52 55 1234 5678</p>
              </div>
            </div>
          </Reveal>

          <Reveal type="scale" delay={300}>
            <form
              className={cn(
                "p-10 border shadow-2xl space-y-6",
                borderSubtle,
                bgCard
              )}
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                  Nombre / Entidad
                </label>
                <input
                  type="text"
                  className={cn(
                    "w-full p-4 bg-transparent border focus:border-yellow-500 outline-none transition-colors",
                    borderSubtle
                  )}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className={cn(
                    "w-full p-4 bg-transparent border focus:border-yellow-500 outline-none transition-colors",
                    borderSubtle
                  )}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                  Situación / Requerimiento
                </label>
                <textarea
                  rows={4}
                  className={cn(
                    "w-full p-4 bg-transparent border focus:border-yellow-500 outline-none transition-colors resize-none",
                    borderSubtle
                  )}
                />
              </div>

              <button className="w-full py-4 bg-yellow-500 text-black font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors">
                Enviar Solicitud Segura
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );

  const HomeView = () => (
    <div className={cn("min-h-screen", bgMain, textMain)}>
      <div className="relative overflow-hidden">
        <NeuronBackground theme={theme} />

        <header className="relative z-10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <div className="font-mono text-sm tracking-tight">
              <span className={cn("font-semibold", isDark ? "text-white" : "text-black")}>
                Black Intelligence Marketing
              </span>
            </div>
            <button
              onClick={toggleTheme}
              className={cn(
                "inline-flex items-center justify-center rounded-full border px-3 py-3 backdrop-blur",
                isDark ? "border-white/10 bg-white/5 text-white" : "border-black/10 bg-black/5 text-black"
              )}
              title="Cambiar tema"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto max-w-6xl px-6 pb-16 pt-16">
            <Reveal>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
                Inteligencia digital para dominar la percepción.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className={cn("mt-6 max-w-2xl text-lg leading-relaxed", textMuted)}>
                Selecciona un servicio para ver el detalle. (Implementación basada
                en tu snippet.)
              </p>
            </Reveal>

            <div className="mt-10 flex items-center gap-3">
              <a
                href="#servicios"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-6 py-3 font-bold uppercase tracking-widest",
                  isDark ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-black/10 bg-black/5 hover:bg-black/10"
                )}
              >
                Ver servicios <ArrowDown className="h-5 w-5" />
              </a>
              <button
                onClick={() => setCurrentView("contact")}
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 text-black font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors"
              >
                Contacto <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </section>

          <section id="servicios" className="mx-auto max-w-6xl px-6 pb-24">
            <div className="grid gap-6 md:grid-cols-2">
              {servicesData.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.id} delay={idx * 80}>
                    <button
                      onClick={() => openService(s)}
                      className={cn(
                        "w-full rounded-2xl border p-8 text-left transition-colors",
                        borderSubtle,
                        bgCard,
                        isDark ? "hover:bg-white/5" : "hover:bg-black/5"
                      )}
                    >
                      <div className="text-yellow-500 mb-6">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">
                        {s.category}
                      </h3>
                      <p className={cn("mt-4 text-base leading-relaxed", textMuted)}>
                        {s.description}
                      </p>
                      <div className="mt-6 inline-flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest">
                        Ver detalle <ChevronRight className="w-5 h-5" />
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </section>
        </main>

        <footer className={cn("relative z-10 border-t", borderSubtle)}>
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className={cn("text-sm", textMuted)}>
              © {new Date().getFullYear()} Black Intelligence Marketing
            </div>
          </div>
        </footer>
      </div>
    </div>
  );

  return currentView === "home" ? (
    <HomeView />
  ) : currentView === "service" ? (
    <ServiceView />
  ) : (
    <ContactView />
  );
}
