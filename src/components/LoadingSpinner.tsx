// src/ui/components/LoadingSpinner.tsx

import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  </div>
);

export default LoadingSpinner;
