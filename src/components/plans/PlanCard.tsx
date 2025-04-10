'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { usePlan } from '@/contexts/PlanContext';

interface PlanCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  features: string[];
  basePrice: number;
  popular?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  subtitle,
  imageSrc,
  features,
  basePrice,
  popular = false
}) => {
  const { 
    peopleCount, 
    mealCount, 
    calculatePrice, 
    calculateDiscountedPrice, 
    calculatePricePerServing 
  } = usePlan();
  
  const price = calculatePrice(basePrice);
  const discountedPrice = calculateDiscountedPrice(basePrice);
  const pricePerServing = calculatePricePerServing(basePrice);

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${popular ? 'ring-2 ring-primary' : ''} relative`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          MOST POPULAR
        </div>
      )}
      
      <div className="relative h-40 w-full">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-dark mb-1">{title}</h3>
        <p className="text-gray-600 mb-4">{subtitle}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="border-t border-gray-200 pt-4 mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-600 text-sm">Box Price</span>
            <div className="flex items-center">
              <span className="text-gray-400 line-through text-sm mr-2">₹{price}</span>
              <span className="text-primary font-bold">₹{discountedPrice}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-600 text-sm">Price per serving</span>
            <span className="text-gray-600 text-sm">₹{pricePerServing}</span>
          </div>
          
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>{peopleCount} people × {mealCount} meals</span>
          </div>
          
          <div className="bg-primary/10 text-primary text-center py-1 px-2 rounded mt-3 text-sm font-medium">
            SAVE 50% on First Box
          </div>
        </div>
        
        <Link href="/register" className="btn-primary w-full text-center block">
          Select
        </Link>
      </div>
    </div>
  );
};

export default PlanCard; 