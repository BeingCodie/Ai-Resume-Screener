function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-indigo-600">
          🤖 AI Resume Screener
        </h1>
        <p className="text-gray-600 mt-2">
          Upload your resume and job description to get an AI-powered match score
        </p>
      </div>
    </header>
  );
}

export default Header;