import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ModalSairDeSuaConta = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.modalSairDeSuaConta, styles.botoCancelarParentShadowBox]}
    >
      <View style={styles.modalSairDeSuaContaChild} />
      <Text style={[styles.encerrarSesso, styles.xFlexBox]}>
        Encerrar sessão
      </Text>
      <Text style={[styles.x, styles.xFlexBox]}>X</Text>
      <Text
        style={[styles.temCertezaQue, styles.temCertezaQuePosition]}
      >{`Tem certeza que deseja encerrar sua sessão?
`}</Text>
      <View style={[styles.botoCancelarParent, styles.temCertezaQuePosition]}>
        <View style={styles.botoLayout}>
          <View style={styles.botoChildPosition} />
          <Text style={[styles.cancelar, styles.cancelarTypo]}>Cancelar</Text>
        </View>
        <View style={[styles.botoDeletar, styles.botoLayout]}>
          <Pressable
            style={[styles.botoDeletarChild, styles.botoChildPosition]}
            onPress={() => navigation.navigate("HomeLogin")}
          />
          <Text style={[styles.continuar, styles.cancelarTypo]}>Continuar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  botoCancelarParentShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  xFlexBox: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    color: Color.black,
    lineHeight: 18,
    position: "absolute",
  },
  temCertezaQuePosition: {
    left: "50%",
    top: "50%",
    alignItems: "center",
    position: "absolute",
  },
  cancelarTypo: {
    color: Color.gray_600,
    fontFamily: FontFamily.ralewayExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_smi,
    marginTop: -9.5,
    left: "50%",
    top: "50%",
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.4,
    position: "absolute",
  },
  botoLayout: {
    height: 43,
    width: 148,
  },
  botoChildPosition: {
    borderWidth: 1,
    borderColor: "#f498af",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    marginLeft: -74,
    marginTop: -21.5,
    height: 43,
    width: 148,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  modalSairDeSuaContaChild: {
    top: 0,
    right: 0,
    bottom: -2,
    left: 0,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    position: "absolute",
  },
  encerrarSesso: {
    top: 28,
    left: 5,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    width: 142,
    height: 18,
    justifyContent: "center",
    letterSpacing: 0.4,
    textAlign: "center",
  },
  x: {
    top: 13,
    right: 14,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.5,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemiBold,
    width: 21,
    height: 19,
    justifyContent: "center",
  },
  temCertezaQue: {
    marginTop: -26.5,
    marginLeft: -149.5,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.ralewayRegular,
    textAlign: "justify",
    width: 271,
    height: 46,
    display: "flex",
    color: Color.black,
    lineHeight: 18,
    left: "50%",
    top: "50%",
    letterSpacing: 0.4,
  },
  cancelar: {
    marginLeft: -30,
  },
  botoDeletarChild: {
    backgroundColor: Color.lightpink_100,
  },
  continuar: {
    marginLeft: -33,
  },
  botoDeletar: {
    marginLeft: 20,
  },
  botoCancelarParent: {
    marginTop: 26.5,
    marginLeft: -157.5,
    flexDirection: "row",
    justifyContent: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  modalSairDeSuaConta: {
    width: 339,
    height: 161,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default ModalSairDeSuaConta;
