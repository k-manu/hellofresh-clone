import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewAtNomNomBoxSection = () => {
  return (
    <section className="py-16">
      <div className="container-hf">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Check Out What's New at NomNomBox:
          </h2>
          <p className="text-xl text-[#323623]">
            Authentic Indian Flavors for Every Schedule
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48 md:h-56 lg:h-64">
              <Image
                src="/images/ready-made-indian.jpg"
                alt="Ready Made Indian Meals"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Ready Made Meals</h3>
              <p className="text-gray-600 mb-4">
                Authentic Indian dishes ready in minutes. Just heat and enjoy the flavors of India!
              </p>
              <Link
                href="/meal-kits/ready-made"
                className="text-primary font-medium hover:underline"
              >
                Explore Ready Made →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48 md:h-56 lg:h-64">
              <Image
                src="/images/prep-and-bake-indian.jpg"
                alt="Prep & Bake Indian Meals"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Cook & Serve</h3>
              <p className="text-gray-600 mb-4">
                Experience traditional Indian cooking with pre-measured spices and fresh ingredients.
              </p>
              <Link
                href="/meal-kits/cook-serve"
                className="text-primary font-medium hover:underline"
              >
                Explore Cook & Serve →
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48 md:h-56 lg:h-64">
              <Image
                src="/images/quick-indian-meals.jpg"
                alt="Quick Indian Meals"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Quick & Easy</h3>
              <p className="text-gray-600 mb-4">
                Flavorful Indian meals ready in 20 minutes or less. Perfect for busy weeknights!
              </p>
              <Link
                href="/meal-kits/quick-easy"
                className="text-primary font-medium hover:underline"
              >
                Explore Quick & Easy →
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-background rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold text-primary-dark mb-2">Everything You Need, All In One Box</h3>
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

export default NewAtNomNomBoxSection;
