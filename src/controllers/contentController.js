const axios = require('axios');

// Post content and send to webhook
const postContent = async (req, res) => {
  try {
    const {
      content_type,
      content_length,
      follower_count,
      date_time,
      description,
      hashtags
    } = req.body;

    // Validate required fields
    if (!content_type || !content_length || !follower_count || !date_time || !description || !hashtags) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required: content_type, content_length, follower_count, date_time, description, hashtags'
      });
    }

    // Prepare data to send to webhook
    const webhookData = {
      content_type,
      content_length,
      follower_count,
      date_time,
      description,
      hashtags
    };

    // Send POST request to webhook
    const webhookUrl = 'http://localhost:5678/webhook-test/dce65947-6634-42bb-9606-adc22792d119';
    const webhookResponse = await axios.post(webhookUrl, webhookData);

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Content posted and webhook notified successfully',
      data: webhookData,
      webhookResponse: {
        status: webhookResponse.status,
        data: webhookResponse.data
      }
    });

  } catch (error) {
    console.error('Error posting content:', error.message);
    
    res.status(500).json({
      success: false,
      error: 'Failed to process content',
      details: error.message
    });
  }
};

module.exports = {
  postContent
};
