import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const VisibleNOIcon = ({
  visibleNOIconVisibleNO,
  visibleNOIconPosition,
  visibleNOIconWidth,
  visibleNOIconTop,
  visibleNOIconRight,
  visibleNOIconLeft,
  visibleNOIconMaxWidth,
  visibleNOIconOverflow,
}) => {
  const visibleNOIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", visibleNOIconPosition),
      ...getStyleValue("width", visibleNOIconWidth),
      ...getStyleValue("top", visibleNOIconTop),
      ...getStyleValue("right", visibleNOIconRight),
      ...getStyleValue("left", visibleNOIconLeft),
      ...getStyleValue("maxWidth", visibleNOIconMaxWidth),
      ...getStyleValue("overflow", visibleNOIconOverflow),
    };
  }, [
    visibleNOIconPosition,
    visibleNOIconWidth,
    visibleNOIconTop,
    visibleNOIconRight,
    visibleNOIconLeft,
    visibleNOIconMaxWidth,
    visibleNOIconOverflow,
  ]);

  return (
    <Image
      style={[styles.visiblenoIcon, visibleNOIconStyle]}
      contentFit="cover"
      source={visibleNOIconVisibleNO}
    />
  );
};

const styles = StyleSheet.create({
  visiblenoIcon: {
    width: 250,
    height: 30,
  },
});

export default VisibleNOIcon;
