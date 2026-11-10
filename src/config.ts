/**
 * The Bromine Bureau — Technical Configuration
 * Central technical settings separated from written content.
 */

export interface BureauConfig {
  timezone: string;
  countdownMonth: number; // 1-12 (November is 11)
  countdownDay: number;   // 20
  countdownHour: number;  // 0
  countdownMinute: number;// 0
  announcementIntervalMs: number;
  statusIntervalMs: number;
  coffeeBrewTimeMs: number;
  chaosMinIntervalMs: number;
  chaosMaxIntervalMs: number;
  chaosDurationMs: number;
}

export const BUREAU_CONFIG: BureauConfig = {
  timezone: "Asia/Kolkata",
  countdownMonth: 11,      // November
  countdownDay: 20,        // 20th
  countdownHour: 0,
  countdownMinute: 0,
  announcementIntervalMs: 7000,
  statusIntervalMs: 12000,
  coffeeBrewTimeMs: 1800,
  chaosMinIntervalMs: 45000,
  chaosMaxIntervalMs: 90000,
  chaosDurationMs: 6500,
};
