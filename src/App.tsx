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
  const bgSection = isDark ? "bg-[#020202]" : "bg-white";
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
            <p
              className={cn(
                "text-xl md:text-2xl font-medium mb-12 leading-relaxed",
                textMuted
              )}
            >
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
        "min-h-screen pt-32 pb-24",
        bgMain,
        textMain,
        "px-8 flex items-center"
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
    <>
      {/* HERO SECTION */}
      <section
        className={cn(
          "relative min-h-screen w-full flex flex-col justify-between pt-32 overflow-hidden transition-colors duration-500",
          bgMain
        )}
      >
        <NeuronBackground theme={theme} />

        <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 text-center w-full mt-8 md:mt-0">
          <Reveal type="fade-up" delay={100}>
            <h2 className="text-sm md:text-xl font-bold tracking-[0.3em] uppercase mb-4 text-yellow-500 drop-shadow-md">
              Agencia de Marketing & Reputación
            </h2>
          </Reveal>

          <Reveal type="scale" delay={300}>
            <h1
              className={cn(
                "text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] font-black tracking-tighter uppercase drop-shadow-2xl",
                textMain
              )}
            >
              Poder <br />
              <span
                className={cn(
                  "text-transparent bg-clip-text",
                  isDark
                    ? "bg-gradient-to-r from-gray-600 to-white"
                    : "bg-gradient-to-r from-gray-400 to-black"
                )}
                style={{
                  WebkitTextStroke: isDark
                    ? "1px rgba(255,255,255,0.2)"
                    : "1px rgba(0,0,0,0.2)",
                }}
              >
                Absoluto
              </span>
            </h1>
          </Reveal>

          <Reveal type="fade-up" delay={500}>
            <p
              className={cn(
                "max-w-xl mt-8 mb-16 text-lg font-medium leading-relaxed drop-shadow-md p-6 rounded-xl backdrop-blur-md border",
                isDark
                  ? "text-gray-300 bg-black/40 border-white/5"
                  : "text-gray-800 bg-white/40 border-black/5"
              )}
            >
              Estrategias de blindaje digital, control de la conversación pública
              y posicionamiento de alto prestigio. Dominamos la narrativa.
            </p>
          </Reveal>

          <Reveal type="fade-up" delay={650}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#services"
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-bold border px-6 py-3 transition-colors uppercase tracking-widest",
                  isDark
                    ? "border-white text-white hover:bg-yellow-500 hover:border-yellow-500 hover:text-black"
                    : "border-black text-black hover:bg-yellow-500 hover:border-yellow-500"
                )}
              >
                Servicios <ArrowDown className="w-5 h-5" />
              </a>
              <button
                onClick={() => setCurrentView("contact")}
                className="inline-flex items-center gap-2 text-sm font-bold bg-yellow-500 px-6 py-3 text-black uppercase tracking-widest hover:bg-yellow-400 transition-colors"
              >
                Contacto <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={cn("py-24", bgSection)}>
        <div className="container mx-auto max-w-6xl px-6">
          <Reveal>
            <h3 className={cn("text-4xl md:text-5xl font-black uppercase tracking-tighter", textMain)}>
              Nosotros
            </h3>
          </Reveal>
          <Reveal delay={160}>
            <p className={cn("mt-6 max-w-3xl text-lg leading-relaxed", textMuted)}>
              Placeholder: aquí va el manifiesto BIM, enfoque de discreción,
              metodología y por qué ustedes controlan la narrativa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={cn("py-24", bgMain)}>
        <div className="container mx-auto max-w-6xl px-6">
          <Reveal>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Servicios
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
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
                    <h4 className="text-2xl font-black uppercase tracking-tight">
                      {s.category}
                    </h4>
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
        </div>
      </section>

      <footer className={cn("border-t", borderSubtle, bgMain)}>
        <div className="container mx-auto max-w-6xl px-6 py-10">
          <div className={cn("text-sm", textMuted)}>
            © {new Date().getFullYear()} Black Intelligence Marketing
          </div>
        </div>
      </footer>
    </>
  );

  return (
    <div
      className={cn(
        bgMain,
        textMain,
        "font-sans selection:bg-yellow-500 selection:text-black transition-colors duration-500"
      )}
    >
      {/* NAVEGACIÓN GLOBAL */}
      <nav className="fixed w-full top-0 z-50 flex justify-between items-center px-6 md:px-8 py-6 backdrop-blur-md border-b border-white/5 bg-black/10">
        <div
          onClick={() => setCurrentView("home")}
          className="text-2xl font-black tracking-tighter cursor-pointer text-white mix-blend-difference"
        >
          BIM.
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          {currentView === "home" && (
            <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-white mix-blend-difference">
              <a href="#about" className="hover:text-yellow-500 transition-colors">
                Nosotros
              </a>
              <a href="#services" className="hover:text-yellow-500 transition-colors">
                Servicios
              </a>
            </div>
          )}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 text-white mix-blend-difference transition-colors"
            title="Cambiar Tema"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setCurrentView("contact")}
            className={cn(
              "text-sm font-bold border px-6 py-2 transition-colors uppercase tracking-widest",
              isDark
                ? "border-white text-white hover:bg-yellow-500 hover:border-yellow-500 hover:text-black"
                : "border-black text-black hover:bg-yellow-500 hover:border-yellow-500"
            )}
          >
            CONTACTO
          </button>
        </div>
      </nav>

      {/* RENDERIZADO CONDICIONAL DE VISTAS */}
      {currentView === "service" && <ServiceView />}
      {currentView === "contact" && <ContactView />}
      {currentView === "home" && <HomeView />}
    </div>
  );
}
