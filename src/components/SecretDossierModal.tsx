import React from "react";
import { BUREAU_CONTENT } from "../content";
import { X, ShieldAlert, Sparkles } from "lucide-react";

interface SecretDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecretDossierModal: React.FC<SecretDossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const secret = BUREAU_CONTENT.secret;

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1917]/50 dark:bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white dark:bg-[#14171d] border-2 border-[#9f1239] dark:border-[#cb2d36] shadow-2xl p-6 sm:p-8 my-auto text-[#1c1917] dark:text-[#f3efe6]">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-[#eee8dd] dark:border-[#242933]">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#9f1239] dark:text-[#cb2d36]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#9f1239] dark:text-[#cb2d36]">
              {secret.dossierId} // DE-CLASSIFIED LEAK
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#78716c] dark:text-[#88837a] hover:text-[#1c1917] dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Close classified file"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="pt-5 pb-5 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1c1917] dark:text-[#f3efe6]">
                {secret.title}
              </h2>
              <p className="text-xs font-mono text-[#57534e] dark:text-[#a39f96] mt-0.5">
                {secret.subtitle}
              </p>
            </div>

            <div className="archival-stamp text-xs text-[#9f1239] dark:text-[#cb2d36] shrink-0">
              {secret.stamp}
            </div>
          </div>

          <div className="space-y-3.5">
            {secret.sections.map((sec, idx) => (
              <div key={idx} className="p-3.5 bg-[#fbf9f5] dark:bg-[#191c24] border border-[#e7e2d8] dark:border-[#282d38] space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9f1239] dark:text-[#cb2d36]">
                  {sec.title}
                </span>
                <p className="text-xs sm:text-sm text-[#44403c] dark:text-[#d6d0c7] leading-relaxed font-serif italic">
                  "{sec.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="p-3 bg-[#9f1239]/5 dark:bg-[#cb2d36]/10 border border-[#9f1239]/20 dark:border-[#cb2d36]/30 text-xs font-mono text-[#1c1917] dark:text-[#f3efe6] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#9f1239] dark:text-[#cb2d36] shrink-0" />
            <span>DISCIPLINARY RECORD: Curiosity verified. Bureau clearance granted to Subject Bromine.</span>
          </div>
        </div>

        {/* Footer Close Button */}
        <div className="pt-3 border-t border-[#eee8dd] dark:border-[#242933] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-mono font-bold tracking-wider uppercase text-white bg-[#9f1239] dark:bg-[#cb2d36] hover:bg-[#881337] dark:hover:bg-[#a9232a] transition-colors cursor-pointer shadow-xs"
          >
            {secret.closeButton}
          </button>
        </div>
      </div>
    </div>
  );
};
