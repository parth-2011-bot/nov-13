import React, { useState } from "react";
import { BUREAU_CONTENT } from "../content";
import { ShieldAlert, Menu, X, FileText, Sun, Moon } from "lucide-react";

interface TopNavProps {
  currentSection: string;
  onSelectSection: (sectionId: string) => void;
  onOpenSecret: () => void;
  statusText: string;
  isDark: boolean;
  onToggleDark: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  currentSection,
  onSelectSection,
  onOpenSecret,
  statusText,
  isDark,
  onToggleDark,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "countdown", label: "Countdown" },
    { id: "coffee", label: "Break Room" },
    { id: "excuses", label: "Excuse Unit" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fbf9f5]/90 dark:bg-[#0d0f12]/90 backdrop-blur-md border-b border-[#e7e2d8] dark:border-[#282d36] transition-colors">
      {/* Top Ribbon */}
      <div className="hidden sm:flex items-center justify-between px-4 lg:px-8 py-1.5 bg-[#f4f0e8] dark:bg-[#14171c] text-[10px] font-mono text-[#78716c] dark:text-[#6a665f] border-b border-[#eae4da] dark:border-[#20242b] transition-colors">
        <div className="flex items-center gap-2.5">
          <span className="text-[#9f1239] dark:text-[#cb2d36] font-bold tracking-wider">● SURVEILLANCE PROTOCOL</span>
          <span>·</span>
          <span>EST. 2024</span>
          <span>·</span>
          <span>CORE TARGET: 20 NOV // ASIA/KOLKATA</span>
        </div>
        <div className="flex items-center gap-2">
          <span>BROMINE TELEMETRY:</span>
          <span className="text-[#1c1917] dark:text-[#f3efe6] font-semibold tracking-wide">{statusText}</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="flex items-center justify-between gap-4 px-4 lg:px-8 py-3.5 max-w-5xl mx-auto">
        {/* Brand */}
        <button
          onClick={() => {
            onSelectSection("countdown");
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-2.5 text-left text-base sm:text-lg font-bold tracking-tight text-[#1c1917] dark:text-[#f3efe6] hover:text-[#9f1239] dark:hover:text-[#cb2d36] transition-colors whitespace-nowrap shrink-0 group cursor-pointer"
        >
          <span className="w-2.5 h-2.5 bg-[#9f1239] dark:bg-[#cb2d36] rounded-xs group-hover:scale-110 transition-transform"></span>
          <span className="font-display uppercase tracking-wider">{BUREAU_CONTENT.global.name}</span>
        </button>

        {/* Section Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-medium uppercase tracking-wider">
          {navLinks.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? "text-[#9f1239] dark:text-[#cb2d36] font-bold"
                    : "text-[#57534e] dark:text-[#a39f96] hover:text-[#1c1917] dark:hover:text-[#f3efe6]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9f1239] dark:bg-[#cb2d36]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions: Dark Mode Toggle + Secret Dossier Button */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={onToggleDark}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#57534e] dark:text-[#a39f96] hover:text-[#1c1917] dark:hover:text-[#f3efe6] bg-white dark:bg-[#16191f] border border-[#d5cebf] dark:border-[#2b303a] hover:border-[#9f1239] dark:hover:border-[#cb2d36] transition-all cursor-pointer shadow-2xs"
            title={isDark ? "Switch to Warm Cream Paper Mode" : "Switch to Dark Mode"}
            aria-label="Toggle dark theme"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-[#57534e]" />}
            <span>{isDark ? "LIGHT" : "DARK"}</span>
          </button>

          {/* Secret Dossier CTA */}
          <button
            onClick={onOpenSecret}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium text-[#1c1917] dark:text-[#f3efe6] bg-white dark:bg-[#16191f] border border-[#d5cebf] dark:border-[#2b303a] hover:border-[#9f1239] dark:hover:border-[#cb2d36] hover:text-[#9f1239] dark:hover:text-[#cb2d36] transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs"
            title="Inspect Classified Accession File"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#9f1239] dark:text-[#cb2d36]" />
            <span>FILE BB-00</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleDark}
            className="p-1.5 text-[#57534e] dark:text-[#a39f96] hover:text-[#1c1917] dark:hover:text-[#f3efe6] border border-[#d5cebf] dark:border-[#2b303a] rounded-none bg-white dark:bg-[#16191f] cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#57534e] dark:text-[#a39f96] hover:text-[#1c1917] dark:hover:text-[#f3efe6] cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f4f0e8] dark:bg-[#14171c] border-b border-[#e7e2d8] dark:border-[#282d36] px-4 py-3 space-y-1">
          {navLinks.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs uppercase tracking-wider font-mono rounded-none ${
                  isActive
                    ? "bg-white dark:bg-[#1e222a] text-[#9f1239] dark:text-[#cb2d36] font-bold border-l-2 border-[#9f1239] dark:border-[#cb2d36]"
                    : "text-[#57534e] dark:text-[#a39f96] hover:bg-[#ede7dc] dark:hover:bg-[#191c22] hover:text-[#1c1917] dark:hover:text-[#f3efe6]"
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#e2dcd0] dark:border-[#22262d]">
            <button
              onClick={() => {
                onOpenSecret();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono text-[#9f1239] dark:text-[#cb2d36] bg-white dark:bg-[#16191f] border border-[#9f1239]/30 dark:border-[#cb2d36]/30"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>ACCESS DOSSIER FILE BB-00</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
