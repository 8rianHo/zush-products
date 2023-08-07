import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://unicorn-staging.eu.saleor.cloud/graphql/",
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        enumsAsTypes: true,
        futureProofEnums: true,
      },
    },
  },
};

export default config;
