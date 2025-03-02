const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName: "Test Automation Report",
  metadata: {
    browser: {
      name: "chrome",
      version: "133",
    },
    device: "Local test machine",
    platform: {
      name: "macOS",
      version: "15.3",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "WD site" },
      { label: "Release", value: "1.2.3" },
      { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});