import { create } from "zustand";
import { productsInfo } from "./info";

type LikeStore = {
  like: boolean;
  washlist: Product[];
  allProducts: Product[];

  islike: () => void;
  addToWishlist: (product: Product) => void;
  removeFromWashlist: (id: number) => void;
  clearAllWashlist: () => void;
  getWishlistCount: () => number;
};

type Product = {
  id: number;
  title: string;
  price: number;
};

export const useLiked = create<LikeStore>()((set, get) => ({
  like: false,
  washlist: [],
  allProducts: productsInfo,

  islike: () => {
    set((state) => ({
      like: !state.like,
    }));
  },

  addToWishlist: (product) => {
    set((state) => {
      const exists = state.washlist.some((item) => {
        return item.id === product.id;
      });

      if (exists) {
        return state;
      } else {
        return {
          washlist: [...state.washlist, product],
        };
      }
    });
  },

  removeFromWashlist: (id) => {
    set((state) => ({
      washlist: state.washlist.filter((item) => item.id !== id),
    }));
  },

  clearAllWashlist: () => {
    set({
      washlist: [],
    });
  },

  getWishlistCount: () => {
    return get().washlist.length;
  },
}));
