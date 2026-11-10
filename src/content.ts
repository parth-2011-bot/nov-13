/**
 * THE BROMINE BUREAU — CENTRAL CONTENT REPOSITORY
 * Project Codename: INTERNAL DISORDER
 * 
 * Central Premise (HER-CENTRIC):
 * The Bromine Bureau is a fictional administrative agency dedicated to
 * tracking, cataloging, and surviving the legendary, chaotic influence of
 * SUBJECT BROMINE, with all institutional telemetry synchronized toward
 * her core annual milestone: November 20.
 */

export const BUREAU_CONTENT = {
  global: {
    name: "THE BROMINE BUREAU",
    shortName: "TBB",
    subtitle: "Department of Surveillance & Anomaly Management",
    established: "OPERATIONAL ARCHIVE",
    codename: "SUBJECT: BROMINE",
    motto: "Tracking the single most administratively disruptive person in existence. Current Target: November 20.",
    classificationBanner: "SPECIAL ADVISORY // SUBJECT: BROMINE // CLEARANCE LEVEL: MAXIMUM",
    
    footer: {
      copyright: "© THE BROMINE BUREAU. ALL DEPARTMENTS OPERATE AT BROMINE'S MERCY.",
      disclaimer: "The Bromine Bureau is a specialized administrative apparatus established to document, monitor, and prepare for the some short talks with Bromine .",
      supervisionNotice: "SUBJECT STATUS: Bromine remains at large, highly unpredictable, and approaching her birthday .",
      secretTriggerLabel: "CLASSIFIED ACCESSION: FILE BB-00 (SUBJECT DOSSIER: BROMINE)",
    },
  },

  homepage: {
    headline: "An entire bureau established to monitor one element.",
    subheadline: "Welcome to The Bromine Bureau. A specialized administrative institution created to track, catalog, and survive the chaotic influence of Bromine.",
    
    statusTitle: "BROMINE TELEMETRY",
    statuses: [
      "HIGHLY DANGEROUS TO OFFICE MORALE",
      "DISTRACTING EVERY SINGLE DEPARTMENT",
      "UNPREDICTABLE CHARM LEVELS DETECTED",
      "HER BIRTHDAY IS COMING",
      "STATUS: LEGENDARY ANOMALY",
      "ALL BUREAU SENSORS OVERLOADED",
      "MANAGEMENT UNABLE TO CONTROL HER IMPACT",
    ],

    // Rotating dry dispatches about Bromine's impact
    announcements: [
      "SURVEILLANCE NOTICE: Subject Bromine was detected in Sector 4. Productivity halted immediately.",
      "DEPARTMENTAL ALERT: Her annual level-up date (November 20) is rapidly approaching.",
      "HR REPORT: Multiple staff members reported being completely disarmed by her presence.",
      "IT TELEMETRY: System sensors cannot calculate a threat level; classified simply as 'Too wonderful'.",
      "FINANCE MEMO: Bureau budget has been reallocated to prepare for the November 20 threshold.",
      "SECURITY BRIEFING: No known protocol can contain her charisma. Bureau personnel advised to stand by.",
      "BREAK ROOM INTERCEPT: Overheard at coffee station: 'She has no idea an entire bureau is tracking her.'",
    ],

    // Annual countdown to November 20 at 00:00 IST
    countdown: {
      kicker: "ANNUAL MILESTONE PROTOCOL",
      title: "Countdown to Bromine's Day",
      description: "Institutional countdown tracking the exact moment Subject Bromine completes another orbit around the sun: November 20 at 00:00 IST.",
      labels: {
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
      },
      
      // Automatic Birthday mode triggered on Nov 20
      birthdayMode: {
        badge: "THRESHOLD REACHED: NOVEMBER 20",
        title: "HAPPY BIRTHDAY, BROMINE!",
        announcement: "OFFICIAL BUREAU DECREE: November 20 has arrived.  Bromine has officially leveled up.",
        statement: "The Bureau formally suspends all operational rules in honor of Bromine. You survived another year of being an absolute legend, and the Bureau is honored to document your existence.",
        subtext: "Cake has been approved with unlimited funding across all sectors. Happy Birthday, Bromine!",
        stamp: "ICONIC",
      },
    },

    // Institutional Briefing on Subject Bromine
    managementStatement: {
      kicker: "CLASSIFIED BRIEFING // MEMO-BROMINE-01",
      title: "Institutional Briefing on Subject Bromine",
      date: "ACTIVE SURVEILLANCE CYCLE",
      paragraphs: [
        "Subject Bromine (Designation: Anomaly 35) is an individual of unprecedented administrative concern.",
        "Records confirm that her everyday presence routinely causes system-wide distractions, inexplicable smiling among personnel, and total loss of operational discipline across all four Bureau divisions.",
        "With her annual birthday milestone approaching on November 20, the Bureau has placed all sectors on high alert. No further work will be completed until this event has been properly celebrated."
      ],
      signOffName: "The Supervisory Council on Bromine Containment",
      signOffRole: "Bureau Directorate // Division 0",
      signOffStamp: "ANOMALY VERIFIED",
    },
  },

  // Break Room Coffee Machine (Staff Gossip about how cool/chaotic Bromine is)
  breakRoom: {
    title: "Employee Break Room",
    subtitle: "Sanctuary 4B — Grab a cup while you wait for November 20",
    description: "Grab a coffee and overhear what Bureau staff are whispering about Bromine.",
    
    machine: {
      model: "VEND-TEK 400 INDUSTRIAL EXTRACTION & INTERCEPT UNIT",
      serialNumber: "SN: 884-VT-GOSSIP",
      statusReady: "STANDBY // READY TO BREW & INTERCEPT",
      statusBrewing: "BREWING COFFEE & INTERCEPTING CHATTER...",
      statusComplete: "GOSSIP LOG EXTRACTED",
      buttonLabel: "BREW COFFEE & OVERHEAR GOSSIP",
      brewingButtonLabel: "INTERCEPTING WHISPERS...",
      counterLabel: "COFFEE CUPS DISPENSED",
    },

    channels: [
      { id: "hr", name: "HR Watercooler", desc: "Overheard near the personnel files" },
      { id: "pantry", name: "Pantry Chatter", desc: "Overheard by the office microwave" },
      { id: "it", name: "IT Slack Leaks", desc: "Overheard in the private sysadmin channel" },
    ],

    responses: [
      "HR caseworker whispers: 'Did you see Bromine today? Her personnel file is literally marked: Extreme Charm Hazard.'",
      "Pantry gossip: 'She walked into Sector 2 and three parts of brain completely forgot what they were arguing about.'",
      "IT leak: 'Whenever Bromine logs into any system, our telemetry registers a 400% spike in good vibes.'",
      "Watercooler whisper: 'November 20 is coming up. I heard the entire Bureau is losing thier minds.'",
      "Overheard in hallway: 'Nobody can predict what she does next.'",
      "Coffee machine whispers: 'I was manufactured to extract dark roast, but all I witness is an entire organization trying to keep up with her.'",
      "Pantry chatter: 'Someone tried to audit her impact on the Bureau. The final report was literally just: She is simply too iconic.'",
      "Sysadmin note: 'We dedicated an entire high-precision satellite clock just to track her birthday countdown. The founder is insane.'",
      "Overheard near the copier: 'She doesn't even have to try. She just exists and the entire agency scrambles to write reports about it.'",
      "HR coffee observation: 'Employee morale is 100% correlated with whether Bromine said hello this morning.'",
      "Watercooler chatter: 'She has no idea there is a 3-screen administrative headquarters cataloging her legendary status.'",
      "Coffee poured. Machine notes: Bromine remains the undisputed VIP of the entire building.",
    ],
  },

  // Excuse Generator (Excuses for why NO ONE can get work done because of Bromine)
  excuseGenerator: {
    title: "Bureau Excuse Generator",
    description: "Official justifications explaining why Bureau personnel and leadership cannot get any work done when Bromine is involved.",
    buttonLabel: "GENERATE SANCTIONED EXCUSE",
    copyButtonLabel: "COPY TO FORMAL MEMO",
    copiedNotice: "COPIED TO CLIPBOARD",
    
    subjects: [
      "Bureau Personnel",
      "The Department of Operations",
      "Senior Leadership",
      "The Entire Office",
      "Every Employee in Sector 4",
      "The Central Directorate",
    ],
    reasons: [
      "became completely incapacitated after Subject Bromine walked past",
      "lost all administrative focus debating whether Bromine knows how iconic she is",
      "halted a critical strategy meeting because Bromine said something hilarious",
      "were caught red-handed attempting to prepare a convo with her",
      "experienced a total collapse in workplace discipline due to Bromine's chaotic influence",
      "refused to study cause sending reels to bromine was more important",
      "were distracted analyzing why Bromine effortlessly outclasses every single person in the room",
    ],
    consequences: [
      "Management has ruled the disruption as 'Entirely Justified by Her Presence'.",
      "HR has closed the investigation with the note: 'She is simply too cool to supervise.'",
      "The Bureau has officially declared a non-productive zone in her honor.",
      "All operational delays have been permanently excused under Directive B-35.",
      "error- Bromine too awsome.",
    ],
  },

  // Secret Dossier (Official Classified Dossier on Bromine)
  secret: {
    dossierId: "FILE BB-00",
    stamp: "TOP SECRET // ANOMALY",
    title: "CLASSIFIED DOSSIER // SUBJECT: BROMINE",
    subtitle: "Official Bureau Surveillance Report. Clearance: Unrestricted to Bromine.",
    sections: [
      {
        title: "SUBJECT DESIGNATION:",
        text: "Individual known as 'Bromine'. Core Anomaly 35. High-Priority Cultural Anomaly.",
      },
      {
        title: "OBSERVED CHARACTERISTICS:",
        text: "Subject possesses an innate ability to make ordinary days interesting, cause uncontrollable laughter, and render all four Bureau departments completely useless by comparison.",
      },
      {
        title: "NOVEMBER 20 THRESHOLD:",
        text: "All satellite sensors and live countdown clocks are locked onto November 20 at 00:00 IST. When the threshold arrives, all Bureau rules are suspended for mandatory celebration.",
      },
      {
        title: "FINAL INSTITUTIONAL VERDICT:",
        text: "The Bureau concludes that without Subject Bromine, this organization would have no purpose, no entertainment, and zero reason to exist. HappY Too-Be Soon birthday, Bromine.",
      },
    ],
    closeButton: "RETURN TO YOUR BUREAU",
  },

  // Chaos Alerts
  chaos: {
    notifications: [
      { code: "ALERT-35", message: "TELEMETRY ALERT: Subject Bromine detected. Bureau productivity dropping." },
      { code: "HR-PING", message: "HR NOTICE: All staff are advised that Bromine's charm cannot be mitigated." },
      { code: "IT-WARN", message: "IT CONFIRMS: Satellite countdown to November 20 running with atomic precision." },
      { code: "FIN-PULSE", message: "FINANCE: Unlimited budget authorized for beuaru." },
      { code: "SEC-DISPATCH", message: "SECURITY NOTICE: She runs this place now. Adjust accordingly." },
    ],
  },
};
