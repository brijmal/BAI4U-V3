import React from 'react';
import { CheckCircle } from 'lucide-react';

function ThankYou() {
  return (
    <div className="card text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle size={48} className="text-white" />
      </div>
      <h2 className="text-2xl font-bold mb-6">Thank You!</h2>
      <p className="text-lg">
        Thank you for taking time to fill out the survey. We will get back to you in just a few days!
      </p>
    </div>
  );
}

export default ThankYou;