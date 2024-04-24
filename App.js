import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./pages/MainPage.js";
import ListPage from "./pages/ListPage.js";
import DetailPage from "./pages/DetailPage.js";

const Stack = createNativeStackNavigator();

function App() {
      return (
            <NavigationContainer>
                  <Stack.Navigator>
                        <Stack.Screen name="Welcome" component={MainPage} />
                        <Stack.Screen name="User List" component={ListPage} />
                        <Stack.Screen
                              name="User Detail"
                              component={DetailPage}
                        />
                  </Stack.Navigator>
            </NavigationContainer>
      );
}

export default App;
