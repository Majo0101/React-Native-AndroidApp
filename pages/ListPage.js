import React from "react";
import {
      View,
      Text,
      StyleSheet,
      ScrollView,
      TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ListItem from "../components/ListItem.js";

function ListPage() {
      const navigation = useNavigation();
      const route = useRoute();
      const passedData = route.params || [];

      const onBackPage = () => {
            navigation.goBack();
      };

      return (
            <View style={styles.mainContainer}>
                  <View style={styles.child1Container}>
                        <TouchableOpacity onPress={onBackPage}>
                              <Text style={styles.title}>Back</Text>
                        </TouchableOpacity>
                  </View>
                  <View style={styles.child2Container}>
                        <Text style={{ fontSize: 20, marginBottom: 10 }}>
                              People
                        </Text>
                        <ScrollView style={styles.listContainer}>
                              {passedData.map((item, index) => (
                                    <ListItem
                                          key={index}
                                          imageXl={item.picture.large}
                                          imageL={item.picture.medium}
                                          name={`${item.name.title}. ${item.name.first} ${item.name.last}`}
                                          address={`${item.location.city}, ${item.location.country}`}
                                          gender={`${item.gender}, ${item.dob.age}`}
                                          email={item.email}
                                          number={item.phone}
                                    />
                              ))}
                        </ScrollView>
                  </View>
            </View>
      );
}

const styles = StyleSheet.create({
      mainContainer: {
            flex: 1,
            backgroundColor: "#007bff",
            padding: 20,
            alignItems: "start",
            justifyContent: "center",
      },
      child1Container: {
            justifyContent: "center",
            alignItems: "start",
            height: "10%",
      },
      child2Container: {
            backgroundColor: "white",
            width: "100%",
            alignItems: "start",
            justifyContent: "center",
            padding: 20,
            borderRadius: 20,
            height: "90%",
      },
      listContainer: {
            width: "100%",
      },
      title: {
            color: "white",
            marginBottom: 20,
            fontSize: 20,
      },
});

export default ListPage;
