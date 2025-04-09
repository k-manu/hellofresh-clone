"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  const faqs = [
    {
      id: 'faq1',
      question: 'How can I customize my NomNomBox protein size to suit me?',
      answer: 'You can customize protein sizes for select recipes through our online portal. Simply log in to your account, go to your weekly menu, and look for the customize option available on eligible recipes.'
    },
    {
      id: 'faq2',
      question: 'How does NomNomBox avoid food delivery waste?',
      answer: 'NomNomBox minimizes waste by pre-portioning ingredients exactly to what you need for each recipe. Our packaging is designed to be recycled, and we continuously work to improve our sustainability practices.'
    },
    {
      id: 'faq3',
      question: 'Which food meal plans & recipes does NomNomBox offer?',
      answer: 'NomNomBox offers a variety of meal plans including North Indian, South Indian, Indo-Chinese, Pure Veg, Family Thalis, and Quick & Easy. Each week, you can choose from over 30 different recipes.'
    },
    {
      id: 'faq4',
      question: 'How much does NomNomBox charge per meal?',
      answer: 'The cost per meal decreases as you order more servings. You can customize your plan by selecting the number of people (2 or 4) and the number of recipes per week (2-6). Visit our pricing page for detailed information.'
    },
    {
      id: 'faq5',
      question: 'Does NomNomBox give nutrition & calorie information?',
      answer: 'Yes, NomNomBox provides detailed nutrition information for every recipe, including calories, fat, carbohydrates, protein, sodium, and more. This information is available on our recipe cards and online.'
    },
    {
      id: 'faq6',
      question: 'How do I recycle my NomNomBox boxes?',
      answer: 'NomNomBox boxes are 100% recyclable. You can break them down and place them with your regular cardboard recycling. The ice packs can be emptied and recycled, and most packaging materials are recyclable or biodegradable.'
    },
    {
      id: 'faq7',
      question: 'Why should I choose NomNomBox for my meal delivery service?',
      answer: 'NomNomBox offers fresh, pre-measured ingredients, time-saving recipes, and flexible plans with no commitment. We have the most 5-star reviews among meal kit services and provide quality ingredients at affordable prices.'
    },
    {
      id: 'faq8',
      question: 'Do NomNomBox meal kits support a healthy lifestyle?',
      answer: 'Yes, NomNomBox supports healthy eating habits by offering a variety of nutritionally balanced recipes. Our Fit & Wholesome plan features recipes that are around 650 calories per serving and includes plenty of fresh produce.'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-hf">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          More questions about our meal delivery services?
        </h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-200 py-4"
            >
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openFaq === faq.id}
                aria-controls={`${faq.id}-content`}
              >
                <h3 className="text-lg font-medium text-[#323623]">{faq.question}</h3>
                {openFaq === faq.id ? (
                  <ChevronUp className="flex-shrink-0 text-primary" size={20} />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-primary" size={20} />
                )}
              </button>
              <div
                id={`${faq.id}-content`}
                className={`mt-2 transition-all duration-300 overflow-hidden ${
                  openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 pb-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-xs text-gray-500 max-w-4xl mx-auto">
          <p>
            *Offer only valid for new customers or former customers who deactivated over 270 days prior to using this voucher. Free Ready Made Meals offer valid for new and existing customers with qualifying auto-renewing subscription purchase. Free Ready Made Meals offer is based on a limit of one free Ready Made Meal per box with active subscription, available starting with deliveries week of February 22, 2025, while supplies last. If subscription is canceled, this offer becomes invalid and will not be reinstated upon reactivation. 50% off offer valid for new customers only with qualifying auto-renewing subscription purchase. 50% off offer is based on total discount given on first box for a 4-person, 5-recipe plan, and expires 21 days after offer purchase at 11:59 PM ET. Customers who purchase a plan of greater value will receive more than 50% off, while customers who purchase a plan of lesser value will receive less than 50% off. Shipping fee applies on all deliveries after the first box. Not valid on premiums, meal upgrades, add-ons, taxes or shipping fees. May not be combined with gift cards or any other promotion. No cash value. Void outside India and where prohibited. Offer cannot be sold or otherwise bartered. NomNomBox has the right to end or modify any offer at any time. Additional restrictions may apply. See https://www.nomnombox.com/termsandconditions for more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
