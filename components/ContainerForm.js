import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerForm = ({
  addressCode,
  addressLabel,
  iconParkSolidlocalTwoTop,
  iconParkSolidlocalTwoLeft,
}) => {
  const isabelaBorgesStyle = useMemo(() => {
    return {
      ...getStyleValue("top", iconParkSolidlocalTwoTop),
      ...getStyleValue("left", iconParkSolidlocalTwoLeft),
    };
  }, [iconParkSolidlocalTwoTop, iconParkSolidlocalTwoLeft]);

  return (
    <View style={[styles.isabelaBorges, isabelaBorgesStyle]}>
      <Image
        style={styles.iconParkSolidlocalTwo}
        contentFit="cover"
        source={addressCode}
      />
      <Text style={styles.ruaIsabelaBorges}>{addressLabel}</Text>
      <View style={styles.isabelaBorgesChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconParkSolidlocalTwo: {
    top: 0,
    left: 10,
    width: 27,
    height: 25,
    overflow: "hidden",
    position: "absolute",
  },
  ruaIsabelaBorges: {
    top: 7,
    left: 51,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    lineHeight: 18,
    fontFamily: FontFamily.ralewayRegular,
    color: Color.darkslategray_100,
    textAlign: "left",
    position: "absolute",
  },
  isabelaBorgesChild: {
    top: 40,
    left: 0,
    borderStyle: "solid",
    borderColor: "rgba(65, 64, 64, 0.25)",
    borderTopWidth: 1,
    width: 420,
    height: 1,
    position: "absolute",
  },
  isabelaBorges: {
    top: 441,
    left: 5,
    width: 419,
    height: 40,
    position: "absolute",
  },
});

export default ContainerForm;
