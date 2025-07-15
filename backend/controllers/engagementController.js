// controllers/engagementController.js

export const logEngagement = (req, res) => {
  const { sectionId, viewTime, timestamp, networkType } = req.body;

  // Just log for now
  console.log("📊 User Engagement Data:");
  console.log(`- Section: ${sectionId}`);
  console.log(`- Time in view: ${viewTime}ms`);
  console.log(`- Network: ${networkType}`);
  console.log(`- Timestamp: ${timestamp}`);

  res.status(200).json({ success: true, message: "Engagement logged successfully" });
};
