import React, { useState } from "react";
import { BUREAU_CONTENT } from "../content";
import { Coffee, RotateCw, Radio } from "lucide-react";

export const BreakRoom: React.FC = () => {
  const br = BUREAU_CONTENT.breakRoom;
  const machine = br.machine;
  const responses = br.responses;
  const channels = br.channels;

  const [isBrewing, setIsBrewing] = useState<boolean>(false);
  const [currentResponse, setCurrentResponse] = useState<string>(responses[0]);
  const [cupCount, setCupCount] = useState<number>(142);
  const [selectedChannel, setSelectedChannel] = useState<string>("hr");

  const handleBrew = () => {
    if (isBrewing) return;
    setIsBrewing(true);

    // 1.8 second brewing & interception sequence
    setTimeout(() => {
      const available = responses.filter((r) => r !== currentResponse);
      const next = available[Math.floor(Math.random() * available.length)] || responses[1];
      setCurrentResponse(next);
      setCupCount((prev) => prev + 1);
      setIsBrewing(false);
    }, 1800);
  };

  const activeChannelObj = channels.find((c) => c.id === selectedChannel) || channels[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-[#e7e2d8] dark:border-[#282d36] pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9f1239] dark:text-[#cb2d36] font-bold">
          FACILITY 4B // EMPLOYEE BREAK ROOM
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1c1917] dark:text-[#f3efe6] mt-1">
          {br.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#57534e] dark:text-[#a39f96] mt-1">
          {br.description}
        </p>
      </div>

      {/* Main Coffee Machine Interface */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-[#16191f] border border-[#e7e2d8] dark:border-[#282d36] p-6 sm:p-8 shadow-xs relative">
        {/* Machine Top Hardware Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#eee8dd] dark:border-[#22262d]">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-[#78716c] dark:text-[#6a665f] uppercase">
              APPARATUS DESIGNATION
            </div>
            <div className="text-sm font-mono font-bold text-[#1c1917] dark:text-[#f3efe6] mt-0.5">
              {machine.model}
            </div>
            <div className="text-[10px] font-mono text-[#78716c] dark:text-[#6a665f]">
              {machine.serialNumber}
            </div>
          </div>

          <div className="text-right">
            <div className="text-[10px] font-mono tracking-widest text-[#78716c] dark:text-[#6a665f] uppercase">
              {machine.counterLabel}
            </div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-[#9f1239] dark:text-[#cb2d36] tabular-nums mt-0.5">
              {cupCount.toString().padStart(5, "0")}
            </div>
          </div>
        </div>

        {/* Machine Body & Center Extraction Chamber */}
        <div className="py-6 space-y-6">
          {/* Status Display Screen */}
          <div className="p-3 bg-[#fbf9f5] dark:bg-[#101216] border border-[#e5dfd5] dark:border-[#252a33] font-mono text-center space-y-1">
            <div className="text-[10px] uppercase tracking-widest text-[#78716c] dark:text-[#6a665f]">
              INTERCEPT TELEMETRY
            </div>
            <div className="text-xs sm:text-sm font-bold tracking-wider text-[#9f1239] dark:text-[#cb2d36] flex items-center justify-center gap-2">
              {isBrewing ? (
                <>
                  <RotateCw className="w-3.5 h-3.5 animate-spin" />
                  <span>{machine.statusBrewing}</span>
                </>
              ) : (
                <span>{machine.statusReady}</span>
              )}
            </div>
          </div>

          {/* Industrial Extraction Chamber Graphic */}
          <div className="relative mx-auto w-44 sm:w-52 h-44 sm:h-52 bg-[#f4f0e8] dark:bg-[#121418] border-2 border-[#dcd5c7] dark:border-[#282d36] flex flex-col items-center justify-end p-5 overflow-hidden">
            {/* Top Dispenser Nozzle */}
            <div className="absolute top-0 w-12 h-4 bg-[#78716c] dark:bg-[#3c4451] border-b border-[#57534e]"></div>
            <div className="absolute top-4 w-2 h-3 bg-[#44403c] dark:bg-[#282d36]"></div>

            {/* Brewing Liquid Stream Animation */}
            {isBrewing && (
              <div className="absolute top-7 w-1 h-24 bg-[#78350f] dark:bg-[#92400e] animate-pulse"></div>
            )}

            {/* Subtle Steam Rising */}
            {isBrewing && (
              <div className="absolute top-8 flex gap-2">
                <span className="w-1.5 h-6 bg-[#9f1239]/20 rounded-full animate-steam"></span>
                <span className="w-1.5 h-8 bg-[#9f1239]/30 rounded-full animate-steam [animation-delay:0.3s]"></span>
                <span className="w-1.5 h-6 bg-[#9f1239]/20 rounded-full animate-steam [animation-delay:0.6s]"></span>
              </div>
            )}

            {/* Ceramic Cup Container */}
            <div className="relative z-10 w-20 h-16 bg-white dark:bg-[#1b1e25] border-2 border-[#a8a29e] dark:border-[#383f4d] rounded-b-xl flex items-center justify-center shadow-xs">
              <div className="text-[9px] font-mono text-[#78716c] dark:text-[#88837a] select-none font-bold">
                {isBrewing ? "BREWING..." : "TBB-4B"}
              </div>
              {/* Cup Handle */}
              <div className="absolute -right-3 top-2 w-3.5 h-8 border-2 border-[#a8a29e] dark:border-[#383f4d] rounded-r-md"></div>
            </div>

            {/* Drip Tray */}
            <div className="absolute bottom-0 w-full h-2.5 bg-[#e5dfd5] dark:bg-[#1a1c22] border-t border-[#d5cebf] dark:border-[#262b33] flex justify-around px-2">
              <span className="w-1 h-1 bg-[#a8a29e] dark:bg-[#333842]"></span>
              <span className="w-1 h-1 bg-[#a8a29e] dark:bg-[#333842]"></span>
              <span className="w-1 h-1 bg-[#a8a29e] dark:bg-[#333842]"></span>
              <span className="w-1 h-1 bg-[#a8a29e] dark:bg-[#333842]"></span>
            </div>
          </div>

          {/* Employee Gossip Channel Switcher */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#78716c] dark:text-[#6a665f] text-center font-bold flex items-center justify-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-[#9f1239] dark:text-[#cb2d36]" />
              <span>SELECT EMPLOYEE GOSSIP CHANNEL</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {channels.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChannel(ch.id)}
                  disabled={isBrewing}
                  className={`p-2.5 text-left border transition-all cursor-pointer ${
                    selectedChannel === ch.id
                      ? "bg-[#fbf9f5] dark:bg-[#1e222a] border-[#9f1239] dark:border-[#cb2d36] text-[#1c1917] dark:text-[#f3efe6] shadow-2xs font-semibold"
                      : "bg-white dark:bg-[#131519] border-[#e5dfd5] dark:border-[#262a32] text-[#78716c] dark:text-[#88837a] hover:text-[#1c1917] dark:hover:text-[#f3efe6]"
                  }`}
                >
                  <div className="text-xs font-mono">{ch.name}</div>
                  <div className="text-[10px] text-[#78716c] dark:text-[#6a665f] mt-0.5">{ch.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Dispense Action Button */}
          <div className="text-center pt-1">
            <button
              onClick={handleBrew}
              disabled={isBrewing}
              className={`w-full sm:w-auto min-w-[260px] px-8 py-3 text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-sm cursor-pointer ${
                isBrewing
                  ? "bg-[#e5dfd5] dark:bg-[#252932] text-[#78716c] dark:text-[#6a665f] cursor-not-allowed border border-[#d5cebf] dark:border-[#383f4d]"
                  : "bg-[#9f1239] dark:bg-[#cb2d36] hover:bg-[#881337] dark:hover:bg-[#a9232a] text-white active:scale-[0.98] border border-[#9f1239] dark:border-[#cb2d36]"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Coffee className="w-4 h-4" />
                <span>{isBrewing ? machine.brewingButtonLabel : machine.buttonLabel}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Result & Overheard Gossip Log Output */}
        <div className="mt-4 pt-4 border-t border-[#eee8dd] dark:border-[#22262d] bg-[#fbf9f5] dark:bg-[#111317] p-4 border border-[#e5dfd5] dark:border-[#252a33]">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#78716c] dark:text-[#6a665f] pb-2 border-b border-[#eee8dd] dark:border-[#22262d]">
            <span className="uppercase text-[#9f1239] dark:text-[#cb2d36] font-bold">
              OVERHEARD GOSSIP INTERCEPT
            </span>
            <span>CHANNEL: {activeChannelObj.name.toUpperCase()}</span>
          </div>

          <p className="text-sm font-mono text-[#1c1917] dark:text-[#f3efe6] mt-2.5 leading-relaxed font-medium">
            "{currentResponse}"
          </p>

          <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-[#78716c] dark:text-[#6a665f]">
            <span>SOURCE: BUREAU BREAK ROOM WATERCOOLER</span>
            <span>STATUS: 100% UNVERIFIED FACT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
