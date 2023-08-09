import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FinalizarButtonContainer = ({
  buttonText,
  rectangleViewMarginTop,
  propMarginLeft,
  onBotoFinalizarPress,
}) => {
  const botoFinalizarStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", rectangleViewMarginTop),
    };
  }, [rectangleViewMarginTop]);

  const finalizarStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <Pressable
      style={[styles.botoFinalizar, styles.botoPosition, botoFinalizarStyle]}
      onPress={onBotoFinalizarPress}
    >
      <View style={[styles.botoFinalizarChild, styles.botoPosition]} />
      <View style={[styles.botoFinalizarChild, styles.botoPosition]} />
      <Text style={[styles.finalizar, finalizarStyle]}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  botoPosition: {
    height: 43,
    width: 148,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  botoFinalizarChild: {
    marginTop: -21.5,
    marginLeft: -74,
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightpink_100,
    borderStyle: "solid",
    borderColor: "#f498af",
    borderWidth: 1,
  },
  finalizar: {
    marginTop: -9.5,
    marginLeft: -28,
    fontSize: FontSize.size_smi,
    letterSpacing: 0.4,
    lineHeight: 18,
    fontWeight: "800",
    fontFamily: FontFamily.ralewayExtraBold,
    color: Color.gray_600,
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  botoFinalizar: {
    marginTop: 305.5,
    marginLeft: -73.5,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
});

export default FinalizarButtonContainer;
