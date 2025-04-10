'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type PlanContextType = {
  peopleCount: number;
  setPeopleCount: (count: number) => void;
  mealCount: number;
  setMealCount: (count: number) => void;
  calculatePrice: (basePrice: number) => number;
  calculateDiscountedPrice: (basePrice: number) => number;
  calculatePricePerServing: (basePrice: number) => number;
};

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [peopleCount, setPeopleCount] = useState(2);
  const [mealCount, setMealCount] = useState(3);

  // Base price multipliers
  const peopleMultiplier = {
    2: 1.0,
    4: 1.9, // Not a full 2x for family discount
  };

  const mealMultiplier = {
    2: 0.85, // Slightly cheaper per meal for fewer meals
    3: 1.0,
    4: 1.15,
    5: 1.25,
  };

  const calculatePrice = (basePrice: number): number => {
    return Math.round(basePrice * peopleMultiplier[peopleCount as 2 | 4] * mealMultiplier[mealCount as 2 | 3 | 4 | 5]);
  };

  const calculateDiscountedPrice = (basePrice: number): number => {
    return Math.round(calculatePrice(basePrice) * 0.5); // 50% discount
  };

  const calculatePricePerServing = (basePrice: number): number => {
    return Math.round(calculatePrice(basePrice) / (peopleCount * mealCount));
  };

  return (
    <PlanContext.Provider
      value={{
        peopleCount,
        setPeopleCount,
        mealCount,
        setMealCount,
        calculatePrice,
        calculateDiscountedPrice,
        calculatePricePerServing,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = (): PlanContextType => {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error('usePlan must be used within a PlanProvider');
  }
  return context;
}; 