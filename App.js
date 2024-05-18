import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navigation from "./Navigation";

const client = new ApolloClient({
  uri: "https://tev-server.vercel.app/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Navigation />
  </ApolloProvider>
);

AppRegistry.registerComponent("TiemposEnVivoApp", () => App);

export default App;
