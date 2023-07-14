import style from "./ProductCardsList.module.css";
import React from "react";
import { FC } from "react";

type Props = {
  productCardsList: Array<React.ReactNode>;
};

const ProductCardsList: FC<Props> = ({ productCardsList }) => {
  return (
    <div className={style.productCardsListWrapper}>{...productCardsList}</div>
  );
};

export default ProductCardsList;
