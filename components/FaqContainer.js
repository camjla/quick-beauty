import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FaqContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perguntasFrequentes}>
      <View style={styles.pergunta1Parent}>
        <View style={styles.pergunta1Layout}>
          <Text style={[styles.comoFuncionaO, styles.comoFuncionaOLayout]}>
            Como funciona o reembolso?
          </Text>
          <View style={[styles.pergunta1Child, styles.childPosition]} />
        </View>
        <View style={[styles.pergunta2, styles.pergunta2Layout]}>
          <Pressable
            style={[styles.queroSerUmContainer, styles.childPosition]}
            onPress={() => navigation.navigate("SeTorneUmProfissionalInicio")}
          >
            <Text
              style={[
                styles.queroSerUmProfissionalQuic,
                styles.pergunta2Layout,
              ]}
            >
              Quero ser um profissional Quick Beauty
            </Text>
          </Pressable>
          <View style={[styles.pergunta2Child, styles.childPosition]} />
        </View>
      </View>
      <View style={styles.pergunta3Parent}>
        <View style={styles.pergunta3}>
          <Text style={[styles.comoPossoAlterar, styles.childPosition]}>
            Como posso alterar os dados da minha conta?
          </Text>
          <View style={styles.pergunta3Child} />
        </View>
        <View style={styles.pergunta4}>
          <Text style={[styles.meusDadosEsto, styles.childPosition]}>
            Meus dados estão protegidos com a Quick Beauty?
          </Text>
          <View style={styles.pergunta4Child} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comoFuncionaOLayout: {
    height: 21,
    width: 210,
  },
  childPosition: {
    left: 0,
    position: "absolute",
  },
  pergunta2Layout: {
    height: 22,
    width: 273,
  },
  comoFuncionaO: {
    left: 1,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    top: 3,
    position: "absolute",
  },
  pergunta1Child: {
    top: 0,
    height: 24,
    width: 272,
  },
  pergunta1Layout: {
    height: 24,
    width: 272,
  },
  queroSerUmProfissionalQuic: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
  },
  queroSerUmContainer: {
    top: 0,
  },
  pergunta2Child: {
    top: 1,
    height: 21,
    width: 210,
  },
  pergunta2: {
    marginTop: 15,
  },
  pergunta1Parent: {
    width: 366,
  },
  comoPossoAlterar: {
    height: 10,
    width: 322,
    top: 0,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
  },
  pergunta3Child: {
    top: 5,
    left: 14,
    width: 249,
    height: 15,
    position: "absolute",
  },
  pergunta3: {
    height: 20,
    width: 322,
  },
  meusDadosEsto: {
    width: 357,
    height: 11,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    top: 3,
  },
  pergunta4Child: {
    left: 8,
    width: 352,
    height: 20,
    top: 0,
    position: "absolute",
  },
  pergunta4: {
    height: 20,
    width: 360,
    marginTop: 15,
  },
  pergunta3Parent: {
    marginTop: 25,
    width: 360,
    justifyContent: "center",
  },
  perguntasFrequentes: {
    top: 510,
    left: 17,
    justifyContent: "center",
    position: "absolute",
  },
});

export default FaqContainer;
