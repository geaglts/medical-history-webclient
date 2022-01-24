export interface LayoutProps {
  center?: boolean;
  children: JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
  const classNames = ["layout"];

  if (props.center) {
    classNames.push("center");
  }

  return (
    <div className={classNames.join(" ")}>
      {props.children}
      <style jsx>{`
        .layout {
          overflow: hidden;
          height: 100vh;
          width: 100%;
          background-color: #101110;
        }

        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Layout;
