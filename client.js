import { GraphQLClient } from "graphql-request";

console.log("GRAPHQL ENDPOINT:", process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);

export const graphcms = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  {
    headers: {},
  }
);
