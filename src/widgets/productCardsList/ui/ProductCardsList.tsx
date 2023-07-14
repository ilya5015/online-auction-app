import ProductCard from "@/entities/productCard/ui/ProductCard";
import style from "./ProductCardsList.module.css";

export default function ProductCardsList({ productsList = [] }) {
  return (
    <div className={style.productCardsListWrapper}>
      {productsList.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
