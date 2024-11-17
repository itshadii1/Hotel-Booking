// Homepage.jsx
'use client';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import image from '/TripNest-2.png';
import backgroundImage from '/hotel-window.jpg';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function SearchComponent() {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState('1 Room, 1 Guest');

  return (
    <div className="flex justify-center items-center p-6 bg-teal-500 bg-opacity-20 rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Search by city"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-gray-300 p-2 rounded-md mr-2 bg-white"
      />
      <div className="p-2 border border-gray-300 rounded-md mr-2 bg-white">
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          placeholderText="Check-in Date"
          className="w-full"
        />
      </div>
      <div className="p-2 border border-gray-300 rounded-md mr-2 bg-white">
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          placeholderText="Check-out Date"
          className="w-full"
        />
      </div>
      <div className="p-2 border border-gray-300 rounded-md mr-2 bg-white">
        {guests}
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Search</button>
    </div>
  );
}

function CompanyServiced() {
  return (
    <div
      className="relative bg-cover bg-center text-white flex items-center mt-8 rounded-lg mx-2"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '300px',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      <div className="relative z-10 p-8">
        <h2 className="text-3xl font-bold">Company-Serviced</h2>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <span className="mr-2">💨</span> Quick check-in
          </li>
          <li className="flex items-center">
            <span className="mr-2">🏢</span> Spacious rooms
          </li>
          <li className="flex items-center">
            <span className="mr-2">🌟</span> Premium experience
          </li>
        </ul>
        <button className="mt-6 bg-white text-gray-900 px-4 py-2 rounded-md font-semibold">
          Book now
        </button>
      </div>
      <div className="absolute right-8 bottom-8 text-3xl font-bold text-white">
        Starting from ₹999
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div>
            <h2 className="text-white font-semibold mb-4">Company</h2>
            <ul>
              <li><a href="#" className="hover:text-gray-200">About Us</a></li>
              <li><a href="#" className="hover:text-gray-200">Careers</a></li>
              <li><a href="#" className="hover:text-gray-200">Contact</a></li>
              <li><a href="#" className="hover:text-gray-200">Blog</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-4">Support</h2>
            <ul>
              <li><a href="#" className="hover:text-gray-200">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-200">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-4">Resources</h2>
            <ul>
              <li><a href="#" className="hover:text-gray-200">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-200">Community</a></li>
              <li><a href="#" className="hover:text-gray-200">Partners</a></li>
              <li><a href="#" className="hover:text-gray-200">Guides</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-4">Stay Connected</h2>
            <p>Subscribe to our newsletter for updates</p>
            <input
              type="email"
              placeholder="Your email"
              className="mt-2 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p>© 2024 TripNest Hotels, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Homepage() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div>
      <header className="bg-white py-0.1">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={image} className="h-8 w-auto lg:h-12" />
            </a>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-8">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 no-underline">
                Cities
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>
            </Popover>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-sm font-semibold text-gray-900 no-underline">
              Become a member<br />
              <span className="text-xs font-normal -mt-1 block">Save up to 10%</span>
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-sm font-semibold text-gray-900 no-underline">
              List Your Property
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-sm font-semibold text-gray-900 no-underline">
              01234-56789<br />
              <span className="text-xs font-normal -mt-1 block">Call us to Book now</span>
            </a>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
            {isLoggedIn ? (
              <>
                <span className="text-sm font-semibold text-gray-900">User</span>
                <button onClick={handleLogoutClick} className="text-sm font-semibold text-gray-900 bg-red-500 text-white px-3 py-1 rounded">
                  Log out
                </button>
              </>
            ) : (
              <>
                <button onClick={handleLoginClick} className="text-sm font-semibold text-gray-900">
                  Log in
                </button>
                <a href="#" className="text-sm font-semibold text-gray-900 bg-blue-500 text-white px-3 py-1 rounded">
                  Sign up
                </a>
              </>
            )}
          </div>
        </nav>
      </header>

      <SearchComponent />
      <CompanyServiced />
      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
}
