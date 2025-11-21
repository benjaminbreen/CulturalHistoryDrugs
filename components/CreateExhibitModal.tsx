import React, { useState } from 'react';
import { SourceItem, CustomExhibit, CustomExhibitSource } from '../types';
import { X, ChevronRight, ChevronLeft, Check, Plus, Trash2, Download, Upload, Save } from 'lucide-react';
import { useEscapeKey } from '../hooks/useClickOutside';

interface CreateExhibitModalProps {
  isOpen: boolean;
  onClose: () => void;
  allSources: SourceItem[];
  onSaveExhibit: (exhibit: CustomExhibit) => void;
}

type Step = 'overview' | 'select' | 'annotate' | 'finalize';

const THEME_COLORS = [
  { name: 'Amber', class: 'bg-amber-800', hex: '#92400e' },
  { name: 'Emerald', class: 'bg-emerald-800', hex: '#065f46' },
  { name: 'Blue', class: 'bg-blue-800', hex: '#1e40af' },
  { name: 'Purple', class: 'bg-purple-800', hex: '#6b21a8' },
  { name: 'Rose', class: 'bg-rose-800', hex: '#9f1239' },
  { name: 'Slate', class: 'bg-slate-800', hex: '#1e293b' },
];

const CreateExhibitModal: React.FC<CreateExhibitModalProps> = ({
  isOpen,
  onClose,
  allSources,
  onSaveExhibit
}) => {
  const [step, setStep] = useState<Step>('overview');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [themeColor, setThemeColor] = useState(THEME_COLORS[0].class);
  const [selectedSources, setSelectedSources] = useState<CustomExhibitSource[]>([]);
  const [currentAnnotationIndex, setCurrentAnnotationIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const resetForm = () => {
    setStep('overview');
    setTitle('');
    setDescription('');
    setThemeColor(THEME_COLORS[0].class);
    setSelectedSources([]);
    setCurrentAnnotationIndex(0);
    setSearchQuery('');
  };

  const handleCloseWithConfirm = () => {
    if (title || selectedSources.length > 0) {
      if (confirm('Are you sure you want to close? Your progress will be lost.')) {
        resetForm();
        onClose();
      }
    } else {
      onClose();
    }
  };

  useEscapeKey(handleCloseWithConfirm, isOpen);

  if (!isOpen) return null;

  const handleAddSource = (sourceId: string) => {
    if (selectedSources.length < 10 && !selectedSources.find(s => s.sourceId === sourceId)) {
      setSelectedSources([...selectedSources, { sourceId, customAnnotation: '' }]);
    }
  };

  const handleRemoveSource = (sourceId: string) => {
    setSelectedSources(selectedSources.filter(s => s.sourceId !== sourceId));
  };

  const handleUpdateAnnotation = (index: number, annotation: string) => {
    const updated = [...selectedSources];
    updated[index].customAnnotation = annotation;
    setSelectedSources(updated);
  };

  const handleSave = () => {
    const exhibit: CustomExhibit = {
      id: `custom_${Date.now()}`,
      title,
      description,
      themeColor,
      sources: selectedSources,
      createdAt: Date.now(),
      isCustom: true,
    };
    onSaveExhibit(exhibit);
    resetForm();
    onClose();
  };

  const handleExportJSON = () => {
    const exhibit: CustomExhibit = {
      id: `custom_${Date.now()}`,
      title,
      description,
      themeColor,
      sources: selectedSources,
      createdAt: Date.now(),
      isCustom: true,
    };
    const dataStr = JSON.stringify(exhibit, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `exhibit-${title.toLowerCase().replace(/\s+/g, '-')}.json`;
    link.click();
  };

  const canProceedFromOverview = title.trim().length > 0 && description.trim().length > 0;
  const canProceedFromSelect = selectedSources.length >= 3 && selectedSources.length <= 10;
  const canFinalize = selectedSources.every(s => s.customAnnotation.trim().length > 0);

  const filteredSources = allSources.filter(source =>
    source.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    source.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    source.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const renderOverviewStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Create Your Exhibition</h3>
        <p className="text-stone-600 mb-8">Start by giving your exhibition a title, description, and visual theme.</p>
      </div>

      <div>
        <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Exhibition Title *</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Jazz Age & Narcotics"
          className="w-full px-4 py-3 border-2 border-stone-300 rounded-md focus:border-amber-500 focus:outline-none text-lg font-serif"
          maxLength={100}
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Description *</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the theme and narrative of your exhibition..."
          rows={4}
          className="w-full px-4 py-3 border-2 border-stone-300 rounded-md focus:border-amber-500 focus:outline-none text-base font-serif"
          maxLength={500}
        />
        <p className="text-xs text-stone-500 mt-1">{description.length}/500 characters</p>
      </div>

      <div>
        <label className="block text-sm font-bold text-stone-700 mb-3 uppercase tracking-wide">Theme Color</label>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {THEME_COLORS.map(color => (
            <button
              key={color.name}
              onClick={() => setThemeColor(color.class)}
              className={`${color.class} h-16 rounded-md relative transition-all hover:scale-105 ${themeColor === color.class ? 'ring-4 ring-stone-900 ring-offset-2' : ''}`}
            >
              {themeColor === color.class && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
              )}
              <span className="sr-only">{color.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSelectStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Select Archive Holdings</h3>
        <p className="text-stone-600 mb-4">Choose between 3 and 10 items for your exhibition. ({selectedSources.length}/10 selected)</p>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, description, or tag..."
            className="flex-1 px-4 py-2 border-2 border-stone-300 rounded-md focus:border-amber-500 focus:outline-none"
          />
        </div>

        {selectedSources.length > 0 && (
          <div className="mb-6 p-4 bg-amber-50 border-2 border-amber-200 rounded-md">
            <h4 className="font-bold text-amber-900 text-sm uppercase tracking-wide mb-3">Selected Items:</h4>
            <div className="space-y-2">
              {selectedSources.map((source, idx) => {
                const item = allSources.find(s => s.id === source.sourceId);
                return item ? (
                  <div key={source.sourceId} className="flex items-center justify-between bg-white p-3 rounded border border-amber-200">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-1 rounded">{idx + 1}</span>
                      <div>
                        <p className="font-serif font-bold text-stone-900 text-sm">{item.title}</p>
                        <p className="text-xs text-stone-500">{item.year} • {item.creator}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveSource(source.sourceId)}
                      className="p-2 hover:bg-red-100 rounded text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>

      <div className="max-h-96 overflow-y-auto border-2 border-stone-200 rounded-md">
        <div className="divide-y divide-stone-200">
          {filteredSources.map(source => {
            const isSelected = selectedSources.find(s => s.sourceId === source.id);
            const isDisabled = selectedSources.length >= 10 && !isSelected;
            return (
              <div
                key={source.id}
                className={`p-4 flex items-center justify-between transition-colors ${isSelected ? 'bg-amber-50' : isDisabled ? 'bg-stone-50 opacity-50' : 'hover:bg-stone-50'}`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={source.thumbnailUrl}
                    alt={source.title}
                    className="w-16 h-16 object-cover rounded border border-stone-300"
                  />
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-stone-900">{source.title}</h4>
                    <p className="text-xs text-stone-500">{source.year} • {source.creator}</p>
                  </div>
                </div>
                <button
                  onClick={() => isSelected ? handleRemoveSource(source.id) : handleAddSource(source.id)}
                  disabled={isDisabled}
                  className={`px-4 py-2 rounded font-bold text-sm transition-colors ${
                    isSelected
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : isDisabled
                      ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                      : 'bg-amber-600 text-white hover:bg-amber-700'
                  }`}
                >
                  {isSelected ? 'Remove' : 'Add'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderAnnotateStep = () => {
    const currentSource = selectedSources[currentAnnotationIndex];
    const sourceItem = allSources.find(s => s.id === currentSource?.sourceId);

    if (!sourceItem) return null;

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Add Your Analysis</h3>
          <p className="text-stone-600 mb-4">
            Provide your own interpretation and context for each item. ({currentAnnotationIndex + 1}/{selectedSources.length})
          </p>
        </div>

        <div className="flex gap-6">
          <div className="w-1/3">
            <img
              src={sourceItem.thumbnailUrl}
              alt={sourceItem.title}
              className="w-full rounded-lg border-2 border-stone-300 shadow-md"
            />
            <div className="mt-4">
              <h4 className="font-serif font-bold text-lg text-stone-900">{sourceItem.title}</h4>
              <p className="text-sm text-stone-600">{sourceItem.year} • {sourceItem.creator}</p>
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">
              Your Annotation *
            </label>
            <textarea
              value={currentSource.customAnnotation}
              onChange={(e) => handleUpdateAnnotation(currentAnnotationIndex, e.target.value)}
              placeholder="Write your analysis, interpretation, or context for this item. What makes it significant to your exhibition's narrative?"
              rows={12}
              className="w-full px-4 py-3 border-2 border-stone-300 rounded-md focus:border-amber-500 focus:outline-none text-base font-serif resize-none"
            />
            <p className="text-xs text-stone-500 mt-2">
              {currentSource.customAnnotation.length} characters • Be thoughtful and detailed.
            </p>
          </div>
        </div>

        <div className="flex justify-between pt-4 border-t border-stone-200">
          <button
            onClick={() => setCurrentAnnotationIndex(Math.max(0, currentAnnotationIndex - 1))}
            disabled={currentAnnotationIndex === 0}
            className="flex items-center gap-2 px-4 py-2 bg-stone-200 text-stone-700 rounded font-bold hover:bg-stone-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Item
          </button>
          <button
            onClick={() => setCurrentAnnotationIndex(Math.min(selectedSources.length - 1, currentAnnotationIndex + 1))}
            disabled={currentAnnotationIndex === selectedSources.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-stone-200 text-stone-700 rounded font-bold hover:bg-stone-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next Item
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  const renderFinalizeStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Review & Save</h3>
        <p className="text-stone-600 mb-6">Your exhibition is ready! Review the details and save it.</p>
      </div>

      <div className="bg-stone-50 p-6 rounded-lg border-2 border-stone-200">
        <div className={`${themeColor} px-4 py-3 rounded-md mb-4`}>
          <h4 className="text-2xl font-serif font-bold text-white">{title}</h4>
        </div>
        <p className="text-stone-700 font-serif mb-4">{description}</p>
        <div className="space-y-2">
          <p className="text-sm font-bold text-stone-500 uppercase tracking-wide">Items in this exhibition:</p>
          {selectedSources.map((source, idx) => {
            const item = allSources.find(s => s.id === source.sourceId);
            return item ? (
              <div key={source.sourceId} className="flex items-center gap-2 text-sm">
                <span className="font-bold text-amber-800">{idx + 1}.</span>
                <span className="font-serif">{item.title}</span>
                <span className="text-stone-400">({item.year})</span>
              </div>
            ) : null;
          })}
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={handleSave}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold text-lg transition-colors shadow-md"
        >
          <Save className="w-5 h-5" />
          Save Exhibition Locally
        </button>

        <button
          onClick={handleExportJSON}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-stone-700 hover:bg-stone-800 text-white rounded-lg font-bold transition-colors"
        >
          <Download className="w-4 h-4" />
          Export as JSON (Share with Others)
        </button>
      </div>

      <p className="text-xs text-stone-500 text-center">
        Your exhibition will be saved to your browser's local storage. Export as JSON to share with others or backup.
      </p>
    </div>
  );

  const getStepContent = () => {
    switch (step) {
      case 'overview':
        return renderOverviewStep();
      case 'select':
        return renderSelectStep();
      case 'annotate':
        return renderAnnotateStep();
      case 'finalize':
        return renderFinalizeStep();
    }
  };

  const getNextButtonLabel = () => {
    if (step === 'overview') return 'Next: Select Items';
    if (step === 'select') return 'Next: Add Annotations';
    if (step === 'annotate') return 'Next: Review & Save';
    return 'Finish';
  };

  const canProceed = () => {
    if (step === 'overview') return canProceedFromOverview;
    if (step === 'select') return canProceedFromSelect;
    if (step === 'annotate') return true; // Can always proceed, they can add annotations later
    return true;
  };

  const handleNext = () => {
    if (step === 'overview') setStep('select');
    else if (step === 'select') setStep('annotate');
    else if (step === 'annotate') setStep('finalize');
  };

  const handleBack = () => {
    if (step === 'select') setStep('overview');
    else if (step === 'annotate') setStep('select');
    else if (step === 'finalize') setStep('annotate');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleCloseWithConfirm}
      ></div>

      <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-lg shadow-2xl flex flex-col overflow-hidden border-2 border-stone-200">

        {/* Header */}
        <div className="bg-stone-900 text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-serif font-bold">Create Custom Exhibition</h2>
            <p className="text-stone-400 text-sm mt-1">Step {
              step === 'overview' ? '1' : step === 'select' ? '2' : step === 'annotate' ? '3' : '4'
            } of 4</p>
          </div>
          <button
            onClick={handleCloseWithConfirm}
            className="p-2 hover:bg-stone-800 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-stone-200 h-2">
          <div
            className="bg-amber-600 h-full transition-all duration-300"
            style={{
              width: step === 'overview' ? '25%' : step === 'select' ? '50%' : step === 'annotate' ? '75%' : '100%'
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {getStepContent()}
        </div>

        {/* Footer */}
        {step !== 'finalize' && (
          <div className="bg-stone-50 p-6 border-t border-stone-200 flex justify-between">
            <button
              onClick={handleBack}
              disabled={step === 'overview'}
              className="flex items-center gap-2 px-6 py-3 bg-stone-200 text-stone-700 rounded-lg font-bold hover:bg-stone-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {getNextButtonLabel()}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateExhibitModal;
