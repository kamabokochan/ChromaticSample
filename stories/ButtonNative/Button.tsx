import React from "react";
import { Button, ScrollView, View } from "react-native";

const ButtonNative = (props) => {
  const { color, title, age, ...rest } = props;
  return (
    <ScrollView style={{ height: 1000 }}>
      <View style={{ width: 300 }}>
        <Button
          buttonStyle={{ width: 100 }}
          color={color}
          title={title}
          {...rest}
        />
      </View>
    </ScrollView>
  );
};
export default ButtonNative;
