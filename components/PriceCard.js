import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PriceCard = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.designerDeCiliosParent, styles.parentFlexBox]}>
        <Text style={styles.r6300Typo}>Designer de Cilios</Text>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={styles.groupPosition} />
          <Text style={[styles.r6300, styles.r6300Typo]}>R$63,00</Text>
        </View>
      </View>
      <Text style={[styles.vocRecebe5544, styles.vocTypo]}>
        Você recebe 55,44
      </Text>
      <View style={[styles.depilaoParent, styles.parentFlexBox]}>
        <Text style={styles.depilao}>Depilação</Text>
        <View style={styles.rectangleLayout}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.r6300, styles.r6300Typo]}>R$70,00</Text>
        </View>
      </View>
      <Text style={[styles.vocRecebe6160, styles.vocTypo]}>
        Você recebe 61,60
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleLayout: {
    marginLeft: 20,
    height: 22,
    width: 68,
  },
  r6300Typo: {
    textAlign: "justify",
    color: Color.black,
    fontFamily: FontFamily.ralewayRegular,
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs,
  },
  vocTypo: {
    height: 21,
    width: 74,
    color: Color.gray_800,
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_5xs,
    left: 124,
    display: "flex",
    textAlign: "justify",
    lineHeight: 18,
    alignItems: "center",
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.gainsboro_300,
    height: 22,
    width: 68,
    left: 0,
    top: 0,
    position: "absolute",
  },
  r6300: {
    top: 2,
    left: 9,
    position: "absolute",
  },
  rectangleParent: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  designerDeCiliosParent: {
    left: 0,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  vocRecebe5544: {
    top: 20,
  },
  depilao: {
    width: 105,
    display: "flex",
    textAlign: "justify",
    color: Color.black,
    fontFamily: FontFamily.ralewayRegular,
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  groupItem: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  depilaoParent: {
    top: 61,
    left: 1,
  },
  vocRecebe6160: {
    top: 81,
  },
  frameParent: {
    top: 39,
    width: 198,
    height: 102,
    left: 1,
    position: "absolute",
  },
});

export default PriceCard;
