import { create } from "zustand";
import type { AppId } from "../constant/registered_apps";

type Pos = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

type WindowMeta = {
  pos: Pos;
  size: Size;
  zIndex: number;
};

type WindowState = {
  windows: Record<string, WindowMeta>;
  focusedAppId: AppId | null;
  zIndexCounter: number;

  initWindow: (appId: AppId, size?: Size) => void;
  setPos: (appId: AppId, pos: Pos) => void;
  setSize: (appId: AppId, size: Size) => void;
  focusWindow: (appId: AppId) => void;
};

export const defaultInitSize = { width: 500, height: 400 };
const useWindowStore = create<WindowState>()((set, get) => ({
  windows: {},
  focusedAppId: null,
  zIndexCounter: 1,

  initWindow: (appId, size) => {
    const state = get();
    if (state.windows[appId]) return;

    const defaultPos = {
      x: window.innerWidth / 2 - (size?.width ?? defaultInitSize.width) / 2,
      y: window.innerHeight / 2 - (size?.height ?? defaultInitSize.height) / 2,
    };
    const newZ = state.zIndexCounter;

    set({
      windows: {
        ...state.windows,
        [appId]: { pos: defaultPos, size: size ?? defaultInitSize, zIndex: newZ },
      },
      focusedAppId: appId,
      zIndexCounter: newZ + 1,
    });
  },
  setPos: (appId, pos) => {
    const { windows } = get();
    if (!windows[appId]) return;
    set({
      windows: {
        ...windows,
        [appId]: {
          ...windows[appId],
          pos,
        },
      },
    });
  },
  setSize: (appId, size) => {
    const { windows } = get();
    if (!windows[appId]) return;
    set({
      windows: {
        ...windows,
        [appId]: {
          ...windows[appId],
          size,
        },
      },
    });
  },
  focusWindow: (appId) => {
    const state = get();

    const win = state.windows[appId];
    if (!win) return;

    const newZ = state.zIndexCounter;
    set({
      windows: {
        ...state.windows,
        [appId]: {
          ...win,
          zIndex: newZ,
        },
      },
      focusedAppId: appId,
      zIndexCounter: newZ + 1,
    });
  },
}));

export default useWindowStore;
