import React from 'react';
import { Smile } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="card text-center">
      <div className="flex justify-center mb-6">
        <Smile size={48} className="text-white" />
      </div>
      <h1 className="text-3xl font-bold mb-6">Welcome to BAI4U</h1>
      <p className="text-lg mb-8">
        Take a quick survey to help us understand your pain points!
      </p>
      <button onClick={onStart} className="button">
        Get Started
      </button>
    </div>
  );
}

export default Welcome;