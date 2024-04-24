import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import downloadData from "../api/api.js";
import NextPage from "../hooks/next-page.js";

function MainPage() {
      const [number, setNumber] = useState("");
      const [msg, setMsg] = useState("");
      const navigation = useNavigation();

      const handleChange = (value) => {
            setNumber(value);
      };

      const handleSubmit = async () => {
            const countNumber = parseInt(number) || 0;
            if (countNumber > 0 && countNumber <= 100) {
                  setMsg("");
                  const data = await downloadData(countNumber);
                  NextPage(navigation, "User List", data);
            } else {
                  setMsg("Allowed values are only from 1 to 99.");
            }
            setNumber("");
      };

      return (
            <View style={styles.mainContainer}>
                  <View style={styles.child1Container}>
                        <Text style={styles.title}>FakeBook</Text>
                  </View>
                  <View style={styles.child2Container}>
                        <Text style={styles.welText}>Welcome to FakeBook</Text>
                        <TextInput
                              style={styles.input}
                              keyboardType="numeric"
                              value={number}
                              onChangeText={handleChange}
                              placeholder="Set the number of fake users"
                        />
                        <Button title="Dive In" onPress={handleSubmit} />
                        {msg ? <Text style={styles.warning}>{msg}</Text> : null}
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
      input: {
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 4,
            marginBottom: 20,
            padding: 10,
            width: "100%",
      },
      warning: {
            color: "red",
      },
      title: {
            color: "white",
            marginBottom: 20,
            fontSize: 20,
      },
      welText: {
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 30,
      },
});

export default MainPage;
