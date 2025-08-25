import { Howl } from "howler";
import { create } from "zustand";

type MusicPlayerState = {
  isPlaying: boolean;
  sound: Howl | null;
  volume: number;
  setVolume: (vol: number) => void;
  progress: number;
  duration: number;
  play: () => void;
  pause: () => void;
  seek: (to: number) => void;
};

const defaultVol = 0.5;
const useMusicPlayer = create<MusicPlayerState>()((set, get) => {
  let progressInterval: number | null = null;

  return {
    isPlaying: false,
    sound: null,
    volume: defaultVol,
    progress: 0,
    duration: 0,

    play: () => {
      const existing = get().sound;

      const updateProgress = () => {
        const sound = get().sound;
        if (sound) {
          const dur = sound.duration();
          const pos = sound.seek() as number;
          
          set({ progress: pos / dur, duration: dur });
        }
      };

      if (existing) {
        existing.play();
      } else {
        const sound = new Howl({
          src: "/music/still_awake.mp3",
          html5: true,
          onend: () => {
            set({ isPlaying: false });
            clearInterval(progressInterval!);
          },
          volume: defaultVol,
        });
        sound.play();
        set({ sound });
      }

      set({ isPlaying: true });

      clearInterval(progressInterval!);
      progressInterval = window.setInterval(updateProgress, 500);
    },

    pause: () => {
      const sound = get().sound;
      if (sound?.playing()) {
        sound.pause();

        clearInterval(progressInterval!);
        set({ isPlaying: false });
      }
    },

    setVolume: (volume) => {
      const sound = get().sound;
      if (sound) {
        sound.volume(volume);
      }
      set({ volume });
    },

    seek: (to: number) => {
      const sound = get().sound;
      if (sound) {
        sound.seek(to);
        set({ progress: to / sound.duration() });
      }
    },
  };
});

export default useMusicPlayer;
