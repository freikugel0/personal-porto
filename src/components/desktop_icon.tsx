import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { Rnd } from "react-rnd";
import useAppStore from "../stores/app.store";
import type { AppId } from "../constant/registered_apps";

type DesktopIconProps = {
  icon: LucideIcon;
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
      <div
        className={`text-gray-100 text-shadow-lg font-semibold w-full h-full flex flex-col items-center justify-center cursor-default ${selected && "bg-gray-400/50"}`}
        onClick={() => setSelected((prev) => !prev)}
        onDoubleClick={() => setOpened(appid)}
      >
        <AppIcon size={35} />
        <p className="text-xs text-center mt-1">{label}</p>
      </div>
    </Rnd>
  );
};

export default DesktopIcon;
