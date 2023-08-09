import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import PriceCard from "./PriceCard";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ServiceValueForm = () => {
  return (
    <View style={styles.valoresEServios}>
      <PriceCard />
      <PriceCard />
      <Text style={styles.determineOValor}>
        Determine o valor dos seus serviços
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  determineOValor: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.4,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    color: Color.black,
    textAlign: "justify",
    position: "absolute",
  },
  valoresEServios: {
    top: 550,
    left: 23,
    width: 214,
    height: 141,
    position: "absolute",
  },
});

export default ServiceValueForm;
