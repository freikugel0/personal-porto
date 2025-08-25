import { Outlet, createRootRoute } from "@tanstack/react-router";
import useWallpaperStore, { imageList } from "../stores/wallpaper.store";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { wallpaperId } = useWallpaperStore();

  return (
    <>
      <div className="font-ms flex min-h-screen w-full items-center justify-center bg-black">
        <div
          className="fixed top-0 left-0 h-screen w-full bg-cover bg-no-repeat brightness-90"
          style={{
            backgroundImage: `url("${imageList[wallpaperId].imageFile}")`,
          }}
        ></div>
        <div className="relative h-screen w-full overflow-hidden">
          <Outlet />
        </div>
      </div>
    </>
  );
}
