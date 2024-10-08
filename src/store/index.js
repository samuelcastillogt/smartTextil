import { create } from 'zustand'

export const useStore = create((set) => ({
  products: undefined,
  addProducts: (newProducts) => set({ products: newProducts }),
}))