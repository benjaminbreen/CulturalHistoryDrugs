export enum MediaType {
  VIDEO = 'Video',
  AUDIO = 'Audio',
  IMAGE = 'Image',
  TEXT = 'Text',
}

export enum SortOption {
  YEAR_ASC = 'Year (Oldest)',
  YEAR_DESC = 'Year (Newest)',
  TITLE_ASC = 'Title (A-Z)',
  CREATOR_ASC = 'Creator (A-Z)',
  LOCATION_ASC = 'Location (A-Z)',
}

export interface SecondarySource {
  title: string;
  url: string;
  citation: string; // Chicago style
}

export interface Citation {
  apa: string;
  mla: string;
  chicago: string;
  footnotes: string[];
}

export interface SourceItem {
  id: string;
  title: string;
  year: number;
  type: MediaType;
  creator: string;
  description: string; // Short description for card
  fullAnalysis: string; // Now mandatory, pre-written detailed analysis
  excerpt?: string; // Textual excerpt or quote
  furtherReading?: SecondarySource[];
  url: string; // Link to source (Archive.org, Youtube, etc)
  embedUrl?: string; // Optional embed URL for iframes
  thumbnailUrl: string;
  tags: string[];
  citation: Citation;
  location: string;
  coordinates: [number, number]; // [Latitude, Longitude]
}

export interface FilterState {
  searchQuery: string;
  selectedType: MediaType | 'All';
  yearRange: [number, number];
  sortBy: SortOption;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  sourceIds: string[];
  themeColor: string;
}

export interface CustomExhibitSource {
  sourceId: string;
  customAnnotation: string; // Custom analysis/annotation from the user
}

export interface CustomExhibit extends Omit<Tour, 'sourceIds'> {
  sources: CustomExhibitSource[];
  createdAt: number;
  isCustom: true;
}