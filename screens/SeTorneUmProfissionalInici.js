import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Property1Default1 from "../components/Property1Default1";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const SeTorneUmProfissionalInici = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.seTorneUmProfissionalInici}>
      <Text style={[styles.vamosIniciar, styles.seTorneUm1Typo]}>
        Vamos iniciar
      </Text>
      <Text
        style={[styles.seTorneUm, styles.seTorneUmClr]}
      >{`Se torne um profissional Quick Beauty e controle 
quando, onde e como você quer ganhar dinheiro`}</Text>
      <Pressable
        style={[styles.botoAvanar, styles.botoLayout]}
        onPress={() => navigation.navigate("SeTorneUmProfissionalRegioEServio")}
      >
        <View style={[styles.botoAvanarChild, styles.navbarPosition]} />
        <View style={[styles.botoAvanarChild, styles.navbarPosition]} />
        <Text style={[styles.avanar, styles.avanarFlexBox]}>Avançar</Text>
      </Pressable>
      <Image
        style={styles.makeupPouch1Icon}
        contentFit="cover"
        source={require("../assets/makeuppouch-1.png")}
      />
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
        <Text style={[styles.seTorneUm1, styles.avanarFlexBox]}>
          Se torne um profissional
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  seTorneUm1Typo: {
    display: "flex",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    alignItems: "center",
  },
  seTorneUmClr: {
    color: Color.black,
    lineHeight: 18,
    position: "absolute",
  },
  botoLayout: {
    height: 43,
    width: 148,
  },
  navbarPosition: {
    borderStyle: "solid",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  avanarFlexBox: {
    textAlign: "center",
    lineHeight: 18,
  },
  vamosIniciar: {
    top: 136,
    left: 21,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.8,
    textAlign: "left",
    width: 180,
    height: 33,
    alignItems: "center",
    color: Color.black,
    lineHeight: 18,
    position: "absolute",
  },
  seTorneUm: {
    top: 194,
    left: 24,
    fontSize: FontSize.size_base,
    letterSpacing: 0.5,
    fontWeight: "300",
    fontFamily: FontFamily.ralewayLight,
    textAlign: "justify",
  },
  botoAvanarChild: {
    marginTop: -21.5,
    marginLeft: -74,
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightpink_100,
    borderColor: "#f498af",
    borderWidth: 1,
    height: 43,
    width: 148,
  },
  avanar: {
    marginTop: -9.5,
    marginLeft: -27,
    fontSize: FontSize.size_smi,
    letterSpacing: 0.4,
    fontWeight: "800",
    fontFamily: FontFamily.ralewayExtraBold,
    color: Color.gray_600,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  botoAvanar: {
    marginTop: 302.5,
    marginLeft: -81.5,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  makeupPouch1Icon: {
    top: 320,
    left: 59,
    width: 315,
    height: 322,
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
  seTorneUm1: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    color: Color.darkseagreen,
    justifyContent: "center",
    width: 248,
    height: 35,
    marginLeft: 60,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
  },
  navbar: {
    marginTop: -417.5,
    marginLeft: -215.5,
    backgroundColor: Color.whitesmoke_100,
    borderColor: "rgba(151, 151, 151, 0.5)",
    borderBottomWidth: 1,
    width: 431,
    height: 53,
    overflow: "hidden",
    flexDirection: "row",
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_base,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  },
  seTorneUmProfissionalInici: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 929,
    width: "100%",
  },
});

export default SeTorneUmProfissionalInici;
