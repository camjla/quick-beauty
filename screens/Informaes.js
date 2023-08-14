import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import ModalEscolhaUmTipo from "../components/ModalEscolhaUmTipo";
import { useNavigation } from "@react-navigation/native";
import ContactFormContainer from "../components/ContactFormContainer";
import FaqContainer from "../components/FaqContainer";
import FormContainer from "../components/FormContainer";
import Property1Default1 from "../components/Property1Default1";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Informaes = () => {
  const [frameVisible, setFrameVisible] = useState(false);
  const navigation = useNavigation();

  const openFrame = useCallback(() => {
    setFrameVisible(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameVisible(false);
  }, []);

  return (
    <>
      <View style={styles.informaes}>
        <ContactFormContainer />
        <Text style={[styles.faleConosco, styles.informaes1Typo]}>
          Fale Conosco
        </Text>
        <FaqContainer />
        <View style={styles.informaesChild} />
        <Text style={[styles.perguntasFrequentes, styles.informaes1FlexBox]}>
          Perguntas frequentes
        </Text>
        <View style={styles.problemasComEsseServio}>
          <Text style={[styles.problemasComEsse, styles.informaes1FlexBox]}>
            Problemas com esse serviço?
          </Text>
          <Text
            style={[styles.oServioAindaContainer, styles.faleConoscoLayout]}
          >
            <Text style={styles.oServioAindaContainer1}>
              <Text
                style={styles.oServioAinda}
              >{`O serviço ainda não foi finalizado. Você tem até 1 dia após o dia do
serviço realizado para nos informar algum problema.
`}</Text>
              <Text style={styles.text}>{` `}</Text>
            </Text>
          </Text>
        </View>
        <FormContainer
          imageDimensions={require("../assets/ellipse-202.png")}
          onFramePressablePress={openFrame}
        />
        <Text style={[styles.seuLtimoServio, styles.informaes1FlexBox]}>
          Seu último serviço foi
        </Text>
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
          groupIconRight="-0.63%"
          groupIconWidth="103.34%"
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
          onTabItemPress4={() => navigation.navigate("Conta")}
        />
        <IPhoneStatusBarupper
          notch={require("../assets/notch3.png")}
          iPhoneStatusBarupperPosition="absolute"
          iPhoneStatusBarupperWidth="unset"
          iPhoneStatusBarupperMarginTop={-462.5}
          iPhoneStatusBarupperTop="50%"
          iPhoneStatusBarupperRight={0}
          iPhoneStatusBarupperLeft={0}
          iPhoneStatusBarupperBackgroundColor="#924d4d"
        />
        <View style={styles.navbar}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("Conta")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/vector-4.png")}
            />
          </Pressable>
          <Text style={[styles.informaes1, styles.informaes1FlexBox]}>
            Informações
          </Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameVisible}>
        <View style={styles.frameOverlay}>
          <Pressable style={styles.frameBg} onPress={closeFrame} />
          <ModalEscolhaUmTipo onClose={closeFrame} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  informaes1Typo: {
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
  },
  informaes1FlexBox: {
    textAlign: "center",
    lineHeight: 18,
  },
  faleConoscoLayout: {
    lineHeight: 18,
    display: "flex",
  },
  frameOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  faleConosco: {
    top: 679,
    color: "#050505",
    textAlign: "left",
    width: 171,
    height: 22,
    alignItems: "center",
    display: "flex",
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    position: "absolute",
    left: 17,
  },
  informaesChild: {
    top: 482,
    backgroundColor: Color.lightpink_300,
    width: 198,
    height: 1,
    left: 17,
    position: "absolute",
  },
  perguntasFrequentes: {
    top: 455,
    color: Color.black,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    position: "absolute",
    left: 17,
  },
  problemasComEsse: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemiBold,
    width: 240,
    height: 27,
    justifyContent: "center",
    color: Color.black,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.5,
  },
  oServioAinda: {
    color: Color.gray_800,
  },
  text: {
    color: Color.black,
  },
  oServioAindaContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  oServioAindaContainer: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    textAlign: "justify",
    alignItems: "flex-end",
    marginTop: 10,
    width: 404,
    display: "flex",
  },
  problemasComEsseServio: {
    top: 344,
    height: 56,
    paddingTop: Padding.p_3xs,
    paddingRight: 1,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    width: 404,
    left: 17,
    position: "absolute",
  },
  seuLtimoServio: {
    top: 141,
    left: 14,
    color: Color.black,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 19,
    height: 19,
  },
  informaes1: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    color: Color.darkseagreen,
    width: 244,
    height: 35,
    marginLeft: 60,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
  },
  navbar: {
    marginTop: -417.5,
    marginLeft: -215.5,
    top: "50%",
    left: "50%",
    backgroundColor: Color.whitesmoke_100,
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
    width: 431,
    height: 53,
    overflow: "hidden",
    flexDirection: "row",
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_base,
    alignItems: "center",
    position: "absolute",
  },
  informaes: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 929,
    width: "100%",
  },
});

export default Informaes;
