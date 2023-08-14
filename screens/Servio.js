import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import ModalBuscar from "../components/ModalBuscar";
import { useNavigation } from "@react-navigation/native";
import FormContainer1 from "../components/FormContainer1";
import Property1Default from "../components/Property1Default";
import Property1Default1 from "../components/Property1Default1";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Servio = () => {
  const [
    materialSymbolscalendarMontIconVisible,
    setMaterialSymbolscalendarMontIconVisible,
  ] = useState(false);
  const navigation = useNavigation();

  const openMaterialSymbolscalendarMontIcon = useCallback(() => {
    setMaterialSymbolscalendarMontIconVisible(true);
  }, []);

  const closeMaterialSymbolscalendarMontIcon = useCallback(() => {
    setMaterialSymbolscalendarMontIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.servio}>
        <FormContainer1
          name1="Mariana Pimentel"
          serviceProviderName="Cabelereira e Maquiadora"
          distanceLabel="Distância: 2km"
          priceLabel="R$ 35,00"
          rating="4,62"
          availabilityLabel="Agenda disponível"
          serviceProviderId={require("../assets/materialsymbolscalendarmonth.png")}
          onMaterialSymbolscalendarMoPress={openMaterialSymbolscalendarMontIcon}
        />
        <Text style={[styles.filtrar, styles.filtrarClr]}>Filtrar</Text>
        <FormContainer1
          name1="Anna Clara"
          serviceProviderName="Cabelereira"
          distanceLabel="Distância: 0,9km"
          priceLabel="R$ 58,00"
          rating="4,00"
          availabilityLabel="Agenda disponível"
          serviceProviderId={require("../assets/materialsymbolscalendarmonth.png")}
          rectangleViewTop={296}
          rectangleViewLeft={20}
          icoutlineStarIconWidth={30}
          onMaterialSymbolscalendarMoPress={openMaterialSymbolscalendarMontIcon}
        />
        <FormContainer1
          name1="Luiza Ferreira"
          serviceProviderName="Cabelereira e Depiladora"
          distanceLabel="Distância: 3km"
          priceLabel="R$ 40,00"
          rating="5,00"
          availabilityLabel="Agenda esgotada"
          serviceProviderId={require("../assets/materialsymbolscalendarmonth1.png")}
          rectangleViewTop={380}
          rectangleViewLeft={20}
          icoutlineStarIconWidth={30}
          onMaterialSymbolscalendarMoPress={openMaterialSymbolscalendarMontIcon}
        />
        <FormContainer1
          name1="Alexandra Gomes"
          serviceProviderName="Cabelereira"
          distanceLabel="Distancia: 6km"
          priceLabel="R$ 48,00"
          rating="4,98"
          availabilityLabel="Agenda disponível"
          serviceProviderId={require("../assets/materialsymbolscalendarmonth.png")}
          rectangleViewTop={464}
          rectangleViewLeft={20}
          icoutlineStarIconWidth={30}
          onMaterialSymbolscalendarMoPress={openMaterialSymbolscalendarMontIcon}
        />
        <FormContainer1
          name1="Carla Pereira"
          serviceProviderName="Cabelereira e Manicure"
          distanceLabel="Distância: 3km"
          priceLabel="R$ 60,00"
          rating="4,20"
          availabilityLabel="Agenda esgotada"
          serviceProviderId={require("../assets/materialsymbolscalendarmonth1.png")}
          rectangleViewTop={548}
          rectangleViewLeft={20}
          icoutlineStarIconWidth={29}
          onMaterialSymbolscalendarMoPress={openMaterialSymbolscalendarMontIcon}
        />
        <FormContainer1
          name1="Juliana Fernandes"
          serviceProviderName="Cabelereira"
          distanceLabel="Distância: 1km"
          priceLabel="R$ 45,00"
          rating="4,35"
          availabilityLabel="Agenda disponível"
          serviceProviderId={require("../assets/materialsymbolscalendarmonth.png")}
          rectangleViewTop={632}
          rectangleViewLeft={19}
          icoutlineStarIconWidth={29}
          onMaterialSymbolscalendarMoPress={openMaterialSymbolscalendarMontIcon}
        />
        <FormContainer1
          name1="Vitoria Atsumoto"
          serviceProviderName="Cabelereira e Designer de Sobrancelha"
          distanceLabel="Distância: 5km"
          priceLabel="R$ 62,00"
          rating="4,55"
          availabilityLabel="Agenda esgotada"
          serviceProviderId={require("../assets/materialsymbolscalendarmonth1.png")}
          rectangleViewTop={716}
          rectangleViewLeft={19}
          icoutlineStarIconWidth={29}
          onMaterialSymbolscalendarMoPress={openMaterialSymbolscalendarMontIcon}
        />
        <FormContainer1
          name1="Carolina  Almeida"
          serviceProviderName="Cabelereira"
          distanceLabel="Distância: 1km"
          priceLabel="R$ 40,00"
          rating="4,75"
          availabilityLabel="Agenda disponível"
          serviceProviderId={require("../assets/materialsymbolscalendarmonth.png")}
          rectangleViewTop={800}
          rectangleViewLeft={20}
          icoutlineStarIconWidth={29}
          onMaterialSymbolscalendarMoPress={openMaterialSymbolscalendarMontIcon}
        />
        <FormContainer1
          name1="Gustavo Henrique"
          serviceProviderName="Cabelereiro e Barbeiro"
          distanceLabel="Distância: 4km"
          priceLabel="R$ 60,00"
          rating="4,80"
          availabilityLabel="Agenda disponível"
          serviceProviderId={require("../assets/materialsymbolscalendarmonth.png")}
          rectangleViewTop={884}
          rectangleViewLeft={20}
          icoutlineStarIconWidth={30}
          onMaterialSymbolscalendarMoPress={openMaterialSymbolscalendarMontIcon}
        />
        <View style={styles.barraDePesquisa}>
          <Property1Default
            qualServioDesejaSolicitar="Corte de cabelo feminino e escova."
            group={require("../assets/group.png")}
            property1DefaultPosition="absolute"
            property1DefaultWidth={391}
            property1DefaultTop={0}
            property1DefaultLeft={0}
            qualServioDesejaColor="#0b0b0b"
            groupIconMarginLeft={105}
            keywordResearchMarginLeft={105}
          />
          <Pressable
            style={styles.materialSymbolscalendarMont}
            onPress={openMaterialSymbolscalendarMontIcon}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/materialsymbolscalendarmonth2.png")}
            />
          </Pressable>
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
          onTabItemPress2={() => navigation.navigate("HistoricoServios")}
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
          style={styles.navbar}
          onPress={() => navigation.navigate("HomeAutomatico")}
        >
          <Image
            style={styles.navbarChild}
            contentFit="cover"
            source={require("../assets/vector-4.png")}
          />
          <Text style={[styles.servios, styles.filtrarClr]}>Serviços</Text>
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={materialSymbolscalendarMontIconVisible}
      >
        <View style={styles.materialSymbolscalendarMontIconOverlay}>
          <Pressable
            style={styles.materialSymbolscalendarMontIconBg}
            onPress={closeMaterialSymbolscalendarMontIcon}
          />
          <ModalBuscar onClose={closeMaterialSymbolscalendarMontIcon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={materialSymbolscalendarMontIconVisible}
      >
        <View style={styles.materialSymbolscalendarMontIconOverlay1}>
          <Pressable
            style={styles.materialSymbolscalendarMontIconBg1}
            onPress={closeMaterialSymbolscalendarMontIcon}
          />
          <ModalBuscar onClose={closeMaterialSymbolscalendarMontIcon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={materialSymbolscalendarMontIconVisible}
      >
        <View style={styles.materialSymbolscalendarMontIconOverlay2}>
          <Pressable
            style={styles.materialSymbolscalendarMontIconBg2}
            onPress={closeMaterialSymbolscalendarMontIcon}
          />
          <ModalBuscar onClose={closeMaterialSymbolscalendarMontIcon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={materialSymbolscalendarMontIconVisible}
      >
        <View style={styles.materialSymbolscalendarMontIconOverlay3}>
          <Pressable
            style={styles.materialSymbolscalendarMontIconBg3}
            onPress={closeMaterialSymbolscalendarMontIcon}
          />
          <ModalBuscar onClose={closeMaterialSymbolscalendarMontIcon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={materialSymbolscalendarMontIconVisible}
      >
        <View style={styles.materialSymbolscalendarMontIconOverlay4}>
          <Pressable
            style={styles.materialSymbolscalendarMontIconBg4}
            onPress={closeMaterialSymbolscalendarMontIcon}
          />
          <ModalBuscar onClose={closeMaterialSymbolscalendarMontIcon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={materialSymbolscalendarMontIconVisible}
      >
        <View style={styles.materialSymbolscalendarMontIconOverlay5}>
          <Pressable
            style={styles.materialSymbolscalendarMontIconBg5}
            onPress={closeMaterialSymbolscalendarMontIcon}
          />
          <ModalBuscar onClose={closeMaterialSymbolscalendarMontIcon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={materialSymbolscalendarMontIconVisible}
      >
        <View style={styles.materialSymbolscalendarMontIconOverlay6}>
          <Pressable
            style={styles.materialSymbolscalendarMontIconBg6}
            onPress={closeMaterialSymbolscalendarMontIcon}
          />
          <ModalBuscar onClose={closeMaterialSymbolscalendarMontIcon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={materialSymbolscalendarMontIconVisible}
      >
        <View style={styles.materialSymbolscalendarMontIconOverlay7}>
          <Pressable
            style={styles.materialSymbolscalendarMontIconBg7}
            onPress={closeMaterialSymbolscalendarMontIcon}
          />
          <ModalBuscar onClose={closeMaterialSymbolscalendarMontIcon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={materialSymbolscalendarMontIconVisible}
      >
        <View style={styles.materialSymbolscalendarMontIconOverlay8}>
          <Pressable
            style={styles.materialSymbolscalendarMontIconBg8}
            onPress={closeMaterialSymbolscalendarMontIcon}
          />
          <ModalBuscar onClose={closeMaterialSymbolscalendarMontIcon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={materialSymbolscalendarMontIconVisible}
      >
        <View style={styles.materialSymbolscalendarMontIconOverlay9}>
          <Pressable
            style={styles.materialSymbolscalendarMontIconBg9}
            onPress={closeMaterialSymbolscalendarMontIcon}
          />
          <ModalBuscar onClose={closeMaterialSymbolscalendarMontIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  filtrarClr: {
    color: Color.darkseagreen,
    lineHeight: 18,
  },
  materialSymbolscalendarMontIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  materialSymbolscalendarMontIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  materialSymbolscalendarMontIconOverlay1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  materialSymbolscalendarMontIconBg1: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  materialSymbolscalendarMontIconOverlay2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  materialSymbolscalendarMontIconBg2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  materialSymbolscalendarMontIconOverlay3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  materialSymbolscalendarMontIconBg3: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  materialSymbolscalendarMontIconOverlay4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  materialSymbolscalendarMontIconBg4: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  materialSymbolscalendarMontIconOverlay5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  materialSymbolscalendarMontIconBg5: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  materialSymbolscalendarMontIconOverlay6: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  materialSymbolscalendarMontIconBg6: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  materialSymbolscalendarMontIconOverlay7: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  materialSymbolscalendarMontIconBg7: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  materialSymbolscalendarMontIconOverlay8: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  materialSymbolscalendarMontIconBg8: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  filtrar: {
    top: 179,
    left: 372,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.3,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemiBold,
    textAlign: "center",
    position: "absolute",
  },
  materialSymbolscalendarMontIconOverlay9: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  materialSymbolscalendarMontIconBg9: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  materialSymbolscalendarMont: {
    left: 322,
    top: 7,
    width: 27,
    height: 27,
    position: "absolute",
  },
  barraDePesquisa: {
    top: 131,
    left: 21,
    width: 391,
    height: 40,
    position: "absolute",
  },
  navbarChild: {
    width: 19,
    height: 19,
  },
  servios: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    textAlign: "left",
    display: "flex",
    width: 95,
    height: 35,
    marginLeft: 137,
    alignItems: "center",
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
    width: 428,
    height: 53,
    flexDirection: "row",
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_31xl,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  servio: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 933,
    width: "100%",
  },
});

export default Servio;
