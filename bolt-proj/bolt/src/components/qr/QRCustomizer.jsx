import React from 'react';

const QRCustomizer = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            QR Code Color
          </label>
          <input type="color" className="h-10 w-full" />
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Logo Position
          </label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>Center</option>
            <option>Top</option>
            <option>Bottom</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default QRCustomizer;