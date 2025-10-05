import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, UserPlus, Mail, Lock, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from './ui/use-toast';

const CircularTransition = ({ children, isVisible }) => {
  const variants = {
    hidden: { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
    visible: { clipPath: 'circle(150% at 50% 50%)', opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
};

const AuthForm = ({ isLogin, onSwitch }) => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-2xl border border-purple-500/30 rounded-2xl p-8 text-white w-full h-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {isLogin ? 'Welcome Back!' : 'Create Account'}
      </h2>
      <p className="text-center text-gray-400 mb-8">
        {isLogin ? 'Sign in to continue' : 'Get started with LOADWAYS'}
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {!isLogin && (
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input id="name" type="text" placeholder="Full Name" className="pl-10 bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white" />
          </div>
        )}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input id="email" type="email" placeholder="Email Address" className="pl-10 bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white" />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input id="password" type="password" placeholder="Password" className="pl-10 bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white" />
        </div>
        <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6">
          {isLogin ? <LogIn className="mr-2 h-5 w-5" /> : <UserPlus className="mr-2 h-5 w-5" />}
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>
      </form>
      <p className="text-center text-gray-400 mt-6">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <Button variant="link" onClick={onSwitch} className="text-purple-400 hover:text-purple-300">
          {isLogin ? 'Sign Up' : 'Login'}
        </Button>
      </p>
    </div>
  );
};

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      <AnimatePresence initial={false}>
        <CircularTransition isVisible={isLogin} key="login">
          <AuthForm isLogin={true} onSwitch={() => setIsLogin(false)} />
        </CircularTransition>
      </AnimatePresence>
      <AnimatePresence>
        <CircularTransition isVisible={!isLogin} key="signup">
          <AuthForm isLogin={false} onSwitch={() => setIsLogin(true)} />
        </CircularTransition>
      </AnimatePresence>
    </div>
  );
};