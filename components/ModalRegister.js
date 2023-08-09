import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const ModalRegister = ({ onClose }) => {
  return (
    <View style={styles.modalRegister}>
      <View style={styles.registro}>
        <View style={styles.registroDados}>
          <View style={[styles.nomeSobrenome, styles.nomeSobrenomeFlexBox]}>
            <View style={styles.nomeLayout}>
              <Text style={[styles.nome1, styles.nome1Position]}>Nome</Text>
              <View style={styles.nomeChild} />
            </View>
            <View style={[styles.sobrenome, styles.nomeLayout]}>
              <Text style={[styles.nome1, styles.nome1Position]}>
                Sobrenome
              </Text>
              <View style={styles.sobrenomeChild} />
            </View>
          </View>
          <View style={[styles.eMail, styles.eMailSpaceBlock]}>
            <Text style={[styles.eMail1, styles.eMail1Position]}>E-mail</Text>
            <View style={[styles.eMailChild, styles.childPosition]} />
          </View>
          <View style={[styles.telefone, styles.eMailSpaceBlock]}>
            <Text style={[styles.telefone1, styles.eMail1Position]}>
              Telefone
            </Text>
            <View style={[styles.telefoneChild, styles.childPosition]} />
            <View
              style={[
                styles.emojioneV1flagForBrazilParent,
                styles.nomeSobrenomeFlexBox,
              ]}
            >
              <Image
                style={styles.emojioneV1flagForBrazilIcon}
                contentFit="cover"
                source={require("../assets/emojionev1flagforbrazil.png")}
              />
              <Text style={styles.text}>{`+55 `}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.boto, styles.botoLayout]}>
          <View style={[styles.botoChild, styles.botoLayout]} />
          <Text style={[styles.criar, styles.nome1Position]}>Criar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nomeSobrenomeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  nome1Position: {
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  nomeLayout: {
    height: 46,
    width: 112,
  },
  eMailSpaceBlock: {
    marginTop: 10,
    width: 239,
  },
  eMail1Position: {
    height: 21,
    display: "flex",
    marginLeft: -119.5,
    textAlign: "center",
    color: Color.gray_500,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
    left: "50%",
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  childPosition: {
    marginLeft: -119.5,
    backgroundColor: Color.gray_100,
    borderWidth: 1,
    borderColor: "#7c7c7c",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: "50%",
    top: "50%",
    width: 239,
    position: "absolute",
  },
  botoLayout: {
    height: 43,
    width: 148,
  },
  nome1: {
    marginTop: -23,
    marginLeft: -56,
    color: Color.gray_500,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
    left: "50%",
    top: "50%",
  },
  nomeChild: {
    height: 25,
    width: 111,
    borderColor: "#7c7c7c",
    borderRadius: Border.br_5xs,
    marginLeft: -55,
    marginTop: -2,
    borderWidth: 1,
    borderStyle: "solid",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  sobrenomeChild: {
    backgroundColor: Color.gray_100,
    height: 25,
    width: 111,
    borderWidth: 1,
    borderColor: "#7c7c7c",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    marginLeft: -55,
    marginTop: -2,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  sobrenome: {
    marginLeft: 10,
  },
  nomeSobrenome: {
    width: 239,
    flexDirection: "row",
  },
  eMail1: {
    marginTop: -25,
    width: 44,
  },
  eMailChild: {
    marginTop: -4.07,
    height: 29,
  },
  eMail: {
    height: 50,
  },
  telefone1: {
    marginTop: -25.5,
    width: 59,
  },
  telefoneChild: {
    marginTop: -4.15,
    height: 30,
  },
  emojioneV1flagForBrazilIcon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  text: {
    width: 31,
    height: 12,
    marginLeft: 2,
    display: "flex",
    textAlign: "center",
    color: Color.gray_500,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
    justifyContent: "center",
    alignItems: "center",
  },
  emojioneV1flagForBrazilParent: {
    top: 27,
    left: 8,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    flexDirection: "row",
    position: "absolute",
  },
  telefone: {
    height: 51,
  },
  registroDados: {
    alignItems: "flex-end",
  },
  botoChild: {
    marginTop: -21.5,
    marginLeft: -74,
    backgroundColor: Color.lightpink_100,
    borderColor: "#f498af",
    borderWidth: 1,
    borderStyle: "solid",
    height: 43,
    width: 148,
    left: "50%",
    top: "50%",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  criar: {
    marginTop: -9.5,
    marginLeft: -15,
    fontFamily: FontFamily.ralewayRegular,
    color: Color.gray_600,
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
    left: "50%",
    top: "50%",
  },
  boto: {
    marginTop: 25,
    height: 43,
    width: 148,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  registro: {
    top: 10,
    left: 0,
    backgroundColor: Color.white,
    paddingHorizontal: 40,
    paddingVertical: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xl,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  modalRegister: {
    width: 319,
    height: 309,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default ModalRegister;
