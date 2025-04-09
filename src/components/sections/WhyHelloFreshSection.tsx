import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyNomNomBoxSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-hf">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#323623] mb-12">
          Why NomNomBox Meal Kits?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/icon-no-commitment.png"
                alt="No Commitment"
                width={60}
                height={60}
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">No Commitment</h3>
            <p className="text-gray-600">
              Skip weeks, swap recipes, or cancel anytime. Enjoy authentic Indian cuisine on your schedule.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/icon-plenty.png"
                alt="Plenty of Options"
                width={60}
                height={60}
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Regional Variety</h3>
            <p className="text-gray-600">
              Choose from North Indian, South Indian, Indo-Chinese and more authentic regional cuisines each week.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/icon-affordable.png"
                alt="Affordable"
                width={60}
                height={60}
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Affordable</h3>
            <p className="text-gray-600">
              Authentic Indian meals at better value than takeout, with perfectly portioned ingredients to reduce food waste.
            </p>
          </div>

          {/* Card 4 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/icon-reviews.png"
                alt="More Five-Star Reviews"
                width={60}
                height={60}
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Great Reviews</h3>
            <p className="text-gray-600">
              Join thousands of happy customers enjoying authentic Indian flavors without the hassle.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Menu Type 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image
                src="/images/veggie.jpg"
                alt="Vegetarian"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Vegetarian</h3>
              <p className="text-sm text-gray-600">
                Plant-based Indian favorites with bold, authentic flavors
              </p>
            </div>
          </div>

          {/* Menu Type 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image
                src="/images/family-menu.jpg"
                alt="Family Menu"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Family Feasts</h3>
              <p className="text-sm text-gray-600">
                Kid-friendly Indian dishes the whole family will love
              </p>
            </div>
          </div>

          {/* Menu Type 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image
                src="/images/fit-wholesome.jpg"
                alt="Non-Veg Delights"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Non-Veg Delights</h3>
              <p className="text-sm text-gray-600">
                Flavorful chicken, lamb and seafood dishes with authentic spices
              </p>
            </div>
          </div>

          {/* Menu Type 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image
                src="/images/quick-easy.jpg"
                alt="Quick & Easy"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Quick & Easy</h3>
              <p className="text-sm text-gray-600">
                Authentic Indian meals ready in 20 minutes or less
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNomNomBoxSection;
