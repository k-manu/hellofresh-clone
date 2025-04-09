'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Check } from 'lucide-react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!password) {
      setError('Please enter a password');
      return;
    }
    
    // In a real app, we would submit this to a backend
    console.log('Form submitted:', { email, password });
    
    // Redirect to checkout form
    window.location.href = '/checkout-form/address';
  };

  return (
    <main className="py-10">
      <div className="container-hf">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-primary-dark mb-4">
                Create your account
              </h1>
              <p className="text-gray-600">
                Sign up to start cooking delicious Indian meals at home!
              </p>
            </div>
            
            {error && (
              <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Create a password"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Password must be at least 8 characters long
                </p>
              </div>
              
              <div className="mb-6">
                <label className="flex items-start cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the <Link href="/terms" className="text-primary hover:underline">Terms of Use</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                  </span>
                </label>
              </div>
              
              <button 
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
              >
                Continue <ChevronRight size={16} className="ml-1" />
              </button>
              
              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link>
              </p>
            </form>
          </div>
          
          <div className="bg-background rounded-lg p-6">
            <h2 className="text-xl font-bold text-primary-dark mb-4">
              Your selected plan
            </h2>
            
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-bold text-primary-dark">Classic Plan</h3>
                  <p className="text-gray-600 text-sm">2 people, 3 recipes per week</p>
                </div>
                <Link href="/plans" className="text-primary text-sm hover:underline">
                  Change
                </Link>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Box Price:</span>
                  <div className="text-right">
                    <span className="text-gray-400 line-through text-sm mr-2">₹1099</span>
                    <span className="text-primary-dark font-bold">₹549</span>
                  </div>
                </div>
                
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="text-gray-600">Free</span>
                </div>
                
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span className="text-primary-dark">₹549</span>
                </div>
                
                <div className="bg-primary/10 text-primary text-center py-1 px-2 rounded mt-3 text-sm font-medium">
                  SAVE 50% on your first box!
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-primary-dark mb-3">
              NomNomBox Benefits
            </h3>
            
            <ul className="space-y-3">
              {[
                'Farm-fresh ingredients delivered to your door',
                'Flexible subscription - skip weeks or cancel anytime',
                'Easy, step-by-step recipe cards',
                'Perfectly portioned ingredients for zero waste',
                'Premium Indian spice blends and ingredients'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 