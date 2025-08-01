import { Rnd } from "react-rnd";
import WindowTabs, { type Tab } from "../window_tabs";
import React, { useEffect } from "react";
import useWindowStore, { initSize } from "../../stores/window.store";
import type { AppId } from "../../constant/registered_apps";

type BlankWindowProps =
  | ({
      type: "single";
      children: React.ReactNode;
    } & CommonWindowProps)
  | ({
      type: "tabs";
      children: Tab[];
    } & CommonWindowProps);

type CommonWindowProps = {
  appId: AppId;
  titlebar: React.ReactNode;
  menubar?: React.ReactNode;
};

const BlankWindow = (props: BlankWindowProps) => {
  const { windows, initWindow, setPos, setSize, focusWindow } =
    useWindowStore();

  useEffect(() => {
    initWindow(props.appId);
  }, [props.appId]);

  const win = windows[props.appId];
  if (!win) return null;

  return (
    <Rnd
      default={{
        x: win.pos.x,
        y: win.pos.y,
        width: win.size.width,
        height: win.size.height,
      }}
      minWidth={initSize.width}
      minHeight={initSize.height}
      bounds="parent"
      onDragStop={(_, data) => {
        setPos(props.appId, { x: data.x, y: data.y });
      }}
      onResizeStop={(_e, _direction, ref, _delta, position) => {
        setSize(props.appId, {
          width: parseInt(ref.style.width, 10),
          height: parseInt(ref.style.height, 10),
        });
        setPos(props.appId, {
          x: position.x,
          y: position.y,
        });
      }}
      onMouseDown={() => focusWindow(props.appId)}
      dragHandleClassName="window-drag-handle"
      style={{
        zIndex: win.zIndex,
        position: "absolute",
      }}
    >
      <div className="w-full h-full bg-slate-400 shadow-lg p-1 flex flex-col gap-2 text-sm cursor-default">
        <div className="window-drag-handle">{props.titlebar}</div>
        <div className="px-2">{props.menubar}</div>
        {props.type === "single" && (
          <div className="w-full h-full border-2 border-l-slate-300 border-t-slate-300 border-r-1 border-r-slate-600 border-b-1 border-b-slate-600 overflow-auto">
            {props.children}
          </div>
        )}
        {props.type === "tabs" && <WindowTabs tabs={props.children} />}
      </div>
    </Rnd>
  );
};

export default BlankWindow;
