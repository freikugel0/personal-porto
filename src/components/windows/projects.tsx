import { registeredApps } from "../../constant/registered_apps";
import useAppStore from "../../stores/app.store";
import WindowTitlebar from "../window_titlebar";
import BlankWindow from "./blank_window";
import parse from "html-react-parser";
import {
  siReact,
  siTypescript,
  siGo,
  siReactquery,
  siNodedotjs,
  siHandlebarsdotjs,
  siExpress,
  siPostgresql,
  siTailwindcss,
  siShadcnui,
} from "simple-icons";

const Projects = () => {
  const app = registeredApps.projects;
  const { setToBackground, kill } = useAppStore();

  return (
    <BlankWindow
      appId="projects"
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
      <div className="flex w-full flex-col gap-4 p-2">
        <h1>A collection of my personal and collaborative projects</h1>
        {/* Project List */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <img src="/yabv.png" />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Simple Image Board Viewer</h1>
              <p>
                A modern, high-performance image fetcher built using React with
                Typescript and a backend proxy with Go
              </p>
              <div className="flex gap-2">
                <div className="size-5">{parse(siTypescript.svg)}</div>
                <div className="size-5">{parse(siReact.svg)}</div>
                <div className="size-5">{parse(siReactquery.svg)}</div>
                <div className="size-5">{parse(siShadcnui.svg)}</div>
                <div className="size-5">{parse(siGo.svg)}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img src="/microblog.png" />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Microblog</h1>
              <p>
                A minimalist server-rendered microblogging platform, built with
                Express and Handlebars to simulate the architecture of early web
                apps, this project demonstrates clean monolithic architecture,
                RESTful routing, and persistent storage using PostgreSQL
              </p>
              <div className="flex gap-2">
                <div className="size-5">{parse(siNodedotjs.svg)}</div>
                <div className="size-5">{parse(siHandlebarsdotjs.svg)}</div>
                <div className="size-5">{parse(siExpress.svg)}</div>
                <div className="size-5">{parse(siPostgresql.svg)}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img src="/retroporto.png" />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Personal Porto</h1>
              <p>
                My personal portfolio website inspired by retro operating system
                aesthetics. Each section (About, Projects, Contact, etc.) is
                represented as draggable "windows", giving visitors an
                interactive and nostalgic desktop experience.
              </p>
              <div className="flex gap-2">
                <div className="size-5">{parse(siTypescript.svg)}</div>
                <div className="size-5">{parse(siReact.svg)}</div>
                <div className="size-5">{parse(siTailwindcss.svg)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlankWindow>
  );
};

export default Projects;
