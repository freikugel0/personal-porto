import { ClockFading, Volume2 } from "lucide-react";
import Button from "./button";
import useAppStore from "../stores/app.store";
import { registeredApps } from "../constant/registered_apps";
import CurrentTime from "./current_time";
import useMusicPlayer from "../stores/music.store";
import { useState } from "react";

const Taskbar = ({ ...props }: React.ComponentProps<"div">) => {
  const {
    start_menu,
    toggleStartMenu,
    toggleOpen,
    getRunning,
    getCurrentAppState,
  } = useAppStore();

  const { volume, setVolume } = useMusicPlayer();
  const [popupVolume, setPopupVolume] = useState(false);

  return (
    <div
      className="flex justify-between items-center w-full h-full max-h-10 z-50 absolute bottom-0 left-0 bg-slate-500 px-2 py-1 border-t border-t-slate-300"
      style={{
        zIndex: 99999999,
      }}
      {...props}
    >
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <Button
          variant={start_menu ? "invert" : "normal"}
          onClick={() => toggleStartMenu()}
        >
          <div className="flex items-center gap-2 pr-1">
            <img src="/lambda.png" className="size-6 grayscale" />
            <p className="font-semibold">Menu</p>
          </div>
        </Button>
        <div className="bg-gray-400 w-px h-5" />
        {/* Task List */}
        <div className="flex items-center gap-2">
          {getRunning()
            .reverse()
            .map((appid, i) => {
              const app = registeredApps[appid];
              return (
                <Button
                  onClick={() => toggleOpen(appid)}
                  variant={
                    getCurrentAppState(appid) === "opened" ? "invert" : "normal"
                  }
                  key={i}
                >
                  <div className="flex items-center gap-2">
                    {<app.icon size={15} />}
                    <p className="text-sm">{app.name}</p>
                  </div>
                </Button>
              );
            })}
        </div>
      </div>
      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Quick Icon */}
        <div className="flex items-center gap-2">
          <Volume2
            size={16}
            className="text-gray-300"
            onClick={() => setPopupVolume(!popupVolume)}
          />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(e.target.valueAsNumber)}
          />
        </div>
        <Button variant="invert">
          <div className="flex items-center gap-2">
            <ClockFading size={16} />
            <p>
              <CurrentTime />
            </p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Taskbar;
