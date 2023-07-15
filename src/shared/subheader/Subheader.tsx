"use client";

import React, { useEffect } from "react";
import style from "./Subheader.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  navLinksArray: navLinksArray;
};

type navLink = {
  title: string;
  route: string;
};

type navLinksArray = Array<navLink>;

const Subheader: React.FC<Props> = ({ navLinksArray }) => {
  const pathname = usePathname();

  return (
    <header className={style.subheader}>
      {navLinksArray.map((navLink) => {
        console.log("pathname", pathname, navLinksArray);
        return (
          <span
            className={
              (style.navlink,
              pathname === navLink.route ? style.navlinkActive : "")
            }
          >
            <Link href={navLink.route}>{navLink.title}</Link>
          </span>
        );
      })}
    </header>
  );
};

export default Subheader;
