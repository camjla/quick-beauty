import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Property1Default1 from "../components/Property1Default1";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PerfilDoProfisisonalPagame = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfilDoProfisisonalPagame}>
      <View style={[styles.dias, styles.diasFlexBox]}>
        <Text style={[styles.seg, styles.segTypo]}>Seg</Text>
        <Text style={[styles.ter, styles.segTypo]}>Ter</Text>
        <Text style={[styles.ter, styles.segTypo]}>Qua</Text>
        <Text style={[styles.ter, styles.segTypo]}>Qui</Text>
        <Text style={[styles.ter, styles.segTypo]}>Sex</Text>
        <Text style={[styles.ter, styles.segTypo]}>Sab</Text>
        <Text style={[styles.ter, styles.segTypo]}>Dom</Text>
      </View>
      <View style={[styles.serviosRealizado, styles.serviosRealizadoPosition]}>
        <Text style={styles.text}>12</Text>
        <Text style={[styles.text1, styles.textTypo]}>10</Text>
        <Text style={styles.text2}>8</Text>
        <Text style={styles.text2}>6</Text>
        <Text style={[styles.text4, styles.text4FlexBox]}>4</Text>
        <Text style={[styles.text5, styles.textTypo]}>2</Text>
        <Text style={styles.text2}>0</Text>
      </View>
      <Text
        style={[styles.serviosRealizadosNa, styles.serviosRealizadosNaTypo]}
      >
        Serviços realizados na semana
      </Text>
      <Image
        style={styles.graficoIcon}
        contentFit="cover"
        source={require("../assets/grafico.png")}
      />
      <Text style={[styles.seusRendimentos, styles.contasBancriasTypo]}>
        Seus rendimentos
      </Text>
      <View
        style={[styles.perfilDoProfisisonalPagameChild, styles.navbarBorder]}
      />
      <Pressable
        style={[styles.adicionar, styles.diasFlexBox]}
        onPress={() => navigation.navigate("AdicionarUmaContaBancria")}
      >
        <Image
          style={styles.phbankBoldIcon}
          contentFit="cover"
          source={require("../assets/phbankbold.png")}
        />
        <Text style={[styles.editarSuaConta, styles.segTypo]}>
          Editar sua conta bancária
        </Text>
      </Pressable>
      <View style={[styles.contaBancriaParent, styles.navbarFlexBox]}>
        <View style={styles.contaBancriaLayout}>
          <View style={[styles.mdicashLockParent, styles.contaBancriaLayout]}>
            <Image
              style={styles.mdicashLockIcon}
              contentFit="cover"
              source={require("../assets/mdicashlock1.png")}
            />
            <View style={styles.santanderParent}>
              <Text style={[styles.santander, styles.text7Typo]}>
                Santander
              </Text>
              <Text style={[styles.text7, styles.text7Typo]}>
                0000/ 0000000000-0
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.phtrashLightIcon}
          contentFit="cover"
          source={require("../assets/phtrashlight.png")}
        />
      </View>
      <Text style={[styles.contasBancrias, styles.contasBancriasTypo]}>
        Contas Bancárias
      </Text>
      <View
        style={[styles.perfilDoProfisisonalPagameItem, styles.perfilLayout]}
      />
      <View
        style={[
          styles.perfilDoProfisisonalPagameInner,
          styles.rectangleViewLayout,
        ]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.perfilDoProfisisonalPagameChild1, styles.perfilLayout]}
      />
      <View style={styles.perfilDoProfisisonalPagameChild2} />
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
      
      <View style={[styles.navbar, styles.navbarBorder]}>
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
        <Text
          style={[styles.informaoDePagamento, styles.serviosRealizadosNaTypo]}
        >
          Informação de pagamento
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  diasFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  segTypo: {
    color: Color.gray_200,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
  },
  serviosRealizadoPosition: {
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    marginTop: 25,
    height: 22,
    fontSize: FontSize.size_xs,
    color: Color.gray_200,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0.4,
  },
  text4FlexBox: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  serviosRealizadosNaTypo: {
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    lineHeight: 18,
  },
  contasBancriasTypo: {
    color: Color.black,
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  navbarBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  navbarFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  contaBancriaLayout: {
    height: 62,
    width: 225,
  },
  text7Typo: {
    textAlign: "justify",
    color: Color.black,
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    lineHeight: 18,
  },
  perfilLayout: {
    width: 9,
    backgroundColor: Color.lightpink_200,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 55,
    top: 664,
    width: 9,
    backgroundColor: Color.lightpink_200,
    position: "absolute",
  },
  seg: {
    textAlign: "left",
  },
  ter: {
    marginLeft: 25,
    textAlign: "left",
  },
  dias: {
    top: 724,
    left: 51,
  },
  text: {
    width: 13,
    height: 22,
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0.4,
    alignItems: "center",
  },
  text1: {
    width: 14,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  text2: {
    width: 8,
    marginTop: 25,
    height: 22,
    display: "flex",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0.4,
    alignItems: "center",
  },
  text4: {
    width: 25,
    marginTop: 25,
    height: 22,
    fontSize: FontSize.size_xs,
    color: Color.gray_200,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0.4,
  },
  text5: {
    width: 7,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  serviosRealizado: {
    top: 419,
  },
  serviosRealizadosNa: {
    top: 402,
    color: "#9b9b9b",
    left: 109,
    textAlign: "left",
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    position: "absolute",
  },
  graficoIcon: {
    top: 420,
    left: 23,
    width: 376,
    height: 300,
    position: "absolute",
  },
  seusRendimentos: {
    top: 334,
    left: 19,
    width: 146,
    height: 17,
    display: "flex",
    alignItems: "center",
  },
  perfilDoProfisisonalPagameChild: {
    top: 296,
    left: 18,
    borderColor: "rgba(0, 0, 0, 0.28)",
    borderTopWidth: 0.2,
    width: 400,
    height: 0,
  },
  phbankBoldIcon: {
    width: 30,
    height: 29,
    overflow: "hidden",
  },
  editarSuaConta: {
    marginLeft: 3,
    textAlign: "left",
  },
  adicionar: {
    top: 245,
    left: 71,
    width: 292,
    height: 21,
  },
  mdicashLockIcon: {
    width: 52,
    height: 51,
    overflow: "hidden",
  },
  santander: {
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    textAlign: "justify",
  },
  text7: {
    fontWeight: "300",
    fontFamily: FontFamily.ralewayLight,
    marginTop: 5,
  },
  santanderParent: {
    marginLeft: 20,
  },
  mdicashLockParent: {
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    height: 62,
    width: 225,
  },
  phtrashLightIcon: {
    width: 22,
    height: 25,
    marginLeft: 34,
    overflow: "hidden",
  },
  contaBancriaParent: {
    top: 164,
    left: 63,
    width: 308,
    justifyContent: "flex-end",
    position: "absolute",
  },
  contasBancrias: {
    top: 127,
    left: 22,
  },
  perfilDoProfisisonalPagameItem: {
    top: 616,
    left: 60,
    height: 103,
  },
  perfilDoProfisisonalPagameInner: {
    left: 109,
  },
  rectangleView: {
    left: 311,
  },
  perfilDoProfisisonalPagameChild1: {
    top: 552,
    left: 212,
    height: 167,
  },
  perfilDoProfisisonalPagameChild2: {
    top: 608,
    left: 260,
    height: 111,
    backgroundColor: Color.lightpink_200,
    width: 8,
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
  informaoDePagamento: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    color: Color.darkseagreen,
    width: 277,
    height: 35,
    marginLeft: 60,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    borderColor: "rgba(151, 151, 151, 0.5)",
    borderBottomWidth: 1,
    width: 431,
    height: 53,
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_base,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  perfilDoProfisisonalPagame: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 929,
    width: "100%",
  },
});

export default PerfilDoProfisisonalPagame;
