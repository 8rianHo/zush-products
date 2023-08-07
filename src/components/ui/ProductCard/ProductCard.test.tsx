import { render, screen } from "@testing-library/react";

import ProductCard from ".";

import { globalConstants } from "@/lib/constants";

import { Product } from "@/gql/graphql";

const mockNode = {
  __typename: "Product",
  id: "UHJvZHVjdDoxMDI0",
  name: "Bat Art",
  category: { __typename: "Category", name: "Bath" },
  thumbnail: {
    __typename: "Image",
    url: "somethumbnail.png",
    alt: "Bat Art bath bomb, sparkly and black in the shape of a bat with its wings outstretched.",
  },
  rating: 4.70833333333333,
  slug: "bat-art-bath-bomb",
  pricing: {
    __typename: "ProductPricingInfo",
    priceRange: {
      __typename: "TaxedMoneyRange",
      start: {
        __typename: "TaxedMoney",
        currency: "GBP",
        gross: { __typename: "Money", amount: 5 },
      },
    },
    onSale: false,
  },
} as Product;

describe("ProductCard", () => {
  it("renders the click-through Link as /product/slug", async () => {
    render(<ProductCard product={mockNode} />);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute(
      "href",
      `${globalConstants.ROUTE_PRODUCT}/${mockNode.slug}`,
    );
  });

  it("renders the mock product rating with 2 dp inside brackets", async () => {
    render(<ProductCard product={mockNode} />);

    const rating = screen.getByText("4.71", { exact: false });

    expect(rating).toBeInTheDocument();
  });

  it("renders the mock product price with 2 dp and correct currency", async () => {
    render(<ProductCard product={mockNode} />);

    const price = screen.getByText("£5.00");

    expect(price).toBeInTheDocument();
  });
});
