import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ModalDesativarSuaConta = ({ onClose }) => {
  return (
    <View
      style={[
        styles.modalDesativarSuaConta,
        styles.botoCancelarParentShadowBox,
      ]}
    >
      <View style={styles.modalDesativarSuaContaChild} />
      <Text style={styles.desativarSuaConta}>Desativar sua conta</Text>
      <Text style={styles.x}>X</Text>
      <Text
        style={[
          styles.estouCienteQueContainer,
          styles.botoCancelarParentPosition,
        ]}
      >
        <Text style={styles.estouCienteQueContainer1}>
          <Text
            style={styles.estouCienteQue}
          >{`Estou ciente que após confirmação a operação `}</Text>
          <Text style={styles.noPoderSer}>não poderá ser desfeita</Text>
          <Text
            style={styles.estouCienteQue}
          >{`. Eu confirmo a exclusão da conta fulano.silva@gmail.com, todas as configurações e dados serão `}</Text>
          <Text style={styles.noPoderSer}>deletadas permanentemente</Text>
          <Text
            style={styles.estouCienteQue}
          >{`. Tem certeza que deseja fazer isso?
`}</Text>
        </Text>
      </Text>
      <View
        style={[styles.botoCancelarParent, styles.botoCancelarParentPosition]}
      >
        <View style={styles.botoLayout}>
          <View style={styles.botoChildPosition} />
          <Text style={[styles.cancelar, styles.deletarTypo]}>Cancelar</Text>
        </View>
        <View style={[styles.botoDeletar, styles.botoLayout]}>
          <View style={[styles.botoDeletarChild, styles.botoChildPosition]} />
          <Text style={[styles.deletar, styles.deletarTypo]}>Deletar</Text>
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
  botoCancelarParentPosition: {
    left: "50%",
    top: "50%",
    alignItems: "center",
    position: "absolute",
  },
  deletarTypo: {
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
  modalDesativarSuaContaChild: {
    top: 0,
    right: 0,
    bottom: -2,
    left: 0,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    position: "absolute",
  },
  desativarSuaConta: {
    top: 37,
    left: 21,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.4,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    position: "absolute",
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
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    lineHeight: 18,
    position: "absolute",
  },
  estouCienteQue: {
    fontFamily: FontFamily.ralewayRegular,
  },
  noPoderSer: {
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
  },
  estouCienteQueContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  estouCienteQueContainer: {
    marginTop: -44.5,
    marginLeft: -162,
    fontSize: FontSize.size_xs,
    textAlign: "justify",
    width: 321,
    height: 105,
    display: "flex",
    top: "50%",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.4,
  },
  cancelar: {
    marginLeft: -30,
  },
  botoDeletarChild: {
    backgroundColor: Color.lightpink_100,
  },
  deletar: {
    marginLeft: -25,
  },
  botoDeletar: {
    marginLeft: 20,
  },
  botoCancelarParent: {
    marginTop: 56.5,
    marginLeft: -158,
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
  modalDesativarSuaConta: {
    width: 366,
    height: 221,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default ModalDesativarSuaConta;
