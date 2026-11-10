import React, { useState } from "react";
import { BUREAU_CONTENT } from "../content";
import { Sparkles, Copy, Check } from "lucide-react";

export const ExcuseGenerator: React.FC = () => {
  const excuseData = BUREAU_CONTENT.excuseGenerator;

  const [currentExcuse, setCurrentExcuse] = useState<string>(() => {
    const s = excuseData.subjects[0];
    const r = excuseData.reasons[0];
    const c = excuseData.consequences[0];
    return `${s} ${r}. ${c}`;
  });
  const [copiedExcuse, setCopiedExcuse] = useState(false);

  const generateExcuse = () => {
    const sList = excuseData.subjects;
    const rList = excuseData.reasons;
    const cList = excuseData.consequences;

    const s = sList[Math.floor(Math.random() * sList.length)];
    const r = rList[Math.floor(Math.random() * rList.length)];
    const c = cList[Math.floor(Math.random() * cList.length)];

    setCurrentExcuse(`${s} ${r}. ${c}`);
    setCopiedExcuse(false);
  };

  const copyExcuse = () => {
    navigator.clipboard.writeText(currentExcuse);
    setCopiedExcuse(true);
    setTimeout(() => setCopiedExcuse(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-[#e7e2d8] dark:border-[#282d36] pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9f1239] dark:text-[#cb2d36] font-bold">
          PROTOCOL 02 // SANCTIONED EXCUSES
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1c1917] dark:text-[#f3efe6] mt-1">
          {excuseData.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#57534e] dark:text-[#a39f96] mt-1">
          {excuseData.description}
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white dark:bg-[#16191f] border border-[#e7e2d8] dark:border-[#282d36] p-6 sm:p-8 space-y-5 shadow-xs transition-colors">
        <div className="flex items-center justify-between border-b border-[#eee8dd] dark:border-[#22262d] pb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#78716c] dark:text-[#6a665f]">
            INCIDENT LOG:
          </span>
          <div className="archival-stamp text-xs">
            SANCTIONED
          </div>
        </div>

        {/* Generated Excuse Display Canvas */}
        <div className="p-5 bg-[#fbf9f5] dark:bg-[#111317] border border-[#e7e2d8] dark:border-[#252a33] space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#78716c] dark:text-[#6a665f]">
            OFFICIAL JUSTIFICATION:
          </div>
          <p className="text-base sm:text-lg font-serif italic text-[#1c1917] dark:text-[#f3efe6] leading-relaxed">
            "{currentExcuse}"
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          <button
            onClick={generateExcuse}
            className="px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#9f1239] dark:bg-[#cb2d36] hover:bg-[#881337] dark:hover:bg-[#a9232a] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{excuseData.buttonLabel}</span>
          </button>

          <button
            onClick={copyExcuse}
            className="px-4 py-2.5 text-xs font-mono font-medium text-[#1c1917] dark:text-[#f3efe6] bg-white dark:bg-[#121418] border border-[#d5cebf] dark:border-[#2b303a] hover:border-[#9f1239] dark:hover:border-[#cb2d36] transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            {copiedExcuse ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#15803d] dark:text-[#22c55e]" />
                <span className="text-[#15803d] dark:text-[#22c55e]">{excuseData.copiedNotice}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{excuseData.copyButtonLabel}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
