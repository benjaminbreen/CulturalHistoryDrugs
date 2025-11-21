import React from 'react';
import { Search, Filter, ArrowUpDown, LayoutGrid, List } from 'lucide-react';
import { FilterState, MediaType, SortOption } from '../types';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
    filters, 
    onFilterChange, 
    viewMode,
    onViewModeChange
}) => {
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchQuery: e.target.value });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, selectedType: e.target.value as MediaType | 'All' });
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, sortBy: e.target.value as SortOption });
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const newRange = [...filters.yearRange] as [number, number];
    newRange[index] = parseInt(e.target.value);
    onFilterChange({ ...filters, yearRange: newRange });
  };

  return (
    <div className="bg-stone-100 p-6 border-b border-stone-300 sticky top-0 z-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-4 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full xl:w-1/3 group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-stone-400 group-focus-within:text-amber-700" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-md leading-5 bg-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent sm:text-sm transition-shadow font-serif"
            placeholder="Search archive (e.g. 'Opium', 'Jazz')..."
            value={filters.searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center justify-center w-full xl:w-auto">
            
          {/* Type Filter */}
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border border-stone-300 hover:border-amber-500 transition-colors">
             <Filter className="w-4 h-4 text-stone-500" />
             <select 
                value={filters.selectedType} 
                onChange={handleTypeChange}
                className="bg-transparent border-none text-stone-700 text-sm focus:ring-0 cursor-pointer pr-8 focus:outline-none"
             >
                <option value="All">All Formats</option>
                {Object.values(MediaType).map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
             </select>
          </div>

          {/* Sort Filter */}
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border border-stone-300 hover:border-amber-500 transition-colors">
             <ArrowUpDown className="w-4 h-4 text-stone-500" />
             <select 
                value={filters.sortBy} 
                onChange={handleSortChange}
                className="bg-transparent border-none text-stone-700 text-sm focus:ring-0 cursor-pointer pr-8 focus:outline-none"
             >
                {Object.values(SortOption).map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
             </select>
          </div>

          {/* Date Range */}
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border border-stone-300">
            <span className="text-xs text-stone-500 font-bold uppercase">Year</span>
            <input 
                type="number" 
                min="1880" max="1950" 
                value={filters.yearRange[0]} 
                onChange={(e) => handleRangeChange(e, 0)}
                className="w-16 text-sm border-b border-stone-300 text-center focus:border-amber-600 focus:outline-none"
            />
            <span className="text-stone-400">-</span>
            <input 
                type="number" 
                min="1880" max="1950" 
                value={filters.yearRange[1]} 
                onChange={(e) => handleRangeChange(e, 1)}
                className="w-16 text-sm border-b border-stone-300 text-center focus:border-amber-600 focus:outline-none"
            />
          </div>

          {/* View Toggle */}
          <div className="flex items-center bg-white rounded-md border border-stone-300 overflow-hidden">
            <button 
                onClick={() => onViewModeChange('grid')}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-amber-100 text-amber-800' : 'text-stone-400 hover:text-stone-600'}`}
                title="Grid View"
            >
                <LayoutGrid className="w-5 h-5" />
            </button>
            <div className="w-px h-full bg-stone-300"></div>
            <button 
                onClick={() => onViewModeChange('list')}
                className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-amber-100 text-amber-800' : 'text-stone-400 hover:text-stone-600'}`}
                title="List View"
            >
                <List className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FilterBar;
