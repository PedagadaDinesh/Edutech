const Collapse = ({
    open,
    children,
  }: {
    open: boolean;
    children?: any;
  }) => {
    return (
      <div
        className={`grid transition-all duration-300 ease-linear ${
          open ? "grid-rows-[1fr] " : "grid-rows-[0fr] "
        }`}
      >
        <div className="overflow-hidden">
          <div>{children}</div>
        </div>
      </div>
    );
  };
  
  export default Collapse;
  