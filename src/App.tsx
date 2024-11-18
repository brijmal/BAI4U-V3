import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Survey from './components/Survey';
import ThankYou from './components/ThankYou';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  
  return (
    <div className="gradient-bg">
      {currentPage === 'welcome' && <Welcome onStart={() => setCurrentPage('survey')} />}
      {currentPage === 'survey' && <Survey onSubmit={() => setCurrentPage('thankyou')} />}
      {currentPage === 'thankyou' && <ThankYou />}
    </div>
  );
}

export default App;