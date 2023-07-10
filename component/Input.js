import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function Input({ changeTextCallBack, modalVisible, hideModal }) {
  const [text, setText] = useState("");
  function checkButton(value) {
    console.log("Button works");
    setText(value);
  }

  return (
    <Modal
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      visible={modalVisible}
    >
      <View>
        <Image
          style={{
            height: 50,
            width: 50,
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={checkButton}
          value={text}
        />
        <Button
          title="confirm"
          onPress={() => {
            changeTextCallBack(text);
            hideModal();
          }}
        />
        <Button
          title="Cancel"
          onPress={() => {
            setText("");
            hideModal();
          }}
        />
        <Text>Input</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: "50%",
    borderWidth: 1,
    width: 200,
  },
});
