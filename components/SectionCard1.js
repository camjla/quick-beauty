import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SectionCard1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nomeParent}>
      <View style={styles.nome}>
        <View style={styles.nomeGroup}>
          <Text style={styles.nome1}>{`Nome
`}</Text>
          <Text style={[styles.fulanoSilva, styles.textTypo]}>
            Fulano Silva
          </Text>
        </View>
        <View style={[styles.nomeChild, styles.childPosition]} />
      </View>
      <View style={styles.telefoneParent}>
        <Pressable
          style={styles.telefone}
          onPress={() => navigation.navigate("Telefone")}
        >
          <View style={[styles.telefoneChild, styles.childPosition]} />
          <View style={[styles.telefoneGroup, styles.eMailParentSpaceBlock]}>
            <Text style={[styles.telefone1, styles.eMailLayout]}>{`Telefone
`}</Text>
            <View style={styles.parentSpaceBlock}>
              <Text style={[styles.text, styles.textTypo]}>
                +55 11984572015
              </Text>
              <Image
                style={styles.importanteIcon}
                contentFit="cover"
                source={require("../assets/importante.png")}
              />
            </View>
          </View>
        </Pressable>
        <View style={styles.email}>
          <View style={[styles.eMailParent, styles.eMailParentSpaceBlock]}>
            <Text style={[styles.eMail, styles.eMailLayout]}>E-mail</Text>
            <View
              style={[
                styles.fulanosilvagmailcomParent,
                styles.parentSpaceBlock,
              ]}
            >
              <Text style={[styles.text, styles.textTypo]}>
                fulano.silva@gmail.com
              </Text>
              <Image
                style={styles.materialSymbolscheckCircleIcon}
                contentFit="cover"
                source={require("../assets/materialsymbolscheckcirclerounded.png")}
              />
            </View>
          </View>
          <View style={[styles.emailChild, styles.childPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
  },
  childPosition: {
    height: 1,
    width: 432,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderStyle: "solid",
    top: "50%",
    left: 0,
    position: "absolute",
  },
  eMailParentSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    top: 0,
    justifyContent: "center",
    position: "absolute",
  },
  eMailLayout: {
    height: 39,
    width: 88,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
  },
  parentSpaceBlock: {
    marginTop: -10,
    flexDirection: "row",
  },
  nome1: {
    width: 118,
    height: 43,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  fulanoSilva: {
    marginTop: -15,
    textAlign: "center",
  },
  nomeGroup: {
    left: 14,
    paddingLeft: Padding.p_mini,
    top: 0,
    justifyContent: "center",
    position: "absolute",
  },
  nomeChild: {
    marginTop: 31,
  },
  nome: {
    height: 63,
    width: 431,
  },
  telefoneChild: {
    marginTop: 37.94,
  },
  telefone1: {
    textAlign: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
  importanteIcon: {
    width: 18,
    height: 18,
    marginLeft: 5,
  },
  telefoneGroup: {
    left: 11,
    width: 205,
    height: 55,
  },
  telefone: {
    height: 77,
    width: 431,
  },
  eMail: {
    textAlign: "left",
    width: 88,
  },
  materialSymbolscheckCircleIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
    marginLeft: 5,
  },
  fulanosilvagmailcomParent: {
    alignItems: "flex-end",
  },
  eMailParent: {
    left: 19,
  },
  emailChild: {
    marginTop: 37.5,
  },
  email: {
    height: 76,
    marginTop: 7,
    width: 431,
  },
  telefoneParent: {
    width: 436,
    height: 160,
    marginTop: 7,
    justifyContent: "center",
  },
  nomeParent: {
    top: 319,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    justifyContent: "center",
    width: 431,
    left: 0,
    position: "absolute",
  },
});

export default SectionCard1;
