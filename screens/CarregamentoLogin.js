import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import { Color, Border } from "../GlobalStyles";

const CarregamentoLogin = () => {
  return (
    <View style={styles.carregamentoLogin}>
      <View style={styles.carregamento}>
        <View style={styles.carregamento1}>
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
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorPosition: {
    left: "50%",
    position: "absolute",
  },
  carregamento1: {
    backgroundColor: Color.colorsBackgroundsLight,
    width: 428,
    overflow: "hidden",
    height: 926,
  },
  carregamento: {
    top: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
  },
  zyroImage1Icon: {
    marginTop: -72,
    marginLeft: -116,
    top: "50%",
    width: 231,
    height: 144,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 15,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.blackViolet900,
    width: 134,
    height: 5,
  },
  carregamentoLogin: {
    flex: 1,
    width: "100%",
    height: 926,
  },
});

export default CarregamentoLogin;
