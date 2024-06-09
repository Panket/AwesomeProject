import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthStack from '../navigations/AuthStack';
import { FontAwesome } from "@expo/vector-icons";
import Home from "../screens/week6/Home";
import Ant from "../screens/week7/Ant";
import Brid from "../screens/week7/Bird";
import Cat from "../screens/week7/Cat";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "หน้าหลัก",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Ant"
        component={Ant}
        options={{
          tabBarLabel: "มด",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bug" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Brid"
        component={Brid}
        options={{
          tabBarLabel: "นก",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="twitter" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="cat"
        component={Cat}
        options={{
          tabBarLabel: "แมว",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="paw" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          tabBarLabel: "บัญชี",
          tabBarIcon: ({ color, size }) => (<FontAwesome name="user" color={color} size={size} />),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
