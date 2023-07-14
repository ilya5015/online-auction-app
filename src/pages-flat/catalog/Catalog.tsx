import Header from "@/shared/header/ui/Header";
import Layout from "@/shared/layout/ui/Layout";
import { product } from "@/entities/product/model/product";
import ProductCardsList from "@/widgets/productCardsList/ui/ProductCardsList";
import ProductCard from "@/widgets/ProductCard/ui/ProductCard";

const productsList = [{ ...product }, { ...product }, { ...product }];

export default function Catalog() {
  const productCardsList = productsList.map((product, index) => {
    return <ProductCard product={product} key={index} />;
  });

  return (
    <Layout renderHeader={Header}>
      <ProductCardsList productCardsList={productCardsList} />
    </Layout>
  );
}
