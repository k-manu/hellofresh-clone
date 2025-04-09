import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-200">
      <div className="container-hf">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-800 mb-4">NomNomBox</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/students" className="text-gray-600 hover:text-primary">
                  Students
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-gray-600 hover:text-primary">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/hero-discounts" className="text-gray-600 hover:text-primary">
                  Hero Discounts
                </Link>
              </li>
              <li>
                <Link href="/recipe-directory" className="text-gray-600 hover:text-primary">
                  Recipe Directory
                </Link>
              </li>
              <li>
                <Link href="/california-transparency-act" className="text-gray-600 hover:text-primary">
                  California Supply Chains Act
                </Link>
              </li>
              <li>
                <Link href="/delivery-options" className="text-gray-600 hover:text-primary">
                  Delivery Options
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-800 mb-4">Our company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.nomnomboxgroup.com/" className="text-gray-600 hover:text-primary">
                  NomNomBox Group
                </Link>
              </li>
              <li>
                <Link href="/about/sustainability" className="text-gray-600 hover:text-primary">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="https://careers.hellofresh.com/" className="text-gray-600 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about/press" className="text-gray-600 hover:text-primary">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/about/working-at-nomnombox" className="text-gray-600 hover:text-primary">
                  Working at NomNomBox
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-800 mb-4">Work with us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSegFXQvBaRmwPIt25zhFW07Ytzj6bygniGjor-UPMmTzXczoA/viewform" className="text-gray-600 hover:text-primary">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="/about/influencer-program" className="text-gray-600 hover:text-primary">
                  Influencers
                </Link>
              </li>
              <li>
                <Link href="/about/affiliates" className="text-gray-600 hover:text-primary">
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-800 mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/faq" className="text-gray-600 hover:text-primary">
                  Help Center & FAQ
                </Link>
              </li>
              <li>
                <Link href="/about/partnerships" className="text-gray-600 hover:text-primary">
                  Partnership Inquiries
                </Link>
              </li>
              <li>
                <Link href="https://hb.hellofresh.com/corporate-sales" className="text-gray-600 hover:text-primary">
                  Corporate Sales
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-gray-600 hover:text-primary">
                  Do Not Sell or Share My Personal Information
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-800 mb-4">Payment methods</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Image
                src="/images/payment/mastercard.svg"
                alt="Master Card"
                width={40}
                height={30}
                className="h-6 w-auto"
              />
              <Image
                src="/images/payment/visa.svg"
                alt="Visa"
                width={40}
                height={30}
                className="h-6 w-auto"
              />
              <Image
                src="/images/payment/discover.svg"
                alt="Discover"
                width={40}
                height={30}
                className="h-6 w-auto"
              />
              <Image
                src="/images/payment/amex.svg"
                alt="American Express"
                width={40}
                height={30}
                className="h-6 w-auto"
              />
              <Image
                src="/images/payment/paypal.svg"
                alt="Paypal"
                width={40}
                height={30}
                className="h-6 w-auto"
              />
            </div>

            <h3 className="font-bold text-gray-800 mb-4">Download our app</h3>
            <p className="text-gray-600 mb-3 text-sm">Manage your deliveries from anywhere, anytime.</p>
            <div className="flex space-x-3 mb-3">
              <Link href="https://app.adjust.com/7bdjd1g">
                <Image
                  src="/images/app-store.png"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="https://app.adjust.com/qfxjg4i">
                <Image
                  src="/images/play-store.png"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <Link href="/about/app" className="text-gray-600 hover:text-primary text-sm">
              Download our app
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">© NomNomBox 2025</p>
              <Link href="/about/termsandconditions" className="text-gray-600 hover:text-primary text-sm">
                Terms and Conditions
              </Link>
              <Link href="/about/privacy" className="text-gray-600 hover:text-primary text-sm">
                Privacy
              </Link>
              <Link href="/about/accessibility" className="text-gray-600 hover:text-primary text-sm">
                Accessibility
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Link href="https://www.facebook.com/NomNomBoxIndia" aria-label="Facebook">
                <Image
                  src="/images/social/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </Link>
              <Link href="https://twitter.com/NomNomBox" aria-label="Twitter">
                <Image
                  src="/images/social/twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </Link>
              <Link href="https://instagram.com/nomnombox" aria-label="Instagram">
                <Image
                  src="/images/social/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
