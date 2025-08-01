import {
  HelpCircle,
  Images,
  Music4,
  NotebookPen,
  type LucideIcon,
} from "lucide-react";
import About from "../components/windows/about";
import Projects from "../components/windows/projects";
import Gallery from "../components/windows/gallery";
import MusicPlayer from "../components/windows/music_player";

export type AppId = "about" | "projects" | "gallery" | "music_player";

export type App = {
  id: AppId;
  icon: LucideIcon;
  name: string;
  windowComponent: React.ReactNode;
};

export const registeredApps: Record<AppId, App> = {
  about: {
    id: "about",
    icon: HelpCircle,
    name: "About",
    windowComponent: <About />,
  },
  projects: {
    id: "projects",
    icon: NotebookPen,
    name: "Projects",
    windowComponent: <Projects />,
  },
  gallery: {
    id: "gallery",
    icon: Images,
    name: "Gallery",
    windowComponent: <Gallery />,
  },
  music_player: {
    id: "music_player",
    icon: Music4,
    name: "Music Player",
    windowComponent: <MusicPlayer />,
  },
};
