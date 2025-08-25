import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
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
      initSize={{
        width: 300,
        height: 400,
      }}
      minSize={{
        width: 300,
        height: 400,
      }}
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
      <div className="flex h-full w-full flex-col justify-between gap-4 p-2 text-sm">
        <div className="flex w-full flex-1 items-center justify-center">
          <img src="/icons/music_icon.png" alt="Music Player" width="180px" />
        </div>
        <p className="text-center text-sm">patient. - still awake</p>
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col gap-2">
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={progress}
              onChange={handleSeek}
              className="w-full"
            />
            <div className="grid w-full grid-cols-3 px-2">
              <p className="text-sm">{(progress * duration).toFixed(1)}</p>
              <div className="flex items-center justify-center gap-2">
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
