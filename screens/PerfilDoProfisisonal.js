import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import ModalContaCriada from "../components/ModalContaCriada";
import { useNavigation } from "@react-navigation/native";
import ServiceDescriptionContainer1 from "../components/ServiceDescriptionContainer1";
import FormContainer2 from "../components/FormContainer2";
import CardContainer from "../components/CardContainer";
import Property1Default1 from "../components/Property1Default1";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const PerfilDoProfisisonal = () => {
  const [botoAvaliarContainerVisible, setBotoAvaliarContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openBotoAvaliarContainer = useCallback(() => {
    setBotoAvaliarContainerVisible(true);
  }, []);

  const closeBotoAvaliarContainer = useCallback(() => {
    setBotoAvaliarContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.perfilDoProfisisonal}>
        <View style={styles.parent}>
          <View style={styles.view}>
            <ServiceDescriptionContainer1 />
            <FormContainer2 />
          </View>
          <CardContainer />
        </View>
        <View style={[styles.perfil, styles.perfilPosition]}>
          <Text style={[styles.fulanoSilva, styles.fulanoSilvaFlexBox]}>
            Fulano Silva
          </Text>
          <Image
            style={[styles.fotoDePerfil, styles.perfilPosition]}
            contentFit="cover"
            source={require("../assets/foto-de-perfil1.png")}
          />
          <Image
            style={styles.materialSymbolseditIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolsedit1.png")}
          />
          <View
            style={[styles.materialSymbolsstarParent, styles.navbarPosition]}
          >
            <Image
              style={styles.materialSymbolsstarIcon}
              contentFit="cover"
              source={require("../assets/materialsymbolsstar.png")}
            />
            <Text style={styles.text}>4,85</Text>
          </View>
        </View>
        <Property1Default1
          icon={require("../assets/icon4.png")}
          vector={require("../assets/vector8.png")}
          label="Serviços"
          icon1={require("../assets/icon5.png")}
          mdiclipboardTextHistory={require("../assets/icon1.png")}
          label1="Mensagens"
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
          onTabItemPress2={() => navigation.navigate("ChatProfissional")}
          onTabItemPress4={() => navigation.navigate("ContaProfissional")}
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
        <View style={[styles.navbar, styles.navbarPosition]}>
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
          <Text style={[styles.contaProfissional, styles.fulanoSilvaFlexBox]}>
            Conta Profissional
          </Text>
        </View>
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
    </>
  );
};

const styles = StyleSheet.create({
  perfilPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  fulanoSilvaFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 18,
    justifyContent: "center",
  },
  navbarPosition: {
    flexDirection: "row",
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
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
  view: {
    justifyContent: "center",
  },
  parent: {
    top: 336,
    left: 17,
    position: "absolute",
  },
  fulanoSilva: {
    marginTop: 39,
    marginLeft: -65,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.ralewayRegular,
    width: 124,
    height: 26,
    color: Color.black,
    letterSpacing: 0.5,
    alignItems: "center",
    display: "flex",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  fotoDePerfil: {
    marginTop: -92,
    marginLeft: -60,
    width: 125,
    height: 124,
  },
  materialSymbolseditIcon: {
    top: 7,
    left: 98,
    width: 26,
    height: 23,
    overflow: "hidden",
    position: "absolute",
  },
  materialSymbolsstarIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    marginLeft: 2,
    textAlign: "center",
    lineHeight: 18,
    color: Color.black,
    letterSpacing: 0.5,
  },
  materialSymbolsstarParent: {
    marginTop: 68,
    marginLeft: -29,
    width: 58,
    height: 24,
    justifyContent: "center",
  },
  perfil: {
    marginTop: -330.5,
    marginLeft: -64.5,
    width: 130,
    height: 184,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 19,
    height: 19,
  },
  contaProfissional: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    color: Color.darkseagreen,
    width: 248,
    height: 35,
    marginLeft: 60,
  },
  navbar: {
    marginTop: -417.5,
    marginLeft: -215.5,
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
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_base,
    overflow: "hidden",
  },
  perfilDoProfisisonal: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 929,
    width: "100%",
  },
});

export default PerfilDoProfisisonal;
