import { CustomExhibit } from '../types';

const STORAGE_KEY = 'pharmacopeia_custom_exhibits';

export const saveCustomExhibit = (exhibit: CustomExhibit): void => {
  try {
    const existing = loadCustomExhibits();
    const updated = [...existing, exhibit];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Failed to save custom exhibit:', error);
  }
};

export const loadCustomExhibits = (): CustomExhibit[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as CustomExhibit[];
  } catch (error) {
    console.error('Failed to load custom exhibits:', error);
    return [];
  }
};

export const deleteCustomExhibit = (exhibitId: string): void => {
  try {
    const existing = loadCustomExhibits();
    const updated = existing.filter(e => e.id !== exhibitId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Failed to delete custom exhibit:', error);
  }
};

export const importCustomExhibit = (exhibitJson: string): CustomExhibit | null => {
  try {
    const exhibit = JSON.parse(exhibitJson) as CustomExhibit;
    // Validate the structure
    if (!exhibit.id || !exhibit.title || !exhibit.sources || !Array.isArray(exhibit.sources)) {
      throw new Error('Invalid exhibit format');
    }
    // Assign new ID and timestamp to avoid conflicts
    exhibit.id = `custom_${Date.now()}`;
    exhibit.createdAt = Date.now();
    saveCustomExhibit(exhibit);
    return exhibit;
  } catch (error) {
    console.error('Failed to import custom exhibit:', error);
    return null;
  }
};
