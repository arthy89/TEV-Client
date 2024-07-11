import { View, Text, FlatList, ScrollView } from "react-native";
import TripCard from "./TripCard";

const TripsList = ({ tripulaciones }) => {
  return (
    <ScrollView>
      <FlatList
        className="px-3 pb-2"
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={tripulaciones}
        keyExtractor={(trip) => trip._id}
        renderItem={({ item }) => <TripCard trip={item} />}
      />
    </ScrollView>
  );
};

export default TripsList;
