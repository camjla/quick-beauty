import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FinalizarButtonContainer from "../components/FinalizarButtonContainer";
import Property1Default1 from "../components/Property1Default1";

import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const SeTorneUmProfissionalCont = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.seTorneUmProfissionalCont}>
      <Text style={styles.estamosQuaseL}>Estamos quase lá</Text>
      <Text style={[styles.nosInformePor, styles.textTypo1]}>
        Nos informe por qual conta você prefere receber seu pagamento pelo
        serviço realizado
      </Text>
      <Text
        style={[
          styles.suaContaEstContainer,
          styles.suaContaEstContainerFlexBox,
        ]}
      >
        <Text style={styles.suaContaEstContainer1}>
          <Text style={[styles.suaContaEst, styles.santanderTypo]}>
            Sua conta está em analise
          </Text>
          <Text style={[styles.estamosVerificandoSeus, styles.textTypo1]}>
            . Estamos verificando seus dados para garantir seu pagamento.
          </Text>
        </Text>
      </Text>
      <FinalizarButtonContainer
        buttonText="Avançar"
        rectangleViewMarginTop={306.5}
        propMarginLeft={-27}
        onBotoFinalizarPress={() =>
          navigation.navigate("SeTorneUmProfissionalFotoEPerfilEAvaliaes")
        }
      />
      <View style={[styles.botes, styles.botesFlexBox]}>
        <View style={styles.botoShadowBox}>
          <View style={styles.botoChildPosition} />
          <View style={styles.botoChildPosition} />
          <Text style={[styles.excluirConta, styles.contaTypo]}>
            Excluir conta
          </Text>
        </View>
        <View style={[styles.botoAdicionar, styles.botoShadowBox]}>
          <View style={[styles.botoAdicionarChild, styles.botoChildPosition]} />
          <View style={[styles.botoAdicionarChild, styles.botoChildPosition]} />
          <Text style={[styles.adicionarConta, styles.contaTypo]}>
            Adicionar conta
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.seTorneUmProfissionalContInner,
          styles.mdicashLockParentLayout,
        ]}
      >
        <View
          style={[styles.mdicashLockParent, styles.mdicashLockParentLayout]}
        >
          <Image
            style={styles.mdicashLockIcon}
            contentFit="cover"
            source={require("../assets/mdicashlock.png")}
          />
          <View style={styles.santanderParent}>
            <Text style={[styles.santander, styles.textTypo]}>Santander</Text>
            <Text style={[styles.text, styles.textTypo]}>
              0000/ 0000000000-0
            </Text>
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
        onTabItemPress4={() => navigation.navigate("Conta")}
      />
     
      <View style={styles.navbar}>
        <Pressable
          style={styles.wrapper}
          onPress={() =>
            navigation.navigate("SeTorneUmProfissionalRegioEServio")
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector-4.png")}
          />
        </Pressable>
        <Text style={[styles.informaesDePagamento, styles.botesFlexBox]}>
          Informações de pagamento
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
  },
  suaContaEstContainerFlexBox: {
    textAlign: "center",
    display: "flex",
    lineHeight: 18,
  },
  santanderTypo: {
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
  },
  botesFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  contaTypo: {
    color: Color.gray_600,
    fontFamily: FontFamily.ralewayExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_smi,
    marginTop: -9.5,
    left: "50%",
    top: "50%",
    textAlign: "center",
    letterSpacing: 0.4,
    lineHeight: 18,
    position: "absolute",
  },
  botoShadowBox: {
    height: 43,
    width: 148,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  botoChildPosition: {
    borderWidth: 1,
    borderColor: "#96c486",
    borderRadius: Border.br_xl,
    marginLeft: -74,
    marginTop: -21.5,
    borderStyle: "solid",
    left: "50%",
    top: "50%",
    height: 43,
    width: 148,
    position: "absolute",
  },
  mdicashLockParentLayout: {
    height: 62,
    width: 248,
    position: "absolute",
  },
  textTypo: {
    textAlign: "justify",
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    color: Color.black,
    lineHeight: 18,
  },
  estamosQuaseL: {
    top: 136,
    width: 474,
    height: 33,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    left: 28,
    color: Color.black,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  nosInformePor: {
    top: 169,
    width: 340,
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    lineHeight: 18,
    left: 28,
    position: "absolute",
  },
  suaContaEst: {
    color: "#de719f",
  },
  estamosVerificandoSeus: {
    color: Color.black,
    fontWeight: "300",
  },
  suaContaEstContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  suaContaEstContainer: {
    top: 333,
    left: 36,
    fontSize: FontSize.size_xs,
    width: 356,
    letterSpacing: 0.4,
    textAlign: "center",
    alignItems: "center",
    position: "absolute",
  },
  excluirConta: {
    marginLeft: -43,
  },
  botoAdicionarChild: {
    backgroundColor: Color.darkseagreen,
  },
  adicionarConta: {
    marginLeft: -52,
  },
  botoAdicionar: {
    marginLeft: 18,
  },
  botes: {
    top: 392,
    left: 40,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  mdicashLockIcon: {
    width: 52,
    height: 51,
    overflow: "hidden",
  },
  santander: {
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
  },
  text: {
    marginTop: 5,
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
  },
  santanderParent: {
    marginLeft: 20,
  },
  mdicashLockParent: {
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  seTorneUmProfissionalContInner: {
    top: 247,
    left: 93,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 19,
    height: 19,
  },
  informaesDePagamento: {
    color: Color.darkseagreen,
    width: 316,
    height: 35,
    marginLeft: 35,
    textAlign: "center",
    display: "flex",
    lineHeight: 18,
    justifyContent: "center",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
  },
  navbar: {
    marginTop: -417.5,
    marginLeft: -215.5,
    backgroundColor: Color.whitesmoke_100,
    borderColor: "rgba(151, 151, 151, 0.5)",
    borderBottomWidth: 1,
    width: 431,
    height: 53,
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_base,
    overflow: "hidden",
    borderStyle: "solid",
    left: "50%",
    top: "50%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  seTorneUmProfissionalCont: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 929,
    width: "100%",
  },
});

export default SeTorneUmProfissionalCont;
