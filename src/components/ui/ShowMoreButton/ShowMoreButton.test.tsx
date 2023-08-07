import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ShowMoreButton from ".";

const mockCallback = jest.fn();

describe("ShowMoreButton", () => {
  it("renders the Show more Button", async () => {
    render(
      <ShowMoreButton
        handleShowMoreCallback={mockCallback}
        isLoading={false}
        isError={false}
      />,
    );

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Show more");
  });

  it("triggers the callback when clicked", async () => {
    render(
      <ShowMoreButton
        handleShowMoreCallback={mockCallback}
        isLoading={false}
        isError={false}
      />,
    );

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(mockCallback).toHaveBeenCalled();
  });

  it("renders the Loading state", async () => {
    render(
      <ShowMoreButton
        handleShowMoreCallback={mockCallback}
        isLoading={true}
        isError={false}
      />,
    );

    const button = screen.queryByRole("button");

    expect(button).toBeNull();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders the Error state", async () => {
    render(
      <ShowMoreButton
        handleShowMoreCallback={mockCallback}
        isLoading={false}
        isError={true}
      />,
    );

    const button = screen.queryByRole("button");

    expect(button).toBeNull();
    expect(
      screen.getByText(
        "Unable to show you more products. Please refresh and try again.",
      ),
    ).toBeInTheDocument();
  });
});
