const { GoogleGenerativeAI } = require('@google/generative-ai');

const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeResume = async (resumeText, jobDescription) => {
    try {
        const model = client.getGenerativeModel({ model: 'gemini-3-flash-preview' });
        const prompt = `You are an expert technical recruiter. Compare the following resume against the job description and provide a match score.

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

Return ONLY a JSON object with this exact format:
{
  "score": <number between 0-100>,
  "feedback": "<2-3 sentence explanation of the match>"
}

Do not include any other text, only the JSON.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Parse the JSON response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('Invalid response from AI');
        }

        const aiResponse = JSON.parse(jsonMatch[0]);
        return aiResponse;

    } catch (error) {
        throw new Error('Error analyzing resume: ' + error.message);
    }
};

module.exports = { analyzeResume };