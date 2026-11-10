import React, { useState } from "react";
import { BUREAU_CONTENT } from "../content";

interface FooterProps {
  onOpenSecret: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSecret, onNavigate }) => {
  const footer = BUREAU_CONTENT.global.footer;
  const [shinchanError, setShinchanError] = useState(false);

  const navLinks = [
    { id: "countdown", label: "The Countdown" },
    { id: "coffee", label: "Break Room Gossip" },
    { id: "excuses", label: "Sanctioned Excuses" },
  ];

  return (
    <footer className="border-t border-[#e7e2d8] dark:border-[#282d36] bg-[#f4f0e8] dark:bg-[#121419] py-10 px-4 lg:px-8 text-xs font-mono text-[#78716c] dark:text-[#6a665f] transition-colors">
      <div className="max-w-4xl mx-auto space-y-7">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Col 1: Identity & Motto */}
          <div className="space-y-2 max-w-sm">
            <div className="flex items-center gap-2 text-[#1c1917] dark:text-[#f3efe6] font-bold text-sm tracking-wider font-display">
              <span className="w-2 h-2 bg-[#9f1239] dark:bg-[#cb2d36] rounded-xs" />
              <span>{BUREAU_CONTENT.global.name}</span>
            </div>
            <p className="text-xs text-[#57534e] dark:text-[#a39f96] leading-relaxed">
              {BUREAU_CONTENT.global.motto}
            </p>
            <div className="text-[10px] text-[#78716c] dark:text-[#6a665f] pt-0.5">
              ESTABLISHED 2024 · ALL TELEMETRY LEADS TO NOVEMBER 20
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-1.5">
            <div className="text-[#1c1917] dark:text-[#f3efe6] font-bold uppercase tracking-widest text-[11px]">
              SECTORS
            </div>
            <div className="flex flex-col space-y-1">
              {navLinks.map((n) => (
                <button
                  key={n.id}
                  onClick={() => onNavigate(n.id)}
                  className="text-left text-[#57534e] dark:text-[#a39f96] hover:text-[#9f1239] dark:hover:text-[#cb2d36] transition-colors cursor-pointer"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Supervision Directive & Optional Mascot */}
          <div className="space-y-2.5 max-w-xs">
            <div className="text-[#9f1239] dark:text-[#cb2d36] font-bold uppercase tracking-widest text-[11px]">
              SURVEILLANCE DIRECTIVE
            </div>
            <p className="text-[11px] text-[#57534e] dark:text-[#a39f96] leading-relaxed">
              {footer.supervisionNotice}
            </p>

            {/* Optional asset: assets/images/shinchan.png */}
            {!shinchanError && (
              <div className="pt-0.5">
                <img
                  src="/assets/images/shinchan.png"
                  alt="Honorary Bureau Mascot"
                  className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity rounded filter contrast-125"
                  onError={() => setShinchanError(true)}
                />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar & Classified Accession Trigger */}
        <div className="pt-5 border-t border-[#e2dcd0] dark:border-[#22262d] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px]">
          <div>{footer.copyright}</div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSecret}
              className="hover:text-[#9f1239] dark:hover:text-[#cb2d36] transition-colors underline underline-offset-4 cursor-pointer"
              title="Classified Secret Accession"
            >
              {footer.secretTriggerLabel}
            </button>
          </div>
        </div>

        <div className="text-[10px] text-[#78716c] dark:text-[#6a665f] leading-relaxed max-w-2xl">
          {footer.disclaimer}
        </div>
      </div>
    </footer>
  );
};
