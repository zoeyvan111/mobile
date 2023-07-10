import { View, Text } from "react-native";
import React from "react";

const Header = ({ name }) => {
  return (
    <View>
      <Text>Welcome to {name}</Text>
      {/* <Text>Welcome to {props.name}</Text>
      {props.children} */}
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    color: "darkpurple",
  },
});
