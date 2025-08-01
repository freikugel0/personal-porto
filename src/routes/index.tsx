import { createFileRoute } from "@tanstack/react-router";
import Taskbar from "../components/taskbar";
import Menu from "../components/windows/menu";
import Desktop from "../components/desktop";
import DesktopIcon from "../components/desktop_icon";
import useAppStore from "../stores/app.store";
import { registeredApps } from "../constant/registered_apps";
import React from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { start_menu, setStartMenu, opened } = useAppStore();

  return (
    <div className="w-full">
      <Desktop
        onClick={() => setStartMenu(false)}
        icons={[
          <DesktopIcon
            icon={registeredApps.about.icon}
            label={registeredApps.about.name}
            appid="about"
            pos_x={30}
            pos_y={30}
          />,
          <DesktopIcon
            icon={registeredApps.projects.icon}
            label={registeredApps.projects.name}
            appid="projects"
            pos_x={30}
            pos_y={120}
          />,
        ]}
      />
      {start_menu && <Menu />}
      {opened &&
        opened.map((appid, i) => {
          const app = registeredApps[appid];
          return <React.Fragment key={i}>{app.windowComponent}</React.Fragment>;
        })}
      <Taskbar />
    </div>
  );
}
