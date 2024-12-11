import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from 'lucide-react';

const NavbarLink = ({ title, icon: Icon, hasDropdown, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-indigo-600"
    >
      <Icon className="h-4 w-4" />
      <span>{title}</span>
      {hasDropdown && <ChevronDown className="h-4 w-4" />}
    </button>
  );
};

NavbarLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  hasDropdown: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

export default NavbarLink;