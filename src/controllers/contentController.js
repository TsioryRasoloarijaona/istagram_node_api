const axios = require('axios');

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

    if (!content_type || !content_length || !follower_count || !date_time || !description || !hashtags) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required: content_type, content_length, follower_count, date_time, description, hashtags'
      });
    }

    const webhookData = {
      content_type,
      content_length,
      follower_count,
      date_time,
      description,
      hashtags
    };

    const webhookUrl = 'http://localhost:5678/webhook-test/dce65947-6634-42bb-9606-adc22792d119';
    const webhookResponse = await axios.post(webhookUrl, webhookData);

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

const receiveContent = (req, res) => {
  try {
    const {
      content_type,
      content_length,
      follower_count,
      date_time,
      description,
      hashtags
    } = req.body;

    console.log('=== Content Received ===');
    console.log('Content Type:', content_type);
    console.log('Content Length:', content_length);
    console.log('Follower Count:', follower_count);
    console.log('Date Time:', date_time);
    console.log('Description:', description);
    console.log('Hashtags:', hashtags);
    console.log('========================\n');

    res.status(200).json({
      success: true,
      message: 'Content received and logged to console',
      data: req.body
    });

  } catch (error) {
    console.error('Error receiving content:', error.message);
    
    res.status(500).json({
      success: false,
      error: 'Failed to receive content',
      details: error.message
    });
  }
};

module.exports = {
  postContent,
  receiveContent
};
