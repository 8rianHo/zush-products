import lodash from "lodash";
import { GetServerSideProps } from "next";
import { FC, Fragment } from "react";

import client from "@/api/apollo";

import { globalConstants } from "@/lib/constants";

import NextHead from "@/components/next/Head";
import Home from "@/components/pages/Home";
import PageLayout from "@/components/ui/PageLayout";

import { productQueries } from "@/modules/Product/queries";

import {
  PageInfo,
  ProductCountableConnection,
  ProductCountableEdge,
} from "@/gql/graphql";

interface IRootProps {
  productData: ProductCountableConnection;
}

const Root: FC<IRootProps> = ({ productData }) => {
  const paginationInfo = lodash.get(productData, "pageInfo", {} as PageInfo);
  const products = lodash.get(
    productData,
    "edges",
    [] as ProductCountableEdge[],
  );

  return (
    <Fragment>
      <NextHead />
      <PageLayout>
        <Home products={products} paginationInfo={paginationInfo} />
      </PageLayout>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: productQueries.GET_PRODUCTS,
    variables: {
      channel: globalConstants.DEFAULT_COUNTRY,
      first: globalConstants.DEFAULT_QUERY_LIMIT,
    },
  });

  const products = lodash.get(data, "products", null);

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productData: products,
    },
  };
};

export default Root;
