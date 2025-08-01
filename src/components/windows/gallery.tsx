import { ArrowLeft, ArrowRight } from "lucide-react";
import { registeredApps } from "../../constant/registered_apps";
import useAppStore from "../../stores/app.store";
import Button from "../button";
import WindowTitlebar from "../window_titlebar";
import BlankWindow from "./blank_window";
import { useState } from "react";
import useWallpaperStore, { imageList } from "../../stores/wallpaper.store";

const Gallery = () => {
  const app = registeredApps.gallery;
  const { setToBackground, kill } = useAppStore();

  const [imageIndex, setImageIndex] = useState(0);
  const { setWallpaperId } = useWallpaperStore();

  return (
    <BlankWindow
      appId="gallery"
      type="single"
      titlebar={
        <WindowTitlebar
          icon={app.icon}
          title={app.name}
          action={{
            minimize: {
              enabled: true,
              onClick: () => setToBackground(app.id),
            },
            close: {
              enabled: true,
              onClick: () => kill(app.id),
            },
          }}
        />
      }
    >
      <div className="w-full h-full flex flex-col gap-4 p-2 text-sm">
        <div className="flex flex-col justify-between gap-2 h-full">
          {/* Image List */}
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <h1>{imageList[imageIndex].meta.name}</h1>
              <p>{imageList[imageIndex].meta.fileSize}</p>
              <p>{imageList[imageIndex].meta.resolution}</p>
            </div>
            <div className="flex flex-col">
              <Button
                className="hover:cursor-pointer"
                onClick={() => setWallpaperId(imageIndex)}
              >
                Set as Wallpaper
              </Button>
            </div>
          </div>
          <div>
            <img src={imageList[imageIndex].imageFile} className="h-full" />
          </div>
          <div className="flex gap-6 items-center mx-auto">
            <Button
              onClick={() =>
                imageIndex > 0 && setImageIndex((prev) => prev - 1)
              }
              disabled={imageIndex <= 0}
            >
              <ArrowLeft />
            </Button>
            <Button
              onClick={() =>
                imageIndex < imageList.length - 1 &&
                setImageIndex((prev) => prev + 1)
              }
              disabled={imageIndex === imageList.length - 1}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </BlankWindow>
  );
};

export default Gallery;
