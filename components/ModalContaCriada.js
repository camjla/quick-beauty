import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ModalContaCriada = ({ onClose }) => {
  return (
    <View style={styles.modalContaCriada}>
      <View
        style={[styles.contaProfissionalCriadaComParent, styles.contaFlexBox]}
      >
        <Text style={[styles.contaProfissionalCriada, styles.contaFlexBox]}>
          CONTA PROFISSIONAL CRIADA COM SUCESSO
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector14.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contaFlexBox: {
    alignItems: "center",
    height: 25,
  },
  contaProfissionalCriada: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.3,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    color: Color.black,
    textAlign: "justify",
    display: "flex",
    width: 243,
  },
  vectorIcon: {
    width: 16,
    height: 13,
  },
  contaProfissionalCriadaComParent: {
    position: "absolute",
    top: 13,
    left: 10,
    width: 261,
    flexDirection: "row",
  },
  modalContaCriada: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 281,
    height: 50,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default ModalContaCriada;
