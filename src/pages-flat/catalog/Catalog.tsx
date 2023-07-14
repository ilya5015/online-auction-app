import Header from "@/shared/header/ui/Header";
import Layout from "@/shared/layout/ui/Layout";
import { product } from "@/shared/product/model/product";
import ProductCardsList from "@/widgets/productCardsList/ui/ProductCardsList";

const productsList = [{ ...product }, { ...product }, { ...product }];

export default function Catalog() {
  return (
    <Layout renderHeader={Header}>
      <ProductCardsList productsList={productsList} />
    </Layout>
  );
}
