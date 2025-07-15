// controllers/feedbackController.js

export const submitFeedback = (req, res) => {
  const { name, message } = req.body;

  console.log("💬 Feedback Submission:");
  console.log(`- Name: ${name}`);
  console.log(`- Message: ${message}`);

  res.status(200).json({ success: true, message: "Feedback received, thank you!" });
};
