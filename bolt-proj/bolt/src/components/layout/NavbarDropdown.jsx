import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavbarDropdown = ({ items, isActive }) => {
  if (!items || !isActive) return null;

  return (
    <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-4 transition-all duration-200">
      {items.map((item) => (
        <Link
          key={item.name}
          to="#"
          className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover rounded"
          />
          <span className="text-gray-700 hover:text-indigo-600">
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

NavbarDropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  isActive: PropTypes.bool.isRequired,
};

export default NavbarDropdown;