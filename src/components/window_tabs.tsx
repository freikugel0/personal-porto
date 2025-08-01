import clsx from "clsx";
import { useState } from "react";

export type Tab = {
  id: number;
  label: string;
  content: React.ReactNode;
};

type WindowTabsProps = {
  tabs: Tab[];
} & React.ComponentProps<"div">;

const WindowTabs = ({ tabs, className, ...props }: WindowTabsProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div
      className={clsx("flex flex-col h-full overflow-auto", className)}
      {...props}
    >
      <div className="flex items-end -mb-[2px] z-10">
        {tabs.map((tab, i) => {
          const isActive = i === tabIndex;
          return (
            <button
              key={i}
              onClick={() => setTabIndex(i)}
              className={clsx(
                "px-2 py-1 text-sm border-2 select-none",
                isActive
                  ? "bg-slate-400 border-t-slate-300 border-l-slate-300 border-r-slate-600 border-b-transparent"
                  : "bg-slate-400 border-t-slate-300 border-l-slate-300 border-r-slate-600 border-b-slate-300",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="w-full h-full p-2 border-2 border-l-slate-300 border-t-slate-300 border-r-1 border-r-slate-600 border-b-1 border-b-slate-600 cursor-default flex-1 overflow-auto">
        {tabs[tabIndex].content}
      </div>
    </div>
  );
};

export default WindowTabs;
