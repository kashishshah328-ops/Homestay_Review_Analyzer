const OpenAI = require("openai");

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.HF_API_KEY,
});

exports.analyzeReview = async (req, res) => {
  try {
    const { review } = req.body;

    if (!review) {
      return res.status(400).json({
        success: false,
        message: "Review is required",
      });
    }

    const completion = await client.chat.completions.create({
      model: "deepseek-ai/DeepSeek-V3.2",
      messages: [
        {
          role: "system",
          content:
            "You are an AI assistant for hotel review analysis. Return Summary, Sentiment, Key Points, and Professional Reply.",
        },
        {
          role: "user",
          content: review,
        },
      ],
      max_tokens: 400,
    });

    res.status(200).json({
      success: true,
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "AI analysis failed",
      error: error.response?.data || error.message,
    });
  }
};