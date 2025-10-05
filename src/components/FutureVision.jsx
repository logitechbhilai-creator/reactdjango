import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Leaf, TrendingUp } from 'lucide-react';

const FutureVision = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Future Vision
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building the future of sustainable and intelligent logistics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/30"
          >
            <Globe className="h-16 w-16 text-purple-400 mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Global Expansion</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Starting with comprehensive coverage of all commercial vehicle types in the Indian market, we aim to expand globally and revolutionize logistics worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-xl rounded-3xl p-8 border border-green-400/30"
          >
            <Leaf className="h-16 w-16 text-green-400 mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Sustainable Future</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Transitioning to electric and hydrogen-powered vehicles to create an eco-friendly logistics ecosystem that reduces carbon footprint and promotes sustainability.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Innovation First</h4>
                <p className="text-gray-300">Continuous technological advancement</p>
              </div>
              <div>
                <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Rapid Growth</h4>
                <p className="text-gray-300">Expanding market reach and user base</p>
              </div>
              <div>
                <Globe className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Global Impact</h4>
                <p className="text-gray-300">Transforming logistics worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureVision;