/**
 * Accurate Timezone Calculation for Asia/Kolkata (IST = UTC + 05:30)
 * Annual Countdown to November 20 at 00:00:00 IST
 */

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isBirthdayMode: boolean;
  targetYear: number;
  totalMsRemaining: number;
}

/**
 * Returns current time in IST (Asia/Kolkata) as a Date object representation
 */
export function getNowInIST(): { istDate: Date; utcTimestamp: number } {
  const now = new Date();
  const utcTimestamp = now.getTime();
  // IST is always UTC + 5 hours 30 minutes (330 minutes)
  const istOffsetMs = (5 * 60 + 30) * 60 * 1000;
  const istTimeMs = utcTimestamp + istOffsetMs;
  return { istDate: new Date(istTimeMs), utcTimestamp };
}

/**
 * Calculates remaining time until next November 20 at 00:00:00 IST
 * Birthday mode is active from Nov 20 00:00:00 IST to Nov 20 23:59:59 IST (or Nov 21 00:00:00 IST)
 */
export function calculateCountdownToNov20IST(): CountdownState {
  const now = new Date();
  const utcNow = now.getTime();
  
  // IST offset: +5:30 = +19,800,000 ms
  const istOffsetMs = 19800000;
  
  // Create an explicit representation of current time in IST
  // In IST, year, month, day, hour, min, sec can be extracted using Intl.DateTimeFormat
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const getPart = (type: string) => parseInt(parts.find((p) => p.type === type)?.value || "0", 10);
  
  const currentYear = getPart("year");
  const currentMonth = getPart("month"); // 1-12
  const currentDay = getPart("day");

  // Check if today in IST is November 20 (Birthday Mode!)
  const isBirthdayMode = currentMonth === 11 && currentDay === 20;

  // Determine the next November 20 target year
  let targetYear = currentYear;
  
  // If we are currently past Nov 20 (or during Nov 20, the NEXT countdown target is next year's Nov 20)
  if (currentMonth > 11 || (currentMonth === 11 && currentDay >= 21) || isBirthdayMode) {
    if (isBirthdayMode) {
      // During birthday mode, the countdown will reset to next year on Nov 21 00:00 IST
      targetYear = currentYear + 1;
    } else {
      targetYear = currentYear + 1;
    }
  }

  // Target in UTC timestamp:
  // Nov 20, targetYear at 00:00:00 IST = Nov 19, targetYear at 18:30:00 UTC
  // Because IST = UTC + 5:30.
  // 00:00 IST - 5:30 = 18:30 UTC previous day!
  const targetUtcMs = Date.UTC(targetYear, 10, 19, 18, 30, 0, 0); // month index 10 = November

  const diffMs = targetUtcMs - utcNow;
  const totalMsRemaining = Math.max(0, diffMs);

  const seconds = Math.floor((totalMsRemaining / 1000) % 60);
  const minutes = Math.floor((totalMsRemaining / (1000 * 60)) % 60);
  const hours = Math.floor((totalMsRemaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(totalMsRemaining / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    isBirthdayMode,
    targetYear,
    totalMsRemaining,
  };
}
