import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Weight, Fuel } from 'lucide-react';

const IoTDevices = () => {
  const devices = [
    {
      icon: Navigation,
      name: 'GPS Tracker',
      description: 'Real-time vehicle tracking with geofencing capabilities. Suggests nearby loads and provides theft protection with location history.',
      features: ['Live Location', 'Route Optimization', 'Geofencing', 'Theft Alerts'],
      gradient: 'from-blue-600 to-cyan-600',
      image: 'GPS tracking device mounted on commercial vehicle dashboard',
    },
    {
      icon: Weight,
      name: 'Load Sensor',
      description: 'Intelligent weight detection system that identifies loaded and unloaded vehicles for smart load suggestions.',
      features: ['Weight Detection', 'Load Status', 'Capacity Monitoring', 'Auto Updates'],
      gradient: 'from-purple-600 to-pink-600',
      image: 'Load sensor device measuring cargo weight on truck',
    },
    {
      icon: Fuel,
      name: 'Fuel Sensor',
      description: 'Advanced fuel monitoring system that tracks consumption patterns and prevents fuel theft with real-time alerts.',
      features: ['Fuel Tracking', 'Theft Prevention', 'Consumption Analytics', 'Efficiency Reports'],
      gradient: 'from-green-600 to-emerald-600',
      image: 'Fuel sensor device monitoring diesel tank levels',
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
            IoT Devices
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge hardware solutions for complete vehicle monitoring and management
          </p>
        </motion.div>

        <div className="space-y-12">
          {devices.map((device, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${device.gradient} flex items-center justify-center mb-6`}>
                    <device.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{device.name}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{device.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {device.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${device.gradient}`}></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${device.gradient} rounded-3xl blur-2xl opacity-30`}></div>
                  <img 
                    className="relative rounded-3xl shadow-2xl border border-white/20 w-full h-80 object-cover"
                    alt={`${device.name} device`}
                   src="https://images.unsplash.com/photo-1652084824357-b261cf701e4c" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IoTDevices;