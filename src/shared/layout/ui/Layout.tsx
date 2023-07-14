import React, { FC, useCallback } from "react";
import style from "./Layout.module.css";

type Props = {
  renderHeader: Function;
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ renderHeader, children }) => {
  const HeaderComponent = useCallback(() => {
    return <>{renderHeader()}</>;
  }, [renderHeader]);

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
