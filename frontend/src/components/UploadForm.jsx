import { useState } from 'react';
import axios from 'axios';

function UploadForm({ setScore, setFeedback, setLoading, setError }) {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please upload a resume PDF');
      return;
    }

    if (!jobDescription.trim()) {
      setError('Please enter a job description');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('resume', file);
      formData.append('jobDescription', jobDescription);

      const response = await axios.post(
        'https://ai-resume-screener-b.onrender.com/api/analyze',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.success) {
        setScore(response.data.score);
        setFeedback(response.data.feedback);
      } else {
        setError('Error analyzing resume: ' + response.data.error);
      }
    } catch (err) {
      setError('Failed to analyze resume: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Job Description Input */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            📝 Job Description
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            📄 Upload Resume (PDF File name should be "resumeText")
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {file && <p className="text-green-600 mt-2">✅ {file.name}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition"
        >
          Analyze Resume
        </button>
      </form>
    </div>
  );
}

export default UploadForm;
