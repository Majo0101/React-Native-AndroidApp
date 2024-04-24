import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

function DetailPage() {
      const navigation = useNavigation();
      const route = useRoute();
      const passedData = route.params;

      const onBackPage = () => {
            navigation.goBack();
      };

      return (
            <View style={styles.mainContainer}>
                  <TouchableOpacity
                        onPress={onBackPage}
                        style={styles.child1Container}
                  >
                        <Text style={styles.title}>Back</Text>
                  </TouchableOpacity>
                  <View style={styles.child2Container}>
                        <View style={styles.child3Container}>
                              <View style={styles.photoContainer}>
                                    <Image
                                          source={{ uri: passedData.imageXl }}
                                          style={styles.imageStyle}
                                    />
                              </View>
                              <View style={styles.textContainer}>
                                    <Text style={styles.textName}>
                                          {passedData.name}
                                    </Text>
                                    <Text>{passedData.address}</Text>
                                    <Text style={styles.textInfo}>
                                          {passedData.gender}
                                    </Text>
                                    <Text>{passedData.email}</Text>
                                    <Text>{passedData.number}</Text>
                                    <View style={styles.btnContainer}>
                                          <TouchableOpacity style={styles.btn}>
                                                <Text style={styles.textBtn}>
                                                      Message
                                                </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity style={styles.btn}>
                                                <Text style={styles.textBtn}>
                                                      Follow
                                                </Text>
                                          </TouchableOpacity>
                                    </View>
                              </View>
                        </View>
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
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            borderRadius: 20,
            height: "90%",
      },
      child3Container: {
            width: "100%",
            borderRadius: 20,
      },
      photoContainer: {
            width: "100%",
            aspectRatio: 1,
      },
      imageStyle: {
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
      },
      textContainer: {
            backgroundColor: "#f2f2f2",
            width: "100%",
            padding: 20,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
      },
      btnContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
      },
      btn: {
            width: "40%",
            alignItems: "center",
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#ccc",
      },
      title: {
            color: "white",
            marginBottom: 20,
            fontSize: 20,
      },
      textName: {
            fontWeight: "bold",
            fontSize: 18,
      },
      textInfo: {
            marginVertical: 10,
      },
      textBtn: {
            fontWeight: "bold",
      },
});

export default DetailPage;
