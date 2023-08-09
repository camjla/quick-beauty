import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ProfileCard1 = () => {
  return (
    <View style={[styles.perfil, styles.perfilPosition]}>
      <Text style={[styles.fulanoSilva, styles.fulanoSilvaPosition]}>
        Fulano Silva
      </Text>
      <Image
        style={[styles.fotoDePerfil, styles.perfilPosition]}
        contentFit="cover"
        source={require("../assets/foto-de-perfil.png")}
      />
      <View
        style={[styles.materialSymbolsstarParent, styles.fulanoSilvaPosition]}
      >
        <Image
          style={styles.materialSymbolsstarIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolsstar.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>4,62</Text>
      </View>
      <Image
        style={styles.materialSymbolseditIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolsedit.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  perfilPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  fulanoSilvaPosition: {
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.black,
    lineHeight: 18,
  },
  fulanoSilva: {
    marginTop: 37.5,
    marginLeft: -99,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.8,
    fontFamily: FontFamily.ralewayRegular,
    display: "flex",
    height: 71,
    textAlign: "center",
    color: Color.black,
    lineHeight: 18,
    width: 198,
  },
  fotoDePerfil: {
    marginTop: -116.5,
    marginLeft: -79,
    width: 157,
    height: 158,
  },
  materialSymbolsstarIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0.5,
    fontFamily: FontFamily.robotoRegular,
    marginLeft: 2,
  },
  materialSymbolsstarParent: {
    marginTop: 92.5,
    marginLeft: -29,
    width: 58,
    height: 24,
    flexDirection: "row",
  },
  materialSymbolseditIcon: {
    top: 3,
    left: 133,
    width: 44,
    height: 40,
    overflow: "hidden",
    position: "absolute",
  },
  perfil: {
    marginTop: -336.5,
    marginLeft: -96.5,
    height: 233,
    width: 198,
  },
});

export default ProfileCard1;
