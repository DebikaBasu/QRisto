import React from 'react';
import PropTypes from 'prop-types';

const TemplateFilters = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`${
            selectedCategory === category
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          } px-4 py-2 rounded-full text-sm font-medium`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

TemplateFilters.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default TemplateFilters;