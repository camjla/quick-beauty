import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Selected2 from "./Selected2";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const HighlightedServicesContainer1 = () => {
  return (
    <View style={styles.serviosEmDestaque}>
      <Text style={styles.serviosEmDestaque1}>Serviços em destaque</Text>
      <View style={styles.carousel}>
        <View style={styles.image2Parent}>
          <Image
            style={[styles.image2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
          <Text style={[styles.maquiagem, styles.cabeloTypo]}>MAQUIAGEM</Text>
        </View>
        <View style={[styles.cabeloParent, styles.parentPosition]}>
          <Text style={[styles.cabelo, styles.cabeloTypo]}>CABELO</Text>
          <Image
            style={[styles.image1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
        </View>
        <View style={[styles.image4Parent, styles.parentPosition]}>
          <Image
            style={[styles.image4Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
          <Text style={[styles.esttica, styles.cabeloTypo]}>ESTÉTICA</Text>
        </View>
        <Selected2
          ellipse1={require("../assets/ellipse-1.png")}
          ellipse2={require("../assets/ellipse-2.png")}
          ellipse3={require("../assets/ellipse-1.png")}
          selected2Position="absolute"
          selected2Top={128}
          selected2Left={159}
        />
        <View style={styles.depilacaoParent}>
          <Text style={[styles.depilacao, styles.cabeloTypo]}>DEPILAÇÃO</Text>
          <Image
            style={[styles.image3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-3.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.serviosEmDestaqueChild, styles.serviosLayout]}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Image
        style={[styles.serviosEmDestaqueItem, styles.serviosLayout]}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 88,
    top: 0,
    width: 150,
    position: "absolute",
  },
  cabeloTypo: {
    height: 15,
    width: 96,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs,
    top: 92,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    lineHeight: 18,
    position: "absolute",
  },
  parentPosition: {
    left: 33,
    height: 107,
    top: 28,
    position: "absolute",
  },
  serviosLayout: {
    height: 25,
    width: 25,
    top: 81,
    position: "absolute",
  },
  serviosEmDestaque1: {
    marginTop: -93,
    marginLeft: -208.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0.5,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemiBold,
    width: 199,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    lineHeight: 18,
    position: "absolute",
  },
  image2Icon: {
    left: 451,
  },
  maquiagem: {
    left: 478,
  },
  image2Parent: {
    left: 31,
    width: 601,
    height: 107,
    top: 28,
    position: "absolute",
  },
  cabelo: {
    left: 319,
  },
  image1Icon: {
    left: 292,
  },
  cabeloParent: {
    width: 442,
  },
  image4Icon: {
    left: 133,
  },
  esttica: {
    left: 173,
  },
  image4Parent: {
    width: 283,
  },
  depilacao: {
    left: 27,
  },
  image3Icon: {
    left: 0,
  },
  depilacaoParent: {
    left: 6,
    backgroundColor: Color.white,
    width: 150,
    height: 107,
    top: 28,
    position: "absolute",
  },
  carousel: {
    top: 22,
    left: 13,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.lightgray,
    width: 391,
    height: 164,
    position: "absolute",
  },
  serviosEmDestaqueChild: {
    left: 392,
  },
  serviosEmDestaqueItem: {
    left: 3,
  },
  serviosEmDestaque: {
    top: 201,
    width: 417,
    height: 186,
    left: 0,
    position: "absolute",
  },
});

export default HighlightedServicesContainer1;
