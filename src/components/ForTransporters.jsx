import React from 'react';
import { motion } from 'framer-motion';
import { Package, MapPinned, FileText, CreditCard, Bell, TrendingUp } from 'lucide-react';

const ForTransporters = () => {
  const features = [
    {
      icon: Package,
      title: 'Easy Load Listing',
      description: 'List products with complete details: weight, dimensions, vehicle type, pickup and delivery points',
    },
    {
      icon: MapPinned,
      title: 'Multi-Location Tracking',
      description: 'Track multiple shipments from different locations simultaneously in real-time',
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Upload and share load-related documents automatically with vehicle owners',
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Wallet-based system with automatic payment processing upon load confirmation',
    },
    {
      icon: Bell,
      title: 'Instant Notifications',
      description: 'Get alerts when vehicle owners accept your loads and track confirmation status',
    },
    {
      icon: TrendingUp,
      title: 'Smart Matching',
      description: 'AI connects your loads with the most suitable available vehicles',
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            For Transporters & Companies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Streamline your logistics operations with intelligent load management and real-time tracking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all hover:scale-105"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-cyan-400/30"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'List Your Load', desc: 'Add product details and requirements' },
              { step: '2', title: 'Get Matches', desc: 'AI finds suitable vehicles nearby' },
              { step: '3', title: 'Confirm & Pay', desc: 'Vehicle owner accepts, you confirm with payment' },
              { step: '4', title: 'Track & Receive', desc: 'Monitor shipment in real-time until delivery' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForTransporters;