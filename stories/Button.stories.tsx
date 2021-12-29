// argsの型定義の参考: https://zenn.dev/sa2knight/articles/76ec91736d178b
import { Story } from "@storybook/react";
import { Props, ButtonNative } from "../src/components/Button";

export default {
  title: "native/ButtonNative",
  compoent: ButtonNative,
};

const Template: Story<Props> = (args) => <ButtonNative {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "ボタン",
};
