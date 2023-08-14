import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Property1Default1 from "../components/Property1Default1";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Segurana = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.segurana}>
      <Text style={[styles.casoQueiraAtivar, styles.desativadoTypo1]}>
        Caso queira ativar a verificação de duas etapas, terá que inserir o
        código de verificação sempre que entrar na conta e que contratar um
        serviço
      </Text>
      <View
        style={[styles.verificaoDeDuasEtapasParent, styles.segurana1FlexBox]}
      >
        <Text
          style={[styles.verificaoDeDuas, styles.desativadoTypo]}
        >{`Verificação de duas etapas
`}</Text>
        <Text style={[styles.desativado, styles.desativadoTypo]}>
          Desativado
        </Text>
      </View>
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
        onTabItemPress2={() => navigation.navigate("HistoricoServios")}
        onTabItemPress4={() => navigation.navigate("Conta")}
      />
  
      <View style={[styles.navbar, styles.navbarFlexBox]}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("ConfiguraesUserNormal")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector-4.png")}
          />
        </Pressable>
        <Text style={[styles.segurana1, styles.segurana1FlexBox]}>
          Segurança
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  desativadoTypo1: {
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
  },
  segurana1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  desativadoTypo: {
    textAlign: "left",
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
  },
  navbarFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  casoQueiraAtivar: {
    top: 154,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.4,
    color: "rgba(65, 64, 64, 0.48)",
    textAlign: "justify",
    width: 394,
    height: 81,
    alignItems: "center",
    display: "flex",
    left: 16,
    position: "absolute",
    fontWeight: "500",
  },
  verificaoDeDuas: {
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemiBold,
    color: Color.black,
    width: 218,
    height: 32,
    alignItems: "center",
    display: "flex",
  },
  desativado: {
    color: Color.darkslategray_100,
    marginLeft: 95,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
  },
  verificaoDeDuasEtapasParent: {
    top: 119,
    height: 38,
    flexDirection: "row",
    position: "absolute",
    left: 16,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 19,
    height: 19,
  },
  segurana1: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    color: Color.darkseagreen,
    textAlign: "center",
    width: 186,
    height: 35,
    marginLeft: 90,
    display: "flex",
    lineHeight: 18,
    justifyContent: "center",
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
    width: 431,
    height: 53,
    overflow: "hidden",
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_base,
    alignItems: "center",
  },
  segurana: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 929,
    width: "100%",
  },
});

export default Segurana;
