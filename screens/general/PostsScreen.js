import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultScreenPosts } from "./DefaultScreenPosts";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreenPosts"
        component={DefaultScreenPosts}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
