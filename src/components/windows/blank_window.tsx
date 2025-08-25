import { Rnd } from "react-rnd";
import WindowTabs, { type Tab } from "../window_tabs";
import { useEffect } from "react";
import useWindowStore, {
  defaultInitSize,
  type Size,
} from "../../stores/window.store";
import type { AppId } from "../../constant/registered_apps";
import useAppStore from "../../stores/app.store";

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
  initSize?: Size;
  minSize?: Size;
};

const BlankWindow = (props: BlankWindowProps) => {
  const { opened } = useAppStore();
  const { windows, initWindow, setPos, setSize, focusWindow } =
    useWindowStore();

  useEffect(() => {
    initWindow(props.appId, props.initSize);
  }, [initWindow, props.appId, props.initSize]);

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
      minWidth={props.minSize?.width ?? defaultInitSize.width}
      minHeight={props.minSize?.height ?? defaultInitSize.height}
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
        visibility: opened.includes(props.appId) ? "visible" : "hidden"
      }}
    >
      <div className="flex h-full w-full cursor-default flex-col gap-2 bg-slate-400 p-1 text-sm shadow-lg">
        <div className="window-drag-handle">{props.titlebar}</div>
        <div className="px-2">{props.menubar}</div>
        {props.type === "single" && (
          <div className="h-full w-full overflow-auto border-2 border-r-1 border-b-1 border-t-slate-300 border-r-slate-600 border-b-slate-600 border-l-slate-300">
            {props.children}
          </div>
        )}
        {props.type === "tabs" && <WindowTabs tabs={props.children} />}
      </div>
    </Rnd>
  );
};

export default BlankWindow;
