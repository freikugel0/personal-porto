import { Outlet, createRootRoute } from "@tanstack/react-router";
import useWallpaperStore, { imageList } from "../stores/wallpaper.store";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { wallpaperId } = useWallpaperStore();

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black font-ms">
      <div
        className="w-full h-screen bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url("${imageList[wallpaperId].imageFile}")`,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
