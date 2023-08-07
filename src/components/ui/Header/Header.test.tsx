import { render, screen } from "@testing-library/react";

import Header from ".";

describe("Header", () => {
  it("renders the Link back to home", async () => {
    render(<Header />);

    const link = screen.getByRole("link");

    expect(link).toHaveTextContent("ZUSH");
    expect(link).toHaveAttribute("href", "/");
  });
});
