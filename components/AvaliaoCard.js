import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AvaliaoCard = ({
  imageId,
  dimensions,
  personName,
  reviewText,
  propWidth,
  propTop,
  onBotoAvaliarPress,
}) => {
  const avaliaoIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const adoreiOResultadoStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={styles.avaliao}>
      <Image style={styles.avaliaoChild} contentFit="cover" source={imageId} />
      <View style={[styles.botoAvaliarParent, styles.groupChildLayout]}>
        <Pressable
          style={[styles.botoAvaliar, styles.botoLayout]}
          onPress={onBotoAvaliarPress}
        >
          <View style={[styles.botoAvaliarChild, styles.childBorder]} />
          <Text style={styles.clienteAvaliada}>Cliente Avaliada</Text>
        </Pressable>
        <View style={[styles.groupChild, styles.childBorder]} />
        <Image
          style={[styles.avaliaoIcon, avaliaoIconStyle]}
          contentFit="cover"
          source={dimensions}
        />
        <Text style={[styles.robertaFernandes, styles.robertaFernandesTypo]}>
          {personName}
        </Text>
        <Text
          style={[
            styles.adoreiOResultado,
            styles.robertaFernandesTypo,
            adoreiOResultadoStyle,
          ]}
        >
          {reviewText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 60,
    width: 285,
  },
  botoLayout: {
    height: 9,
    width: 66,
    left: "50%",
    top: "50%",
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  robertaFernandesTypo: {
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    display: "flex",
    position: "absolute",
    alignItems: "center",
  },
  avaliaoChild: {
    width: 58,
    height: 61,
  },
  botoAvaliarChild: {
    marginTop: -4.5,
    marginLeft: -33,
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkseagreen,
    borderColor: "#96c486",
    height: 9,
    width: 66,
    left: "50%",
    top: "50%",
  },
  clienteAvaliada: {
    marginTop: -2.5,
    marginLeft: -28,
    fontSize: FontSize.size_6xs,
    letterSpacing: 0.2,
    fontFamily: FontFamily.ralewayRegular,
    color: Color.gray_600,
    width: 61,
    height: 4,
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    left: "50%",
    top: "50%",
    position: "absolute",
    alignItems: "center",
  },
  botoAvaliar: {
    marginTop: 16.5,
    marginLeft: 74.5,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderColor: "#d9d9d9",
    height: 60,
    width: 285,
  },
  avaliaoIcon: {
    top: 5,
    left: 228,
    width: 54,
    height: 19,
    position: "absolute",
  },
  robertaFernandes: {
    top: 3,
    left: 10,
    fontSize: FontSize.size_smi,
    letterSpacing: 0.4,
    color: Color.gray_700,
    width: 145,
    height: 15,
    textAlign: "left",
    lineHeight: 18,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
  },
  adoreiOResultado: {
    top: 26,
    left: 7,
    fontSize: FontSize.size_4xs,
    lineHeight: 10,
    color: Color.dimgray_200,
    textAlign: "justify",
    width: 259,
    height: 19,
  },
  botoAvaliarParent: {
    marginLeft: 10,
  },
  avaliao: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
  },
});

export default AvaliaoCard;
