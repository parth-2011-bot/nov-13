# THE BROMINE BUREAU
### Project Codename: INTERNAL DISORDER

> *"An institution of questionable necessity. Operational by administrative accident. Supervised with deep reluctance."*

---

## 1. Overview

The Bromine Bureau is a fictional administrative institution established to monitor, catalog, investigate, and administratively process matters concerning Bromine. The central comedic premise is that **the founder is the actual administrative liability** requiring continuous supervision from four weary departments.

### Key Destinations
1. **Main Office**: Headquarters, oversized editorial headlines, rotating administrative announcements, management statement memorandum, and live annual countdown to November 20 at 00:00 IST (with automatic 24-hour Birthday Mode).
2. **Departments**: Four specialized divisions:
   - **HR (Division 01)**: Employee conduct, grief logs, founder reality checks.
   - **Finance (Division 02)**: Treasury protection, rejected expense filings, petty cash confiscation.
   - **IT (Division 03)**: Server uptime, terminal telemetry, revoked root credentials.
   - **PR (Division 04)**: Crisis management, 0.02% credibility rating, public disclaimers.
3. **Employee Break Room**: Minimalist industrial coffee machine (Vend-Tek 400) with realistic button action, steam extraction animations, and 24+ unique dry, deadpan responses.
4. **Unnecessary Activities**:
   - **Official Excuse Generator**: Generates authorized justifications for founder absence.
   - **Bromine Impact Assessment**: Evaluates risk levels and organizational fallout.
   - **Founder Performance Review**: Algorithmic 360-degree audit with letter grades and commentary.
5. **Confidential Archive**: Five substantial classified investigative dossiers (BB/001 through BB/005) with red archival stamps, full readable document view, and clipboard copy.
6. **Secret Dossier (BB-OMEGA-00)**: Hidden document revealing the founder's unedited confession.
7. **Controlled Chaos System**: Occasional subtle administrative alerts in the lower-right corner.

---

## 2. Content Editing Guide (Centralized in `content.ts` / `content.js`)

**Every single piece of written text** is centralized in `src/content.ts` (and mirrored in `content.js`). You do NOT need to dig through component files to change copy.

### How to Add a New Announcement
Open `src/content.ts` and locate `homepage.announcements`:
```javascript
announcements: [
  "FOUNDER UNDER OBSERVATION: Currently pacing near whiteboard.",
  // Add your new announcement here:
  "NEW ANNOUNCEMENT: The founder was seen attempting to optimize a solved problem.",
]
```

### How to Add a New Coffee Machine Response
Open `src/content.ts` and locate `breakRoom.responses`:
```javascript
responses: [
  "Coffee dispensed. Institutional morale unchanged.",
  // Add your new response here:
  "Fresh espresso delivered. Finance has flagged this cup as an unapproved perk.",
]
```

### How to Add a New Archive Dossier
Open `src/content.ts` and append a new document object to `archive.documents`:
```javascript
{
  id: "BB/006",
  title: "UNAUTHORIZED WHITEBOARD SCHEMATICS",
  classification: "RESTRICTED",
  date: "14 NOV 2026",
  department: "DIVISION 01 // HUMAN RESOURCES",
  author: "Investigator V. Sharma",
  stamp: "IRRATIONAL",
  summary: "Inquiry into 30 diagrams showing no beginning, middle, or commercial end.",
  sections: [
    {
      heading: "1.0 SUMMARY",
      content: ["The founder was observed drawing interconnecting arrows for 3 hours..."]
    }
  ],
  recommendation: "ACTION TAKEN: Erased whiteboard during lunch break."
}
```

### How to Add a New Activity Result
Open `src/content.ts` and navigate to `activities`:
- In `excuseGenerator`, add new strings to `subjects`, `reasons`, or `consequences`.
- In `impactAssessment`, add new objects to `riskLevels` or strings to `impacts` / `consequences`.
- In `founderReview`, add new rating options under `metrics`.

---

## 3. Technical Configuration (`config.ts`)

Technical settings are stored separately in `src/config.ts`:
- `timezone`: `"Asia/Kolkata"`
- `countdownMonth`: `11` (November)
- `countdownDay`: `20`
- `announcementIntervalMs`: `7000` (7 seconds)
- `coffeeBrewTimeMs`: `1800` (1.8 seconds)
- `chaosMinIntervalMs`: `45000`

---

## 4. Annual Countdown & Birthday Mode Verification

- Target is dynamically computed for November 20 at 00:00:00 IST (UTC+5:30).
- From Nov 20, 00:00 IST until Nov 21, 00:00 IST, **Birthday Mode** automatically engages:
  - Replaces digits with an official founder commemoration memorandum.
  - Displays restrained celebratory sparks.
  - Temporarily suspends disciplinary actions for 24 hours.
  - Resets to the next year on Nov 21, 00:00 IST automatically.
- **Preview Button**: On the Main Office page next to the countdown, click `[Preview Nov 20 Mode]` to test Birthday Mode at any time!
