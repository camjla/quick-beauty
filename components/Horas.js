import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Horas = ({ onClose }) => {
  return (
    <View style={styles.horas}>
      <View style={styles.parent}>
        <Text style={styles.textTypo}>10:00</Text>
        <Text style={[styles.text1, styles.textTypo]}>10:30</Text>
        <Text style={[styles.text1, styles.textTypo]}>11:00</Text>
        <Text style={[styles.text1, styles.textTypo]}>11:30</Text>
        <Text style={[styles.text1, styles.textTypo]}>12:00</Text>
        <Text style={[styles.text1, styles.textTypo]}>12:30</Text>
        <Text style={[styles.text1, styles.textTypo]}>13:00</Text>
        <Text style={[styles.text1, styles.textTypo]}>13:30</Text>
        <Text style={[styles.text1, styles.textTypo]}>14:00</Text>
        <Text style={[styles.text1, styles.textTypo]}>14:30</Text>
        <Text style={[styles.text1, styles.textTypo]}>15:00</Text>
        <Text style={[styles.text1, styles.textTypo]}>15:30</Text>
        <Text style={[styles.text1, styles.textTypo]}>16:00</Text>
        <Text style={[styles.text1, styles.textTypo]}>16:30</Text>
        <Text style={[styles.text1, styles.textTypo]}>17:00</Text>
        <Text style={[styles.text1, styles.textTypo]}>17:30</Text>
        <Text style={[styles.text1, styles.textTypo]}>18:00</Text>
        <Text style={[styles.text1, styles.textTypo]}>18:30</Text>
        <Text style={[styles.text1, styles.textTypo]}>19:00</Text>
        <Text style={[styles.text1, styles.textTypo]}>19:30</Text>
        <Text style={[styles.text1, styles.textTypo]}>20:00</Text>
        <Text style={[styles.text1, styles.textTypo]}>20:30</Text>
        <Text style={[styles.text1, styles.textTypo]}>21:00</Text>
        <Text style={[styles.text1, styles.textTypo]}>21:30</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    color: Color.dimgray_100,
    fontFamily: FontFamily.ralewayRegular,
    fontSize: FontSize.size_7xl,
  },
  text1: {
    marginTop: 5,
  },
  parent: {
    position: "absolute",
    top: 4,
    left: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  horas: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#666",
    borderWidth: 1,
    width: 90,
    height: 203,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Horas;
