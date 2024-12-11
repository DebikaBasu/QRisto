import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-800 py-16 px-6 text-white">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          HOW IT WORKS
        </motion.h2>
        <motion.p
          className="text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          NO APP DOWNLOAD REQUIRED, NO HARDWARE INSTALLATION
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Step 1 */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="p-6 flex items-center justify-center shadow-xl">
            <motion.div
              className="bg-white p-4 rounded"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://www.brandconn.com/wp-content/uploads/2021/11/qr-1.webp"
                alt="QR Code"
                className="h-48 w-48 object-cover"
              />
            </motion.div>
          </div>
          <motion.p
            className="text-green-400 font-bold text-3xl mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            1
          </motion.p>
          <motion.p
            className="mt-2 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We create the QR CODES for you
          </motion.p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="p-6 flex items-center justify-center shadow-xl">
            <motion.div
              className="bg-white p-4 rounded"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://www.brandconn.com/wp-content/uploads/2021/11/qr-2.webp"
                alt="Scan Code"
                className="h-48 w-48 object-cover"
              />
            </motion.div>
          </div>
          <motion.p
            className="text-yellow-400 font-bold text-3xl mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            2
          </motion.p>
          <motion.p
            className="mt-2 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Customers scan the QR Code using their phone
          </motion.p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="p-6 flex items-center justify-center shadow-xl">
            <motion.div
              className="bg-white p-4 rounded"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://www.brandconn.com/wp-content/uploads/2021/11/qr-3.webp"
                alt="Digital Menu"
                className="h-48 w-48 object-cover"
              />
            </motion.div>
          </div>
          <motion.p
            className="text-purple-400 font-bold text-3xl mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            3
          </motion.p>
          <motion.p
            className="mt-2 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Beautiful Digital Menu is in the customer’s palm
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
