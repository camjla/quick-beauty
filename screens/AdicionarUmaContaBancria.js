import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Property1Default1 from "../components/Property1Default1";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const AdicionarUmaContaBancria = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adicionarUmaContaBancria}>
      <Text
        style={[styles.faremosOPagamento, styles.correnteFlexBox]}
      >{`Faremos o pagamento dos serviços realizados nesta conta `}</Text>
      <View
        style={[
          styles.adicionarUmaContaBancriaChild,
          styles.adicionarChildLayout,
        ]}
      />
      <View
        style={[
          styles.adicionarUmaContaBancriaItem,
          styles.adicionarChildLayout,
        ]}
      />
      <View
        style={[
          styles.adicionarUmaContaBancriaInner,
          styles.rectangleViewPosition,
        ]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[
          styles.adicionarUmaContaBancriaChild1,
          styles.adicionarChildLayout,
        ]}
      />
      <View
        style={[
          styles.adicionarUmaContaBancriaChild2,
          styles.adicionarChildPosition,
        ]}
      />
      <View
        style={[
          styles.adicionarUmaContaBancriaChild3,
          styles.adicionarChildPosition,
        ]}
      />
      <Text style={[styles.suaContaBancria, styles.correnteFlexBox]}>
        Sua conta Bancária
      </Text>
      <Text style={[styles.nomeDoTitular, styles.titularTypo]}>
        Nome do titular
      </Text>
      <Text style={[styles.cpfDoTitular, styles.titularTypo]}>
        CPF do titular
      </Text>
      <Text style={[styles.banco, styles.titularTypo]}>Banco</Text>
      <Text style={[styles.tipoDeCorrente, styles.titularTypo]}>
        Tipo de corrente
      </Text>
      <Text style={[styles.agncia, styles.titularTypo]}>Agência</Text>
      <Text style={[styles.conta, styles.contaTypo]}>Conta</Text>
      <Text style={[styles.conta, styles.contaTypo]}>Conta</Text>
      <Text style={[styles.digito, styles.contaTypo]}>Digito</Text>
      <Text style={[styles.text, styles.textTypo]}> 0000000000-0</Text>
      <Text style={[styles.text1, styles.text1Typo]}>000.000.000-00</Text>
      <Text style={[styles.fulanoSilvaFerreira, styles.text1Typo]}>
        Fulano Silva Ferreira
      </Text>
      <Text style={[styles.corrente, styles.itaTypo]}>Corrente</Text>
      <Text style={[styles.ita, styles.itaTypo]}>Itaú</Text>
      <Text style={[styles.text2, styles.textTypo]}>0</Text>
      <Text style={[styles.text3, styles.textTypo]}>0000</Text>
      <Image
        style={[
          styles.materialSymbolsarrowDropDoIcon,
          styles.materialIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolsarrowdropdownrounded.png")}
      />
      <Image
        style={[
          styles.materialSymbolsarrowDropDoIcon1,
          styles.materialIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolsarrowdropdownrounded.png")}
      />
      <Property1Default1
        icon={require("../assets/icon4.png")}
        vector={require("../assets/vector8.png")}
        label="Serviços"
        icon1={require("../assets/icon5.png")}
        mdiclipboardTextHistory={require("../assets/mdiclipboardtexthistory2.png")}
        label1="Mensagens"
        icon2={require("../assets/icon1.png")}
        group={require("../assets/group4.png")}
        label2="Conta"
        showMarkerComponent={false}
        markerComponentVisible={false}
        showRound
        showMdiclipboardTextHistoryIc={false}
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
      <View style={[styles.navbar, styles.navbarShadowBox]}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("PerfilDoProfisisonalPagamento")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector-4.png")}
          />
        </Pressable>
        <Text style={[styles.informaoDePagamento, styles.alterarFlexBox]}>
          Informação de pagamento
        </Text>
      </View>
      <View style={[styles.botoAlterar, styles.botoPosition]}>
        <View style={[styles.botoAlterarChild, styles.botoPosition]} />
        <Text style={[styles.alterar, styles.alterarFlexBox]}>Alterar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  correnteFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  adicionarChildLayout: {
    height: 40,
    width: 307,
    backgroundColor: Color.whitesmoke_300,
    borderRadius: Border.br_3xs,
    left: 36,
    position: "absolute",
  },
  rectangleViewPosition: {
    top: 343,
    height: 40,
    backgroundColor: Color.whitesmoke_300,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  adicionarChildPosition: {
    top: 465,
    height: 40,
    backgroundColor: Color.whitesmoke_300,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  titularTypo: {
    textAlign: "justify",
    color: Color.black,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  contaTypo: {
    top: 447,
    textAlign: "justify",
    color: Color.black,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    textAlign: "justify",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.4,
    position: "absolute",
  },
  text1Typo: {
    left: 42,
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    textAlign: "justify",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.4,
    position: "absolute",
  },
  itaTypo: {
    top: 352,
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    textAlign: "justify",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.4,
    position: "absolute",
  },
  materialIconLayout: {
    height: 26,
    width: 26,
    top: 348,
    overflow: "hidden",
    position: "absolute",
  },
  navbarShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  alterarFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 18,
  },
  botoPosition: {
    height: 39,
    width: 148,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  faremosOPagamento: {
    top: 172,
    color: Color.gray_200,
    width: 373,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    position: "absolute",
    display: "flex",
    left: 36,
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs,
  },
  adicionarUmaContaBancriaChild: {
    top: 221,
  },
  adicionarUmaContaBancriaItem: {
    top: 282,
  },
  adicionarUmaContaBancriaInner: {
    width: 103,
    left: 36,
  },
  rectangleView: {
    width: 160,
    left: 183,
  },
  adicionarUmaContaBancriaChild1: {
    top: 404,
  },
  adicionarUmaContaBancriaChild2: {
    width: 200,
    left: 36,
  },
  adicionarUmaContaBancriaChild3: {
    width: 51,
    left: 272,
  },
  suaContaBancria: {
    top: 141,
    fontSize: FontSize.size_base,
    letterSpacing: 0.5,
    color: Color.darkslategray_100,
    width: 175,
    height: 32,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    position: "absolute",
    display: "flex",
    left: 36,
  },
  nomeDoTitular: {
    top: 203,
    left: 36,
  },
  cpfDoTitular: {
    top: 264,
    left: 36,
  },
  banco: {
    top: 325,
    left: 36,
  },
  tipoDeCorrente: {
    top: 324,
    left: 183,
  },
  agncia: {
    top: 386,
    left: 36,
  },
  conta: {
    left: 37,
  },
  digito: {
    left: 272,
  },
  text: {
    left: 40,
    top: 476,
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
  },
  text1: {
    top: 294,
  },
  fulanoSilvaFerreira: {
    top: 233,
  },
  corrente: {
    left: 191,
    width: 84,
    height: 25,
    alignItems: "center",
    display: "flex",
  },
  ita: {
    left: 45,
  },
  text2: {
    left: 293,
    top: 476,
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
  },
  text3: {
    top: 415,
    left: 43,
  },
  materialSymbolsarrowDropDoIcon: {
    left: 108,
    overflow: "hidden",
  },
  materialSymbolsarrowDropDoIcon1: {
    left: 311,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 19,
    height: 19,
  },
  informaoDePagamento: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    color: Color.darkseagreen,
    width: 277,
    height: 35,
    marginLeft: 60,
  },
  navbar: {
    marginTop: -417.5,
    marginLeft: -215.5,
    backgroundColor: Color.whitesmoke_100,
    borderColor: "rgba(151, 151, 151, 0.5)",
    borderBottomWidth: 1,
    width: 431,
    height: 53,
    flexDirection: "row",
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_base,
    borderStyle: "solid",
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
    alignItems: "center",
  },
  botoAlterarChild: {
    marginTop: -19.5,
    marginLeft: -74,
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightpink_100,
    borderColor: "#f498af",
    borderWidth: 1,
    borderStyle: "solid",
  },
  alterar: {
    marginTop: -8.62,
    marginLeft: -23,
    fontWeight: "800",
    fontFamily: FontFamily.ralewayExtraBold,
    color: Color.gray_600,
    width: 47,
    height: 16,
    left: "50%",
    top: "50%",
    position: "absolute",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    letterSpacing: 0.4,
  },
  botoAlterar: {
    marginTop: 228.5,
    marginLeft: -73.5,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  adicionarUmaContaBancria: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 929,
    width: "100%",
  },
});

export default AdicionarUmaContaBancria;
