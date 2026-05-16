function Loader() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-2xl">
        <div className="flex flex-col items-center space-y-4">
          {/* Spinner */}
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
          </div>
          
          {/* Loading Text */}
          <div className="text-center">
            <p className="text-gray-800 font-semibold text-lg">
              🤖 Analyzing Resume...
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Using AI to match your resume with the job description
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;