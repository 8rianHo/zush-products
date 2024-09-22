import { GetServerSideProps } from "next";
import { FC, Fragment } from "react";

import client from "@/api/apollo";

import { globalConstants } from "@/lib/constants";

import NextHead from "@/components/next/Head";
import ProductDetails from "@/components/pages/ProductDetails";
import PageLayout from "@/components/ui/PageLayout";

import { productQueries } from "@/modules/Product/queries";

import { Product } from "@/gql/graphql";

interface IProductDetailsProps {
  productDetailsData: Product;
}

const ProductDetailsPage: FC<IProductDetailsProps> = ({
  productDetailsData,
}) => {
  return (
    <Fragment>
      <NextHead title={`${productDetailsData.name} | ZUSH`} />
      <PageLayout>
        <ProductDetails product={productDetailsData} />
      </PageLayout>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await client.query({
    query: productQueries.GET_PRODUCT_BY_SLUG,
    variables: {
      channel: globalConstants.DEFAULT_COUNTRY,
      slug: params?.slug,
    },
  });

  const product = data?.product || null;

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      productDetailsData: product,
    },
  };
};

export default ProductDetailsPage;
