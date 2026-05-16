import { useState } from 'react';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import Results from './components/Results';
import Loader from './components/Loader';

function App() {
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {!score ? (
          <UploadForm 
            setScore={setScore} 
            setFeedback={setFeedback}
            setLoading={setLoading}
            setError={setError}
          />
        ) : (
          <Results 
            score={score} 
            feedback={feedback}
            onReset={() => {
              setScore(null);
              setFeedback(null);
              setError(null);
            }}
          />
        )}
        
        {loading && <Loader />}
        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      </div>
    </div>
  );
}

export default App;