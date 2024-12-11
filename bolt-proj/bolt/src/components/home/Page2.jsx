import React from 'react';
import { motion } from 'framer-motion';

const Page2 = () => {
    return (
        <section className="bg-gradient-to-r from-gray-900 via-black to-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                {/* Image Section */}
                <motion.div
                    className="lg:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <img
                        src="https://timber.mhmcdn.com/site/feature/qr/QRPageHero.webp"
                        alt="QR Codes for Restaurants"
                        className="rounded-lg shadow-xl w-3/4 max-w-sm"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        QR Codes for Restaurants
                    </h2>
                    <p className="text-xl font-semibold text-gray-300 mb-6">
                        POINT. SCAN. CONNECT.
                    </p>
                    <p className="text-gray-400 mb-6 text-lg">
                        Create and manage QR codes with our QR code tool!
                    </p>
                    <ul className="space-y-3 text-gray-300">
                        <motion.li
                            className="flex items-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span className="text-green-500 mr-2">✔</span>
                            Link your QR code to anything online
                        </motion.li>
                        <motion.li
                            className="flex items-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span className="text-green-500 mr-2">✔</span>
                            Print a QR code on any product
                        </motion.li>
                        <motion.li
                            className="flex items-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span className="text-green-500 mr-2">✔</span>
                            Update without ever reprinting
                        </motion.li>
                        <motion.li
                            className="flex items-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span className="text-green-500 mr-2">✔</span>
                            Manage all your codes in one place
                        </motion.li>
                    </ul>
                    <div className="mt-8">
                        <motion.a
                            href="#"
                            className="px-8 py-3 text-white bg-red-600 hover:bg-red-700 font-medium text-lg rounded-md shadow-md"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book a Demo
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Page2;
