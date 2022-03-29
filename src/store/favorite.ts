import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GHRepository } from '../types/github';

interface FavoriteState {
  repositories: GHRepository[];
}

interface FavoriteStore extends FavoriteState {
  append(target: GHRepository): Promise<void>;
  remove(target: GHRepository): Promise<void>;
}

const MAX_FAVORITE = 4;
const useFavoriteStore = create<FavoriteStore>(
  persist(
    (set, get) => ({
      repositories: [],
      append: async (target: GHRepository) => {
        const current = get();
        if (current.repositories.find((it) => it.id === target.id)) {
          return;
        }

        if (current.repositories.length >= MAX_FAVORITE) {
          throw new Error('useFavoriteStore.append: exceed maximum');
        }

        return set((prev) => ({ repositories: [...prev.repositories, target] }));
      },
      remove: async (target: GHRepository) => {
        const current = get();
        if (!current.repositories.find((it) => it.id === target.id)) {
          return;
        }

        return set((prev) => ({ repositories: prev.repositories.filter((it) => it.id === target.id) }));
      },
    }),
    {
      name: 'payhere:repositories',
      getStorage: () => AsyncStorage,
    }
  )
);

export default useFavoriteStore;
