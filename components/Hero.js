'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Here you would typically send the email to your backend or service
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setError('');
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/114972/pexels-photo-114972.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Elevate Your Golf Game With Professional Coaching
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Transform your skills with personalized instruction from certified PGA professionals.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-field bg-white/10 backdrop-blur-sm text-white border-white/30 placeholder-white/70"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="text-red-300 text-sm mt-1">{error}</p>}
              </div>
              <button type="submit" className="btn-accent whitespace-nowrap">
                Get Started
                <ArrowRight size={18} />
              </button>
            </form>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-md animate-fade-in">
              <p className="text-white font-medium">
                Thank you! We'll be in touch soon with exclusive coaching offers.
              </p>
            </div>
          )}
          
          <p className="text-sm text-gray-300 mt-4">
            Join over 1,000+ golfers who improved their game with our coaching
          </p>
        </div>
      </div>
    </section>
  );
}