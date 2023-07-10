import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import Header from "./component/Header";
import { useState } from "react";
import Input from "./component/Input";
export default function App() {
  const [inputText, setInputText] = useState("");
  const appName = "CS 5220";
  const [modalVisible, setModalVisible] = useState(false);

  // this function is called when the text changed.
  // inside it update the state variable inputText.
  function handleChangeText(ChangeText) {
    console.log(ChangeText);
    setInputText(ChangeText);
    setModalVisible(false);
  }
  function hideModal() {
    setModalVisible(false);
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!</Text>

      <Header name={appName} />
      <Button
        title="add a input"
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <Input
        changeTextCallBack={handleChangeText}
        modalVisible={modalVisible}
        hideModal={hideModal}
      />
      <Text>{inputText}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    width: 200,
  },
});
