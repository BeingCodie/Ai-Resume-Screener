const express = require('express');
const router = express.Router();
const multer = require('multer');
const { analyzeResumeController } = require('../controllers/resumeController');

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST route to analyze resume
router.post('/analyze', upload.single('resume'), analyzeResumeController);

module.exports = router;