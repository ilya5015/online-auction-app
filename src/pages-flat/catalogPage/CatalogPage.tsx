import Header from "@/shared/header/Header";
import Layout from "@/shared/layout/Layout";
import { product } from "@/entities/product/model/product";

import ProductCard from "@/widgets/ProductCard/ui/ProductCard";
import { useMemo } from "react";
import CardsList from "@/widgets/CardsList/ui/CardsList";

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
    <Layout headerComponent={Header}>
      <CardsList cardsList={productCardsList} />
    </Layout>
  );
};

export default Catalog;
