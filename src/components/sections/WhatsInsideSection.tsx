import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

const WhatsInsideSection = () => {
  const features = [
    {
      id: 'produce',
      title: "Fresh, quality produce:",
      description: "Crisp vegetables and ripe fruits selected to bring vibrant flavors to every dish."
    },
    {
      id: 'recipe-cards',
      title: "Simple recipe cards:",
      description: "Step-by-step recipes with nutritional information that take the guesswork out of cooking, no matter your skill level."
    },
    {
      id: 'proteins',
      title: "Top-notch proteins:",
      description: "From succulent chicken to sustainably sourced seafood, we deliver the best to elevate your meals."
    },
    {
      id: 'add-ons',
      title: "Customizable add-ons:",
      description: "Choose from tasty snacks, savory sides, or additional proteins to enhance your weekly meal kit."
    },
    {
      id: 'packaging',
      title: "Eco-friendly packaging:",
      description: "Insulated boxes and recyclable materials keep your ingredients fresh and minimize waste."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-hf">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image
              src="/images/whats-inside-box.png"
              alt="What's inside NomNomBox meal delivery boxes?"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#323623] mb-6">
              What's inside NomNomBox meal delivery boxes?
            </h2>
            <p className="text-gray-600 mb-8">
              Every NomNomBox delivery brings you a curated selection of authentic Indian meal kits designed to make 
              dinnertime easy, exciting, and full of flavor. Here's what's inside:
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-orange-600 font-bold text-xl mr-3">1.</span>
                <div>
                  <h3 className="font-bold text-lg">Pre-Measured Ingredients</h3>
                  <p className="text-gray-600">
                    Perfectly portioned fresh vegetables, proteins, and authentic Indian spices.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-orange-600 font-bold text-xl mr-3">2.</span>
                <div>
                  <h3 className="font-bold text-lg">Step-by-Step Recipe Cards</h3>
                  <p className="text-gray-600">
                    Easy-to-follow instructions with photos to help you create authentic Indian dishes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-orange-600 font-bold text-xl mr-3">3.</span>
                <div>
                  <h3 className="font-bold text-lg">Eco-Friendly Packaging</h3>
                  <p className="text-gray-600">
                    Sustainable materials to keep ingredients fresh and reduce environmental impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-orange-600 font-bold text-xl mr-3">4.</span>
                <div>
                  <h3 className="font-bold text-lg">Authentic Indian Spice Blends</h3>
                  <p className="text-gray-600">
                    Premium spice mixes that deliver the true taste of India to your kitchen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInsideSection;
