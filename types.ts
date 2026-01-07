
export interface Movie {
  id: string;
  title: string;
  director: string;
  genre: string[];
  duration: string;
  year: number;
  synopsis: string;
  posterUrl: string;
  rating: string;
  tags: string[];
}

export interface Screening {
  id: string;
  movieId: string;
  time: string;
  venue: string;
  date: string;
  isSoldOut: boolean;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum Section {
  HERO = 'hero',
  MOVIES = 'movies',
  SCHEDULE = 'schedule',
  AI_ASSISTANT = 'ai-assistant',
  ABOUT = 'about'
}
