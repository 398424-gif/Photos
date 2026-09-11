import React from 'react';

export const App: React.FC = () => {
  return (
    <div 
      id="blank-slate-root" 
      className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-slate-800"
    >
      <div id="blank-slate-card" className="max-w-md w-full text-center space-y-3">
        <div 
          id="blank-slate-icon-wrapper" 
          className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-400"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="1.75"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <h1 id="blank-slate-title" className="text-xl font-semibold text-slate-900 tracking-tight">
          Blank Slate
        </h1>
        <p id="blank-slate-description" className="text-sm text-slate-500">
          Ready for your next idea.
        </p>
      </div>
    </div>
  );
};

export default App;
