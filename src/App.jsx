import React from 'react';
import { Helmet } from 'react-helmet';
// import { Toaster } from './components/ui/toaster';
import Hero from './components/Hero';
import Features from './components/Features';
import IoTDevices from './components/IoTDevices';
import ForVehicleOwners from './components/ForVehicleOwners';
import ForTransporters from './components/ForTransporters';
import RevenueModel from './components/RevenueModel';
import FutureVision from './components/FutureVision';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>LOADWAYS - Smart Logistics Platform for Commercial Vehicles</title>
        <meta name="description" content="LOADWAYS connects commercial vehicle owners with manufacturing companies through IoT-powered smart logistics. Track vehicles, manage loads, and optimize transportation with GPS, load sensors, and fuel monitoring." />
      </Helmet>
      <div className="min-h-screen">
        <main>
          <Hero />
          <Features />
          <IoTDevices />
          <ForVehicleOwners />
          <ForTransporters />
          <RevenueModel />
          <FutureVision />
          <ContactSection />
        </main>
        <Footer />
        {/* <Toaster /> */}
      </div>
    </>
  );
}

export default App;