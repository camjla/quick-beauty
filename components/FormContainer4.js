import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const FormContainer4 = () => {
  return (
    <View style={styles.distanciaParent}>
      <View style={styles.distancia}>
        <Text
          style={[styles.qualADistncia, styles.textTypo1]}
        >{`Qual a distância máxima que você aceitaria se deslocar para
fazer o serviço?`}</Text>
        <View style={[styles.kmParent, styles.parentFlexBox]}>
          <View style={[styles.km, styles.kmShadowBox]}>
            <Text style={[styles.at4km, styles.textTypo]}>Até 4km</Text>
          </View>
          <View style={[styles.km10km, styles.km1ShadowBox]}>
            <Text style={[styles.at4km, styles.textTypo]}>5km- 10km</Text>
          </View>
          <View style={[styles.km1, styles.km1ShadowBox]}>
            <Text style={[styles.at4km, styles.textTypo]}>+11km</Text>
          </View>
        </View>
      </View>
      <View style={styles.servios}>
        <Text style={styles.selecioneOServio}>
          Selecione o serviço que deseja realizar
        </Text>
        <View style={styles.servios1}>
          <View style={[styles.maquiador, styles.maquiadorPosition]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
            <Text style={[styles.maquiador1, styles.textTypo]}>Maquiador</Text>
          </View>
          <View style={[styles.manicure, styles.manicurePosition]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
            <Text style={[styles.maquiador1, styles.textTypo]}>Manicure</Text>
          </View>
          <View style={[styles.cabelereiro, styles.manicurePosition]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
            <Text style={[styles.maquiador1, styles.textTypo]}>
              Cabelereiro
            </Text>
          </View>
          <View style={[styles.cilios, styles.ciliosPosition]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
            <Text style={[styles.maquiador1, styles.textTypo]}>
              Designer de cilios
            </Text>
          </View>
          <View style={[styles.sobrancelha, styles.maquiadorPosition]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
            <Text style={[styles.maquiador1, styles.textTypo]}>
              Designer de Sobrancelha
            </Text>
          </View>
          <View style={[styles.massagista, styles.ciliosPosition]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
            <Text style={[styles.maquiador1, styles.textTypo]}>Massagista</Text>
          </View>
          <View style={[styles.barbeiro, styles.barbeiroPosition]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
            <Text style={[styles.maquiador1, styles.textTypo]}>Barbeiro</Text>
          </View>
          <View style={[styles.depilao, styles.depilaoPosition]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
            <Text style={[styles.maquiador1, styles.textTypo]}>Depilação</Text>
          </View>
          <View style={[styles.pedicure, styles.depilaoPosition]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
            <Text style={[styles.maquiador1, styles.textTypo]}>Pedicure</Text>
          </View>
          <View style={[styles.esteticista, styles.barbeiroPosition]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
            <Text style={[styles.maquiador1, styles.textTypo]}>
              Esteticista
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.servios}>
        <Text style={styles.selecioneOServio}>
          Até quantos serviços você pode realizar por dia?
        </Text>
        <View style={[styles.subwaysubtractionParent, styles.parentFlexBox]}>
          <Image
            style={styles.subwaysubtractionIcon}
            contentFit="cover"
            source={require("../assets/subwaysubtraction.png")}
          />
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Text style={[styles.text, styles.textTypo]}>1</Text>
          </View>
          <Image
            style={styles.mdiplusCircleIcon}
            contentFit="cover"
            source={require("../assets/mdipluscircle.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  kmShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gainsboro_400,
  },
  textTypo: {
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    lineHeight: 18,
  },
  km1ShadowBox: {
    marginLeft: 20,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gainsboro_400,
    flexDirection: "row",
  },
  maquiadorPosition: {
    top: 68,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  manicurePosition: {
    top: 23,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  ciliosPosition: {
    top: 45,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  barbeiroPosition: {
    top: 0,
    position: "absolute",
  },
  depilaoPosition: {
    top: 91,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  groupChildLayout: {
    height: 34,
    width: 74,
  },
  qualADistncia: {
    color: Color.black,
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
    lineHeight: 18,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  at4km: {
    fontSize: FontSize.size_smi,
    textAlign: "justify",
    color: Color.black,
  },
  km: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_6xs,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  km10km: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  km1: {
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_6xs,
  },
  kmParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    marginTop: 20,
    justifyContent: "center",
  },
  distancia: {
    justifyContent: "center",
    alignItems: "center",
  },
  selecioneOServio: {
    letterSpacing: 0.4,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.size_xs,
  },
  vectorIcon: {
    width: 11,
    height: 11,
  },
  maquiador1: {
    color: Color.gray_1000,
    marginLeft: 10,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontWeight: "500",
  },
  maquiador: {
    left: 202,
  },
  manicure: {
    left: 202,
  },
  cabelereiro: {
    left: 0,
  },
  cilios: {
    left: 0,
  },
  sobrancelha: {
    left: 0,
  },
  massagista: {
    left: 202,
  },
  barbeiro: {
    left: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  depilao: {
    left: 0,
  },
  pedicure: {
    left: 202,
  },
  esteticista: {
    left: 202,
    flexDirection: "row",
    alignItems: "center",
  },
  servios1: {
    width: 289,
    height: 109,
    marginTop: 20,
  },
  servios: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  subwaysubtractionIcon: {
    width: 17,
    height: 17,
    overflow: "hidden",
  },
  groupChild: {
    top: 0,
    position: "absolute",
    left: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gainsboro_400,
  },
  text: {
    top: 7,
    left: 36,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: 10,
  },
  mdiplusCircleIcon: {
    width: 21,
    height: 20,
    marginLeft: 10,
    overflow: "hidden",
  },
  subwaysubtractionParent: {
    marginTop: 20,
    justifyContent: "center",
  },
  distanciaParent: {
    top: 204,
    left: 52,
    alignItems: "center",
    position: "absolute",
  },
});

export default FormContainer4;
