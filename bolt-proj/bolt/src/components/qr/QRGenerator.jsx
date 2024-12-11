import React, { useState } from 'react';
import QRUploader from './QRUploader';
import QRCustomizer from './QRCustomizer';
import QRPreview from './QRPreview';

const QRGenerator = () => {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Create Your QR Code Menu
          </h2>
          <p className="mt-4 text-gray-500">
            Generate custom QR codes for your restaurant menu. Upload your existing
            menu or create a new one using our templates.
          </p>

          <div className="mt-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`${
                    activeTab === 'upload'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Upload Menu
                </button>
                <button
                  onClick={() => setActiveTab('customize')}
                  className={`${
                    activeTab === 'customize'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Customize QR
                </button>
              </nav>
            </div>

            <div className="mt-8">
              {activeTab === 'upload' ? <QRUploader /> : <QRCustomizer />}
            </div>
          </div>
        </div>

        <QRPreview />
      </div>
    </div>
  );
};

export default QRGenerator;