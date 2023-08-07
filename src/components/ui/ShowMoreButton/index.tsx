import { FC } from "react";

interface IShowMoreButtonProps {
  handleShowMoreCallback: () => void;
  isLoading: boolean;
  isError: boolean;
}

const ShowMoreButton: FC<IShowMoreButtonProps> = ({
  handleShowMoreCallback,
  isLoading,
  isError,
}) => {
  return (
    <div className="flex justify-center">
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        "Unable to show you more products. Please refresh and try again."
      ) : (
        <button
          className="rounded-md bg-orange-50 px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-100"
          onClick={handleShowMoreCallback}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default ShowMoreButton;
