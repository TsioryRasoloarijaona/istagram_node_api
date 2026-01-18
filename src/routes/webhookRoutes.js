const express = require('express');
const router = express.Router();


router.post('/dce65947-6634-42bb-9606-adc22792d119', (req, res) => {
  try {
    console.log("\n=== Webhook Received ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Headers:", JSON.stringify(req.headers, null, 2));
    console.log("Body:", JSON.stringify(req.body, null, 2));
    console.log("========================\n");


    res.status(200).json({
      success: true,
      message: "Webhook received successfully",
      received_at: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error processing webhook:', error.message);
    
    res.status(500).json({
      success: false,
      error: 'Failed to process webhook'
    });
  }
});

module.exports = router;
