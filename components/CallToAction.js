'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function CallToAction() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!name.trim()) newErrors.name = 'Name is required';
  //   if (!email.trim()) newErrors.email = 'Email is required';
  //   else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email';
    
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!name.trim()) newErrors.name = 'Name is required';
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
  
    try {
      const res = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (res.ok) {
        setIsSubmitted(true);
        setError('');
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     // Here you would send the data to your backend
  //     console.log('Form submitted:', { name, email });
  //     setIsSubmitted(true);
  //   }
  // };

  return (
    <section id="contact" className="section-spacing relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-15" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg?auto=compress&cs=tinysrgb&w=1920')"
        }}>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Game?
            </h2>
            <p className="text-gray-600">
              Sign up to receive exclusive tips, special offers, and information about our coaching programs.
            </p>
          </div>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="input-field"
                  placeholder="John Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="input-field"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Get Started
                <Send size={18} />
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                We respect your privacy and will never share your information.
              </p>
            </form>
          ) : (
            <div className="text-center p-6 bg-green-50 rounded-lg animate-fade-in">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">
                We've received your information and will be in touch soon with personalized coaching options!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}