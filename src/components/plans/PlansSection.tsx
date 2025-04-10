'use client';

import React from 'react';
import PlanCard from '@/components/plans/PlanCard';
import MealCountSelector from '@/components/plans/MealCountSelector';
import PeopleCountSelector from '@/components/plans/PeopleCountSelector';
import { PlanProvider } from '@/contexts/PlanContext';

const PlansSection = () => {
  return (
    <PlanProvider>
      <div className="bg-white rounded-lg shadow-md p-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-6">How many people are you cooking for?</h2>
            <PeopleCountSelector />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-6">How many meals per week?</h2>
            <MealCountSelector />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <PlanCard
          title="Classic Plan"
          subtitle="A variety of meat, fish, and seasonal produce"
          imageSrc="/images/pescatarian.jpg"
          features={[
            "Wide variety of recipes weekly",
            "Locally sourced ingredients",
            "Perfectly portioned for zero waste"
          ]}
          basePrice={399}
        />
        
        <PlanCard
          title="Veggie Plan"
          subtitle="Plant-based recipes with seasonal produce"
          imageSrc="/images/veggie.jpg"
          features={[
            "Plant-forward vegetarian meals",
            "Farm-fresh produce",
            "High-protein vegetarian options"
          ]}
          basePrice={379}
          popular={true}
        />
        
        <PlanCard
          title="Family Plan"
          subtitle="Family-friendly meals everyone will love"
          imageSrc="/images/family_friendly.jpg"
          features={[
            "Kid-approved recipes",
            "Quick 30-minute meal options",
            "Easy-to-follow recipes"
          ]}
          basePrice={349}
        />
      </div>
    </PlanProvider>
  );
};

export default PlansSection; 