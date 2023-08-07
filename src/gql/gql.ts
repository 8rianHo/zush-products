/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GET_PRODUCTS($channel: String, $first: Int, $after: String) {\n    products(channel: $channel, first: $first, after: $after) {\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n      edges {\n        node {\n          id\n          name\n          category {\n            name\n          }\n          thumbnail {\n            url\n            alt\n          }\n          rating\n          slug\n          pricing {\n            priceRange {\n              start {\n                currency\n                gross {\n                  amount\n                }\n              }\n            }\n            onSale\n          }\n        }\n      }\n    }\n  }\n": types.Get_ProductsDocument,
    "\n  query GET_PRODUCT_BY_SLUG($slug: String, $channel: String) {\n    product(slug: $slug, channel: $channel) {\n      id\n      name\n      category {\n        name\n      }\n      thumbnail {\n        url\n        alt\n      }\n      description\n      rating\n      pricing {\n        priceRange {\n          start {\n            currency\n            gross {\n              amount\n            }\n          }\n        }\n        onSale\n      }\n      media {\n        type\n        alt\n        id\n        url\n      }\n    }\n  }\n": types.Get_Product_By_SlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_PRODUCTS($channel: String, $first: Int, $after: String) {\n    products(channel: $channel, first: $first, after: $after) {\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n      edges {\n        node {\n          id\n          name\n          category {\n            name\n          }\n          thumbnail {\n            url\n            alt\n          }\n          rating\n          slug\n          pricing {\n            priceRange {\n              start {\n                currency\n                gross {\n                  amount\n                }\n              }\n            }\n            onSale\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_PRODUCTS($channel: String, $first: Int, $after: String) {\n    products(channel: $channel, first: $first, after: $after) {\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n      edges {\n        node {\n          id\n          name\n          category {\n            name\n          }\n          thumbnail {\n            url\n            alt\n          }\n          rating\n          slug\n          pricing {\n            priceRange {\n              start {\n                currency\n                gross {\n                  amount\n                }\n              }\n            }\n            onSale\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_PRODUCT_BY_SLUG($slug: String, $channel: String) {\n    product(slug: $slug, channel: $channel) {\n      id\n      name\n      category {\n        name\n      }\n      thumbnail {\n        url\n        alt\n      }\n      description\n      rating\n      pricing {\n        priceRange {\n          start {\n            currency\n            gross {\n              amount\n            }\n          }\n        }\n        onSale\n      }\n      media {\n        type\n        alt\n        id\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_PRODUCT_BY_SLUG($slug: String, $channel: String) {\n    product(slug: $slug, channel: $channel) {\n      id\n      name\n      category {\n        name\n      }\n      thumbnail {\n        url\n        alt\n      }\n      description\n      rating\n      pricing {\n        priceRange {\n          start {\n            currency\n            gross {\n              amount\n            }\n          }\n        }\n        onSale\n      }\n      media {\n        type\n        alt\n        id\n        url\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;