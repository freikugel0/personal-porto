import { Disc3, Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { registeredApps } from "../../constant/registered_apps";
import useAppStore from "../../stores/app.store";
import useMusicPlayer from "../../stores/music.store";
import Button from "../button";
import WindowTitlebar from "../window_titlebar";
import BlankWindow from "./blank_window";

const MusicPlayer = () => {
  const app = registeredApps.music_player;
  const { setToBackground, kill } = useAppStore();

  const { isPlaying, play, pause, duration, progress, seek } = useMusicPlayer();
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const percent = parseFloat(e.target.value);
    seek(percent * duration);
  };

  return (
    <BlankWindow
      appId="music_player"
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
      <div className="flex flex-col justify-between w-full h-full gap-4 p-2 text-sm">
        <div className="flex-1 w-full flex justify-center items-center">
          <Disc3 className="animate-spin text-slate-800" size={180} />
        </div>
        <p className="text-sm text-center">patient. - still awake</p>
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-col gap-2">
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={progress}
              onChange={handleSeek}
              className="w-full"
            />
            <div className="w-full grid grid-cols-3 px-2">
              <p className="text-sm">{(progress * duration).toFixed(1)}</p>
              <div className="flex justify-center items-center gap-2">
                <Button>
                  <SkipBack size={14} />
                </Button>
                <Button onClick={isPlaying ? pause : play}>
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </Button>
                <Button>
                  <SkipForward size={14} />
                </Button>
              </div>
              <p className="text-end text-sm">{duration.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </div>
    </BlankWindow>
  );
};

export default MusicPlayer;
