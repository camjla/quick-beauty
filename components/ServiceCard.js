import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ServiceCard = () => {
  return (
    <View style={styles.servio}>
      <Image
        style={styles.avaliaoIcon}
        contentFit="cover"
        source={require("../assets/avaliao.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <View style={styles.servioChild} />
      <Image
        style={styles.servioItem}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <View style={styles.nomeEProfissoParent}>
        <View style={styles.nomeEProfisso}>
          <Text
            style={[styles.fernandaFerreiraCabelereira, styles.r6000FlexBox]}
          >
            Fernanda Ferreira (Cabelereira)
          </Text>
          <View style={[styles.nomeEProfissoChild, styles.r6000Position]} />
        </View>
        <View style={styles.servio1}>
          <Text style={[styles.corteDeCabelo, styles.r6000Position]}>
            Corte de cabelo e escova
          </Text>
          <View style={[styles.servioInner, styles.servioInnerPosition]} />
        </View>
        <View style={styles.preo}>
          <Text style={[styles.r6000, styles.r6000Position]}>R$ 60,00</Text>
          <View style={styles.preoChild} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  r6000FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_mini,
  },
  r6000Position: {
    top: 1,
    left: 0,
    position: "absolute",
  },
  servioInnerPosition: {
    left: 2,
    top: 0,
    position: "absolute",
  },
  avaliaoIcon: {
    top: 84,
    left: 295,
    width: 90,
    height: 32,
    position: "absolute",
  },
  vectorIcon: {
    top: 33,
    left: 386,
    width: 12,
    height: 18,
    position: "absolute",
  },
  servioChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 1,
    height: 113,
    left: 0,
    top: 0,
    width: 408,
    position: "absolute",
  },
  servioItem: {
    top: 16,
    left: 6,
    width: 75,
    height: 76,
    position: "absolute",
  },
  fernandaFerreiraCabelereira: {
    width: 239,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_mini,
    left: 2,
    top: 0,
    position: "absolute",
    height: 16,
  },
  nomeEProfissoChild: {
    width: 166,
    height: 5,
  },
  nomeEProfisso: {
    width: 241,
    height: 16,
  },
  corteDeCabelo: {
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    width: 193,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_mini,
    top: 1,
  },
  servioInner: {
    width: 244,
    height: 21,
  },
  servio1: {
    width: 246,
    marginTop: 5,
    height: 21,
  },
  r6000: {
    height: 10,
    width: 72,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
  },
  preoChild: {
    left: 3,
    width: 51,
    height: 22,
    top: 0,
    position: "absolute",
  },
  preo: {
    height: 22,
    width: 72,
    marginTop: 5,
  },
  nomeEProfissoParent: {
    top: 17,
    left: 83,
    width: 252,
    height: 78,
    justifyContent: "flex-end",
    position: "absolute",
  },
  servio: {
    top: 331,
    left: 11,
    height: 116,
    width: 408,
    position: "absolute",
  },
});

export default ServiceCard;
