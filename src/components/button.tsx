import clsx from "clsx";

type ButtonProps = {
  variant?: "normal" | "invert";
  children?: React.ReactNode;
} & React.ComponentProps<"button">;

const Button = ({ variant = "normal", children, ...props }: ButtonProps) => {
  const btnClass =
    variant === "normal"
      ? "bg-slate-300 px-2 py-1 border border-l-slate-300 border-t-slate-300 border-b-black border-r-black"
      : "bg-slate-600 px-2 py-1 border border-r-slate-300 border-b-slate-300 border-t-black border-l-black";
  const textClass = variant === "normal" ? "text-black" : "text-gray-300";

  return (
    <button {...props} className={clsx(btnClass, props.className)}>
      <div className={!props.disabled ? textClass : "text-gray-400"}>
        {children}
      </div>
    </button>
  );
};

export default Button;
