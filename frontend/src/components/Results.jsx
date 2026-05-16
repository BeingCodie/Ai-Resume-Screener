function Results({ score, feedback, onReset }) {
  // Determine color based on score
  const getColorClass = () => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getProgressColor = () => {
    if (score >= 80) return 'from-green-400 to-green-600';
    if (score >= 60) return 'from-yellow-400 to-yellow-600';
    if (score >= 40) return 'from-orange-400 to-orange-600';
    return 'from-red-400 to-red-600';
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      {/* Score Circle */}
      <div className="flex justify-center mb-8">
        <div className={`relative w-48 h-48 rounded-full bg-gradient-to-r ${getProgressColor()} flex items-center justify-center shadow-lg`}>
          <div className="bg-white rounded-full w-44 h-44 flex flex-col items-center justify-center">
            <span className={`text-6xl font-bold ${getColorClass()}`}>
              {score}
            </span>
            <span className="text-gray-600 text-lg">out of 100</span>
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          📊 Feedback
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {feedback}
        </p>
      </div>

      {/* Score Interpretation */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <p className="text-gray-800">
          <strong>Score Meaning:</strong>
          {score >= 80 && ' 🎉 Excellent match! Highly recommended.'}
          {score >= 60 && score < 80 && ' ✅ Good match! Consider applying.'}
          {score >= 40 && score < 60 && ' ⚠️ Fair match. You may still apply.'}
          {score < 40 && ' ❌ Poor match. Consider other roles.'}
        </p>
      </div>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition"
      >
        Analyze Another Resume
      </button>
    </div>
  );
}

export default Results;