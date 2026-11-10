import React, { useState, useEffect } from "react";
import { BUREAU_CONTENT } from "../content";
import { X, ShieldAlert } from "lucide-react";

export const ChaosToast: React.FC = () => {
  const notifications = BUREAU_CONTENT.chaos.notifications;
  const [activeChaos, setActiveChaos] = useState<{ code: string; message: string } | null>(null);

  useEffect(() => {
    // Initial chaos notification after 20 seconds
    const initialTimer = setTimeout(() => {
      triggerRandomEvent();
    }, 20000);

    // Recurring subtle events every 60 seconds
    const interval = setInterval(() => {
      triggerRandomEvent();
    }, 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const triggerRandomEvent = () => {
    const rand = notifications[Math.floor(Math.random() * notifications.length)];
    setActiveChaos(rand);

    // Auto-dismiss after 6.5 seconds
    setTimeout(() => {
      setActiveChaos((current) => (current === rand ? null : current));
    }, 6500);
  };

  if (!activeChaos) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full animate-slideUp">
      <div className="bg-white dark:bg-[#16191f] border-2 border-[#9f1239] dark:border-[#cb2d36] p-4 shadow-xl text-[#1c1917] dark:text-[#f3efe6] flex items-start gap-3 transition-colors">
        <ShieldAlert className="w-5 h-5 text-[#9f1239] dark:text-[#cb2d36] shrink-0 mt-0.5 animate-pulse" />

        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-widest text-[#9f1239] dark:text-[#cb2d36]">
            <span>CHAOS TELEMETRY // {activeChaos.code}</span>
            <button
              onClick={() => setActiveChaos(null)}
              className="text-[#78716c] dark:text-[#88837a] hover:text-[#1c1917] dark:hover:text-white cursor-pointer"
              aria-label="Dismiss alert"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs font-mono text-[#44403c] dark:text-[#d6d0c7] leading-relaxed">
            {activeChaos.message}
          </p>
        </div>
      </div>
    </div>
  );
};
