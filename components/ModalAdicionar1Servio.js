import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import ModalContaCriada from "./ModalContaCriada";
import Select from "./Select";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ModalAdicionar1Servio = ({ onClose }) => {
  const [botoAdicionarContainerVisible, setBotoAdicionarContainerVisible] =
    useState(false);
  const [vectorIcon3Visible, setVectorIcon3Visible] = useState(false);

  const openBotoAdicionarContainer = useCallback(() => {
    setBotoAdicionarContainerVisible(true);
  }, []);

  const closeBotoAdicionarContainer = useCallback(() => {
    setBotoAdicionarContainerVisible(false);
  }, []);

  const openVectorIcon3 = useCallback(() => {
    setVectorIcon3Visible(true);
  }, []);

  const closeVectorIcon3 = useCallback(() => {
    setVectorIcon3Visible(false);
  }, []);

  return (
    <>
      <View style={styles.modalAdicionar1Servio}>
        <Text style={styles.adicioneOuAltere}>{`Adicione ou altere 
seus serviços`}</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector15.png")}
        />
        <Pressable
          style={[styles.botoAdicionar, styles.botoPosition]}
          onPress={openBotoAdicionarContainer}
        >
          <View style={[styles.botoAdicionarChild, styles.botoPosition]} />
          <View style={[styles.botoAdicionarChild, styles.botoPosition]} />
          <Text style={[styles.adicionar, styles.serviosFlexBox]}>
            Adicionar
          </Text>
        </Pressable>
        <View style={[styles.servios, styles.serviosFlexBox]}>
          <View style={styles.servios1}>
            <View style={[styles.maquiador, styles.depilaoFlexBox]}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector16.png")}
              />
              <Text style={styles.maquiador1}>Maquiador</Text>
            </View>
            <View style={[styles.manicure, styles.depilaoFlexBox]}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector16.png")}
              />
              <Text style={styles.maquiador1}>Manicure</Text>
            </View>
            <View style={[styles.cabelereiro, styles.depilaoFlexBox]}>
              <Pressable style={styles.vectorIcon1} onPress={openVectorIcon3}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/vector17.png")}
                />
              </Pressable>
              <Text style={styles.maquiador1}>Cabelereiro</Text>
            </View>
            <View style={[styles.cilios, styles.ciliosPosition]}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector18.png")}
              />
              <Text style={styles.maquiador1}>Designer de cilios</Text>
            </View>
            <View style={[styles.sobrancelha, styles.depilaoFlexBox]}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector17.png")}
              />
              <Text style={styles.maquiador1}>Designer de Sobrancelha</Text>
            </View>
            <View style={[styles.massagista, styles.ciliosPosition]}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector16.png")}
              />
              <Text style={styles.maquiador1}>Massagista</Text>
            </View>
            <View style={[styles.barbeiro, styles.depilaoFlexBox]}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector17.png")}
              />
              <Text style={styles.maquiador1}>Barbeiro</Text>
            </View>
            <View style={[styles.depilao, styles.depilaoFlexBox]}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector19.png")}
              />
              <Text style={styles.maquiador1}>Depilação</Text>
            </View>
            <View style={[styles.pedicure, styles.depilaoFlexBox]}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector16.png")}
              />
              <Text style={styles.maquiador1}>Pedicure</Text>
            </View>
            <View style={[styles.esteticista, styles.depilaoFlexBox]}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector16.png")}
              />
              <Text style={styles.maquiador1}>Esteticista</Text>
            </View>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={botoAdicionarContainerVisible}
      >
        <View style={styles.botoAdicionarContainerOverlay}>
          <Pressable
            style={styles.botoAdicionarContainerBg}
            onPress={closeBotoAdicionarContainer}
          />
          <ModalContaCriada onClose={closeBotoAdicionarContainer} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={vectorIcon3Visible}>
        <View style={styles.vectorIcon3Overlay}>
          <Pressable style={styles.vectorIcon3Bg} onPress={closeVectorIcon3} />
          <Select onClose={closeVectorIcon3} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  botoPosition: {
    height: 58,
    width: 219,
    left: "50%",
    top: "50%",
    marginLeft: -109.5,
    position: "absolute",
  },
  serviosFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  depilaoFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  ciliosPosition: {
    top: 46,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  adicioneOuAltere: {
    top: 63,
    left: 85,
    fontSize: FontSize.size_7xl,
    letterSpacing: 0.8,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  vectorIcon: {
    height: "3.78%",
    width: "4.25%",
    top: "3.21%",
    right: "4.37%",
    bottom: "93.01%",
    left: "91.38%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  botoAdicionarContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  botoAdicionarContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  botoAdicionarChild: {
    marginTop: -29,
    backgroundColor: Color.lightpink_100,
    borderStyle: "solid",
    borderColor: "#f498af",
    borderWidth: 1,
    borderRadius: Border.br_xl,
    height: 58,
    width: 219,
    left: "50%",
    top: "50%",
    marginLeft: -109.5,
  },
  adicionar: {
    marginTop: -13,
    marginLeft: -59.5,
    fontSize: FontSize.size_lg,
    fontWeight: "800",
    fontFamily: FontFamily.ralewayExtraBold,
    color: Color.gray_600,
    display: "flex",
    width: 119,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 18,
    letterSpacing: 0.5,
    left: "50%",
    top: "50%",
    textAlign: "center",
  },
  botoAdicionar: {
    marginTop: 174,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  vectorIcon1: {
    width: 11,
    height: 11,
  },
  maquiador1: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    color: Color.gray_1000,
    marginLeft: 10,
    lineHeight: 18,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  maquiador: {
    top: 69,
    left: 262,
  },
  manicure: {
    top: 24,
    left: 262,
  },
  vectorIcon3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIcon3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  cabelereiro: {
    top: 23,
    width: 104,
    left: 0,
  },
  cilios: {
    width: 149,
    left: 0,
  },
  sobrancelha: {
    top: 68,
    width: 203,
    left: 0,
  },
  massagista: {
    left: 262,
  },
  barbeiro: {
    top: 0,
    width: 81,
    left: 0,
  },
  depilao: {
    top: 91,
    width: 92,
    left: 0,
  },
  pedicure: {
    top: 92,
    left: 262,
  },
  esteticista: {
    top: 1,
    left: 262,
  },
  servios1: {
    height: 110,
    width: 371,
  },
  servios: {
    top: 173,
    left: 23,
    height: 196,
    width: 371,
  },
  modalAdicionar1Servio: {
    backgroundColor: Color.white,
    width: 417,
    height: 566,
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_xl,
  },
});

export default ModalAdicionar1Servio;
