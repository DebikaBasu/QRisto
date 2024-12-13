import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, QrCode, Coffee, FileText, DollarSign, LogIn } from 'lucide-react';
import NavbarLink from './NavbarLink';
import NavbarDropdown from './NavbarDropdown';

const navItems = [
  {
    title: 'Templates',
    icon: FileText,
    dropdownItems: [
      { name: 'Dine-In Menus', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300' },
      { name: 'Takeout Menus', image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=300' },
      { name: 'Marketing Flyers', image: 'https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?w=300' },
    ],
  },
  {
    title: 'Digital',
    icon: QrCode,
    dropdownItems: [
      { name: 'QR Generator', image: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=300' },
      { name: 'Menu Builder', image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=300' },
    ],
  },
  {
    title: 'Explore',
    icon: Coffee,
    dropdownItems: [
      { name: 'Success Stories', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=300' },
      { name: 'Resources', image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=300' },
    ],
  },
  {
    title: 'Pricing',
    icon: DollarSign,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <QrCode className="h-8 w-8 text-indigo-600 transition-transform duration-300 transform hover:scale-110" />
              <span className="font-bold text-xl text-gray-800">MenuQR</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavbarLink
                  title={item.title}
                  icon={item.icon}
                  hasDropdown={!!item.dropdownItems}
                  onClick={() => setActiveDropdown(item.title)}
                  isActive={activeDropdown === item.title}
                />
                <NavbarDropdown
                  items={item.dropdownItems}
                  isActive={activeDropdown === item.title}
                />
              </div>
            ))}

            <Link
              to="/login"
              className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            >
              <LogIn className="h-4 w-4" />
              <span>Log In</span>
            </Link>

            <Link
              to="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
