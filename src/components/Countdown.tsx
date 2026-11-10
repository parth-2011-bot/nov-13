import React, { useState, useEffect } from "react";
import { calculateCountdownToNov20IST, CountdownState } from "../utils/dateUtils";
import { BUREAU_CONTENT } from "../content";
import { Clock, Cake, Sparkles, CheckCircle2 } from "lucide-react";

export const Countdown: React.FC = () => {
  const [countdown, setCountdown] = useState<CountdownState>(calculateCountdownToNov20IST());

  useEffect(() => {
    // Tick every second
    const interval = setInterval(() => {
      setCountdown(calculateCountdownToNov20IST());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isBirthday = countdown.isBirthdayMode;
  const content = BUREAU_CONTENT.homepage.countdown;
  const bdayContent = content.birthdayMode;

  return (
    <div className="w-full relative border border-[#e7e2d8] dark:border-[#282d36] bg-white dark:bg-[#16191f] p-6 sm:p-8 overflow-hidden shadow-xs transition-colors">
      {/* Background Subtle Archival Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5dfd5_1px,transparent_1px)] dark:bg-[radial-gradient(#262b34_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#eee8dd] dark:border-[#22262d]">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-[#9f1239] dark:text-[#cb2d36] uppercase font-bold">
            {content.kicker}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1c1917] dark:text-[#f3efe6] mt-0.5">
            {isBirthday ? bdayContent.title : content.title}
          </h2>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 bg-[#f4f0e8] dark:bg-[#121417] border border-[#e5dfd5] dark:border-[#252a32] text-[11px] font-mono text-[#57534e] dark:text-[#a39f96]">
          <Clock className="w-3.5 h-3.5 text-[#9f1239] dark:text-[#cb2d36]" />
          <span>TARGET: 20 NOV // 00:00 IST</span>
        </div>
      </div>

      {/* Main Countdown Display / Birthday Mode */}
      <div className="relative z-10 pt-6">
        {isBirthday ? (
          <div className="space-y-5">
            {/* Celebratory Banner */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#9f1239]/10 dark:bg-[#cb2d36]/15 border border-[#9f1239]/30 dark:border-[#cb2d36]/40 text-[#1c1917] dark:text-[#f3efe6]">
              <Cake className="w-5 h-5 text-[#9f1239] dark:text-[#cb2d36] shrink-0" />
              <div className="flex-1 font-mono text-xs sm:text-sm">
                <span className="font-bold text-[#9f1239] dark:text-[#cb2d36] mr-2">[{bdayContent.badge}]</span>
                <span>{bdayContent.announcement}</span>
              </div>
            </div>

            {/* Official Bureau Greeting */}
            <div className="p-6 bg-[#fbf9f5] dark:bg-[#121418] border border-[#e7e2d8] dark:border-[#282d36]">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3 max-w-2xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#78716c] dark:text-[#6a665f]">
                    EXECUTIVE MEMORANDUM // ANNUAL PROTOCOL
                  </span>
                  <p className="text-base sm:text-lg text-[#1c1917] dark:text-[#f3efe6] leading-relaxed font-serif">
                    {bdayContent.statement}
                  </p>
                  <p className="text-xs font-mono text-[#57534e] dark:text-[#a39f96]">
                    {bdayContent.subtext}
                  </p>
                </div>

                <div className="shrink-0 text-right hidden sm:block">
                  <div className="archival-stamp text-xs">
                    {bdayContent.stamp}
                  </div>
                </div>
              </div>

              {/* Minimalist Confetti / Sparkles Indicator */}
              <div className="mt-5 pt-4 border-t border-[#eee8dd] dark:border-[#22262d] flex items-center gap-2 text-xs font-mono text-[#9f1239] dark:text-[#cb2d36]">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>RESTRAINED CELEBRATORY PARTICLES ENGAGED · PROTOCOL ACTIVE</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* 4 Digit Block Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { label: content.labels.days, value: countdown.days },
                { label: content.labels.hours, value: countdown.hours },
                { label: content.labels.minutes, value: countdown.minutes },
                { label: content.labels.seconds, value: countdown.seconds },
              ].map((unit, idx) => (
                <div
                  key={idx}
                  className="bg-[#fbf9f5] dark:bg-[#121418] border border-[#e7e2d8] dark:border-[#282d36] p-4 sm:p-6 text-center group hover:border-[#9f1239]/40 dark:hover:border-[#cb2d36]/50 hover:bg-white dark:hover:bg-[#181b22] transition-all shadow-2xs"
                >
                  <div className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-[#1c1917] dark:text-[#f3efe6] tabular-nums">
                    {String(unit.value).padStart(2, "0")}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#78716c] dark:text-[#6a665f] mt-2 group-hover:text-[#9f1239] dark:group-hover:text-[#cb2d36] transition-colors">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Context Note */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#78716c] dark:text-[#6a665f] pt-1 gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] dark:text-[#22c55e]" />
                <span>DYNAMIC RECALIBRATION TO NOV 20, {countdown.targetYear}</span>
              </div>
              <div className="text-right">
                <span>TIMEZONE: ASIA/KOLKATA (UTC+5:30)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
