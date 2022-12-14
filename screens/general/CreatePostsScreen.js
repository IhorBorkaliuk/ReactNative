import { Text, View, Image } from "react-native";
import { useState } from "react";
import { Camera } from "expo-camera";
import { EvilIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function CreatePostsScreen({navigation}) {

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [camera, setCamera] = useState(null)
  const [photo, setPhoto] = useState(null)
  const makePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri)
  }

  const sendPhoto = () => {

  }

const keyboardHide = () => {
  setIsShowKeyboard(false);
  Keyboard.dismiss();
};

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Camera style={styles.camera} ref={setCamera}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.img}
              onPress={makePhoto}
            >
              <Image source={require("../../images/Photo.png")} />
            </TouchableOpacity>
          </Camera>
          <Text style={styles.text}>Завантажте фото</Text>
          <View
            style={{
              ...styles.form,
              marginTop: isShowKeyboard ? 0 : 48,
            }}
          >
            <TextInput
              style={styles.input}
              placeholder={"Назва..."}
              onFocus={() => {
                setIsShowKeyboard(true);
                console.log(isShowKeyboard);
              }}
            />
            <EvilIcons
              name="location"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TextInput
              onFocus={() => {
                setIsShowKeyboard(true);
                console.log(isShowKeyboard);
              }}
              style={styles.input}
              placeholder={"     Місцевість..."}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
            onPress={(keyboardHide, () => navigation.navigate("Posts", {photo}))}
          >
            <Text style={styles.btnTitle}>Опублікувати</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  camera: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginHorizontal: 16,
  },
  img: {
    marginTop: 220,
  },
  text: {
    marginTop: 8,
    marginHorizontal: 16,
    color: "#BDBDBD",
    fontFamily: "Roboto-Bold",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    marginBottom: 32,
    height: 50,
    fontFamily: "Roboto-Bold",
  },
  form: {
    marginTop: 48,
    marginHorizontal: 16,
  },
  icon: {
    position: "absolute",
    top: 97,
    left: -7,
    color: "#BDBDBD",
  },
  btnTitle: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Bold",
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#BDBDBD",
    alignItems: "center",
    height: 51,
    justifyContent: "center",
    borderRadius: 100,
    marginHorizontal: 16,
  },
});
