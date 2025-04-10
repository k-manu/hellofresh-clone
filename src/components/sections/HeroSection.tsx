import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24">
      <div className="container-hf">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#323623]">
              <span className="nomnom-logo text-orange-600">NomNom</span><span className="nomnom-logo-box">Box</span> <br className="hidden md:block" />
              Authentic Indian <br className="hidden md:block" />
              <span className="text-orange-600">Meal Kits</span> Delivered
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Experience the flavors of India at home with pre-measured ingredients 
              and simple recipes. Get 50% off your first box!
            </p>
            <Link
              href="/plans"
              className="btn-primary inline-block"
            >
              View Our Plans
            </Link>
          </div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/indian-food-thali.jpg"
              alt="NomNomBox Indian Meal Kit"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
