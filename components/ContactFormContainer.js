import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const ContactFormContainer = () => {
  return (
    <View style={styles.nomeParent}>
      <View style={styles.nomeLayout}>
        <Text style={styles.seuNome}>Seu nome</Text>
        <View style={[styles.nomeChild, styles.childBorder]} />
      </View>
      <View style={[styles.email, styles.emailLayout]}>
        <Text style={[styles.seuEMail, styles.enviarTypo]}>Seu e-mail</Text>
        <View style={[styles.emailChild, styles.emailLayout]} />
      </View>
      <View style={[styles.mensagem, styles.mensagemLayout]}>
        <View style={[styles.mensagemChild, styles.mensagemLayout]} />
        <Text style={[styles.suaMensagem, styles.enviarTypo]}>
          Sua mensagem
        </Text>
      </View>
      <View style={[styles.botoEnviar, styles.botoLayout]}>
        <View style={[styles.botoEnviarChild, styles.enviarPosition]} />
        <Text style={[styles.enviar, styles.enviarPosition]}>Enviar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  emailLayout: {
    width: 354,
    height: 35,
  },
  enviarTypo: {
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
  },
  mensagemLayout: {
    height: 97,
    width: 354,
  },
  botoLayout: {
    height: 43,
    width: 148,
  },
  enviarPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  seuNome: {
    left: 11,
    textAlign: "left",
    display: "flex",
    width: 80,
    color: Color.gainsboro_200,
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
    top: 9,
    alignItems: "center",
    position: "absolute",
  },
  nomeChild: {
    borderColor: "#c2c0c0",
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    height: 35,
    width: 355,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  nomeLayout: {
    height: 35,
    width: 355,
  },
  seuEMail: {
    left: 9,
    textAlign: "center",
    color: Color.gainsboro_200,
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
    position: "absolute",
    top: 9,
  },
  emailChild: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#c2c0c0",
    left: 0,
    top: 0,
    position: "absolute",
  },
  email: {
    marginTop: 30,
  },
  mensagemChild: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#c2c0c0",
    left: 0,
    top: 0,
    position: "absolute",
  },
  suaMensagem: {
    top: 7,
    left: 9,
    textAlign: "center",
    color: Color.gainsboro_200,
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
    position: "absolute",
  },
  mensagem: {
    marginTop: 30,
  },
  botoEnviarChild: {
    marginTop: -21.5,
    marginLeft: -74,
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightpink_100,
    borderColor: "#f498af",
    height: 43,
    width: 148,
    borderWidth: 1,
    borderStyle: "solid",
    top: "50%",
  },
  enviar: {
    marginTop: -9.5,
    marginLeft: -21,
    fontWeight: "800",
    fontFamily: FontFamily.ralewayExtraBold,
    color: Color.gray_600,
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
  },
  botoEnviar: {
    marginTop: 30,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  nomeParent: {
    top: 729,
    left: 17,
    width: 389,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default ContactFormContainer;
