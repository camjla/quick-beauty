import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const FormContainer2 = () => {
  return (
    <View style={[styles.proxservio, styles.proxservioSpaceBlock]}>
      <View style={[styles.seuPrximoServioParent, styles.servioPosition]}>
        <Text style={[styles.seuPrximoServio, styles.descrioFlexBox1]}>
          Seu próximo serviço
        </Text>
        <View style={[styles.descrioParent, styles.proxservioSpaceBlock]}>
          <Text style={[styles.descrio, styles.descrioFlexBox]}>
            Veja sua agenda semanal
          </Text>
          <View style={[styles.servio, styles.servioLayout]}>
            <View style={[styles.servioChild, styles.childShadowBox]} />
            <Image
              style={[styles.servioItem, styles.servioItemPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-24.png")}
            />
            <View
              style={[styles.camilaCardosoParent, styles.servioItemPosition]}
            >
              <Text style={[styles.camilaCardoso, styles.mensagensTypo]}>
                Camila Cardoso
              </Text>
              <Text style={[styles.depilao13042023, styles.r7000Typo]}>
                Depilação - 13/04/2023 10H
              </Text>
              <Text style={[styles.r7000, styles.r7000Typo]}>R$70,00</Text>
            </View>
            <View style={[styles.boto, styles.botoLayout]}>
              <View style={[styles.botoChild, styles.childShadowBox]} />
              <Text style={[styles.mensagens, styles.botoLayout]}>
                Mensagens
              </Text>
            </View>
            <Image
              style={styles.servioInner}
              contentFit="cover"
              source={require("../assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  proxservioSpaceBlock: {
    marginTop: 20,
    width: 398,
  },
  servioPosition: {
    left: 0,
    position: "absolute",
  },
  descrioFlexBox1: {
    textAlign: "justify",
    color: Color.black,
    lineHeight: 18,
  },
  descrioFlexBox: {
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
  },
  servioLayout: {
    height: 81,
    width: 398,
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    position: "absolute",
  },
  servioItemPosition: {
    top: 6,
    position: "absolute",
  },
  mensagensTypo: {
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    textAlign: "justify",
    color: Color.black,
    lineHeight: 18,
  },
  r7000Typo: {
    marginTop: 2,
    fontSize: FontSize.size_smi,
    textAlign: "justify",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.4,
  },
  botoLayout: {
    height: 15,
    position: "absolute",
  },
  seuPrximoServio: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    color: Color.black,
    lineHeight: 18,
  },
  descrio: {
    top: 96,
    fontFamily: FontFamily.ralewayRegular,
    width: 136,
    height: 14,
    textAlign: "justify",
    color: Color.black,
    lineHeight: 18,
    left: 0,
    position: "absolute",
  },
  servioChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.whitesmoke_400,
    borderStyle: "solid",
    borderColor: "#f498af",
    borderWidth: 0.2,
    height: 81,
    width: 398,
  },
  servioItem: {
    left: 13,
    height: 66,
    width: 73,
  },
  camilaCardoso: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0.5,
  },
  depilao13042023: {
    fontWeight: "300",
    fontFamily: FontFamily.ralewayLight,
  },
  r7000: {
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
  },
  camilaCardosoParent: {
    left: 111,
    width: 185,
    height: 67,
    justifyContent: "center",
  },
  botoChild: {
    borderRadius: Border.br_16xl,
    backgroundColor: Color.lightpink_100,
    width: 73,
    height: 14,
  },
  mensagens: {
    left: 9,
    width: 64,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    textAlign: "justify",
    color: Color.black,
    lineHeight: 18,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    top: 0,
  },
  boto: {
    top: 56,
    left: 304,
    width: 73,
  },
  servioInner: {
    height: "11.51%",
    width: "2.43%",
    top: "8.57%",
    right: "2.07%",
    bottom: "79.91%",
    left: "95.5%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  servio: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  descrioParent: {
    height: 110,
  },
  seuPrximoServioParent: {
    justifyContent: "center",
    top: 0,
  },
  proxservio: {
    height: 148,
  },
});

export default FormContainer2;
