import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: "https://hgm.amazingpestsolution.co.uk/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;