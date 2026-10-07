import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="noise relative flex min-h-screen items-center justify-center overflow-hidden bg-yrwen-ink px-6 text-white">
      <div className="grid-perspective" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yrwen-violet/15 blur-[160px]" />
      <div className="relative text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-yrwen-cyan">erro 404</span>
        <h1 className="text-gradient mt-4 text-[7rem] font-semibold leading-none md:text-[10rem]">404</h1>
        <p className="mt-4 text-lg text-white/60">A página que você procura não existe ou foi movida.</p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-yrwen-ink transition-transform hover:scale-[1.03]"
        >
          <ArrowLeft size={16} />
          Voltar ao início
        </a>
      </div>
    </main>
  );
};

export default NotFound;
