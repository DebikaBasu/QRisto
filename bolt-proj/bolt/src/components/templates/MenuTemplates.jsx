import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import TemplateCard from './TemplateCard';
import TemplateFilters from './TemplateFilters';

const templates = [
  {
    id: 1,
    name: 'Modern Bistro',
    category: 'Dine-In',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400',
  },
  {
    id: 2,
    name: 'Café Special',
    category: 'Café',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400',
  },
  {
    id: 3,
    name: 'Kids Menu',
    category: 'Kids',
    image: 'https://images.unsplash.com/photo-1566454419290-57a64afe30ac?w=400',
  },
];

const categories = ['All', 'Dine-In', 'Café', 'Kids', 'Takeout'];

const MenuTemplates = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const filteredTemplates = templates.filter(
    (template) =>
      selectedCategory === 'All' || template.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Menu Templates
          </h2>
          <p className="mt-2 text-gray-500">
            Choose from our professionally designed templates
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search templates..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className="p-2 text-gray-400 hover:text-gray-500"
          >
            {viewMode === 'grid' ? (
              <List className="h-5 w-5" />
            ) : (
              <Grid className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div className="mt-8">
        <TemplateFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div
          className={`mt-6 ${
            viewMode === 'grid'
              ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
              : 'space-y-4'
          }`}
        >
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              viewMode={viewMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuTemplates;