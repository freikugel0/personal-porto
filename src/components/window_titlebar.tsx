import { Maximize, MinusIcon, XIcon } from "lucide-react";
import Button from "./button";

type WindowTitlebarProps = {
  title?: string;
  icon?: React.ReactNode;
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
  return (
    <div className="flex w-full items-center justify-between bg-slate-600 px-2 py-1 text-white">
      <div className="flex items-center gap-2">
        <div className="size-4">{icon}</div>
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
