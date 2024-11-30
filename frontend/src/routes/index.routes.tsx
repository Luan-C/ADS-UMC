import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Menu from "../pages/menu";
import CarRegistration from "../pages/carRegistration";

const Stack = createStackNavigator();

export default function Routes() {

    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "#FFF",
                },
            }}
        >

            <Stack.Screen
                name="Login"
                component={Login}
            />


            <Stack.Screen
                name="Signup"
                component={Signup}
            />


            <Stack.Screen
                name="Menu"
                component={Menu}
            />

            <Stack.Screen
                name="CarRegistration"
                component={CarRegistration}
            />

            {/* <Stack.Screen
                name="Inventory"
                component={Inventory}
            /> */}
        </Stack.Navigator>
    );
}
