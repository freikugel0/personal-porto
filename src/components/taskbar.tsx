import { ClockFading, Eye, EyeOff, Volume2 } from "lucide-react";
import Button from "./button";
import useAppStore from "../stores/app.store";
import { registeredApps } from "../constant/registered_apps";
import CurrentTime from "./current_time";
import useMusicPlayer from "../stores/music.store";
import { useEffect, useState } from "react";

const Taskbar = ({ ...props }: React.ComponentProps<"div">) => {
  const {
    start_menu,
    toggleStartMenu,
    toggleOpen,
    getRunning,
    getCurrentAppState,
  } = useAppStore();

  const [crtEnabled, setCrtEnabled] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("crt-effect", crtEnabled);
  }, [crtEnabled]);

  const { volume, setVolume } = useMusicPlayer();
  const [popupVolume, setPopupVolume] = useState(false);

  return (
    <div
      className="z-index[9999] absolute bottom-0 left-0 z-50 flex h-full max-h-10 w-full items-center justify-between border-t border-t-slate-300 bg-slate-500 px-2 py-1"
      {...props}
    >
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <Button
          variant={start_menu ? "invert" : "normal"}
          onClick={() => toggleStartMenu()}
        >
          <div className="flex items-center gap-2 pr-1">
            <p>λ</p>
            <p className="font-semibold">Run</p>
          </div>
        </Button>
        <div className="h-5 w-px bg-gray-400" />
        {/* Task List */}
        <div className="flex items-center gap-2">
          {getRunning().map((appid) => {
            const app = registeredApps[appid];
            return (
              <Button
                onClick={() => toggleOpen(appid)}
                variant={
                  getCurrentAppState(appid) === "opened" ? "invert" : "normal"
                }
                key={appid}
              >
                <div className="flex items-center gap-2">
                  <div className="size-4">{app.icon}</div>
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
        <div className="relative flex items-center gap-2">
          <Volume2
            size={16}
            className="text-gray-300"
            onClick={() => setPopupVolume(!popupVolume)}
          />
          {popupVolume && (
            <div className="absolute bottom-7 left-0 bg-slate-500 p-2">
              <input
                className="w-24"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(e.target.valueAsNumber)}
              />
            </div>
          )}
        </div>
        <button type="button" onClick={() => setCrtEnabled((prev) => !prev)}>
          {crtEnabled ? (
            <EyeOff size={16} className="text-gray-300" />
          ) : (
            <Eye size={16} className="text-gray-300" />
          )}
        </button>
        <div className="h-5 w-px bg-gray-400" />
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
