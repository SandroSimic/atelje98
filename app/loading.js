import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500 border-t-transparent"></div>
  </div>
  );
};

export default loading;
