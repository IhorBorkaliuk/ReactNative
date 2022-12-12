import React from "react";

import { View } from "react-native";
import { styles } from "./screens/auth/LoginScreen";
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const MainStack = createBottomTabNavigator();

import LogScreen from "./screens/auth/LoginScreen";
import RegScreen from "./screens/auth/RegistrationScreen";
import Home from "./screens/general/Home";
import PostsScreen from "./screens/general/PostsScreen";
import CreatePostsScreen from "./screens/general/CreatePostsScreen";
import ProfileScreen from "./screens/general/ProfileScreen";



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
          <AuthStack.Screen name="Home" component={Home} />
        </AuthStack.Navigator>
      </View>
    );
  }
  return (
    <MainStack.Navigator tabBarOptions={{ showLabel: false }}>
      <MainStack.Screen
        options={{
          tapBarIcon: ({ focused, size, color }) => (
            <Ionicons name="grid-outline" size={size} color="color" />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      ></MainStack.Screen>
      <MainStack.Screen
        name="Create"
        component={CreatePostsScreen}
      ></MainStack.Screen>
      <MainStack.Screen
        name="Profile"
        component={ProfileScreen}
      ></MainStack.Screen>
    </MainStack.Navigator>
  );
};