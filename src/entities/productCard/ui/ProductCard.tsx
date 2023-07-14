import style from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={style.productCardWrapper}>
      <div className={style.productCardSellerInfo}>Seller info</div>
      <div className={style.productCardTitle}>Product title</div>
      <div className={style.productCardImg}>Product img</div>
      <div className={style.productCardInfo}>Info</div>
    </div>
  );
}
