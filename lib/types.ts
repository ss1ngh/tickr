// Type definitions for the application

export interface RawNewsArticle {
  id?: number;
  headline?: string;
  summary?: string;
  source?: string;
  url?: string;
  datetime?: number;
  image?: string;
  category?: string;
  related?: string;
}

export interface Alert {
  id: string;
  symbol: string;
  alertType: 'upper' | 'lower';
  threshold: number;
  isActive: boolean;
  createdAt: number;
}
