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

export const imageList: ImageType[] = [
  {
    meta: {
      name: "selpowerline.jpg",
      fileSize: "488 kB",
      resolution: "1440x1080",
    },
    imageFile: "/selpowerline.jpg",
  },
  {
    meta: {
      name: "selroom.jpg",
      fileSize: "412 kB",
      resolution: "1440x1080",
    },
    imageFile: "/selroom.jpg",
  },
];

export default useWallpaperStore;
