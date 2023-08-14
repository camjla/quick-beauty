import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import ModalContaCriada from "../components/ModalContaCriada";
import { useNavigation } from "@react-navigation/native";
import FinalizarButtonContainer from "../components/FinalizarButtonContainer";
import ServiceValueForm from "../components/ServiceValueForm";
import ContainerCard from "../components/ContainerCard";
import Property1Default1 from "../components/Property1Default1";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const SeTorneUmProfissionalFoto = () => {
  const [botoFinalizarContainerVisible, setBotoFinalizarContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openBotoFinalizarContainer = useCallback(() => {
    setBotoFinalizarContainerVisible(true);
  }, []);

  const closeBotoFinalizarContainer = useCallback(() => {
    setBotoFinalizarContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.seTorneUmProfissionalFoto}>
        <FinalizarButtonContainer
          buttonText="Finalizar"
          onBotoFinalizarPress={openBotoFinalizarContainer}
        />
        <View
          style={[styles.iconParkSolidattentionParent, styles.navbarFlexBox]}
        >
          <Image
            style={styles.iconParkSolidattention}
            contentFit="cover"
            source={require("../assets/iconparksolidattention.png")}
          />
          <Text style={[styles.aQuickBeauty, styles.aQuickBeautyFlexBox]}>
            A Quick Beauty cobra uma taxa de 12%¨em cima do valor cobrado
          </Text>
        </View>
        <ServiceValueForm />
        <View style={[styles.descrio, styles.descrioPosition]}>
          <Text style={[styles.descrioFaleUm, styles.aQuickBeautyFlexBox]}>
            Descrição (Fale um pouco sobre você e sobre sua trajetória)
          </Text>
          <ContainerCard propTop={29} propLeft={1} />
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
        </View>
        <Text style={[styles.adicioneSuaFoto, styles.adicioneSuaFotoTypo]}>
          Adicione sua foto
        </Text>
        <Property1Default1
          icon={require("../assets/icon4.png")}
          showMarkerComponent={false}
          markerComponentVisible
          showRound={false}
          showMdiclipboardTextHistoryIc
          markerComponentVisible1
          roundVisible={false}
          property1DefaultPosition="absolute"
          property1DefaultWidth="unset"
          property1DefaultHeight={90}
          property1DefaultRight={27}
          property1DefaultBottom={4}
          property1DefaultLeft={26}
          property1DefaultOverflow="hidden"
          labelPosition="unset"
          labelFontWeight="unset"
          labelFontFamily="unset"
          labelColor="unset"
          labelTextAlign="unset"
          labelMarginTop="unset"
          labelWidth="100%"
          labelHeight="100%"
          tabItemFlexDirection="unset"
          tabItemAlignItems="unset"
          tabItemJustifyContent="unset"
          tabItemMarginLeft="unset"
          tabItemPosition="relative"
          tabItemMarginTop={4}
          iconViewPosition="unset"
          iconViewWidth="unset"
          iconViewHeight="unset"
          iconViewFlex={1}
          iconViewFlexDirection="column"
          iconViewAlignItems="center"
          iconViewJustifyContent="center"
          iconViewMarginLeft={5}
          iconPosition="relative"
          iconTop="unset"
          iconLeft="unset"
          iconOverflow="unset"
          markerComponentTop={0}
          markerComponentLeft={0}
          markerComponentWidth={24}
          markerComponentHeight={24}
          roundTop={-4}
          roundRight="unset"
          roundBorderRadius={6}
          roundBackgroundColor="unset"
          roundJustifyContent="unset"
          roundAlignItems="unset"
          roundLeft={14}
          roundWidth={16}
          roundHeight={16}
          roundOverflow="hidden"
          mdiclipboardTextHistoryIcTop={4}
          mdiclipboardTextHistoryIcLeft="unset"
          mdiclipboardTextHistoryIcWidth="unset"
          mdiclipboardTextHistoryIcHeight="unset"
          mdiclipboardTextHistoryIcOverflow="unset"
          mdiclipboardTextHistoryIcRight={6}
          mdiclipboardTextHistoryIcBorderRadius={4}
          mdiclipboardTextHistoryIcBackgroundColor="#fa6d8d"
          mdiclipboardTextHistoryIcJustifyContent="center"
          mdiclipboardTextHistoryIcAlignItems="center"
          labelPosition1="absolute"
          labelFontWeight1="unset"
          labelFontFamily1="unset"
          labelColor1="unset"
          labelTextAlign1="unset"
          labelMarginTop1="unset"
          labelTop={2}
          labelLeft={0}
          labelWidth1={24}
          labelHeight1={24}
          labelOverflow="hidden"
          tabItemFlexDirection1="unset"
          tabItemAlignItems1="unset"
          tabItemJustifyContent1="unset"
          tabItemMarginLeft1="unset"
          tabItemPosition1="relative"
          tabItemMarginTop1={4}
          iconViewPosition1="unset"
          iconViewWidth1="unset"
          iconViewHeight1="unset"
          iconViewFlex1={1}
          iconViewFlexDirection1="column"
          iconViewAlignItems1="center"
          iconViewJustifyContent1="center"
          iconViewMarginLeft1={5}
          iconPosition1="relative"
          iconTop1="unset"
          iconLeft1="unset"
          iconOverflow1="unset"
          markerComponentTop1={0}
          markerComponentLeft1={0}
          markerComponentWidth1={24}
          markerComponentHeight1={24}
          roundTop1={-4}
          roundRight1="unset"
          roundBorderRadius1={6}
          roundBackgroundColor1="unset"
          roundJustifyContent1="unset"
          roundAlignItems1="unset"
          roundLeft1={17}
          roundWidth1={16}
          roundHeight1={16}
          roundOverflow1="hidden"
          groupIconRight={6}
          groupIconWidth="unset"
          groupIconHeight="unset"
          groupIconTop={4}
          groupIconBottom="unset"
          groupIconLeft="unset"
          groupIconMaxWidth="unset"
          groupIconOverflow="unset"
          groupIconMaxHeight="unset"
          groupIconBorderRadius={4}
          groupIconBackgroundColor="#ff0066"
          groupIconJustifyContent="center"
          groupIconAlignItems="center"
          labelPosition2="absolute"
          labelFontWeight2="unset"
          labelFontFamily2="unset"
          labelColor2="unset"
          labelTextAlign2="unset"
          labelMarginTop2="unset"
          labelHeight2="86.67%"
          labelWidth2="103.33%"
          labelTop1="15%"
          labelRight="-0.62%"
          labelBottom="-1.67%"
          labelLeft1="-2.71%"
          labelMaxWidth="100%"
          labelOverflow1="hidden"
          labelMaxHeight="100%"
          homeIndicatorDarkAlignSelf="unset"
          homeIndicatorDarkHeight="unset"
          homeIndicatorDarkMarginTop={4}
          homeIndicatorMarginLeft="unset"
          homeIndicatorPosition="relative"
          homeIndicatorBottom="unset"
          homeIndicatorLeft="unset"
          homeIndicatorBackgroundColor="unset"
          homeIndicatorWidth="unset"
          homeIndicatorHeight={34}
          homeIndicatorAlignSelf="stretch"
          onTabItemPress={() => navigation.navigate("HomeAutomatico")}
          onVectorPress={() => navigation.navigate("Servio")}
          onTabItemPress5={() => navigation.navigate("Conta")}
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
        <View style={[styles.navbar, styles.perfilPosition]}>
          <Pressable
            style={styles.wrapper}
            onPress={() =>
              navigation.navigate("SeTorneUmProfissionalContaBancaria")
            }
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/vector-4.png")}
            />
          </Pressable>
          <Text style={[styles.perfilProfissional, styles.adicioneSuaFotoTypo]}>
            Perfil Profissional
          </Text>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={botoFinalizarContainerVisible}
      >
        <View style={styles.botoFinalizarContainerOverlay}>
          <Pressable
            style={styles.botoFinalizarContainerBg}
            onPress={closeBotoFinalizarContainer}
          />
          <ModalContaCriada onClose={closeBotoFinalizarContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  navbarFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  aQuickBeautyFlexBox: {
    display: "flex",
    textAlign: "justify",
    lineHeight: 18,
    alignItems: "center",
  },
  descrioPosition: {
    left: 16,
    position: "absolute",
  },
  perfilPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  fulanoSilvaFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  adicioneSuaFotoTypo: {
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
    lineHeight: 18,
  },
  botoFinalizarContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  botoFinalizarContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  iconParkSolidattention: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  aQuickBeauty: {
    fontSize: FontSize.size_5xs,
    letterSpacing: 0.2,
    fontWeight: "300",
    fontFamily: FontFamily.ralewayLight,
    color: Color.gray_800,
    width: 259,
    marginLeft: 5,
    height: 21,
  },
  iconParkSolidattentionParent: {
    top: 711,
    width: 272,
    height: 21,
    left: 16,
    position: "absolute",
  },
  descrioFaleUm: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.4,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    width: 361,
    color: Color.black,
    position: "absolute",
  },
  descrio: {
    top: 350,
    width: 386,
    height: 180,
  },
  fulanoSilva: {
    marginTop: 52.5,
    marginLeft: -65,
    fontSize: FontSize.size_lg,
    letterSpacing: 0.5,
    fontFamily: FontFamily.ralewayRegular,
    width: 124,
    height: 26,
    left: "50%",
    top: "50%",
    position: "absolute",
    color: Color.black,
    lineHeight: 18,
    justifyContent: "center",
    textAlign: "center",
  },
  fotoDePerfil: {
    marginTop: -78.5,
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
  perfil: {
    marginTop: -292.5,
    marginLeft: -206.5,
    width: 130,
    height: 157,
  },
  adicioneSuaFoto: {
    top: 134,
    left: 15,
    textAlign: "left",
    color: Color.black,
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
  perfilProfissional: {
    color: Color.darkseagreen,
    width: 248,
    height: 35,
    marginLeft: 60,
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
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
    alignItems: "center",
    flexDirection: "row",
  },
  seTorneUmProfissionalFoto: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 929,
    width: "100%",
  },
});

export default SeTorneUmProfissionalFoto;
