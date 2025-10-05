import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Shield, Clock, TrendingUp, Bell, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featuresContainerRef = useRef(null);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Load Suggestions',
      description: 'Smart algorithms match vehicles with loads based on location, capacity, and availability',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Theft Protection',
      description: 'Remote engine control and real-time GPS tracking to prevent vehicle theft',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Real-Time Tracking',
      description: 'Monitor vehicle location, fuel levels, and load status in real-time',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights on fuel consumption, earnings, and route history',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Never miss important notifications about loads, documents, or transactions',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: FileText,
      title: 'Document Drive',
      description: 'Centralized document management with automatic expiry alerts',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const featureCards = gsap.utils.toArray('.feature-card');
      featureCards.forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, featuresContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Platform Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary features designed to transform the logistics industry
          </p>
        </div>

        <div ref={featuresContainerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all hover:scale-105 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;