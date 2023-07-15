import style from "./CardsList.module.css";
import React from "react";
import { FC } from "react";

type Props = {
  cardsList: Array<React.ReactNode>;
};

const CardsList: FC<Props> = ({ cardsList }) => {
  return <div className={style.productCardsListWrapper}>{...cardsList}</div>;
};

export default CardsList;
