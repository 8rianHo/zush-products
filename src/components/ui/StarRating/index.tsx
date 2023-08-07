import { FC, Fragment } from "react";

import { StarIcon } from "@heroicons/react/20/solid";

import { utils } from "@/lib/utils";

interface IStarRating {
  rating: number;
}

const StarRating: FC<IStarRating> = ({ rating }) => {
  return rating > 0 ? (
    <Fragment>
      {[0, 1, 2, 3, 4].map((star) => (
        <StarIcon
          key={star}
          className={utils.classNames(
            Math.floor(rating) > star ? "text-yellow-400" : "text-gray-200",
            "h-5 w-5 flex-shrink-0",
          )}
        />
      ))}
      <p className="mt-1 text-xs text-gray-700">({rating.toFixed(2)})</p>
    </Fragment>
  ) : (
    <span className="h-5 text-xs text-gray-500">No reviews</span>
  );
};

export default StarRating;
