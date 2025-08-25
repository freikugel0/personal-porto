import { create } from "zustand";
import { persist } from "zustand/middleware";

type ImageType = {
  meta: {
    name: string;
    resolution: string;
    fileSize: string;
  };
  imageFile: string;
};

export const imageList: ImageType[] = [
  {
    meta: {
      name: "1.jpg",
      fileSize: "488 kB",
      resolution: "1920x1080",
    },
    imageFile: "/wallpaper/1.jpg",
  },
  {
    meta: {
      name: "2.jpg",
      fileSize: "412 kB",
      resolution: "1920x1080",
    },
    imageFile: "/wallpaper/2.jpg",
  },
  {
    meta: {
      name: "3.jpg",
      fileSize: "704 kB",
      resolution: "1920x1080",
    },
    imageFile: "/wallpaper/3.jpg"
  }
];

type WallpaperState = {
  wallpaperId: number;
  setWallpaperId: (index: number) => void;
};

const useWallpaperStore = create<WallpaperState>()(
  persist(
    (set) => ({
      wallpaperId: 0,
      setWallpaperId: (id) => set({ wallpaperId: id }),
    }),
    {
      name: "wallpaper-store-persist",
    },
  ),
);

export default useWallpaperStore;
