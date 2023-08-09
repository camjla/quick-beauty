import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import { Border, Color } from "../GlobalStyles";

const Carregamento = () => {
  return (
    <View style={styles.carregamento}>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={[styles.carregamento1, styles.framePosition]}>
          <View style={[styles.carregamento2, styles.frameLayout]}>
            <IPhoneStatusBarupper
              notch={require("../assets/notch4.png")}
              iPhoneStatusBarupperPosition="absolute"
              iPhoneStatusBarupperWidth={428}
              iPhoneStatusBarupperMarginTop="unset"
              iPhoneStatusBarupperTop={0}
              iPhoneStatusBarupperRight="unset"
              iPhoneStatusBarupperLeft={0}
              iPhoneStatusBarupperBackgroundColor="#924d4d"
            />
          </View>
        </View>
        <Image
          style={[styles.zyroImage1Icon, styles.homeIndicatorPosition]}
          contentFit="cover"
          source={require("../assets/zyroimage-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorPosition: {
    left: "50%",
    position: "absolute",
  },
  frameLayout: {
    overflow: "hidden",
    width: 428,
    height: 926,
  },
  framePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 15,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.blackViolet900,
    width: 134,
    height: 5,
  },
  carregamento2: {
    backgroundColor: Color.colorsBackgroundsLight,
  },
  carregamento1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  zyroImage1Icon: {
    marginTop: -72,
    marginLeft: -116,
    top: "50%",
    width: 231,
    height: 144,
  },
  frame: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  carregamento: {
    flex: 1,
    width: "100%",
    height: 926,
  },
});

export default Carregamento;
