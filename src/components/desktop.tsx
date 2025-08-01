import React from "react";

type DesktopProps = {
  icons: React.ReactNode[];
} & React.ComponentProps<"div">;

const Desktop = ({ icons, ...props }: DesktopProps) => {
  return (
    <div className="w-full h-screen p-4 relative" {...props}>
      {icons.map((icon, i) => (
        <React.Fragment key={i}>{icon}</React.Fragment>
      ))}
    </div>
  );
};

export default Desktop;
