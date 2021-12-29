import React from "react";
import ButtonNative from "./Button";

export default {
  title: "native/ButtonNative",
  compoent: ButtonNative,
};

const Template = (args) => <ButtonNative {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  color: "blue",
  title: "Primary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  title: "Long Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  color: "red",
  title: "Secondary Args",
};
