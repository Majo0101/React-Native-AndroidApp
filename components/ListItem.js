import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NextPage from "../hooks/next-page.js";

function ListItem({ imageXl, imageL, name, address, gender, email, number }) {
      const navigation = useNavigation();
      const data = {
            imageXl,
            imageL,
            name,
            address,
            gender,
            email,
            number,
      };

      const onNextPage = () => {
            NextPage(navigation, "User Detail", data);
      };

      return (
            <TouchableOpacity onPress={onNextPage} style={styles.mainContainer}>
                  <View style={styles.photoContainer}>
                        <Image
                              source={{ uri: imageL }}
                              style={styles.imageStyle}
                        />
                  </View>
                  <View style={styles.textContainer}>
                        <Text style={styles.nameStyle}>{name}</Text>
                        <Text style={styles.numberStyle}>{number}</Text>
                  </View>
            </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
      mainContainer: {
            backgroundColor: "#f2f2f2",
            borderRadius: 20,
            marginTop: 10,
            padding: 5,
            flexDirection: "row",
            alignItems: "center",
      },
      photoContainer: {
            width: "20%",
            aspectRatio: 1,
            borderRadius: 20,
            backgroundColor: "red",
            overflow: "hidden",
      },
      imageStyle: {
            width: "100%",
            height: "100%",
            borderRadius: 20,
      },
      textContainer: {
            width: "80%",
            paddingLeft: 10,
      },
      nameStyle: {
            color: "black",
            marginBottom: 4,
            fontWeight: "bold",
      },
      numberStyle: {
            color: "black",
      },
});

export default ListItem;
