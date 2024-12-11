import React from 'react';
import { Download, QrCode } from 'lucide-react';

const QRPreview = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
        <div className="flex items-center justify-center h-full">
          <QrCode className="h-48 w-48 text-gray-400" />
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          <Download className="mr-2 h-5 w-5" />
          Download QR Code
        </button>
      </div>
    </div>
  );
};

export default QRPreview;