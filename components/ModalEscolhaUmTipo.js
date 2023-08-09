import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ModalEscolhaUmTipo = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.modalEscolhaUmTipo}>
      <Text style={[styles.anteriores, styles.anterioresPosition]}>
        Anteriores
      </Text>
      <Pressable
        style={[styles.perfilCorporativo, styles.agendadasPosition]}
        onPress={() => navigation.navigate("SeTorneUmProfissionalInicio")}
      >
        <Text style={styles.agendadasTypo}>Perfil Corporativo</Text>
      </Pressable>
      <Text style={[styles.agendadas, styles.agendadasTypo]}>Agendadas</Text>
      <Text style={[styles.escolhaUmTipo, styles.anterioresPosition]}>
        ESCOLHA UM TIPO
      </Text>
      <View style={[styles.modalEscolhaUmTipoChild, styles.modalLayout]} />
      <View style={[styles.modalEscolhaUmTipoItem, styles.modalLayout]} />
      <Image
        style={styles.materialSymbolscheckSmallIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolschecksmall.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  anterioresPosition: {
    textAlign: "center",
    color: Color.darkslategray_100,
    lineHeight: 18,
    left: 13,
    position: "absolute",
  },
  agendadasPosition: {
    left: 13,
    position: "absolute",
  },
  agendadasTypo: {
    width: 201,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_mini,
  },
  modalLayout: {
    height: 1,
    width: 437,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  anteriores: {
    top: 63,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    letterSpacing: 0.5,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.darkslategray_100,
    lineHeight: 18,
  },
  perfilCorporativo: {
    top: 114,
  },
  agendadas: {
    top: 159,
    left: 13,
    position: "absolute",
  },
  escolhaUmTipo: {
    top: 18,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    textAlign: "center",
    color: Color.darkslategray_100,
    lineHeight: 18,
  },
  modalEscolhaUmTipoChild: {
    top: 91,
  },
  modalEscolhaUmTipoItem: {
    top: 143,
  },
  materialSymbolscheckSmallIcon: {
    top: 60,
    left: 403,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  modalEscolhaUmTipo: {
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 436,
    height: 187,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default ModalEscolhaUmTipo;
