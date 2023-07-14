import { Product } from "@/entities/product/model/product";
import { FC } from "react";
import style from "./ProductCard.module.css";

type Props = {
  product: Product;
};

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className={style.productCardWrapper}>
      <div className={style.productCardSellerInfo}>{product.sellerId}</div>
      <span role="heading" className={style.productCardTitle}>
        {product.name}
      </span>
      <div className={style.productCardImg}>imgs</div>
      <div className={style.productCardInfo}>{product.info}</div>
    </div>
  );
};

export default ProductCard;
