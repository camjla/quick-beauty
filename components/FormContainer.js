import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({
  imageDimensions,
  propTop,
  propLeft,
  onFramePressablePress,
}) => {
  const ultimoServioStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.ultimoServio, styles.ultimoLayout, ultimoServioStyle]}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <View style={[styles.ultimoServioChild, styles.botoShadowBox]} />
      <Image
        style={styles.ultimoServioItem}
        contentFit="cover"
        source={imageDimensions}
      />
      <View style={styles.nomeEProfissoParent}>
        <View style={styles.nomeEProfisso}>
          <Text
            style={[
              styles.lucianaSouzaMaquiadora,
              styles.maquiagemBsicaFestaFlexBox,
            ]}
          >
            Luciana Souza (Maquiadora)
          </Text>
          <View style={styles.nomeEProfissoChild} />
        </View>
        <View style={[styles.servio, styles.servioLayout]}>
          <Text style={[styles.maquiagemBsicaFesta, styles.r9000Position]}>
            Maquiagem Básica- Festa
          </Text>
          <View style={[styles.servioChild, styles.servioLayout]} />
        </View>
        <View style={styles.preo}>
          <Text style={[styles.r9000, styles.r9000FlexBox]}>R$ 90,00</Text>
          <View style={[styles.preoChild, styles.childPosition]} />
        </View>
      </View>
      <View style={[styles.boto, styles.botoLayout]}>
        <Pressable
          style={[styles.botoChild, styles.botoLayout]}
          onPress={onFramePressablePress}
        />
        <Text style={[styles.avaliar, styles.r9000FlexBox]}>Avaliar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ultimoLayout: {
    height: 113,
    width: 408,
    position: "absolute",
  },
  botoShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  maquiagemBsicaFestaFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  servioLayout: {
    height: 21,
    width: 214,
  },
  r9000Position: {
    left: 3,
    top: 1,
    color: Color.black,
    fontSize: FontSize.size_mini,
  },
  r9000FlexBox: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    lineHeight: 18,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  botoLayout: {
    height: 23,
    width: 83,
    position: "absolute",
  },
  vectorIcon: {
    top: 33,
    left: 386,
    width: 12,
    height: 18,
    position: "absolute",
  },
  ultimoServioChild: {
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 1,
    left: 0,
    top: 0,
    height: 113,
    width: 408,
    position: "absolute",
  },
  ultimoServioItem: {
    top: 16,
    left: 6,
    height: 76,
    width: 75,
    position: "absolute",
  },
  lucianaSouzaMaquiadora: {
    left: 2,
    width: 247,
    color: Color.black,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    letterSpacing: 0.5,
    height: 16,
    top: 0,
  },
  nomeEProfissoChild: {
    width: 172,
    height: 5,
    top: 1,
    left: 0,
    position: "absolute",
  },
  nomeEProfisso: {
    width: 249,
    height: 16,
  },
  maquiagemBsicaFesta: {
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    width: 194,
    height: 17,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
    left: 3,
  },
  servioChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  servio: {
    marginTop: 5,
  },
  r9000: {
    width: 72,
    height: 10,
    justifyContent: "center",
    left: 3,
    top: 1,
    color: Color.black,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  preoChild: {
    width: 51,
    height: 22,
    position: "absolute",
  },
  preo: {
    height: 22,
    marginTop: 5,
    width: 75,
  },
  nomeEProfissoParent: {
    top: 23,
    left: 90,
    width: 275,
    height: 67,
    justifyContent: "flex-end",
    position: "absolute",
  },
  botoChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.darkseagreen,
    overflow: "hidden",
    justifyContent: "center",
    left: 0,
    top: 0,
  },
  avaliar: {
    left: 19,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.4,
    color: Color.darkslategray_100,
    width: 47,
    justifyContent: "center",
    height: 22,
    textAlign: "center",
    top: 0,
  },
  boto: {
    top: 78,
    left: 300,
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  ultimoServio: {
    top: 187,
    left: 13,
  },
});

export default FormContainer;
