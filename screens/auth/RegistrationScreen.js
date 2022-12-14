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
  Dimensions,
} from "react-native";

import { useDispatch } from "react-redux";
import { authSignUpUser } from "../../redux/auth/authOperations";


export default function RegScreen({navigation}) {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [isOnFocusLogin, setIsOnFocusLogin] = useState(false);
    const [isOnFocusEmail, setIsOnFocusEmail] = useState(false);
    const [isOnFocusPW, setIsOnFocusPW] = useState(false);

  const dispatch = useDispatch()


  
  const initialeState = {
    login: '',
    email: '',
    password: '',

  }

  const [state, setState] = useState(initialeState)

    const [dimensions, setdimensions] = useState(
      Dimensions.get("window").width - 20 * 2
    );

    useEffect(() => {
      const onChange = () => {
        const width = Dimensions.get("window").width - 20 * 2;
        setdimensions(width);
      };
      Dimensions.addEventListener("change", onChange);
      return () => {
        Dimensions.removeEventListener("change", onChange);
      };
    }, []);


  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state)
    dispatch(authSignUpUser(state));
    setState(initialeState)
    };


  return (
    <TouchableWithoutFeedback onPress={handleSubmit}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../images/background.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 0 : 0,
                paddingBottom: isShowKeyboard ? 32 : 78,
              }}
            >
              <View style={styles.avatar}></View>
              <Image
                source={require("../../images/add.png")}
                style={styles.addImg}
              />
              <Text style={styles.title}>Реєстрація</Text>
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isOnFocusLogin ? "#FF6C00" : "#E8E8E8",
                    backgroundColor: isOnFocusLogin ? "#FFFFFF" : "#F6F6F6",
                    color: isOnFocusLogin ? "#212121" : "#BDBDBD",
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsOnFocusLogin(true);
                  }}
                  onBlur={() => setIsOnFocusLogin(false)}
                  placeholder={"Логін"}
                  placeholderTextColor={"#BDBDBD"}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                  value={state.login}
                />
              </View>
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isOnFocusEmail ? "#FF6C00" : "#E8E8E8",
                    backgroundColor: isOnFocusEmail ? "#FFFFFF" : "#F6F6F6",
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
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  keyboardType={"email-address"}
                  value={state.email}
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
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                  value={state.password}
                />
              </View>
              <View
                style={{
                  ...styles.regWrapper,
                  display: isShowKeyboard ? "none" : "block",
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={handleSubmit}
                >
                  <Text style={styles.btnTitle}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.loginText}>
                    Вже маєте аккаунт? Увійти
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  ...styles.textShow,
                  bottom: isShowKeyboard ? 64 : 239,
                }}
              >
                Показати
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
    fontFamily: "Roboto-Bold",
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "center",
    paddingTop: 92,
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,
    fontFamily: "Roboto-Bold",
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
    fontFamily: "Roboto-Bold",
    color: "#FFFFFF",
    fontSize: 16,
  },
  title: {
    fontFamily: "Roboto-Bold",
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
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    color: "#1B4371",
    marginRight: 6,
    fontSize: 16,
  },
  textShow: {
    fontFamily: "Roboto-Bold",
    position: "absolute",
    color: "#1B4371",
    marginRight: 6,
    fontSize: 16,
    right: 25,
  },
  avatar: {
    position: "absolute",
    top: -55,
    right: 140,
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addImg: {
    position: "absolute",
    top: 25,
    right: 129,
  },
});


