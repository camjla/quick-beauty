import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const NewsContainer = () => {
  return (
    <View style={styles.novidades}>
      <View style={styles.novidades1}>
        <View style={[styles.novidade2, styles.novidadeShadowBox]}>
          <Image
            style={[styles.image5Icon, styles.novidade1Position]}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
          <Text
            style={[
              styles.realizeServiosEstticos,
              styles.realizeServiosEstticosFlexBox,
            ]}
          >
            Realize serviços estéticos com um preço que cabe no seu bolso
          </Text>
          <Text
            style={[styles.subttuloSobreOContainer, styles.loremIpsumDolorTypo]}
          >
            <Text style={styles.subttuloSobreOContainer1}>
              S
              <Text
                style={styles.ubttuloSobreO}
              >{`ubtítulo sobre o assunto `}</Text>
            </Text>
          </Text>
          <Text style={[styles.esttica, styles.estticaFlexBox]}>Estética</Text>
          <Text style={[styles.loremIpsumDolor, styles.loremIpsumDolorTypo]}>
            Lorem ipsum dolor sit amet consectetur. Ac urna eu ipsum sagittis
            felis porta. Semper eget suspendisse urna amet sed. Augue diam amet
            ultrices turpis nisl. Magnis ac vestibulum neque semper ultrices.
            Adipiscing sed eget fermentum a venenatis faucibus cum. Elit sed in
            convallis feugiat leo interdum varius viverra mattis. Lectus leo a
            pharetra semper viverra urna a ultricies as....
          </Text>
        </View>
        <View style={[styles.novidade1, styles.novidade1Position]}>
          <Image
            style={[styles.image5Icon, styles.novidade1Position]}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
          <Text
            style={[
              styles.realizeServiosEstticos,
              styles.realizeServiosEstticosFlexBox,
            ]}
          >
            Corte seu cabelo em casa
          </Text>
          <Text style={[styles.saibaComoCortar, styles.loremIpsumDolorTypo]}>
            Saiba como cortar seu cabelo por conta própria
          </Text>
          <Text style={[styles.esttica, styles.estticaFlexBox]}>Cabelo</Text>
          <Text style={[styles.loremIpsumDolor, styles.loremIpsumDolorTypo]}>
            Lorem ipsum dolor sit amet consectetur. Ac urna eu ipsum sagittis
            felis porta. Semper eget suspendisse urna amet sed. Augue diam amet
            ultrices turpis nisl. Magnis ac vestibulum neque semper ultrices.
            Adipiscing sed eget fermentum a venenatis faucibus cum. Elit sed in
            convallis feugiat leo interdum varius viverra mattis. Lectus leo a
            pharetra semper viverra urna a ultricies as....
          </Text>
        </View>
      </View>
      <Text style={[styles.novidades2, styles.estticaFlexBox]}>Novidades</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  novidadeShadowBox: {
    overflow: "hidden",
    height: 118,
    width: 377,
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.4)",
    left: 0,
  },
  novidade1Position: {
    top: 8,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  realizeServiosEstticosFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  loremIpsumDolorTypo: {
    fontFamily: FontFamily.ralewayRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  estticaFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 18,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  image5Icon: {
    width: 58,
    height: 48,
    left: 8,
  },
  realizeServiosEstticos: {
    top: 21,
    fontSize: FontSize.size_xs,
    lineHeight: 10,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    width: 300,
    height: 23,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.black,
    left: 76,
    position: "absolute",
  },
  ubttuloSobreO: {
    textTransform: "lowercase",
  },
  subttuloSobreOContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  subttuloSobreOContainer: {
    top: 42,
    width: 119,
    height: 20,
    lineHeight: 18,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.ralewayRegular,
    left: 76,
    alignItems: "center",
    display: "flex",
  },
  esttica: {
    letterSpacing: 0.2,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    color: Color.darkgray_200,
    width: 32,
    height: 9,
    fontSize: FontSize.size_5xs,
    justifyContent: "center",
    textAlign: "center",
    left: 76,
    top: 8,
  },
  loremIpsumDolor: {
    top: 62,
    lineHeight: 12,
    width: 361,
    fontSize: FontSize.size_5xs,
    left: 8,
  },
  novidade2: {
    top: 138,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    height: 118,
    width: 377,
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.4)",
    left: 0,
    position: "absolute",
  },
  saibaComoCortar: {
    top: 41,
    lineHeight: 18,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.ralewayRegular,
    left: 76,
  },
  novidade1: {
    overflow: "hidden",
    height: 118,
    width: 377,
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.4)",
    left: 0,
    top: 8,
  },
  novidades1: {
    top: 24,
    left: 1,
    width: 391,
    height: 190,
    position: "absolute",
  },
  novidades2: {
    top: 0,
    left: -4,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.5,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemiBold,
    width: 88,
    height: 24,
    color: Color.black,
    justifyContent: "center",
    textAlign: "center",
  },
  novidades: {
    top: 580,
    left: 15,
    width: 392,
    height: 214,
    position: "absolute",
  },
});

export default NewsContainer;
