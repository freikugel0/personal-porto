import { registeredApps, type AppId } from "../../constant/registered_apps";
import useAppStore from "../../stores/app.store";

const Menu = () => {
  const appsId = Object.keys(registeredApps) as AppId[];
  const { setOpened, setStartMenu } = useAppStore();
  return (
    <div
      className="bg-slate-400 shadow-lg w-52 min-h-6/12 p-2 bottom-10 left-0 absolute flex gap-4 text-sm"
      style={{ zIndex: 9999999 }}
    >
      <div
        className="text-sm text-white bg-slate-600 flex items-center px-4"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
      >
        freikugel
      </div>
      {/* Menu List */}
      <div className="flex-1 flex flex-col gap-2">
        {appsId.map((appid, i) => {
          const app = registeredApps[appid];
          return (
            <div
              key={i}
              className="flex items-center gap-2 hover:bg-amber-200 hover:cursor-pointer p-2"
              onClick={() => {
                setOpened(appid);
                setStartMenu(false);
              }}
            >
              {<app.icon size={18} />}
              <p>{app.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
