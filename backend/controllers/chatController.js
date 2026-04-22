const axios = require("axios");

const chatHandler = async (req, res) => {
  try {
    const message = req.body.message;
    const text = message.toLowerCase();

    // Custom replies
    if (text.includes("hello") || text.includes("hii") || text.includes("hi")) {
      return res.json({
        reply: "Hey there! Welcome to your creative corner",
      });
    }

    if (
      text.includes("give quotes") ||
      text.includes("shayari") ||
      text.includes("poem") ||
      text.includes("generate")
    ) {
      return res.json({
        reply:
          "Oops! I'm having trouble generating new content right now due to a temporary issue.",
      });
    }

    if (text.includes("purpose") || text.includes("what is this website")) {
      return res.json({
        reply:
          "MyJustSimpleWords is a platform to read, write, and share quotes, poems, and shayari",
      });
    }

    if (text.includes("how it works") || text.includes("how to use")) {
      return res.json({
        reply: "You can explore content and upload your own",
      });
    }

    if (text.includes("upload") || text.includes("post")) {
      return res.json({
        reply: "Go to upload section and click submit ",
      });
    }

    const aiRes = await axios.post(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
      {
        inputs: `<s>[INST] You are a creative assistant.
User: ${message} [/INST]`,
        options: { wait_for_model: true },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
        },
      },
    );

    const fullText = aiRes.data?.[0]?.generated_text || "No response";

    const reply = fullText.split("[/INST]")[1]?.trim() || fullText;

    res.json({ reply });
  } catch (err) {
    console.error("FULL ERROR:", err.response?.data || err.message);

    res.status(500).json({
      error: "AI error",
    });
  }
};

module.exports = { chatHandler };
