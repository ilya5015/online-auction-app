import React, { FC, useCallback } from "react";
import style from "./Layout.module.css";

type Props = {
  headerComponent: Function;
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ headerComponent, children }) => {
  const HeaderComponent = useCallback(() => {
    return <>{headerComponent()}</>;
  }, [headerComponent]);

  return (
    <div className={style.mainLayout}>
      <div className={style.mainLayoutHeader}>
        <HeaderComponent />
      </div>
      <div className={style.contentWrapper}>{children}</div>
    </div>
  );
};

export default Layout;
