# 🤖 AI Resume Screener

An intelligent web application that analyzes resumes and compares them against job descriptions using Google's Gemini AI.

## Features
- ✅ Upload resume as PDF
- ✅ Input job description
- ✅ Get AI-powered match score (0-100)
- ✅ Receive detailed AI feedback
- ✅ Beautiful responsive UI

## Tech Stack
- **Frontend:** React, TailwindCSS, Axios, Vite
- **Backend:** Node.js, Express, Multer, pdf-text-extract
- **AI:** Google Gemini API

## Prerequisites
- Node.js (v14 or higher)
- npm
- Google Gemini API Key (free from https://ai.google.dev)

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/ai-resume-screener.git
cd ai-resume-screener
2. Backend Setup
bash
cd backend
npm install
Create a .env file (copy from .env.example):

text
GEMINI_API_KEY=your_api_key_here
PORT=5000
Start backend:

bash
npm start
Backend runs on: http://localhost:5000

3. Frontend Setup (NEW TERMINAL)
bash
cd frontend
npm install
npm run dev
Frontend runs on: http://localhost:5173

Usage
Open http://localhost:5173 in your browser
Paste a job description
Upload your resume (PDF)
Click "Analyze Resume"
View your match score and feedback
Getting Gemini API Key
Go to https://ai.google.dev
Click "Get API Key"
Sign in with Google
Click "Create API Key"
Copy and paste into your .env file
Project Structure
text
ai-resume-screener/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── server.js
│   ├── .env (DO NOT COMMIT)
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   └── index.css
    ├── package.json
    └── vite.config.js