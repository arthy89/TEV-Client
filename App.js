import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navigation from "./Navigation";
// import dotevn from "dotenv";

// dotevn.config();
const client = new ApolloClient({
  // uri: "https://tev-server.vercel.app/graphql",
  uri: "https://tev-server-co6hoqfif-arhyels-projects.vercel.app/graphql",
  // uri: "http://192.168.1.48:4000/graphql",
  // uri: process.env.SERVER_URI,
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Navigation />
  </ApolloProvider>
);

AppRegistry.registerComponent("TiemposEnVivoApp", () => App);

export default App;
