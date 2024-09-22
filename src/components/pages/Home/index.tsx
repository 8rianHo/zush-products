import { useLazyQuery } from "@apollo/client";
import { FC, useEffect, useState } from "react";

import { globalConstants } from "@/lib/constants";

import ProductCard from "@/components/ui/ProductCard";
import ProductGrid from "@/components/ui/ProductGrid";
import ShowMoreButton from "@/components/ui/ShowMoreButton";

import { productQueries } from "@/modules/Product/queries";

import { PageInfo, ProductCountableEdge } from "@/gql/graphql";

interface IHomeProps {
  products: ProductCountableEdge[];
  paginationInfo: PageInfo;
}

const Home: FC<IHomeProps> = ({ products, paginationInfo }) => {
  const [renderedProducts, setRenderedProducts] = useState<
    ProductCountableEdge[]
  >([] as ProductCountableEdge[]);
  const [renderedPaginationInfo, setRenderedPaginationInfo] =
    useState<PageInfo>({} as PageInfo);

  const [getProducts, { loading, error, data }] = useLazyQuery(
    productQueries.GET_PRODUCTS,
  );

  useEffect(() => {
    setRenderedPaginationInfo(paginationInfo);
  }, []);

  useEffect(() => {
    if (data) {
      setRenderedProducts((p) => [...p, ...(data?.products?.edges || [])]);

      setRenderedPaginationInfo({
        ...(data?.products?.pageInfo || {}),
      });
    }
  }, [data]);

  const handleShowMoreProducts = async () => {
    await getProducts({
      variables: {
        channel: globalConstants.DEFAULT_COUNTRY,
        first: globalConstants.DEFAULT_QUERY_LIMIT,
        after: renderedPaginationInfo.endCursor,
      },
    });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">All Products</h1>

      <ProductGrid>
        {products.map(({ node }) => (
          <ProductCard product={node} key={node.id} />
        ))}
        {renderedProducts.length
          ? renderedProducts.map(({ node }) => (
              <ProductCard product={node} key={node.id} />
            ))
          : null}
      </ProductGrid>

      {renderedPaginationInfo.hasNextPage && (
        <ShowMoreButton
          handleShowMoreCallback={handleShowMoreProducts}
          isLoading={loading}
          isError={!!error}
        />
      )}
    </div>
  );
};

export default Home;
