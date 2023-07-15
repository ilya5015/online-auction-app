import React from "react";
import style from "./Header.module.css";

type Props = {
  renderSubheader: Function;
};

const Header: React.FC<Props> = ({ renderSubheader }) => {
  return (
    <div className={style.headerWrapper}>
      <header className={style.header}>HEADER</header>
      {renderSubheader()}
    </div>
  );
};

export default Header;
