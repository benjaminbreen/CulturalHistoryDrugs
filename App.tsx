import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import SourceCard from './components/SourceCard';
import SourceRow from './components/SourceRow';
import SourceModal from './components/SourceModal';
import MapModal from './components/MapModal';
import LightTable from './components/LightTable';
import TourModal from './components/TourModal';
import IndexModal from './components/IndexModal';
import CreateExhibitModal from './components/CreateExhibitModal';
import AboutModal from './components/AboutModal';
import { INITIAL_SOURCES } from './constants';
import { SourceItem, FilterState, SortOption, Tour, CustomExhibit } from './types';
import { FlaskConical } from 'lucide-react';
import { saveCustomExhibit, loadCustomExhibits, deleteCustomExhibit } from './utils/exhibitStorage';

const App: React.FC = () => {
  // State
  const [sources] = useState<SourceItem[]>(INITIAL_SOURCES);
  const [selectedSourceId, setSelectedSourceId] = useState<string | null>(null);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    selectedType: 'All',
    yearRange: [1880, 1950],
    sortBy: SortOption.YEAR_ASC
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // New State
  const [comparisonIds, setComparisonIds] = useState<string[]>([]);
  const [activeTour, setActiveTour] = useState<Tour | CustomExhibit | null>(null);
  const [customExhibits, setCustomExhibits] = useState<CustomExhibit[]>([]);
  const [isCreateExhibitOpen, setIsCreateExhibitOpen] = useState(false);

  // Load custom exhibits from localStorage on mount
  useEffect(() => {
    setCustomExhibits(loadCustomExhibits());
  }, []);

  // Derived State
  const filteredSources = useMemo(() => {
    const filtered = sources.filter(source => {
      const matchesSearch = 
        source.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        source.description.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        source.tags.some(tag => tag.toLowerCase().includes(filters.searchQuery.toLowerCase())) ||
        source.location?.toLowerCase().includes(filters.searchQuery.toLowerCase());
      
      const matchesType = filters.selectedType === 'All' || source.type === filters.selectedType;
      
      const matchesYear = source.year >= filters.yearRange[0] && source.year <= filters.yearRange[1];

      return matchesSearch && matchesType && matchesYear;
    });

    // Sort logic
    return filtered.sort((a, b) => {
        switch(filters.sortBy) {
            case SortOption.YEAR_ASC: return a.year - b.year;
            case SortOption.YEAR_DESC: return b.year - a.year;
            case SortOption.TITLE_ASC: return a.title.localeCompare(b.title);
            case SortOption.CREATOR_ASC: return a.creator.localeCompare(b.creator);
            case SortOption.LOCATION_ASC: return (a.location || '').localeCompare(b.location || '');
            default: return a.year - b.year;
        }
    });
  }, [sources, filters]);

  const selectedSource = useMemo(() => 
    sources.find(s => s.id === selectedSourceId) || null
  , [sources, selectedSourceId]);
  
  const comparisonSources = useMemo(() => 
    sources.filter(s => comparisonIds.includes(s.id))
  , [sources, comparisonIds]);

  // Handlers
  const handleCompareToggle = (id: string) => {
    if (comparisonIds.includes(id)) {
        setComparisonIds(prev => prev.filter(cId => cId !== id));
    } else {
        if (comparisonIds.length < 2) {
            setComparisonIds(prev => [...prev, id]);
        } else {
            // Replace the second one if full
            setComparisonIds(prev => [prev[0], id]);
        }
    }
  };

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * sources.length);
    setSelectedSourceId(sources[randomIndex].id);
  };

  const handleIndexTagSelect = (tag: string) => {
    setFilters(prev => ({ ...prev, searchQuery: tag }));
    setIsIndexOpen(false);
  };

  const handleSaveExhibit = (exhibit: CustomExhibit) => {
    saveCustomExhibit(exhibit);
    setCustomExhibits(loadCustomExhibits());
  };

  const handleDeleteExhibit = (exhibitId: string) => {
    deleteCustomExhibit(exhibitId);
    setCustomExhibits(loadCustomExhibits());
    // Close tour if it's the deleted exhibit
    if (activeTour && 'isCustom' in activeTour && activeTour.id === exhibitId) {
      setActiveTour(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f4]">
      <Header
        onOpenMap={() => setIsMapOpen(true)}
        onOpenIndex={() => setIsIndexOpen(true)}
        onStartTour={setActiveTour}
        onShuffle={handleShuffle}
        onCreateExhibit={() => setIsCreateExhibitOpen(true)}
        customExhibits={customExhibits}
        onDeleteExhibit={handleDeleteExhibit}
        onOpenAbout={() => setIsAboutOpen(true)}
      />
      
      <FilterBar 
        filters={filters} 
        onFilterChange={setFilters} 
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <main className="flex-grow p-4 md:p-12 pb-32">
        <div className="max-w-7xl mx-auto">
          
          {/* Results Count */}
          <div className="mb-8 flex justify-between items-end border-b border-stone-300 pb-2">
             <h2 className="text-2xl font-serif font-bold text-stone-800">
                Archive Holdings
             </h2>
             <span className="text-stone-500 font-mono text-sm">
                Showing {filteredSources.length} of {sources.length} items
             </span>
          </div>

          {/* Content View */}
          {filteredSources.length > 0 ? (
            <>
                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredSources.map(source => (
                        <SourceCard 
                            key={source.id} 
                            source={source} 
                            onClick={() => setSelectedSourceId(source.id)}
                            onCompare={handleCompareToggle}
                            isSelectedForCompare={comparisonIds.includes(source.id)}
                        />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-stone-100 text-stone-500 text-xs uppercase tracking-wider font-bold border-b border-stone-300">
                                <tr>
                                    <th className="p-4 w-24">Image</th>
                                    <th className="p-4 w-24">Year</th>
                                    <th className="p-4">Title</th>
                                    <th className="p-4 hidden md:table-cell">Creator</th>
                                    <th className="p-4 hidden sm:table-cell">Format</th>
                                    <th className="p-4 hidden lg:table-cell">Location</th>
                                    <th className="p-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200">
                                {filteredSources.map(source => (
                                    <SourceRow
                                        key={source.id}
                                        source={source}
                                        onClick={() => setSelectedSourceId(source.id)}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </>
          ) : (
            <div className="text-center py-24 bg-white rounded-lg border border-stone-200 border-dashed">
                <div className="mb-4 flex justify-center">
                    <FlaskConical className="w-12 h-12 text-stone-300" />
                </div>
                <p className="text-xl font-serif text-stone-400 mb-2">No records found in the archive.</p>
                <p className="text-sm text-stone-500">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-stone-900 text-stone-500 py-8 px-6 text-center text-sm border-t border-amber-900">
        <div className="max-w-4xl mx-auto">
            <p className="mb-2 font-serif">
              Pharmacopeia Archive &copy; 2024 <a href="mailto:bebreen@ucsc.edu" className="text-amber-500 hover:text-amber-400 transition-colors">Benjamin Breen</a>
            </p>
            <p className="text-xs text-stone-600 mb-3">
                Disclaimer: This application contains historical materials depicting drug use that may be offensive or disturbing.
                These materials are presented for historical and educational purposes only.
            </p>
            <p className="text-xs text-stone-600">
                All archival materials are presented under fair use for educational purposes. If you are a copyright holder and wish to have materials removed, please contact the <a href="mailto:bebreen@ucsc.edu" className="text-amber-500 hover:text-amber-400 transition-colors">site administrator</a>.
            </p>
        </div>
      </footer>

      <SourceModal 
        source={selectedSource} 
        onClose={() => setSelectedSourceId(null)} 
      />

      <MapModal 
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        sources={sources}
        onSelectSource={setSelectedSourceId}
      />

      <IndexModal 
        isOpen={isIndexOpen}
        onClose={() => setIsIndexOpen(false)}
        sources={sources}
        onSelectTag={handleIndexTagSelect}
      />

      <TourModal
        tour={activeTour}
        onClose={() => setActiveTour(null)}
        allSources={sources}
      />

      <CreateExhibitModal
        isOpen={isCreateExhibitOpen}
        onClose={() => setIsCreateExhibitOpen(false)}
        allSources={sources}
        onSaveExhibit={handleSaveExhibit}
      />

      {isAboutOpen && (
        <AboutModal onClose={() => setIsAboutOpen(false)} />
      )}

      <LightTable
        sources={comparisonIds.length > 0 ? comparisonSources : []}
        onRemove={handleCompareToggle}
        onClear={() => setComparisonIds([])}
      />
    </div>
  );
};

export default App;