import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlanCard from '@/components/plans/PlanCard';
import MealCountSelector from '@/components/plans/MealCountSelector';
import PeopleCountSelector from '@/components/plans/PeopleCountSelector';

export default function PlansPage() {
  return (
    <main className="pt-10 pb-20">
      <div className="container-hf">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-primary-dark mb-4">
            Flexible plans that fit your life
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Select your preferred plan and customize it to fit your lifestyle. 
            Cancel or skip a week anytime—your kitchen, your rules.
          </p>
        </div>

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
            imageSrc="/images/plans/classic-plan.jpg"
            features={[
              "Wide variety of recipes weekly",
              "Locally sourced ingredients",
              "Perfectly portioned for zero waste"
            ]}
            price={1099}
            pricePerServing={229}
            discountedPrice={549}
            discountPercentage={50}
          />
          
          <PlanCard
            title="Veggie Plan"
            subtitle="Plant-based recipes with seasonal produce"
            imageSrc="/images/plans/veggie-plan.jpg"
            features={[
              "Plant-forward vegetarian meals",
              "Farm-fresh produce",
              "High-protein vegetarian options"
            ]}
            price={1099}
            pricePerServing={229}
            discountedPrice={549}
            discountPercentage={50}
            popular={true}
          />
          
          <PlanCard
            title="Family Plan"
            subtitle="Family-friendly meals everyone will love"
            imageSrc="/images/plans/family-plan.jpg"
            features={[
              "Kid-approved recipes",
              "Quick 30-minute meal options",
              "Easy-to-follow recipes"
            ]}
            price={1199}
            pricePerServing={199}
            discountedPrice={599}
            discountPercentage={50}
          />
        </div>

        <div className="bg-background rounded-lg p-10 text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">
            Your NomNomBox Plan Includes:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image 
                  src="/images/icons/ingredients.svg" 
                  alt="Pre-measured ingredients" 
                  width={64} 
                  height={64}
                />
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">
                Pre-measured ingredients
              </h3>
              <p className="text-gray-600 text-center">
                No food waste, no extra shopping needed
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image 
                  src="/images/icons/recipe-cards.svg" 
                  alt="Easy-to-follow recipes" 
                  width={64} 
                  height={64}
                />
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">
                Easy-to-follow recipes
              </h3>
              <p className="text-gray-600 text-center">
                With step-by-step instructions and photos
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image 
                  src="/images/icons/flexible.svg" 
                  alt="Flexible subscription" 
                  width={64} 
                  height={64}
                />
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">
                Flexible subscription
              </h3>
              <p className="text-gray-600 text-center">
                Skip weeks, swap recipes, or cancel anytime
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image 
                  src="/images/icons/delivery.svg" 
                  alt="Convenient delivery" 
                  width={64} 
                  height={64}
                />
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">
                Convenient delivery
              </h3>
              <p className="text-gray-600 text-center">
                To your door on your preferred day
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Get Indian cuisine delivered to your door
              </h2>
              <p className="text-gray-600 mb-6">
                Experience the rich flavors of India with our authentic recipe kits. Each meal comes with premium spices, fresh ingredients, and easy-to-follow recipes.
              </p>
              <Link href="/register" className="btn-primary">
                Get Started Now
              </Link>
            </div>
            <div className="relative h-64 w-full">
              <Image
                src="/images/indian-cooking-kit.jpg"
                alt="Indian Cooking Kit"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-xs text-gray-500 max-w-3xl mx-auto">
            *50% off first box discount valid for new customers only. Recurring subscription required. You can cancel at any time before the weekly cutoff. Free delivery on orders above ₹1500. Prices vary by selected meal plan.
          </p>
        </div>
      </div>
    </main>
  );
} 