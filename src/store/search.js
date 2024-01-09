import { create } from "zustand";

export const useSearch = create((set) => ({
  keyword: "",
  setKeyword: (keyword) => set({ keyword }),
}));
