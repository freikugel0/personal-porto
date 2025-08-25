import { registeredApps, type AppId } from "../../constant/registered_apps";
import useAppStore from "../../stores/app.store";

const Menu = () => {
  const appsId = Object.keys(registeredApps) as AppId[];
  const { setOpened, setStartMenu } = useAppStore();
  return (
    <div
      className="absolute bottom-10 left-0 flex min-h-6/12 w-52 gap-4 bg-slate-400 p-2 text-sm shadow-lg"
      style={{ zIndex: 9999999 }}
    >
      <div
        className="flex items-center bg-slate-600 px-4 text-sm text-white"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
      >
        freikugel
      </div>
      {/* Menu List */}
      <div className="flex flex-1 flex-col">
        {appsId.map((appid) => {
          const app = registeredApps[appid];
          return (
            <button
              type="button"
              key={appid}
              className="flex items-center gap-2 p-2 hover:cursor-pointer hover:bg-amber-200"
              onClick={() => {
                setOpened(appid);
                setStartMenu(false);
              }}
            >
              <div className="size-8">{app.icon}</div>
              <p>{app.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
