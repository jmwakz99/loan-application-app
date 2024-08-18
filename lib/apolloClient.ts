import { ApolloClient, InMemoryCache } from "@apollo/client";

import { API_BASE_URL } from "@/constants/urls";

const client = new ApolloClient({
  uri: `${API_BASE_URL}/graphql`,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;
