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
  Image,
  Button,
} from "react-native";


export default function LogScreen() {
        const [isShowKeyboard, setIsShowKeyboard] = useState(false);
        const [isOnFocusLogin, setIsOnFocusLogin] = useState(false);
        const [isOnFocusEmail, setIsOnFocusEmail] = useState(false);
        const [isOnFocusPW, setIsOnFocusPW] = useState(false);

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
                      paddingBottom: isShowKeyboard ? 32 : 144,
                    }}
                  >
                    <Text style={styles.title}>Вхід</Text>
                    <View>
                      <TextInput
                        style={{
                          ...styles.input,
                          borderColor: isOnFocusEmail ? "#FF6C00" : "#E8E8E8",
                          backgroundColor: isOnFocusEmail
                            ? "#FFFFFF"
                            : "#F6F6F6",
                          color: isOnFocusEmail ? "#212121" : "#BDBDBD",
                        }}
                        secureTextEntry={false}
                        onFocus={() => {
                          setIsShowKeyboard(true);
                          setIsOnFocusEmail(true);
                        }}
                        onBlur={() => setIsOnFocusEmail(false)}
                        placeholder={"Електронна пошта"}
                        placeholderTextColor={"#BDBDBD"}
                      />
                    </View>
                    <View>
                      <TextInput
                        style={{
                          ...styles.input,
                          borderColor: isOnFocusPW ? "#FF6C00" : "#E8E8E8",
                          backgroundColor: isOnFocusPW ? "#FFFFFF" : "#F6F6F6",
                          color: isOnFocusPW ? "#212121" : "#BDBDBD",
                        }}
                        secureTextEntry={true}
                        onFocus={() => {
                          setIsShowKeyboard(true);
                          setIsOnFocusPW(true);
                        }}
                        onBlur={() => setIsOnFocusPW(false)}
                        placeholder={"Пароль"}
                        placeholderTextColor={"#BDBDBD"}
                      />
                    </View>
                    <Text
                      style={{
                        ...styles.textShow,
                        bottom: isShowKeyboard ? 64 : 305,
                      }}
                    >
                      Показати
                    </Text>
                    <View
                      style={{
                        ...styles.regWrapper,
                        display: isShowKeyboard ? "none" : "block",
                      }}
                    >
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.btn}
                        onPress={keyboardHide}
                      >
                        <Text style={styles.btnTitle}>Вхід</Text>
                      </TouchableOpacity>
                      <Text style={styles.loginText}>
                        Немає аккаунта? Зареєструватись
                      </Text>
                    </View>
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 32,
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
  regWrapper: {
    // fontSize: 30,
    // textAlign: "center",
    // color: "#212121",
    // marginBottom: 33,
  },
  loginText: {
    textAlign: "center",
    color: "#1B4371",
    marginRight: 6,
    fontSize: 16,
  },
  textShow: {
    position: "absolute",
    color: "#1B4371",
    marginRight: 6,
    fontSize: 16,
    right: 25,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
    marginBottom: 33,
  },
});