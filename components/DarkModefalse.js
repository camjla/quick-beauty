import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import VisibleNOIcon from "./VisibleNOIcon";
import ColorClearIcon from "./ColorClearIcon";
import { Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModefalse = ({
  notch,
  darkModefalsePosition,
  darkModefalseWidth,
  darkModefalseHeight,
  darkModefalseTop,
  darkModefalseRight,
  darkModefalseBottom,
  darkModefalseLeft,
}) => {
  const darkModefalseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", darkModefalsePosition),
      ...getStyleValue("width", darkModefalseWidth),
      ...getStyleValue("height", darkModefalseHeight),
      ...getStyleValue("top", darkModefalseTop),
      ...getStyleValue("right", darkModefalseRight),
      ...getStyleValue("bottom", darkModefalseBottom),
      ...getStyleValue("left", darkModefalseLeft),
    };
  }, [
    darkModefalsePosition,
    darkModefalseWidth,
    darkModefalseHeight,
    darkModefalseTop,
    darkModefalseRight,
    darkModefalseBottom,
    darkModefalseLeft,
  ]);

  return (
    <View style={[styles.darkModefalse, darkModefalseStyle]}>
      <VisibleNOIcon
        visibleNOIconVisibleNO={require("../assets/notch2.png")}
        visibleNOIconPosition="absolute"
        visibleNOIconWidth="unset"
        visibleNOIconTop={0}
        visibleNOIconRight={0}
        visibleNOIconLeft={0}
        visibleNOIconMaxWidth="100%"
        visibleNOIconOverflow="hidden"
      />
      <View style={styles.statusIcons}>
        <Image
          style={styles.networkSignalLight}
          contentFit="cover"
          source={require("../assets/network-signal-light.png")}
        />
        <Image
          style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
          contentFit="cover"
          source={require("../assets/wifi-signal--light.png")}
        />
        <Image
          style={[styles.batteryLight, styles.lightSpaceBlock]}
          contentFit="cover"
          source={require("../assets/battery--light.png")}
        />
      </View>
      <Image
        style={styles.indicatorIcon}
        contentFit="cover"
        source={require("../assets/indicator.png")}
      />
      <ColorClearIcon
        colorClearIconPosition="absolute"
        colorClearIconTop={12}
        colorClearIconLeft={21}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  darkModefalse: {
    backgroundColor: Color.colorsBackgroundsLight,
    width: 375,
    height: 44,
    overflow: "hidden",
  },
});

export default DarkModefalse;
