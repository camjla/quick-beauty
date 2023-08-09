import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import ContainerCard from "./ContainerCard";
import { useNavigation } from "@react-navigation/native";
import ModalAdicionar1Servio from "./ModalAdicionar1Servio";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const ServiceDescriptionContainer1 = () => {
  const navigation = useNavigation();
  const [adicionarUmNovoServioVisible, setAdicionarUmNovoServioVisible] =
    useState(false);

  const openAdicionarUmNovoServio = useCallback(() => {
    setAdicionarUmNovoServioVisible(true);
  }, []);

  const closeAdicionarUmNovoServio = useCallback(() => {
    setAdicionarUmNovoServioVisible(false);
  }, []);

  return (
    <>
      <View style={styles.descrioEServios}>
        <View style={styles.descrio}>
          <ContainerCard />
          <Text style={[styles.descrio1, styles.descrio1Typo]}>{`Descrição
`}</Text>
        </View>
        <Pressable
          style={styles.informaesDePagamentoParent}
          onPress={() => navigation.navigate("PerfilDoProfisisonalPagamento")}
        >
          <Text style={[styles.informaesDePagamento, styles.depilaoFlexBox]}>
            Informações de pagamento
          </Text>
          <View style={styles.ajusteEConsulteSeusDadosBParent}>
            <Text style={[styles.ajusteEConsulte, styles.descrio1Typo]}>
              Ajuste e consulte seus dados bancários e pagamentos.
            </Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector12.png")}
            />
          </View>
        </Pressable>
        <View style={styles.seusServios}>
          <Text style={[styles.seusServios1, styles.depilaoFlexBox]}>
            Seus Serviços
          </Text>
          <View style={[styles.frameParent, styles.parentPosition]}>
            <View
              style={[styles.designerDeCiliosParent, styles.descrio1Position]}
            >
              <Text style={[styles.designerDeCilios, styles.r6300Typo]}>
                Designer de Cilios
              </Text>
              <View style={[styles.rectangleParent, styles.groupItemShadowBox]}>
                <View style={[styles.groupChild, styles.groupLayout]} />
                <Text style={[styles.r6300, styles.r6300Typo]}>R$63,00</Text>
                <Image
                  style={[
                    styles.materialSymbolseditIcon,
                    styles.materialIconLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/materialsymbolsedit2.png")}
                />
              </View>
            </View>
            <Text style={[styles.vocRecebe5544, styles.vocTypo]}>
              Você recebe 55,44
            </Text>
            <Image
              style={[
                styles.materialSymbolseditIcon1,
                styles.materialIconLayout,
              ]}
              contentFit="cover"
              source={require("../assets/materialsymbolsedit2.png")}
            />
            <View style={[styles.depilaoParent, styles.parentPosition]}>
              <Text style={[styles.depilao, styles.r6300Typo]}>Depilação</Text>
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupItem, styles.groupLayout]} />
                <Text style={[styles.r6300, styles.r6300Typo]}>R$70,00</Text>
              </View>
            </View>
            <Text style={[styles.vocRecebe6160, styles.vocTypo]}>
              Você recebe 61,60
            </Text>
          </View>
          <Pressable
            style={[styles.adicionarUmNovoServio, styles.parentPosition]}
            onPress={openAdicionarUmNovoServio}
          >
            <Image
              style={styles.plusIcon}
              contentFit="cover"
              source={require("../assets/plus.png")}
            />
            <Text style={[styles.adicionarOuAlterar, styles.r6300Typo]}>
              Adicionar ou alterar um novo serviço
            </Text>
          </Pressable>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={adicionarUmNovoServioVisible}
      >
        <View style={styles.adicionarUmNovoServioOverlay}>
          <Pressable
            style={styles.adicionarUmNovoServioBg}
            onPress={closeAdicionarUmNovoServio}
          />
          <ModalAdicionar1Servio onClose={closeAdicionarUmNovoServio} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  descrio1Typo: {
    textAlign: "justify",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
  },
  depilaoFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  parentPosition: {
    left: 1,
    position: "absolute",
  },
  descrio1Position: {
    left: 0,
    position: "absolute",
  },
  r6300Typo: {
    fontFamily: FontFamily.ralewayRegular,
    color: Color.black,
    lineHeight: 18,
  },
  groupItemShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupLayout: {
    height: 22,
    width: 68,
  },
  materialIconLayout: {
    overflow: "hidden",
    width: 13,
    height: 12,
    position: "absolute",
  },
  vocTypo: {
    width: 74,
    color: Color.gray_800,
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_5xs,
    left: 124,
    height: 21,
    alignItems: "center",
    display: "flex",
    textAlign: "justify",
    lineHeight: 18,
    position: "absolute",
  },
  descrio1: {
    color: Color.black,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    textAlign: "justify",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    left: 0,
    position: "absolute",
    top: 0,
  },
  descrio: {
    height: 187,
    width: 387,
  },
  informaesDePagamento: {
    width: 195,
    alignItems: "center",
    textAlign: "justify",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    color: Color.black,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
  },
  ajusteEConsulte: {
    fontSize: FontSize.size_3xs,
    color: Color.gray_400,
    letterSpacing: 0.3,
    textAlign: "justify",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
  },
  vectorIcon: {
    width: 7,
    marginLeft: 105,
    height: 12,
  },
  ajusteEConsulteSeusDadosBParent: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    width: 387,
  },
  informaesDePagamentoParent: {
    marginTop: 20,
    justifyContent: "center",
  },
  seusServios1: {
    width: 163,
    alignItems: "center",
    textAlign: "justify",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    color: Color.black,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
    top: 0,
  },
  designerDeCilios: {
    width: 106,
    height: 23,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.ralewayRegular,
    textAlign: "justify",
    letterSpacing: 0.4,
    alignItems: "center",
    display: "flex",
  },
  groupChild: {
    backgroundColor: Color.gainsboro_300,
    width: 68,
    left: 0,
    top: 0,
    position: "absolute",
  },
  r6300: {
    top: 2,
    left: 9,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.ralewayRegular,
    textAlign: "justify",
    letterSpacing: 0.4,
    position: "absolute",
  },
  materialSymbolseditIcon: {
    top: 56,
    left: 74,
  },
  rectangleParent: {
    width: 87,
    height: 68,
    marginLeft: 20,
  },
  designerDeCiliosParent: {
    top: 5,
    flexDirection: "row",
  },
  vocRecebe5544: {
    top: 25,
    height: 21,
  },
  materialSymbolseditIcon1: {
    left: 200,
    top: 0,
  },
  depilao: {
    width: 105,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.ralewayRegular,
    textAlign: "justify",
    letterSpacing: 0.4,
    alignItems: "center",
    display: "flex",
  },
  groupItem: {
    backgroundColor: Color.gainsboro_300,
    width: 68,
    left: 0,
    top: 0,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  rectangleGroup: {
    marginLeft: 20,
  },
  depilaoParent: {
    top: 66,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  vocRecebe6160: {
    top: 86,
    height: 21,
  },
  frameParent: {
    top: 29,
    width: 213,
    height: 107,
  },
  adicionarUmNovoServioOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  adicionarUmNovoServioBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  plusIcon: {
    width: 21,
    height: 21,
  },
  adicionarOuAlterar: {
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    marginLeft: 16,
    letterSpacing: 0.3,
  },
  adicionarUmNovoServio: {
    top: 143,
    flexDirection: "row",
    alignItems: "center",
  },
  seusServios: {
    width: 235,
    height: 164,
    marginTop: 20,
  },
  descrioEServios: {
    justifyContent: "flex-end",
  },
});

export default ServiceDescriptionContainer1;
