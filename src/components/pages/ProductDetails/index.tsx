import { FC, Fragment } from "react";

import { utils } from "@/lib/utils";

import Image from "@/components/ui/Image";
import StarRating from "@/components/ui/StarRating";

import { Product } from "@/gql/graphql";

interface IProductDetailsProps {
  product: Product;
}

const ProductDetails: FC<IProductDetailsProps> = ({ product }) => {
  const productPrice = utils.getProductPrice(
    product?.pricing?.priceRange?.start?.gross?.amount || 0,
    product?.pricing?.priceRange?.start?.gross?.currency,
  );

  const productDescriptionBlocks = utils.parseJsonDesc(
    JSON.parse(product.description),
  );

  return (
    <Fragment>
      <div className="pb-16 lg:pt-16">
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          <div className="space-y-4 lg:col-span-3 lg:row-end-1">
            {product.media?.map((m) => {
              return (
                <div key={m.id} className="bg-orange-50">
                  <Image src={m.url} alt={m.alt} />
                </div>
              );
            })}
          </div>

          <div className="mt-14 space-y-4 sm:mt-16 lg:col-span-4 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>

                <h3 className="text-gray-500">{product.category?.name}</h3>
              </div>

              <div>
                <div className="flex items-center">
                  <StarRating rating={product.rating as number} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {productDescriptionBlocks?.map((desc) => (
                <div
                  className="text-gray-900"
                  key={desc.id}
                  dangerouslySetInnerHTML={{ __html: desc.block }}
                />
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                {productPrice}
              </h3>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => alert(`added ${product.name}`)}
                className="flex w-full items-center justify-center rounded-md bg-orange-50 px-3.5 py-2.5 text-lg font-semibold text-orange-600 shadow-sm hover:bg-orange-100"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
