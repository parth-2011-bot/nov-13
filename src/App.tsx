import React, { useState, useEffect } from "react";
import { TopNav } from "./components/TopNav";
import { Countdown } from "./components/Countdown";
import { BreakRoom } from "./components/BreakRoom";
import { ExcuseGenerator } from "./components/ExcuseGenerator";
import { SecretDossierModal } from "./components/SecretDossierModal";
import { ChaosToast } from "./components/ChaosToast";
import { Footer } from "./components/Footer";
import { BUREAU_CONTENT } from "./content";
import { AlertTriangle, ArrowRight, ArrowLeft } from "lucide-react";

export default function App() {
  const getInitialScreen = (): string => {
    const hash = window.location.hash.replace("#", "");
    const valid = ["countdown", "coffee", "excuses"];
    return valid.includes(hash) ? hash : "countdown";
  };

  const [currentScreen, setCurrentScreen] = useState<string>(getInitialScreen);
  const [isSecretOpen, setIsSecretOpen] = useState<boolean>(false);
  const [statusIndex, setStatusIndex] = useState<number>(0);
  const [isDark, setIsDark] = useState<boolean>(() => {
    return document.documentElement.classList.contains("dark");
  });

  const hp = BUREAU_CONTENT.homepage;
  const announcements = hp.announcements;
  const statuses = hp.statuses;

  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [announcementFading, setAnnouncementFading] = useState(false);

  // Sync dark mode class with root html
  const handleToggleDark = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const valid = ["countdown", "coffee", "excuses"];
      if (valid.includes(hash)) {
        setCurrentScreen(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSelectScreen = (screenId: string) => {
    setCurrentScreen(screenId);
    window.location.hash = screenId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Rotating Announcements every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementFading(true);
      setTimeout(() => {
        setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
        setAnnouncementFading(false);
      }, 350);
    }, 7000);

    return () => clearInterval(timer);
  }, [announcements.length]);

  // Rotating status every 12 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [statuses.length]);

  // Keyboard shortcut: Esc closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSecretOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf9f5] dark:bg-[#0d0f12] text-[#1c1917] dark:text-[#f3efe6] flex flex-col justify-between selection:bg-[#9f1239] dark:selection:bg-[#cb2d36] selection:text-white transition-colors">
      {/* Top Navigation Bar with Screen Selectors & Theme Toggle */}
      <TopNav
        currentSection={currentScreen}
        onSelectSection={handleSelectScreen}
        onOpenSecret={() => setIsSecretOpen(true)}
        statusText={statuses[statusIndex]}
        isDark={isDark}
        onToggleDark={handleToggleDark}
      />

      {/* Main Screen Container — Dedicated 3-Screen Viewport */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* SCREEN 1: THE COUNTDOWN */}
        {currentScreen === "countdown" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-3.5 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#78716c] dark:text-[#6a665f]">
                <span className="text-[#9f1239] dark:text-[#cb2d36] font-bold">{BUREAU_CONTENT.global.shortName}</span>
                <span>·</span>
                <span>{BUREAU_CONTENT.global.subtitle}</span>
                <span>·</span>
                <span className="bg-[#f0eae1] dark:bg-[#1c1f26] px-1.5 py-0.5 text-[10px] text-[#57534e] dark:text-[#a39f96] font-semibold">{BUREAU_CONTENT.global.established}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1c1917] dark:text-[#f3efe6] leading-[1.15] text-balance">
                {hp.headline}
              </h1>

              <p className="text-sm sm:text-base text-[#57534e] dark:text-[#a39f96] leading-relaxed">
                {hp.subheadline}
              </p>
            </div>

            {/* Rotating Administrative Dispatch Ticker */}
            <div className="border-y border-[#e7e2d8] dark:border-[#282d36] py-3 bg-[#f4f0e8]/80 dark:bg-[#14171c] px-3 flex items-center gap-3 transition-colors">
              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#9f1239]/10 dark:bg-[#cb2d36]/15 border border-[#9f1239]/30 dark:border-[#cb2d36]/40 text-[#9f1239] dark:text-[#cb2d36] text-[10px] font-mono uppercase tracking-widest shrink-0 font-bold">
                <AlertTriangle className="w-3 h-3" />
                <span>DISPATCH</span>
              </div>

              <div className="flex-1 overflow-hidden min-h-[1.25rem] flex items-center">
                <p
                  className={`text-xs sm:text-sm font-mono text-[#292524] dark:text-[#f3efe6] tracking-wide transition-opacity duration-300 ${
                    announcementFading ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"
                  }`}
                >
                  {announcements[announcementIndex]}
                </p>
              </div>
            </div>

            {/* THE COUNTDOWN COMPONENT */}
            <Countdown />

            {/* Compact Management Statement */}
            <div className="bg-white dark:bg-[#16191f] border border-[#e7e2d8] dark:border-[#282d36] p-6 sm:p-7 space-y-4 shadow-2xs transition-colors">
              <div className="flex items-center justify-between border-b border-[#eee8dd] dark:border-[#22262d] pb-2.5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9f1239] dark:text-[#cb2d36] font-bold">
                  {hp.managementStatement.kicker}
                </span>
                <span className="text-xs font-mono text-[#78716c] dark:text-[#6a665f]">
                  {hp.managementStatement.date}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#1c1917] dark:text-[#f3efe6]">
                {hp.managementStatement.title}
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#44403c] dark:text-[#d6d0c7] leading-relaxed font-serif">
                {hp.managementStatement.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-3 border-t border-[#eee8dd] dark:border-[#22262d] flex items-center justify-between">
                <div className="font-mono text-xs text-[#57534e] dark:text-[#a39f96]">
                  {hp.managementStatement.signOffName}
                </div>
                <div className="archival-stamp text-[10px]">
                  {hp.managementStatement.signOffStamp}
                </div>
              </div>
            </div>

            {/* Screen 1 Footer Next Action Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => handleSelectScreen("coffee")}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono text-[#1c1917] dark:text-[#f3efe6] bg-white dark:bg-[#16191f] border border-[#d5cebf] dark:border-[#282d36] hover:border-[#9f1239] dark:hover:border-[#cb2d36] hover:text-[#9f1239] dark:hover:text-[#cb2d36] transition-all cursor-pointer shadow-2xs"
              >
                <span>NEXT: VISIT THE BREAK ROOM & HEAR GOSSIP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 2: THE BREAK ROOM & EMPLOYEE GOSSIP */}
        {currentScreen === "coffee" && (
          <div className="space-y-6 animate-fadeIn">
            <BreakRoom />

            {/* Screen 2 Navigation Footers */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => handleSelectScreen("countdown")}
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-[#57534e] dark:text-[#a39f96] hover:text-[#1c1917] dark:hover:text-[#f3efe6] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>BACK: THE COUNTDOWN</span>
              </button>

              <button
                onClick={() => handleSelectScreen("excuses")}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono text-[#1c1917] dark:text-[#f3efe6] bg-white dark:bg-[#16191f] border border-[#d5cebf] dark:border-[#282d36] hover:border-[#9f1239] dark:hover:border-[#cb2d36] hover:text-[#9f1239] dark:hover:text-[#cb2d36] transition-all cursor-pointer shadow-2xs"
              >
                <span>NEXT: EXCUSE GENERATOR</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 3: THE EXCUSE UNIT */}
        {currentScreen === "excuses" && (
          <div className="space-y-6 animate-fadeIn">
            <ExcuseGenerator />

            {/* Screen 3 Navigation Footers */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => handleSelectScreen("coffee")}
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-[#57534e] dark:text-[#a39f96] hover:text-[#1c1917] dark:hover:text-[#f3efe6] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>BACK: BREAK ROOM</span>
              </button>

              <button
                onClick={() => handleSelectScreen("countdown")}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono text-[#1c1917] dark:text-[#f3efe6] bg-white dark:bg-[#16191f] border border-[#d5cebf] dark:border-[#282d36] hover:border-[#9f1239] dark:hover:border-[#cb2d36] hover:text-[#9f1239] dark:hover:text-[#cb2d36] transition-all cursor-pointer shadow-2xs"
              >
                <span>RETURN: THE COUNTDOWN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer with Secret Accession Link */}
      <Footer
        onOpenSecret={() => setIsSecretOpen(true)}
        onNavigate={handleSelectScreen}
      />

      {/* Classified Dossier Modal (Subject Dossier) */}
      <SecretDossierModal
        isOpen={isSecretOpen}
        onClose={() => setIsSecretOpen(false)}
      />

      {/* Controlled Subtle Chaos Alert */}
      <ChaosToast />
    </div>
  );
}
