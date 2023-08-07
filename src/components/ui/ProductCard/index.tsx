import lodash from "lodash";
import Link from "next/link";
import { FC } from "react";

import { globalConstants } from "@/lib/constants";
import { utils } from "@/lib/utils";

import Image from "@/components/ui/Image";
import StarRating from "@/components/ui/StarRating";

import { Product } from "@/gql/graphql";

interface IProductCardProps {
  product: Product;
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const productRating = product?.rating as number;
  const productPrice = utils.getProductPrice(
    lodash.get(product, "pricing.priceRange.start.gross.amount", 0),
    lodash.get(product, "pricing.priceRange.start.currency"),
  );

  return (
    <Link
      key={product.id}
      href={`${globalConstants.ROUTE_PRODUCT}/${product.slug}`}
      className="group origin-top-left"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={product.thumbnail?.url}
          alt={product.thumbnail?.alt as string}
          className="h-full w-full object-cover object-center hover:rotate-6 group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex items-center">
        <StarRating rating={productRating} />
      </div>
      <h3 className="mt-1 text-lg font-semibold text-gray-900">
        {product.name}
      </h3>
      <p className="mt-1 text-xs text-gray-700">{product.category?.name}</p>
      <p className="mt-1 font-semibold text-gray-900">{productPrice}</p>
    </Link>
  );
};

export default ProductCard;
