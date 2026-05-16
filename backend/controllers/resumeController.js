const { parsePDF } = require('../services/pdfParser');
const { analyzeResume } = require('../services/geminiAi');

const analyzeResumeController = async (req, res) => {
    try {
        // Check if file is uploaded
        if (!req.file) {
            return res.status(400).json({ error: 'No resume file uploaded' });
        }

        // Check if job description is provided
        const { jobDescription } = req.body;
        if (!jobDescription) {
            return res.status(400).json({ error: 'Job description is required' });
        }

        // Parse the PDF
        const resumeText = await parsePDF(req.file.buffer);

        // Analyze with Gemini AI
        const analysis = await analyzeResume(resumeText, jobDescription);

        // Send response
        res.json({
            success: true,
            score: analysis.score,
            feedback: analysis.feedback
        });

    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: error.message 
        });
    }
};

module.exports = { analyzeResumeController };