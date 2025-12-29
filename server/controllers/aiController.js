const Groq = require('groq-sdk');
const User = require('../models/User');
const ReplyHistory = require('../models/ReplyHistory');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// @desc    Generate email reply
// @route   POST /api/generate-reply
// @access  Private
const generateReply = async (req, res) => {
    const { originalEmail, tone } = req.body;

    if (!originalEmail || !tone) {
        return res.status(400).json({ message: 'Please provide email and tone' });
    }

    // Check credits
    if (req.user.credits <= 0) {
        return res.status(403).json({ message: 'Not enough credits' });
    }

    try {
        const prompt = `
      You are an expert email assistant.
      Task: Generate a ${tone} reply to the following email.
      Original Email:
      "${originalEmail}"

      Requirements:
      - The reply must be in a ${tone} tone.
      - Keep it professional and clear.
      - Do not include placeholders like "[Your Name]" unless necessary for context (use generic placeholders if needed).
      - Return ONLY the body of the email.
    `;

        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'llama-3.3-70b-versatile',
        });

        const generatedReply = chatCompletion.choices[0]?.message?.content || '';

        // Deduct credit
        req.user.credits -= 1;
        await req.user.save();

        // Save to history
        await ReplyHistory.create({
            userId: req.user._id,
            originalEmail,
            generatedReply,
            tone,
        });

        res.status(200).json({
            reply: generatedReply,
            creditsLeft: req.user.credits,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'AI generation failed' });
    }
};

module.exports = { generateReply };
