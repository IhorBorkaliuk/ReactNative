import React from "react";

import { View } from "react-native";
import { styles } from "./screens/auth/LoginScreen";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const OtherStack = createStackNavigator();
const MainStack = createBottomTabNavigator();

import LogScreen from "./screens/auth/LoginScreen";
import RegScreen from "./screens/auth/RegistrationScreen";
import Home from "./screens/general/Home";
import PostsScreen from "./screens/general/PostsScreen";
import CreatePostsScreen from "./screens/general/CreatePostsScreen";
import ProfileScreen from "./screens/general/ProfileScreen";
import CommentsScreen from "./screens/general/CommentsScreen";
import MapScreen from "./screens/general/MapScreen";



export const onRoute = (isLogedIn) => {
  if (!isLogedIn) {
    return (
      <View style={styles.container}>
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen
            name="Login"
            component={LogScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Registration"
            component={RegScreen}
            options={{ headerShown: false }}
          />
        </AuthStack.Navigator>
      </View>
    );
  }
  return (
    <>
      <MainStack.Navigator tabBarOptions={{ showLabel: false }}>
        <MainStack.Screen
          options={{
            headerShown: true,
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons name="grid-outline" size={size} color="#212121" />
            ),
            headerRight: () => (
              <MaterialIcons
                name="logout"
                size={26}
                color="#BDBDBD"
                style={styles.icon}
              />
            ),
          }}
          name="Posts"
          component={PostsScreen}
        ></MainStack.Screen>
        <MainStack.Screen
          options={{
            headerShown: true,
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons name="ios-add-circle" size={36} color="#212121" />
            ),
          }}
          name="Create"
          component={CreatePostsScreen}
        ></MainStack.Screen>
        <MainStack.Screen
          options={{
            headerShown: true,
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons name="person-outline" size={size} color="#212121" />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        ></MainStack.Screen>
      </MainStack.Navigator>
    </>
  );
};
