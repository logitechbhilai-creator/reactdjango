import React from 'react';
import { Truck, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-white/10 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                LOADWAYS
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionizing logistics with IoT-powered smart solutions for commercial vehicles.
            </p>
          </div>

          <div>
            <span className="text-lg font-bold text-white mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Features</a></li>
              <li><a href="#iot" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">IoT Devices</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-bold text-white mb-4 block">Services</span>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">Vehicle Tracking</span></li>
              <li><span className="text-gray-400 text-sm">Load Management</span></li>
              <li><span className="text-gray-400 text-sm">Document Drive</span></li>
              <li><span className="text-gray-400 text-sm">IoT Solutions</span></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-bold text-white mb-4 block">Contact</span>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-purple-400" />
                contact@loadways.com
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4 text-purple-400" />
                +91 XXX XXX XXXX
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-purple-400" />
                India
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 LOADWAYS. All rights reserved. Building the future of sustainable logistics.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;