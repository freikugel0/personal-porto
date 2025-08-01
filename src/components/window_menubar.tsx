const WindowMenuBar = ({ items }: { items: React.ReactNode[] }) => {
  return (
    <div className="flex gap-4 items-center">
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
};

export default WindowMenuBar;
