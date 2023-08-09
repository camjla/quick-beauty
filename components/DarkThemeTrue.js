import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkThemeTrue = ({
  darkThemeTrueWidth,
  darkThemeTrueAlignSelf,
  homeIndicatorMarginLeft,
}) => {
  const darkThemeTrueStyle = useMemo(() => {
    return {
      ...getStyleValue("width", darkThemeTrueWidth),
      ...getStyleValue("alignSelf", darkThemeTrueAlignSelf),
    };
  }, [darkThemeTrueWidth, darkThemeTrueAlignSelf]);

  const homeIndicatorStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", homeIndicatorMarginLeft),
    };
  }, [homeIndicatorMarginLeft]);

  return (
    <View style={[styles.darkThemetrue, darkThemeTrueStyle]}>
      <View style={[styles.homeIndicator, homeIndicatorStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.blackViolet900,
    width: 134,
    height: 5,
  },
  darkThemetrue: {
    width: 359,
    height: 34,
  },
});

export default DarkThemeTrue;
