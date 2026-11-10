/**
 * THE BROMINE BUREAU — HER-CENTRIC CENTRAL CONTENT FILE (content.js)
 */

const BUREAU_CONTENT = {
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
      disclaimer: "The Bromine Bureau is a specialized administrative apparatus established to document, monitor, and prepare for the annual milestone of Subject Bromine. Resistance is futile.",
      supervisionNotice: "SUBJECT STATUS: Bromine remains at large, highly unpredictable, .",
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
      "NOVEMBER 20 APPROACHING
      "STATUS: LEGENDARY ANOMALY",
      "ALL BUREAU SENSORS OVERLOADED",
      "MANAGEMENT UNABLE TO CONTROL HER IMPACT",
    ],
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = BUREAU_CONTENT;
}
