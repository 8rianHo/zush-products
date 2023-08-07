import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query GET_PRODUCTS($channel: String, $first: Int, $after: String) {
    products(channel: $channel, first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          name
          category {
            name
          }
          thumbnail {
            url
            alt
          }
          rating
          slug
          pricing {
            priceRange {
              start {
                currency
                gross {
                  amount
                }
              }
            }
            onSale
          }
        }
      }
    }
  }
`;

const GET_PRODUCT_BY_SLUG = gql`
  query GET_PRODUCT_BY_SLUG($slug: String, $channel: String) {
    product(slug: $slug, channel: $channel) {
      id
      name
      category {
        name
      }
      thumbnail {
        url
        alt
      }
      description
      rating
      pricing {
        priceRange {
          start {
            currency
            gross {
              amount
            }
          }
        }
        onSale
      }
      media {
        type
        alt
        id
        url
      }
    }
  }
`;

const productQueries = { GET_PRODUCTS, GET_PRODUCT_BY_SLUG };

export { productQueries };
