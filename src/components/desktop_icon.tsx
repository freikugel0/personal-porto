import { useState } from "react";
import { Rnd } from "react-rnd";
import useAppStore from "../stores/app.store";
import type { AppId } from "../constant/registered_apps";

type DesktopIconProps = {
  icon: React.ReactNode;
  label: string;
  pos_x?: number;
  pos_y?: number;
  appid: AppId;
};

const DesktopIcon = ({
  icon,
  label,
  pos_x = 0,
  pos_y = 0,
  appid,
}: DesktopIconProps) => {
  const { setOpened } = useAppStore();
  const [selected, setSelected] = useState(false);
  const AppIcon = icon;

  return (
    <Rnd
      default={{
        x: pos_x,
        y: pos_y,
        width: 72,
        height: 72,
      }}
      bounds="parent"
      enableResizing={{
        top: false,
        right: false,
        bottom: false,
        left: false,
      }}
    >
      <button
        type="button"
        className={`flex h-full w-full gap-2 cursor-default flex-col items-center justify-center font-semibold text-gray-100 text-shadow-lg ${selected && "bg-gray-400/50"}`}
        onClick={() => setSelected((prev) => !prev)}
        onDoubleClick={() => setOpened(appid)}
      >
        <div className="size-14">{AppIcon}</div>
        <p className="mt-1 text-center text-xs">{label}</p>
      </button>
    </Rnd>
  );
};

export default DesktopIcon;
