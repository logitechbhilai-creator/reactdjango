import React from 'react';
import { motion } from 'framer-motion';
import { Truck, FileCheck, Wallet, BarChart3, MapPin, AlertCircle } from 'lucide-react';

const ForVehicleOwners = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Multiple Vehicle Management',
      description: 'Add and manage multiple vehicles from a single dashboard',
    },
    {
      icon: MapPin,
      title: 'Smart Load Matching',
      description: 'AI-powered suggestions based on location, capacity, and vehicle status',
    },
    {
      icon: FileCheck,
      title: 'Document Management',
      description: 'Upload documents once, share automatically with transporters',
    },
    {
      icon: AlertCircle,
      title: 'Expiry Alerts',
      description: 'Get notified before documents expire and renew directly from app',
    },
    {
      icon: Wallet,
      title: 'Fastag Recharge',
      description: 'Apply for new Fastag or recharge existing ones seamlessly',
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Track fuel consumption, earnings, routes, and toll tax for up to 6 months',
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-6">
            For Vehicle Owners
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive tools to manage your fleet, maximize earnings, and streamline operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-orange-400/50 transition-all hover:scale-105"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center mb-4">
                <benefit.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-orange-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-orange-400/30"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Real-Time Control</h3>
              <p className="text-gray-300 text-lg mb-6">
                Track your vehicles in real-time, monitor fuel levels, and even stop the engine remotely in case of theft. Stay in complete control of your fleet from anywhere.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span className="text-gray-200">Live GPS tracking with route history</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                  <span className="text-gray-200">Remote engine control for theft prevention</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span className="text-gray-200">Instant notifications for all activities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl blur-2xl opacity-30"></div>
              <img 
                className="relative rounded-2xl shadow-2xl border border-white/20 w-full h-80 object-cover"
                alt="Vehicle owner dashboard"
               src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForVehicleOwners;