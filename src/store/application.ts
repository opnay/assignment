import create from 'zustand';

export interface ApplicationState {
  title: string;
}

export interface ApplicationStore extends ApplicationState {
  setTitle(next: string): void;
}

export const useGlobalStore = create<ApplicationStore>((set) => ({
  title: 'Search',
  setTitle: (next: string) => set({ title: next }),
}));
