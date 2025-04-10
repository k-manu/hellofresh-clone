'use client';

import React from 'react';
import { usePlan } from '@/contexts/PlanContext';

const MealCountSelector = () => {
  const { mealCount, setMealCount } = usePlan();
  
  const mealOptions = [
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {mealOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => setMealCount(option.value)}
          className={`
            flex-1 min-w-[64px] py-3 px-4 rounded-md border-2 transition-all
            ${mealCount === option.value 
              ? 'border-primary bg-primary/10 text-primary font-bold' 
              : 'border-gray-200 hover:border-primary/50 text-gray-700'}
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default MealCountSelector; 