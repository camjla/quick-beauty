import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import DarkModefalse from "./DarkModefalse";
import { Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IPhoneStatusBarupper = ({
  notch,
  iPhoneStatusBarupperPosition,
  iPhoneStatusBarupperWidth,
  iPhoneStatusBarupperMarginTop,
  iPhoneStatusBarupperTop,
  iPhoneStatusBarupperRight,
  iPhoneStatusBarupperLeft,
  iPhoneStatusBarupperBackgroundColor,
}) => {
  const iPhoneStatusBarupperStyle = useMemo(() => {
    return {
      ...getStyleValue("position", iPhoneStatusBarupperPosition),
      ...getStyleValue("width", iPhoneStatusBarupperWidth),
      ...getStyleValue("marginTop", iPhoneStatusBarupperMarginTop),
      ...getStyleValue("top", iPhoneStatusBarupperTop),
      ...getStyleValue("right", iPhoneStatusBarupperRight),
      ...getStyleValue("left", iPhoneStatusBarupperLeft),
      ...getStyleValue("backgroundColor", iPhoneStatusBarupperBackgroundColor),
    };
  }, [
    iPhoneStatusBarupperPosition,
    iPhoneStatusBarupperWidth,
    iPhoneStatusBarupperMarginTop,
    iPhoneStatusBarupperTop,
    iPhoneStatusBarupperRight,
    iPhoneStatusBarupperLeft,
    iPhoneStatusBarupperBackgroundColor,
  ]);

  return (
    <View style={[styles.iphoneStatusBarupper, iPhoneStatusBarupperStyle]}>
      <DarkModefalse
        notch={require("../assets/notch1.png")}
        darkModefalsePosition="absolute"
        darkModefalseWidth="100%"
        darkModefalseHeight="100%"
        darkModefalseTop="0%"
        darkModefalseRight="0%"
        darkModefalseBottom="0%"
        darkModefalseLeft="0%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphoneStatusBarupper: {
    backgroundColor: Color.indianred,
    width: 409,
    height: 44,
  },
});

export default IPhoneStatusBarupper;
