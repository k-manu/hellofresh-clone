import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MenuCategoriesSection = () => {
  const categories = [
    {
      id: 'meat-veggies',
      name: 'MEAT & VEGGIES',
      image: '/images/meat-veggies.jpg',
      description: 'OUR MOST POPULAR PLAN'
    },
    {
      id: 'veggie',
      name: 'VEGGIE',
      image: '/images/veggie.jpg',
      description: '& PLANT-BASED MEALS'
    },
    {
      id: 'family',
      name: 'FAMILY MENU',
      image: '/images/family-menu.jpg',
      description: 'KID-TESTED RECIPES'
    },
    {
      id: 'fit',
      name: 'FIT & WHOLESOME',
      image: '/images/fit-wholesome.jpg',
      description: 'FOR A BALANCED LIFESTYLE'
    },
    {
      id: 'quick',
      name: 'QUICK & EASY',
      image: '/images/quick-easy.jpg',
      description: 'FOR BUSY WEEKNIGHTS'
    },
    {
      id: 'pescatarian',
      name: 'PESCATARIAN',
      image: '/images/pescatarian.jpg',
      description: 'SEAFOOD & VEGGIE MEALS'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-hf">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#323623] mb-4">
          Our Flexible Menu Plans
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Choose from a variety of authentic Indian recipes each week. Our meal kits include pre-measured
          ingredients and step-by-step recipes to create flavorful Indian dishes with ease.
          Plus, discover the latest seasonal and convenience items at NomNomBox Market for an added touch of culinary inspiration.
        </p>

        <div className="relative">
          {/* Carousel Controls */}
          <button
            className="absolute top-1/2 -left-5 transform -translate-y-1/2 lg:flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md z-10 hidden"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
            <div className="flex space-x-4 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
              {categories.map((category) => (
                <div key={category.id} className="w-[280px] md:w-auto flex-shrink-0 relative rounded-lg overflow-hidden group">
                  <div className="relative h-[180px] w-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm font-medium uppercase">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 -right-5 transform -translate-y-1/2 lg:flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md z-10 hidden"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-12 bg-orange-100 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold text-[#323623] mb-2">Everything You Need, All In One Box</h3>
              <p className="text-gray-600">The best of meal kits and online grocery shopping, streamlined into one weekly box.</p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/menus" className="btn-outline">
                View our Menus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCategoriesSection;
