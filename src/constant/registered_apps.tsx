import About from "../components/windows/about";
import Projects from "../components/windows/projects";
import Gallery from "../components/windows/gallery";
import MusicPlayer from "../components/windows/music_player";

export type AppId = "about" | "projects" | "gallery" | "music_player";

export type App = {
  id: AppId;
  icon: React.ReactNode;
  name: string;
  windowComponent: React.ComponentType;
};

export const registeredApps: Record<AppId, App> = {
  about: {
    id: "about",
    icon: <img src="/icons/about.png" draggable="false" alt="About" />,
    name: "About",
    windowComponent: About,
  },
  projects: {
    id: "projects",
    icon: <img src="icons/projects.png" draggable="false" alt="Projects" />,
    name: "Projects",
    windowComponent: Projects,
  },
  gallery: {
    id: "gallery",
    icon: <img src="icons/gallery.png" draggable="false" alt="Gallery" />,
    name: "Gallery",
    windowComponent: Gallery,
  },
  music_player: {
    id: "music_player",
    icon: (
      <img src="icons/music_player.png" draggable="false" alt="Music Player" />
    ),
    name: "Music Player",
    windowComponent: MusicPlayer,
  },
};
