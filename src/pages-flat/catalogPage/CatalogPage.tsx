import Header from "@/shared/header/Header";
import Layout from "@/shared/layout/Layout";
import { product } from "@/entities/product/model/product";

import ProductCard from "@/widgets/ProductCard/ui/ProductCard";
import { useMemo } from "react";
import CardsList from "@/widgets/CardsList/ui/CardsList";
import Subheader from "@/shared/subheader/Subheader";
import Link from "next/link";

const productsList = [{ ...product }, { ...product }, { ...product }];

const navLinksArray = [
  { title: "Catalog", route: "/catalog" },
  { title: "Auctions", route: "/auctions" },
];

const subheaderComponent = () => <Subheader navLinksArray={navLinksArray} />;

const headerComponent = () => <Header renderSubheader={subheaderComponent} />;

const Catalog = () => {
  const productCardsList = useMemo(
    () =>
      productsList.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      }),
    [productsList]
  );

  return (
    <Layout headerComponent={headerComponent}>
      <CardsList cardsList={productCardsList} />
    </Layout>
  );
};

export default Catalog;
