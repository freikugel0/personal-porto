import { Maximize, MinusIcon, XIcon, type LucideIcon } from "lucide-react";
import Button from "./button";

type WindowTitlebarProps = {
  title?: string;
  icon?: LucideIcon;
  action?: {
    minimize?: {
      enabled: boolean;
      onClick: () => void;
    };
    maximize?: {
      enabled: boolean;
      onClick: () => void;
    };
    close?: {
      enabled: boolean;
      onClick: () => void;
    };
  };
};

const WindowTitlebar = ({ title, icon, action = {} }: WindowTitlebarProps) => {
  const AppIcon = icon;

  return (
    <div className="flex justify-between items-center w-full bg-slate-600 text-white px-2 py-1">
      <div className="flex gap-2 items-center">
        {AppIcon && <AppIcon size={15} />}
        <h1>{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        {action.minimize?.enabled && (
          <Button onClick={() => action.minimize?.onClick()}>
            <MinusIcon size={10} />
          </Button>
        )}
        {action.maximize?.enabled && (
          <Button onClick={() => action.maximize?.onClick()}>
            <Maximize size={10} />
          </Button>
        )}
        {action.close?.enabled && (
          <Button onClick={() => action.close?.onClick()}>
            <XIcon size={10} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default WindowTitlebar;
