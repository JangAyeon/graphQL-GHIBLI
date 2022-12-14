import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  theme,
} from "@chakra-ui/react"
import FilmList from "./components/film/FilmList";

const apolloClient = new ApolloClient({
  uri:"http://localhost:4000/graphql",
  cache:new InMemoryCache()
});


export const App : React.FC= () => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
    <Box>
      <Text>GraphQL</Text>
      <FilmList/>
    </Box>
    </ChakraProvider>
  </ApolloProvider>
)
