import { GraphQLClient } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHS_URL, {
  headers: {},
});
