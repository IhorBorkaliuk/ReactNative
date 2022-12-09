import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from "react-native";

export default function RegScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../images/background.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 0 : 0,
              }}
            >
              <View style={styles.avatar}></View>

              <Text style={styles.title}>Реєстрація</Text>
              <View>
                <TextInput
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  placeholder={"Логін"}
                  placeholderTextColor={"#BDBDBD"}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  secureTextEntry={false}
                  onFocus={() => setIsShowKeyboard(true)}
                  placeholder={"Електронна адреса"}
                  placeholderTextColor={"#BDBDBD"}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  placeholder={"Пароль"}
                  placeholderTextColor={"#BDBDBD"}
                />
              </View>
              <View style={styles.regWrapper}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={keyboardHide}
                >
                  <Text style={styles.btnTitle}>Зареєструватися</Text>
                </TouchableOpacity>
                <View style={styles.loginWrapper}>
                  <Text style={styles.loginText}>Вже маєте аккаунт?</Text>
                  <Text style={styles.loginText}>Увійти</Text>
                </View>
              </View>
              <Text style={styles.textShow}>Показати</Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // justifyContent: "center",
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    paddingLeft: 16,
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    justifyContent: "center",
    paddingTop: 92,
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,
  },
  btn: {
    backgroundColor: "#FF6C00",
    alignItems: "center",
    height: 51,
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  btnTitle: {
    color: "#FFFFFF",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
    marginBottom: 33,
  },
  wrapper: {
    // fontSize: 30,
    // textAlign: "center",
    // color: "#212121",
    // marginBottom: 33,
  },
  regWrapper: {
    // fontSize: 30,
    // textAlign: "center",
    // color: "#212121",
    // marginBottom: 33,
  },
  loginWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#1B4371",
    marginRight: 6,
    fontSize: 16,
  },
  textShow: {
    position: "absolute",
    color: "#1B4371",
    marginRight: 6,
    fontSize: 16,
    bottom: 239,
    right: 25,
  },
    avatar: {
        position: "absolute",
        top: -55,
        right: 140,
      backgroundColor: "#F6F6F6",
      width: 120,
      height: 120,
  },
});
