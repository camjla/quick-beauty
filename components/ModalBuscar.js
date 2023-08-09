import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import Horas from "./Horas";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ModalBuscar = ({ onClose }) => {
  const [textVisible, setTextVisible] = useState(false);

  const openText = useCallback(() => {
    setTextVisible(true);
  }, []);

  const closeText = useCallback(() => {
    setTextVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.modalBuscar, styles.modalLayout]}>
        <View style={[styles.modalBuscarChild, styles.botoShadowBox]} />
        <Text style={[styles.paraQualDia, styles.buscarFlexBox]}>
          Para qual dia e horário você quer agendar?
        </Text>
        <Text style={[styles.qui6DeAbril, styles.textTypo]}>
          Qui,6 de abril
        </Text>
        <Pressable style={styles.buscarPosition} onPress={openText}>
          <Text style={[styles.text, styles.textTypo]}>10:00</Text>
        </Pressable>
        <Image
          style={[styles.modalBuscarItem, styles.buscarPosition]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Image
          style={styles.closeIcon}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
        <View style={[styles.boto, styles.botoPosition]}>
          <View style={[styles.botoChild, styles.botoPosition]} />
          <Text style={[styles.buscar, styles.buscarPosition]}>Buscar</Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={textVisible}>
        <View style={styles.textOverlay}>
          <Pressable style={styles.textBg} onPress={closeText} />
          <Horas onClose={closeText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalLayout: {
    height: 697,
    width: 418,
  },
  botoShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  buscarFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 18,
  },
  textTypo: {
    color: Color.gray_500,
    textAlign: "center",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 1.6,
    fontSize: FontSize.size_7xl,
  },
  buscarPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  botoPosition: {
    height: 61,
    width: 231,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  modalBuscarChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
    position: "absolute",
    height: 697,
    width: 418,
  },
  paraQualDia: {
    top: 56,
    left: 17,
    color: Color.black,
    width: 374,
    height: 58,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    letterSpacing: 1.6,
    fontSize: FontSize.size_7xl,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 18,
    position: "absolute",
  },
  qui6DeAbril: {
    marginTop: -103.5,
    marginLeft: -90,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  textBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  text: {
    marginTop: -33.5,
    marginLeft: -36,
  },
  modalBuscarItem: {
    marginTop: -58.5,
    marginLeft: -121,
    width: 242,
    height: 2,
  },
  closeIcon: {
    top: 22,
    left: 372,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  botoChild: {
    marginTop: -30.5,
    marginLeft: -115.5,
    backgroundColor: Color.lightpink_100,
    borderStyle: "solid",
    borderColor: "#f498af",
    borderWidth: 1,
    borderRadius: Border.br_xl,
  },
  buscar: {
    marginTop: -13.5,
    marginLeft: -47.5,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    fontFamily: FontFamily.ralewayRegular,
    color: Color.gray_600,
    width: 95,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 18,
    top: "50%",
  },
  boto: {
    marginTop: 159.5,
    marginLeft: -116,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  modalBuscar: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default ModalBuscar;
