import React from 'react';
import PropTypes from 'prop-types';

const TemplateCard = ({ template, viewMode }) => {
  return (
    <div
      className={`${
        viewMode === 'grid'
          ? 'bg-white rounded-lg shadow-lg overflow-hidden'
          : 'flex items-center space-x-4 bg-white rounded-lg shadow-lg p-4'
      }`}
    >
      <img
        src={template.image}
        alt={template.name}
        className={`${
          viewMode === 'grid'
            ? 'w-full h-48 object-cover'
            : 'w-32 h-32 object-cover rounded'
        }`}
      />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{template.name}</h3>
        <p className="text-sm text-gray-500">{template.category}</p>
        <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Use Template
        </button>
      </div>
    </div>
  );
};

TemplateCard.propTypes = {
  template: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  viewMode: PropTypes.oneOf(['grid', 'list']).isRequired,
};

export default TemplateCard;