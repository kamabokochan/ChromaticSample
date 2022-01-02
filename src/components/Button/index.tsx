import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export type Props = {
  color: string;
  text: string;
};

export const ButtonNative = (props: Props) => {
  const { text } = props;
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#555",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
});
