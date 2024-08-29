import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";
import { isLoading } from "expo-font";

interface ICustomButtonProps {
  title: string;
  handlePress: VoidFunction;
  containerStyles: string;
  isLoading?: boolean;
  textStyles?: string;
}
const CustomButton: FC<ICustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  isLoading,
  textStyles,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text className={`text - primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
