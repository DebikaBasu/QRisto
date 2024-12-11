import React from 'react';
import { Upload } from 'lucide-react';

const QRUploader = () => {
  return (
    <div className="space-y-6">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <div className="mt-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Upload PDF or Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRUploader;