import { useCallback } from "react";
import style from "./Layout.module.css";

export default function Layout({ renderHeader, children }) {
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
}
