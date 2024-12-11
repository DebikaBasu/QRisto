import React from 'react';
import HeroButtons from './HeroButtons';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">QR Codes for Restaurants:</span>{' '}
                <span className="block text-indigo-400 xl:inline">
                  Point. Scan. Connect.
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Transform your restaurant's dining experience with digital menus.
                Update instantly, reduce printing costs, and delight your customers
                with interactive QR code menus.
              </p>
              <HeroButtons />
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-60 md:h-80 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7"
          alt="QR code menu on a restaurant table"
        />
      </div>
    </div>
  );
};

export default Hero;
