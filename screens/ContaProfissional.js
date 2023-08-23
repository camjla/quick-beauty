import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ModalSairDeSuaConta from "../components/ModalSairDeSuaConta";
import ProfileCard1 from "../components/ProfileCard1";
import Property1Default1 from "../components/Property1Default1";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const ContaProfissional = () => {
  const [sairContainerVisible, setSairContainerVisible] = useState(false);
  const navigation = useNavigation();

  const openSairContainer = useCallback(() => {
    setSairContainerVisible(true);
  }, []);

  const closeSairContainer = useCallback(() => {
    setSairContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.contaProfissional}>
        <Pressable
          style={[styles.sair, styles.sairFlexBox]}
          onPress={openSairContainer}
        >
          <Image
            style={styles.solarlogout2LinearIcon}
            contentFit="cover"
            source={require("../assets/solarlogout2linear.png")}
          />
          <Text style={[styles.sair1, styles.sair1FlexBox]}>Sair</Text>
        </Pressable>
        <Pressable
          style={[styles.informaes, styles.sairFlexBox]}
          onPress={() => navigation.navigate("Informaes")}
        >
          <Image
            style={styles.materialSymbolscontactSuppoIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolscontactsupportoutline.png")}
          />
          <Text style={[styles.informaes1, styles.sair1FlexBox]}>
            Informações
          </Text>
        </Pressable>
        <ProfileCard1 />
        <Text style={[styles.suporte, styles.contaTypo]}>Suporte</Text>
        <View style={[styles.mdisettingsParent, styles.sair1FlexBox]}>
          <View style={styles.mdisettings} />
          <View
            style={[
              styles.fluentpayment16Regular,
              styles.mdipersonTieIconSpaceBlock,
            ]}
          />
          <View
            style={[
              styles.mdimessageBadgeOutline,
              styles.mdipersonTieIconSpaceBlock,
            ]}
          />
          <View
            style={[
              styles.icoutlineWorkHistory,
              styles.icoutlineWorkHistoryLayout,
            ]}
          />
          <Image
            style={[
              styles.iconParkSolidlocalTwo,
              styles.icoutlineWorkHistoryLayout,
            ]}
            contentFit="cover"
            source={require("../assets/iconparksolidlocaltwo.png")}
          />
          <Image
            style={[styles.mdipersonTieIcon, styles.mdipersonTieIconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/mdipersontie1.png")}
          />
        </View>
        <Image
          style={[
            styles.materialSymbolsarrowForwardIcon,
            styles.materialIconLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/materialsymbolsarrowforwardios.png")}
        />
        <Pressable
          style={[styles.perfilProfissional, styles.alterarEndereoPosition]}
          onPress={() => navigation.navigate("PerfilDoProfisisonal")}
        >
          <Text style={styles.mensagens1Typo}>Perfil Profissional</Text>
        </Pressable>
        <Pressable
          style={[
            styles.materialSymbolsarrowForward,
            styles.materialIconLayout1,
          ]}
          onPress={() => navigation.navigate("AlterarEndereo")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/materialsymbolsarrowforwardios.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.alterarEndereo, styles.alterarEndereoPosition]}
          onPress={() => navigation.navigate("AlterarEndereo")}
        >
          <Text style={styles.mensagens1Typo}>Alterar endereço</Text>
        </Pressable>
        <Pressable
          style={[styles.histrico, styles.configPosition]}
          onPress={() => navigation.navigate("HistoricoServios")}
        >
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.histricoDeServios, styles.mensagens1Typo]}>
            Histórico de serviços
          </Text>
          <Image
            style={[
              styles.materialSymbolsarrowForwardIcon1,
              styles.materialIconPosition,
            ]}
            contentFit="cover"
            source={require("../assets/materialsymbolsarrowforwardios.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mensagens, styles.configPosition]}
          onPress={() => navigation.navigate("HistoricoMensagens")}
        >
          <Image
            style={[styles.vectorIcon2, styles.vectorIcon2Position]}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Image
            style={[styles.mensagensChild, styles.vectorIcon2Position]}
            contentFit="cover"
            source={require("../assets/ellipse-14.png")}
          />
          <Text style={[styles.mensagens1, styles.mensagens1Typo]}>
            Mensagens
          </Text>
          <Image
            style={[
              styles.materialSymbolsarrowForwardIcon2,
              styles.materialIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/materialsymbolsarrowforwardios.png")}
          />
        </Pressable>
        <View style={[styles.pagamento, styles.configPosition]}>
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector13.png")}
          />
          <Text style={[styles.pagamento1, styles.pagamento1Position]}>
            Pagamento
          </Text>
          <Image
            style={[
              styles.materialSymbolsarrowForwardIcon3,
              styles.materialIconPosition,
            ]}
            contentFit="cover"
            source={require("../assets/materialsymbolsarrowforwardios.png")}
          />
        </View>
        <Pressable
          style={[styles.config, styles.configPosition]}
          onPress={() => navigation.navigate("ConfiguraesUserNormal")}
        >
          <Image
            style={[styles.vectorIcon4, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Text style={[styles.configurao, styles.pagamento1Position]}>
            Configuração
          </Text>
          <Image
            style={[
              styles.materialSymbolsarrowForwardIcon4,
              styles.pagamento1Position,
            ]}
            contentFit="cover"
            source={require("../assets/materialsymbolsarrowforwardios.png")}
          />
        </Pressable>
        <Property1Default1
          icon={require("../assets/icon4.png")}
          vector={require("../assets/vector8.png")}
          label="Serviços"
          icon1={require("../assets/icon1.png")}
          mdiclipboardTextHistory={require("../assets/mdiclipboardtexthistory2.png")}
          label1="Histórico"
          icon2={require("../assets/icon1.png")}
          group={require("../assets/group4.png")}
          label2="Conta"
          showMarkerComponent={false}
          markerComponentVisible={false}
          showRound
          showMdiclipboardTextHistoryIc
          markerComponentVisible1={false}
          roundVisible
          property1DefaultPosition="absolute"
          property1DefaultWidth="unset"
          property1DefaultHeight={90}
          property1DefaultRight={27}
          property1DefaultBottom={4}
          property1DefaultLeft={26}
          property1DefaultOverflow="hidden"
          labelPosition="relative"
          labelFontSize={13}
          labelLetterSpacing={0.4}
          labelLineHeight={18}
          labelFontWeight="500"
          labelFontFamily="Raleway-Medium"
          labelColor="#656070"
          labelTextAlign="center"
          labelMarginTop={4}
          labelWidth="unset"
          labelHeight="unset"
          tabItemFlex={1}
          tabItemFlexDirection="column"
          tabItemAlignItems="center"
          tabItemJustifyContent="center"
          tabItemMarginLeft={5}
          tabItemPosition="unset"
          tabItemMarginTop="unset"
          iconViewPosition="relative"
          iconViewWidth={24}
          iconViewHeight={24}
          iconViewFlexDirection="unset"
          iconViewAlignItems="unset"
          iconViewJustifyContent="unset"
          iconViewMarginLeft="unset"
          iconPosition="absolute"
          iconTop={0}
          iconLeft={0}
          iconOverflow="hidden"
          markerComponentTop={-4}
          markerComponentLeft={14}
          markerComponentBorderRadius={6}
          markerComponentWidth={16}
          markerComponentHeight={16}
          roundTop={4}
          roundRight={6}
          roundBorderRadius={4}
          roundBackgroundColor="#fa6d8d"
          roundJustifyContent="center"
          roundAlignItems="center"
          roundLeft="unset"
          roundWidth="unset"
          roundHeight="unset"
          roundOverflow="unset"
          mdiclipboardTextHistoryIcTop={2}
          mdiclipboardTextHistoryIcLeft={0}
          mdiclipboardTextHistoryIcWidth={24}
          mdiclipboardTextHistoryIcHeight={24}
          mdiclipboardTextHistoryIcOverflow="hidden"
          mdiclipboardTextHistoryIcRight="unset"
          mdiclipboardTextHistoryIcBackgroundColor="unset"
          mdiclipboardTextHistoryIcJustifyContent="unset"
          mdiclipboardTextHistoryIcAlignItems="unset"
          labelPosition1="relative"
          labelFontSize1={13}
          labelLetterSpacing1={0.4}
          labelLineHeight1={18}
          labelFontWeight1="500"
          labelFontFamily1="Raleway-Medium"
          labelColor1="#656070"
          labelTextAlign1="center"
          labelMarginTop1={4}
          labelTop="unset"
          labelLeft="unset"
          labelWidth1="unset"
          labelHeight1="unset"
          labelOverflow="unset"
          tabItemFlex1={1}
          tabItemFlexDirection1="column"
          tabItemAlignItems1="center"
          tabItemJustifyContent1="center"
          tabItemMarginLeft1={5}
          tabItemPosition1="unset"
          tabItemMarginTop1="unset"
          iconViewPosition1="relative"
          iconViewWidth1={24}
          iconViewHeight1={24}
          iconViewFlexDirection1="unset"
          iconViewAlignItems1="unset"
          iconViewJustifyContent1="unset"
          iconViewMarginLeft1="unset"
          iconPosition1="absolute"
          iconTop1={0}
          iconLeft1={0}
          iconOverflow1="hidden"
          markerComponentTop1={-4}
          markerComponentLeft1={17}
          markerComponentBorderRadius1={6}
          markerComponentWidth1={16}
          markerComponentHeight1={16}
          roundTop1={4}
          roundRight1={6}
          roundBorderRadius1={4}
          roundBackgroundColor1="#ff0066"
          roundJustifyContent1="center"
          roundAlignItems1="center"
          roundLeft1="unset"
          roundWidth1="unset"
          roundHeight1="unset"
          roundOverflow1="unset"
          groupIconRight="-0.62%"
          groupIconWidth="103.33%"
          groupIconHeight="86.67%"
          groupIconTop="15%"
          groupIconBottom="-1.67%"
          groupIconLeft="-2.71%"
          groupIconMaxWidth="100%"
          groupIconOverflow="hidden"
          groupIconMaxHeight="100%"
          groupIconBackgroundColor="unset"
          groupIconJustifyContent="unset"
          groupIconAlignItems="unset"
          labelPosition2="relative"
          labelFontSize2={13}
          labelLetterSpacing2={0.4}
          labelLineHeight2={18}
          labelFontWeight2="500"
          labelFontFamily2="Raleway-Medium"
          labelColor2="#656070"
          labelTextAlign2="center"
          labelMarginTop2={4}
          labelHeight2="unset"
          labelWidth2="unset"
          labelTop1="unset"
          labelRight="unset"
          labelBottom="unset"
          labelLeft1="unset"
          labelMaxWidth="unset"
          labelOverflow1="unset"
          labelMaxHeight="unset"
          homeIndicatorDarkAlignSelf="stretch"
          homeIndicatorDarkHeight={34}
          homeIndicatorDarkMarginTop="unset"
          homeIndicatorMarginLeft={-67}
          homeIndicatorPosition="absolute"
          homeIndicatorBottom={8}
          homeIndicatorLeft="50%"
          homeIndicatorBorderRadius={100}
          homeIndicatorBackgroundColor="#0b0712"
          homeIndicatorWidth={134}
          homeIndicatorHeight={5}
          homeIndicatorAlignSelf="unset"
          onTabItemPress={() => navigation.navigate("HomeAutomatico")}
          onTabItemPress1={() => navigation.navigate("Servio")}
        />
      
        <Pressable
          style={[styles.navbar, styles.sairFlexBox]}
          onPress={() => navigation.navigate("HomeAutomatico")}
        >
          <Image
            style={styles.navbarChild}
            contentFit="cover"
            source={require("../assets/vector-4.png")}
          />
          <Text style={[styles.conta, styles.contaTypo]}>Conta</Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={sairContainerVisible}>
        <View style={styles.sairContainerOverlay}>
          <Pressable
            style={styles.sairContainerBg}
            onPress={closeSairContainer}
          />
          <ModalSairDeSuaConta onClose={closeSairContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  sairFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  sair1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  contaTypo: {
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 18,
    alignItems: "center",
  },
  mdipersonTieIconSpaceBlock: {
    marginTop: 20,
    overflow: "hidden",
  },
  icoutlineWorkHistoryLayout: {
    width: 30,
    marginTop: 20,
    overflow: "hidden",
  },
  materialIconLayout1: {
    height: 24,
    width: 24,
  },
  alterarEndereoPosition: {
    left: 70,
    position: "absolute",
  },
  configPosition: {
    right: "3.7%",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  mensagens1Typo: {
    color: Color.darkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
  },
  materialIconPosition: {
    top: 0,
    position: "absolute",
  },
  vectorIcon2Position: {
    top: "14.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  materialIconLayout: {
    left: 368,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  pagamento1Position: {
    top: 3,
    position: "absolute",
  },
  sairContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  sairContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  solarlogout2LinearIcon: {
    width: 26,
    height: 25,
    overflow: "hidden",
  },
  sair1: {
    width: 39,
    marginLeft: 12,
    height: 31,
    display: "flex",
    textAlign: "center",
    color: Color.gray_300,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    justifyContent: "center",
  },
  sair: {
    top: 810,
    left: 29,
  },
  materialSymbolscontactSuppoIcon: {
    width: 35,
    height: 34,
    overflow: "hidden",
  },
  informaes1: {
    width: 115,
    height: 16,
    marginLeft: 6,
    display: "flex",
    textAlign: "center",
    color: Color.gray_300,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    justifyContent: "center",
  },
  informaes: {
    top: 763,
    left: 26,
  },
  suporte: {
    top: 711,
    left: 6,
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    color: Color.black,
    width: 169,
    height: 37,
    position: "absolute",
  },
  mdisettings: {
    width: 33,
    height: 35,
    overflow: "hidden",
  },
  fluentpayment16Regular: {
    width: 34,
    marginTop: 20,
    height: 37,
  },
  mdimessageBadgeOutline: {
    width: 31,
    height: 31,
  },
  icoutlineWorkHistory: {
    height: 29,
  },
  iconParkSolidlocalTwo: {
    height: 28,
  },
  mdipersonTieIcon: {
    height: 32,
    width: 34,
    marginTop: 20,
  },
  mdisettingsParent: {
    top: 383,
    left: 21,
    position: "absolute",
  },
  materialSymbolsarrowForwardIcon: {
    top: 647,
    left: 393,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  perfilProfissional: {
    top: 651,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  materialSymbolsarrowForward: {
    top: 595,
    left: 393,
    width: 24,
    position: "absolute",
  },
  alterarEndereo: {
    top: 600,
  },
  vectorIcon: {
    height: "72%",
    width: "6.47%",
    top: "20.43%",
    right: "93.53%",
    bottom: "7.58%",
    left: "0%",
  },
  vectorIcon1: {
    height: "37.89%",
    width: "3.23%",
    top: "62.11%",
    right: "93.21%",
    left: "3.56%",
    bottom: "0%",
  },
  histricoDeServios: {
    top: 6,
    left: 42,
    position: "absolute",
  },
  materialSymbolsarrowForwardIcon1: {
    left: 367,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  histrico: {
    height: "3.44%",
    width: "90.35%",
    top: "58.52%",
    bottom: "38.04%",
    left: "5.96%",
  },
  vectorIcon2: {
    height: "85.79%",
    width: "6.67%",
    right: "93.33%",
    bottom: "0%",
    left: "0%",
  },
  mensagensChild: {
    height: "24.15%",
    width: "2.07%",
    right: "93.3%",
    bottom: "61.64%",
    left: "4.63%",
  },
  mensagens1: {
    top: 5,
    left: 45,
    position: "absolute",
  },
  materialSymbolsarrowForwardIcon2: {
    top: 0,
    position: "absolute",
  },
  mensagens: {
    height: "3.58%",
    width: "90.44%",
    top: "52.95%",
    bottom: "43.48%",
    left: "5.86%",
  },
  vectorIcon3: {
    height: "76.3%",
    width: "7.4%",
    top: "23.7%",
    right: "92.6%",
    bottom: "0%",
    left: "0%",
  },
  pagamento1: {
    left: 48,
    color: Color.darkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
  },
  materialSymbolsarrowForwardIcon3: {
    left: 369,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  pagamento: {
    height: "2.94%",
    width: "90.79%",
    top: "47.48%",
    bottom: "49.58%",
    left: "5.52%",
  },
  vectorIcon4: {
    width: "6.9%",
    top: "0%",
    right: "93.1%",
    bottom: "0%",
    left: "0%",
    height: "100%",
  },
  configurao: {
    left: 43,
    color: Color.darkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
  },
  materialSymbolsarrowForwardIcon4: {
    left: 368,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  config: {
    height: "3.15%",
    width: "90.55%",
    top: "41.68%",
    bottom: "55.17%",
    left: "5.75%",
  },
  navbarChild: {
    width: 19,
    height: 19,
  },
  conta: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    color: Color.darkseagreen,
    width: 78,
    marginLeft: 137,
    height: 35,
  },
  navbar: {
    top: 47,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(151, 151, 151, 0.5)",
    borderBottomWidth: 1,
    width: 428,
    height: 53,
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_31xl,
    overflow: "hidden",
  },
  contaProfissional: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 933,
    width: "100%",
  },
});

export default ContaProfissional;
