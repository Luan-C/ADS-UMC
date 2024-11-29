import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";  // Usando ícones
import CarRegistration from "../pages/carRegistration";

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#FFF",
                },
            }}
        >
            <Tab.Screen
                name="Cadastrar"
                component={CarRegistration}
                options={{
                    tabBarLabel: "Cadastrar",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="car" color={color} size={size} />
                    ),
                }}
            />

            {/* TODO: Aba de Estoque
            <Tab.Screen
                name="Estoque"
                component={Inventory}
                options={{
                    tabBarLabel: "Estoque",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="view-grid" color={color} size={size} />
                    ),
                }}
            /> */}
        </Tab.Navigator>

        
        // <Tab.Navigator
        //     screenOptions={{
        //         headerShown: false,
        //         tabBarStyle: {
        //             backgroundColor: "#FFF",
        //         },
        //     }}
        // >
        //     {/* Rota de Cadastro de Carro */}
        //     <Tab.Screen
        //         name="Cadastrar"
        //         component={CarRegistration}
        //         options={{
        //             tabBarLabel: "Cadastrar",
        //             tabBarIcon: ({ color, size }) => (
        //                 <MaterialCommunityIcons name="car" color={color} size={size} />
        //             ),
        //         }}
        //     />

        // </Tab.Navigator>
    );
}
