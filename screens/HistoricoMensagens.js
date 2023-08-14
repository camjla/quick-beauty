import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Property1Default1 from "../components/Property1Default1";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const HistoricoMensagens = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.historicoMensagens}>
      <View
        style={[styles.historicoMensagensChild, styles.mensagemItemLayout]}
      />
      <View style={styles.historicoMensagensItem} />
      <View style={[styles.mensagem, styles.mensagemPosition]}>
        <Image
          style={[styles.mensagemChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-17.png")}
        />
        <Image
          style={[styles.mensagemItem, styles.mensagemItemLayout]}
          contentFit="cover"
          source={require("../assets/line-5.png")}
        />
        <Text style={styles.fernandaFerreiraCabelereira}>
          Fernanda Ferreira (Cabelereira)
        </Text>
        <Text style={[styles.essaConversaFoi, styles.textTypo]}>
          Essa conversa foi finalizada
        </Text>
        <Text style={[styles.text, styles.textTypo]}>28/02/2023</Text>
      </View>
      <View style={[styles.mensagem1, styles.mensagemPosition]}>
        <Image
          style={[styles.mensagemChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-171.png")}
        />
        <Image
          style={[styles.mensagemItem, styles.mensagemItemLayout]}
          contentFit="cover"
          source={require("../assets/line-5.png")}
        />
        <Text
          style={[
            styles.lucianaSouzaMaquiadora,
            styles.obrigadaPelaConfianaClr,
          ]}
        >
          Luciana Souza (Maquiadora)
        </Text>
        <Text
          style={[styles.obrigadaPelaConfiana, styles.obrigadaPelaConfianaClr]}
        >
          Obrigada pela confiança, Fulano!
        </Text>
        <Text style={[styles.text, styles.textTypo]}>05/04/2023</Text>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
      </View>
      <Text
        style={[styles.histricoDeMensagens, styles.noticiasTypo]}
      >{`Histórico de mensagens
`}</Text>
      <View style={styles.noticia2}>
        <Image
          style={[styles.noticia2Child, styles.noticia1ItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon6.png")}
        />
        <View style={[styles.noticia2Item, styles.noticia1Layout]} />
        <Text style={[styles.feriadoChegandoQue, styles.fulanoConviteSeusTypo]}>
          Feriadão chegando!! que tal marcar uma mudança...
        </Text>
      </View>
      <View style={[styles.noticia1, styles.noticia1Layout]}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon7.png")}
        />
        <View style={[styles.noticia2Item, styles.noticia1Layout]} />
        <Image
          style={[styles.noticia1Item, styles.noticia1ItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Text style={[styles.fulanoConviteSeus, styles.fulanoConviteSeusTypo]}>
          Fulano, convite seus amigos para conhecer nossos...
        </Text>
      </View>
      <Text style={[styles.noticias, styles.noticiasTypo]}>{`Noticias
`}</Text>
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
    
      <View style={styles.navbar}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Conta")}
        >
          <Image
            style={styles.icon2}
            contentFit="cover"
            source={require("../assets/vector-4.png")}
          />
        </Pressable>
        <Text style={styles.mensagens}>Mensagens</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mensagemItemLayout: {
    height: 1,
    position: "absolute",
  },
  mensagemPosition: {
    height: 63,
    left: 16,
    position: "absolute",
  },
  iconLayout: {
    height: 47,
    width: 49,
    position: "absolute",
  },
  textTypo: {
    color: Color.silver_100,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  obrigadaPelaConfianaClr: {
    color: Color.black,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  noticiasTypo: {
    height: 22,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
    color: Color.black,
    textAlign: "left",
    lineHeight: 18,
    left: 22,
    position: "absolute",
  },
  noticia1ItemLayout: {
    left: "95.07%",
    right: "2.93%",
    width: "1.99%",
    height: "11.68%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  noticia1Layout: {
    height: 69,
    width: 406,
    position: "absolute",
  },
  fulanoConviteSeusTypo: {
    color: Color.darkslategray_200,
    left: 71,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    letterSpacing: 1.1,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  historicoMensagensChild: {
    top: 175,
    left: 15,
    width: 122,
    backgroundColor: Color.lightpink_300,
    height: 1,
  },
  historicoMensagensItem: {
    top: 436,
    left: 22,
    height: 1,
    width: 122,
    backgroundColor: Color.lightpink_300,
    position: "absolute",
  },
  mensagemChild: {
    left: 0,
    top: 3,
    width: 49,
  },
  mensagemItem: {
    top: 62,
    width: 362,
    left: 0,
  },
  fernandaFerreiraCabelereira: {
    color: "#858585",
    textAlign: "left",
    lineHeight: 18,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    left: 60,
    top: 3,
    position: "absolute",
  },
  essaConversaFoi: {
    letterSpacing: 1.1,
    fontSize: FontSize.size_2xs,
    left: 63,
    top: 27,
    color: Color.silver_100,
  },
  text: {
    left: 315,
    fontSize: FontSize.size_5xs,
    letterSpacing: 0.8,
    top: 0,
  },
  mensagem: {
    top: 548,
    width: 368,
  },
  lucianaSouzaMaquiadora: {
    color: Color.black,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    left: 60,
    top: 3,
  },
  obrigadaPelaConfiana: {
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    color: Color.black,
    letterSpacing: 1.1,
    fontSize: FontSize.size_2xs,
    left: 63,
    top: 27,
  },
  ellipseIcon: {
    height: "12.75%",
    width: "2.19%",
    top: "12.65%",
    right: "24.09%",
    bottom: "74.6%",
    left: "73.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  mensagem1: {
    top: 456,
    width: 369,
  },
  histricoDeMensagens: {
    top: 414,
    width: 333,
  },
  noticia2Child: {
    top: "15.94%",
    bottom: "72.38%",
  },
  icon: {
    top: 11,
    left: 5,
  },
  noticia2Item: {
    borderRadius: Border.br_3xs,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    left: 0,
  },
  feriadoChegandoQue: {
    top: 24,
  },
  noticia2: {
    height: "7.43%",
    width: "93.76%",
    top: "31.32%",
    right: "3%",
    bottom: "61.25%",
    left: "3.23%",
    position: "absolute",
  },
  noticia1Item: {
    top: "11.59%",
    bottom: "76.72%",
  },
  fulanoConviteSeus: {
    top: 25,
  },
  noticia1: {
    top: 202,
    left: 14,
  },
  noticias: {
    top: 155,
    width: 158,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 19,
    height: 19,
  },
  mensagens: {
    color: Color.darkseagreen,
    textAlign: "center",
    justifyContent: "center",
    width: 244,
    height: 35,
    marginLeft: 60,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
    lineHeight: 18,
  },
  navbar: {
    marginTop: -417.5,
    marginLeft: -215.5,
    top: "50%",
    left: "50%",
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
    flexDirection: "row",
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_base,
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  historicoMensagens: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 929,
    width: "100%",
  },
});

export default HistoricoMensagens;
