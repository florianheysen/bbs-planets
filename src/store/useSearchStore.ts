import { create } from "zustand";

interface SearchState {
  searchText: string;
  searchedResults: string[] | null;
  setSearchText: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  setSearchedResults: (searchResults: string[]) => void;
  clearSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchText: "",
  searchedResults: null,
  setSearchText: (e) => set(() => ({ searchText: e.target.value })),
  setSearchedResults: (searchResults) =>
    set(() => ({ searchedResults: searchResults })),
  clearSearch: () => set({ searchText: "" }),
}));
