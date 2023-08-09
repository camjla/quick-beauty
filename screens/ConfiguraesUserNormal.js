import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionCard1 from "../components/SectionCard1";
import ModalDesativarSuaConta from "../components/ModalDesativarSuaConta";
import Property1Default1 from "../components/Property1Default1";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ConfiguraesUserNormal = () => {
  const [botoContainerVisible, setBotoContainerVisible] = useState(false);
  const navigation = useNavigation();

  const openBotoContainer = useCallback(() => {
    setBotoContainerVisible(true);
  }, []);

  const closeBotoContainer = useCallback(() => {
    setBotoContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.configuraesUserNormal}>
        <Image
          style={styles.perfilIcon}
          contentFit="cover"
          source={require("../assets/perfil.png")}
        />
        <Text style={[styles.informaesDaConta, styles.informaesDaContaTypo]}>
          Informações da conta
        </Text>
        <Text
          style={[styles.seguranaEPrivacidade, styles.informaesDaContaTypo]}
        >
          Segurança e privacidade
        </Text>
        <SectionCard1 />
        <Pressable style={styles.boto} onPress={openBotoContainer}>
          <Text style={styles.desativarSuaConta}>Desativar sua conta</Text>
        </Pressable>
        <Pressable
          style={[styles.segurana, styles.seguranaLayout]}
          onPress={() => navigation.navigate("Segurana")}
        >
          <View style={[styles.seguranaChild, styles.childPosition]} />
          <View style={[styles.icsharpSecurityParent, styles.parentFlexBox]}>
            <Image
              style={[
                styles.icsharpSecurityIcon,
                styles.dashiconsprivacyLayout,
              ]}
              contentFit="cover"
              source={require("../assets/icsharpsecurity.png")}
            />
            <View style={styles.seguranaParent}>
              <Text style={styles.segurana1}>Segurança</Text>
              <Text
                style={[styles.garantaASegurana, styles.garantaASeguranaTypo]}
              >{`Garanta a segurança de sua conta com a 
verificação de duas etapas`}</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.privacidade, styles.seguranaLayout]}
          onPress={() => navigation.navigate("Privacidade")}
        >
          <View style={[styles.dashiconsprivacyParent, styles.parentFlexBox]}>
            <Image
              style={[styles.dashiconsprivacy, styles.dashiconsprivacyLayout]}
              contentFit="cover"
              source={require("../assets/dashiconsprivacy.png")}
            />
            <View style={styles.seguranaParent}>
              <Text style={styles.segurana1}>Privacidade</Text>
              <Text
                style={[
                  styles.controleAsInformaes,
                  styles.garantaASeguranaTypo,
                ]}
              >
                Controle as informações que você divide com a gente
              </Text>
            </View>
          </View>
          <View style={[styles.privacidadeChild, styles.childPosition]} />
        </Pressable>
        <Property1Default1
          icon={require("../assets/icon4.png")}
          vector={require("../assets/vector8.png")}
          label="Serviços"
          icon1={require("../assets/icon1.png")}
          mdiclipboardTextHistory={require("../assets/mdiclipboardtexthistory2.png")}
          label1="Histórico"
          icon2={require("../assets/icon1.png")}
          group={require("../assets/group5.png")}
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
          onTabItemPress2={() => navigation.navigate("HistoricoServios")}
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
        <Pressable
          style={[styles.navbar, styles.parentFlexBox]}
          onPress={() => navigation.navigate("Conta")}
        >
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
          <Text style={styles.configuraes}>Configurações</Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={botoContainerVisible}>
        <View style={styles.botoContainerOverlay}>
          <Pressable
            style={styles.botoContainerBg}
            onPress={closeBotoContainer}
          />
          <ModalDesativarSuaConta onClose={closeBotoContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  informaesDaContaTypo: {
    height: 32,
    color: Color.black,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
    top: "50%",
    position: "absolute",
  },
  seguranaLayout: {
    width: 431,
    position: "absolute",
  },
  childPosition: {
    height: 1,
    width: 432,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderStyle: "solid",
    left: 0,
    top: "50%",
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  dashiconsprivacyLayout: {
    width: 46,
    overflow: "hidden",
  },
  garantaASeguranaTypo: {
    marginTop: 5,
    textAlign: "left",
    color: Color.darkgray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    alignItems: "center",
    display: "flex",
    lineHeight: 18,
  },
  perfilIcon: {
    marginLeft: -182.25,
    top: 136,
    width: 127,
    height: 128,
    left: "50%",
    position: "absolute",
  },
  informaesDaConta: {
    marginTop: -188.5,
    left: 10,
    width: 238,
  },
  seguranaEPrivacidade: {
    marginTop: 95.5,
    width: 311,
    left: -3,
  },
  botoContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  botoContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  desativarSuaConta: {
    marginTop: -17,
    marginLeft: -62.5,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.ralewayRegular,
    color: Color.gray_600,
    letterSpacing: 0.4,
    height: 34,
    width: 125,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 18,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  boto: {
    marginTop: 328.5,
    marginLeft: -191.5,
    height: 34,
    width: 125,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  seguranaChild: {
    marginTop: 37.5,
  },
  icsharpSecurityIcon: {
    height: 45,
    overflow: "hidden",
  },
  segurana1: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0.5,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 18,
  },
  garantaASegurana: {
    width: 250,
    height: 42,
  },
  seguranaParent: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    marginLeft: 6,
    justifyContent: "center",
  },
  icsharpSecurityParent: {
    left: 19,
    top: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  segurana: {
    marginTop: 241.5,
    left: 1,
    height: 76,
    top: "50%",
    width: 431,
  },
  dashiconsprivacy: {
    height: 48,
    overflow: "hidden",
  },
  controleAsInformaes: {
    width: 257,
    height: 40,
  },
  dashiconsprivacyParent: {
    left: 20,
    top: 0,
    flexDirection: "row",
  },
  privacidadeChild: {
    marginTop: 37,
  },
  privacidade: {
    top: 619,
    height: 75,
    left: -3,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 19,
    height: 19,
  },
  configuraes: {
    color: Color.darkseagreen,
    width: 186,
    height: 35,
    marginLeft: 90,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
  },
  navbar: {
    top: 47,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "rgba(151, 151, 151, 0.5)",
    borderBottomWidth: 1,
    height: 53,
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_base,
    overflow: "hidden",
    flexDirection: "row",
    borderStyle: "solid",
    left: 0,
    width: 431,
    alignItems: "center",
  },
  configuraesUserNormal: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 929,
    width: "100%",
  },
});

export default ConfiguraesUserNormal;
