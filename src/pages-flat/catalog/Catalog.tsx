import Header from "@/shared/header/ui/Header";
import Layout from "@/shared/layout/ui/Layout";
import { product } from "@/entities/product/model/product";
import ProductCardsList from "@/widgets/productCardsList/ui/ProductCardsList";
import ProductCard from "@/widgets/ProductCard/ui/ProductCard";
import { useMemo } from "react";

const productsList = [{ ...product }, { ...product }, { ...product }];

const Catalog = () => {
  const productCardsList = useMemo(
    () =>
      productsList.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      }),
    [productsList]
  );

  return (
    <Layout renderHeader={Header}>
      <ProductCardsList productCardsList={productCardsList} />
    </Layout>
  );
};

export default Catalog;
