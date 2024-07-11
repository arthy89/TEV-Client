import { View, Text, ScrollView, FlatList } from "react-native";
import CatCard from "./CatCard";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import { GET_EVENTO_M } from "../../../graphql/evento/evento";

const CatList = ({ categorias }) => {
  return (
    <ScrollView>
      <FlatList
        className="px-3 pb-2"
        keyboardShouldPersistTaps="handled"
        data={categorias}
        keyExtractor={(cat) => cat._id}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        renderItem={({ item }) => <CatCard cat={item} />}
      />
    </ScrollView>
  );
};

export default CatList;
