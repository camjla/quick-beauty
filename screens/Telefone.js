import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Property1Default1 from "../components/Property1Default1";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Telefone = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telefone}>
      <Text style={[styles.altereOSeu, styles.telefone1Typo]}>
        Altere o seu telefone
      </Text>
      <View style={styles.nomeParent}>
        <View style={styles.nomeLayout}>
          <Text style={[styles.telefone1, styles.textFlexBox1]}>Telefone</Text>
        </View>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.telefone1Position]} />
          <View
            style={[styles.emojioneV1flagForBrazilParent, styles.navbarFlexBox]}
          >
            <Image
              style={styles.emojioneV1flagForBrazilIcon}
              contentFit="cover"
              source={require("../assets/emojionev1flagforbrazil.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>{`+55 `}</Text>
          </View>
        </View>
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
      <View style={[styles.botoAlterar, styles.botoLayout]}>
        <View style={[styles.botoAlterarChild, styles.navbarPosition]} />
        <Text style={[styles.alterar, styles.alterarPosition]}>Alterar</Text>
      </View>
      <Text style={[styles.iremosTeEnviar, styles.textFlexBox]}>
        Iremos te enviar um código de verificação para este número
      </Text>
      <Pressable
        style={[styles.navbar, styles.navbarPosition]}
        onPress={() => navigation.navigate("ConfiguraesUserNormal")}
      >
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
        <Text style={[styles.informaesDaConta, styles.textFlexBox]}>
          Informações da conta
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  telefone1Typo: {
    textAlign: "left",
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
  },
  textFlexBox1: {
    display: "flex",
    alignItems: "center",
  },
  telefone1Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  navbarFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textFlexBox: {
    textAlign: "center",
    lineHeight: 18,
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
  alterarPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  altereOSeu: {
    top: 136,
    left: 131,
    color: Color.black,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    lineHeight: 18,
    textAlign: "left",
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  telefone1: {
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemiBold,
    color: Color.darkslategray_100,
    left: 0,
    top: 0,
    position: "absolute",
    height: 32,
    width: 78,
    textAlign: "left",
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    display: "flex",
  },
  nomeLayout: {
    height: 32,
    width: 78,
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whitesmoke_300,
    height: 40,
    width: 307,
  },
  emojioneV1flagForBrazilIcon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    color: Color.gray_500,
    width: 31,
    height: 12,
    marginLeft: 2,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emojioneV1flagForBrazilParent: {
    top: 12,
    left: 10,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    position: "absolute",
  },
  rectangleParent: {
    height: 60,
    marginTop: 5,
    width: 307,
  },
  nomeParent: {
    top: 178,
    left: 63,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  botoAlterarChild: {
    marginTop: -21.5,
    marginLeft: -74,
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightpink_100,
    borderColor: "#f498af",
    borderWidth: 1,
    height: 43,
    width: 148,
  },
  alterar: {
    marginTop: -9.5,
    marginLeft: -23,
    fontWeight: "800",
    fontFamily: FontFamily.ralewayExtraBold,
    color: Color.gray_600,
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
  },
  botoAlterar: {
    marginTop: -150.5,
    marginLeft: -80.5,
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
  iremosTeEnviar: {
    top: 263,
    left: 70,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.3,
    fontFamily: FontFamily.ralewayRegular,
    color: "rgba(65, 64, 64, 0.6)",
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
  informaesDaConta: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    color: Color.darkseagreen,
    width: 244,
    height: 35,
    marginLeft: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
  },
  navbar: {
    marginTop: -417.5,
    marginLeft: -215.5,
    borderColor: "rgba(151, 151, 151, 0.5)",
    borderBottomWidth: 1,
    width: 431,
    height: 53,
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
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  telefone: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 929,
    width: "100%",
  },
});

export default Telefone;
