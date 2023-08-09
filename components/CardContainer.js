import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import ModalContaCriada from "./ModalContaCriada";
import AvaliaoCard from "./AvaliaoCard";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CardContainer = () => {
  const [botoAvaliarContainerVisible, setBotoAvaliarContainerVisible] =
    useState(false);

  const openBotoAvaliarContainer = useCallback(() => {
    setBotoAvaliarContainerVisible(true);
  }, []);

  const closeBotoAvaliarContainer = useCallback(() => {
    setBotoAvaliarContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.avaliaes}>
        <Text style={[styles.verMais, styles.verMaisClr]}>Ver Mais</Text>
        <View style={styles.avaliaes1}>
          <View style={styles.avaliao}>
            <Image
              style={styles.avaliaoChild}
              contentFit="cover"
              source={require("../assets/ellipse-23.png")}
            />
            <View style={[styles.botoAvaliarParent, styles.groupChildLayout]}>
              <Pressable
                style={[styles.botoAvaliar, styles.botoLayout]}
                onPress={openBotoAvaliarContainer}
              >
                <View style={[styles.botoAvaliarChild, styles.childBorder]} />
                <Text style={styles.avaliarCliente}>Avaliar Cliente</Text>
              </Pressable>
              <View style={[styles.groupChild, styles.avaliaes2Position]} />
              <Image
                style={styles.avaliaoIcon}
                contentFit="cover"
                source={require("../assets/avaliao1.png")}
              />
              <Text style={[styles.claraMaria, styles.avaliaes2Typo]}>
                Clara Maria
              </Text>
              <Text
                style={[styles.timoAtendimentoE, styles.claraMariaPosition]}
              >
                “ótimo atendimento e profissional”
              </Text>
            </View>
          </View>
          <AvaliaoCard
            imageId={require("../assets/ellipse-231.png")}
            dimensions={require("../assets/avaliao2.png")}
            personName="Roberta Fernandes"
            reviewText={`“Adorei o resultado e também a profissional, só não darei
 5 estrelas pois acabou chegando um pouco atrasada.”
`}
            onBotoAvaliarPress={openBotoAvaliarContainer}
          />
          <AvaliaoCard
            imageId={require("../assets/ellipse-232.png")}
            dimensions={require("../assets/avaliao3.png")}
            personName="Maria Eduarda"
            reviewText="“Fui muito bem atendida, com certeza marcarei novamente para uma futura manutenção”"
            propWidth={53}
            propTop={20}
            onBotoAvaliarPress={openBotoAvaliarContainer}
          />
          <AvaliaoCard
            imageId={require("../assets/ellipse-233.png")}
            dimensions={require("../assets/avaliao3.png")}
            personName="Andreia Ferreira"
            reviewText="“Fui muito bem atendida pela Fulano, foi minha primeira vez fazendo cílios e ela foi muito paciente ”"
            propWidth={53}
            propTop={26}
            onBotoAvaliarPress={openBotoAvaliarContainer}
          />
          <AvaliaoCard
            imageId={require("../assets/ellipse-234.png")}
            dimensions={require("../assets/avaliao2.png")}
            personName="Amanda Borges"
            reviewText="“Fulano, é uma ótima profissional e muito paciente e cuidadosa ao realizar a depilação”"
            propWidth={54}
            propTop={25}
            onBotoAvaliarPress={openBotoAvaliarContainer}
          />
        </View>
        <Text style={[styles.avaliaes2, styles.avaliaes2Typo]}>Avaliações</Text>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={botoAvaliarContainerVisible}
      >
        <View style={styles.botoAvaliarContainerOverlay1}>
          <Pressable
            style={styles.botoAvaliarContainerBg1}
            onPress={closeBotoAvaliarContainer}
          />
          <ModalContaCriada onClose={closeBotoAvaliarContainer} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={botoAvaliarContainerVisible}
      >
        <View style={styles.botoAvaliarContainerOverlay2}>
          <Pressable
            style={styles.botoAvaliarContainerBg2}
            onPress={closeBotoAvaliarContainer}
          />
          <ModalContaCriada onClose={closeBotoAvaliarContainer} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={botoAvaliarContainerVisible}
      >
        <View style={styles.botoAvaliarContainerOverlay3}>
          <Pressable
            style={styles.botoAvaliarContainerBg3}
            onPress={closeBotoAvaliarContainer}
          />
          <ModalContaCriada onClose={closeBotoAvaliarContainer} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={botoAvaliarContainerVisible}
      >
        <View style={styles.botoAvaliarContainerOverlay4}>
          <Pressable
            style={styles.botoAvaliarContainerBg4}
            onPress={closeBotoAvaliarContainer}
          />
          <ModalContaCriada onClose={closeBotoAvaliarContainer} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={botoAvaliarContainerVisible}
      >
        <View style={styles.botoAvaliarContainerOverlay}>
          <Pressable
            style={styles.botoAvaliarContainerBg}
            onPress={closeBotoAvaliarContainer}
          />
          <ModalContaCriada onClose={closeBotoAvaliarContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  verMaisClr: {
    color: Color.black,
    textAlign: "justify",
  },
  groupChildLayout: {
    height: 51,
    width: 285,
  },
  botoLayout: {
    height: 9,
    width: 66,
    left: "50%",
    top: "50%",
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  avaliaes2Position: {
    left: 0,
    top: 0,
  },
  avaliaes2Typo: {
    letterSpacing: 0.4,
    lineHeight: 18,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    position: "absolute",
  },
  claraMariaPosition: {
    left: 10,
    display: "flex",
    alignItems: "center",
  },
  botoAvaliarContainerOverlay1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  botoAvaliarContainerBg1: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  botoAvaliarContainerOverlay2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  botoAvaliarContainerBg2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  botoAvaliarContainerOverlay3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  botoAvaliarContainerBg3: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  botoAvaliarContainerOverlay4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  botoAvaliarContainerBg4: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  verMais: {
    top: 438,
    left: 167,
    textAlign: "justify",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 10,
    fontSize: FontSize.size_4xs,
    position: "absolute",
  },
  avaliaoChild: {
    width: 58,
    height: 61,
  },
  botoAvaliarContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  botoAvaliarContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  botoAvaliarChild: {
    marginTop: -4.5,
    marginLeft: -33,
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightpink_100,
    borderColor: "#f498af",
    height: 9,
    width: 66,
    left: "50%",
    top: "50%",
  },
  avaliarCliente: {
    marginTop: -2.5,
    marginLeft: -28,
    fontSize: FontSize.size_5xs,
    letterSpacing: 0.2,
    fontFamily: FontFamily.ralewayRegular,
    color: Color.gray_600,
    width: 61,
    height: 4,
    display: "flex",
    lineHeight: 18,
    textAlign: "left",
    left: "50%",
    top: "50%",
    alignItems: "center",
    position: "absolute",
  },
  botoAvaliar: {
    marginTop: 11.5,
    marginLeft: 73.5,
    position: "absolute",
  },
  groupChild: {
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    height: 51,
    width: 285,
  },
  avaliaoIcon: {
    top: 5,
    left: 228,
    width: 52,
    height: 19,
    position: "absolute",
  },
  claraMaria: {
    top: 3,
    fontSize: FontSize.size_smi,
    color: Color.gray_700,
    width: 86,
    height: 15,
    left: 10,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    letterSpacing: 0.4,
  },
  timoAtendimentoE: {
    top: 15,
    color: Color.dimgray_200,
    width: 260,
    height: 22,
    textAlign: "justify",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 10,
    fontSize: FontSize.size_4xs,
    position: "absolute",
  },
  botoAvaliarParent: {
    marginLeft: 10,
  },
  avaliao: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avaliaes1: {
    top: 39,
    left: 1,
    width: 368,
    height: 404,
    position: "absolute",
  },
  avaliaes2: {
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    textAlign: "justify",
    color: Color.black,
  },
  avaliaes: {
    width: 369,
    height: 448,
    marginTop: 20,
  },
});

export default CardContainer;
