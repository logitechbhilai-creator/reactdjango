import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, FileCheck, CreditCard, Cpu } from 'lucide-react';

const RevenueModel = () => {
  const revenueStreams = [
    {
      icon: DollarSign,
      title: 'Commission Per Load',
      description: 'Earn a percentage from every successful load transaction on the platform',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Yearly Subscriptions',
      description: 'Premium subscription plans for vehicle owners and transporters with advanced features',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileCheck,
      title: 'Document Renewal',
      description: 'Commission from document renewal services processed through our platform',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: CreditCard,
      title: 'Fastag & GPS Recharge',
      description: 'Revenue from Fastag recharges and GPS SIM card top-ups',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Cpu,
      title: 'IoT Device Sales',
      description: 'Direct sales of GPS trackers, load sensors, and fuel monitoring devices',
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-green-950/20 to-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            Revenue Model
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multiple revenue streams ensuring sustainable growth and profitability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stream.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all`}></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all hover:scale-105 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stream.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <stream.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{stream.title}</h3>
                <p className="text-gray-300 leading-relaxed">{stream.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-green-400/30 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Scalable Business Model</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our diversified revenue streams create a robust and sustainable business model that grows with our user base and market expansion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueModel;