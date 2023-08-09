import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import ModalRegister from "../components/ModalRegister";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const HomeLogin = () => {
  const [noPossuiUmaVisible, setNoPossuiUmaVisible] = useState(false);
  const navigation = useNavigation();

  const openNoPossuiUma = useCallback(() => {
    setNoPossuiUmaVisible(true);
  }, []);

  const closeNoPossuiUma = useCallback(() => {
    setNoPossuiUmaVisible(false);
  }, []);

  return (
    <>
      <View style={styles.homeLogin}>
        <IPhoneStatusBarupper
          notch={require("../assets/notch4.png")}
          iPhoneStatusBarupperPosition="absolute"
          iPhoneStatusBarupperWidth="unset"
          iPhoneStatusBarupperMarginTop={-463}
          iPhoneStatusBarupperTop="50%"
          iPhoneStatusBarupperRight={0}
          iPhoneStatusBarupperLeft={0}
          iPhoneStatusBarupperBackgroundColor="#924d4d"
        />
        <View style={[styles.homeIndicator, styles.ouPosition]} />
        <Image
          style={[styles.zyroImage2Icon, styles.entrarPosition]}
          contentFit="cover"
          source={require("../assets/zyroimage-1.png")}
        />
        <View style={[styles.emailParent, styles.entrarPosition]}>
          <View style={styles.emailLayout}>
            <View style={styles.emailChild} />
            <Text style={[styles.eMail, styles.eMailTypo]}>E-mail</Text>
          </View>
          <View style={[styles.senha, styles.emailLayout]}>
            <View style={styles.emailChild} />
            <Text style={[styles.eMail, styles.eMailTypo]}>Senha</Text>
          </View>
        </View>
        <Pressable
          style={[styles.noPossuiUmaContainer, styles.entrarPosition]}
          onPress={openNoPossuiUma}
        >
          <Text
            style={[styles.noPossuiUmaContaCrieUma, styles.umaTypo]}
          >{`Não possui uma conta?
Crie uma agora mesmo`}</Text>
        </Pressable>
        <Pressable
          style={[styles.boto, styles.botoPosition]}
          onPress={() => navigation.navigate("HomeAutomatico")}
        >
          <View style={[styles.botoChild, styles.childBorder]} />
          <Text style={[styles.entrar, styles.eMailTypo]}>Entrar</Text>
        </Pressable>
        <View style={styles.alternativasDeCriarConta}>
          <Text style={[styles.ou, styles.umaTypo]}>ou</Text>
          <View style={styles.googlePosition}>
            <View style={[styles.googleChild, styles.googlePosition]} />
            <Text style={[styles.continuarComO, styles.umaTypo]}>
              Continuar com o Google
            </Text>
            <Image
              style={[styles.logosgoogleIcon, styles.ouPosition]}
              contentFit="cover"
              source={require("../assets/logosgoogleicon.png")}
            />
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={noPossuiUmaVisible}>
        <View style={styles.noPossuiUmaOverlay}>
          <Pressable style={styles.noPossuiUmaBg} onPress={closeNoPossuiUma} />
          <ModalRegister onClose={closeNoPossuiUma} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  ouPosition: {
    left: "50%",
    position: "absolute",
  },
  entrarPosition: {
    top: "50%",
    left: "50%",
  },
  eMailTypo: {
    textAlign: "center",
    fontFamily: FontFamily.ralewayRegular,
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  emailLayout: {
    height: 73,
    width: 241,
  },
  umaTypo: {
    fontFamily: FontFamily.ralewayMediumItalic,
    fontWeight: "500",
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
  },
  botoPosition: {
    height: 43,
    width: 148,
    marginLeft: -74,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  googlePosition: {
    height: 31,
    bottom: 0,
    marginLeft: -116,
    width: 232,
    left: "50%",
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
  zyroImage2Icon: {
    marginTop: -139,
    width: 231,
    height: 144,
    marginLeft: -115,
    top: "50%",
    position: "absolute",
  },
  emailChild: {
    top: 18,
    left: 0,
    borderWidth: 2,
    height: 55,
    borderStyle: "solid",
    borderColor: "rgba(60, 60, 60, 0.58)",
    borderRadius: Border.br_xl,
    width: 241,
    position: "absolute",
  },
  eMail: {
    top: 0,
    left: 15,
    color: Color.gray_500,
  },
  senha: {
    marginTop: 16,
  },
  emailParent: {
    marginTop: 12,
    marginLeft: -120,
    position: "absolute",
    top: "50%",
  },
  noPossuiUmaOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  noPossuiUmaBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  noPossuiUmaContaCrieUma: {
    marginTop: 281,
    marginLeft: -74,
    fontWeight: "500",
    fontStyle: "italic",
    color: Color.gray_500,
  },
  noPossuiUmaContainer: {
    position: "absolute",
    top: "50%",
  },
  botoChild: {
    marginTop: -21.5,
    backgroundColor: Color.lightpink_100,
    borderColor: "#f498af",
    height: 43,
    width: 148,
    marginLeft: -74,
    top: "50%",
    left: "50%",
    position: "absolute",
    borderWidth: 1,
    borderRadius: Border.br_xl,
  },
  entrar: {
    marginTop: -9.5,
    marginLeft: -19,
    color: Color.gray_600,
    top: "50%",
    left: "50%",
  },
  boto: {
    marginTop: 204,
  },
  ou: {
    marginLeft: -9,
    bottom: 37,
    color: Color.gray_500,
    left: "50%",
    position: "absolute",
  },
  googleChild: {
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(60, 60, 60, 0.58)",
    height: 31,
    bottom: 0,
    marginLeft: -116,
  },
  continuarComO: {
    marginLeft: -63,
    bottom: 7,
    color: "#3c3c3c",
    left: "50%",
    position: "absolute",
  },
  logosgoogleIcon: {
    marginLeft: -99,
    bottom: 4,
    width: 22,
    height: 23,
    overflow: "hidden",
  },
  alternativasDeCriarConta: {
    bottom: 83,
    width: 232,
    height: 55,
    marginLeft: -115,
    left: "50%",
    position: "absolute",
  },
  homeLogin: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default HomeLogin;
