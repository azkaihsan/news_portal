import React from 'react';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600">This page is under construction.</p>
      </div>
    </div>
  );
};

export default PlaceholderPage;