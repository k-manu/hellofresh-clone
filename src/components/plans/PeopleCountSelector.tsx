'use client';

import React from 'react';
import { Users } from 'lucide-react';
import { usePlan } from '@/contexts/PlanContext';

const PeopleCountSelector = () => {
  const { peopleCount, setPeopleCount } = usePlan();
  
  const peopleOptions = [
    { value: 2, label: '2 People' },
    { value: 4, label: '4 People' },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {peopleOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => setPeopleCount(option.value)}
          className={`
            flex-1 py-3 px-4 rounded-md border-2 transition-all
            flex items-center justify-center
            ${peopleCount === option.value 
              ? 'border-primary bg-primary/10 text-primary font-bold' 
              : 'border-gray-200 hover:border-primary/50 text-gray-700'}
          `}
        >
          <Users size={16} className="mr-2" />
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default PeopleCountSelector; 