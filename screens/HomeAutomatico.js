import * as React from 'react'
import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import NewsContainer from '../components/NewsContainer'
import HighlightedServicesContainer1 from '../components/HighlightedServicesContainer1'
import Property1Default from '../components/Property1Default'
import Property1Default1 from '../components/Property1Default1'
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'

const HomeAutomatico = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.homeAutomatico}>
      to
      <HighlightedServicesContainer1 />
      <NewsContainer />
      <Property1Default
        qualServioDesejaSolicitar="Qual serviço deseja solicitar?"
        group={require('../assets/group.png')}
        property1DefaultPosition="absolute"
        property1DefaultWidth={350}
        property1DefaultTop={124}
        property1DefaultLeft={20}
        qualServioDesejaColor="#7c7c7c"
        groupIconMarginLeft={120}
        keywordResearchMarginLeft={150}
        onBarraDePesquisaPress={() => navigation.navigate('Servio')}
      />
      <View style={styles.title}>
        <Image
          style={styles.sunIcon}
          contentFit="cover"
          source={require('../assets/sun.png')}
        />
        <Text style={[styles.bomDiaFulano, styles.bomDiaFulanoFlexBox]}>
          Bom dia, Fulano!
        </Text>
      </View>
      <View style={styles.sejaumprofissional}>
        <Image
          style={styles.sejaumprofissionalChild}
          contentFit="cover"
          source={require('../assets/rectangle-3721.png')}
        />
        <Text style={[styles.sejaUmProfissional, styles.vejaMaisDetalhesTypo]}>
          Seja um profissional
        </Text>
        <Pressable
          style={styles.linkvejamais}
          onPress={() => navigation.navigate('SeTorneUmProfissionalInicio')}
        >
          <Text
            style={[styles.vejaMaisDetalhes, styles.vejaMaisDetalhesTypo]}
          >{`Veja mais detalhes `}</Text>
          <Image
            style={styles.linkvejamaisChild}
            contentFit="cover"
            source={require('../assets/arrow-2.png')}
          />
        </Pressable>
      </View>
      <Property1Default1
        icon={require('../assets/icon.png')}
        vector={require('../assets/vector1.png')}
        label="Serviços"
        icon1={require('../assets/icon1.png')}
        mdiclipboardTextHistory={require('../assets/mdiclipboardtexthistory.png')}
        label1="Histórico"
        icon2={require('../assets/icon1.png')}
        group={require('../assets/group1.png')}
        label2="Conta"
        showMarkerComponent={false}
        markerComponentVisible={false}
        showRound
        showMdiclipboardTextHistoryIc
        markerComponentVisible1={false}
        roundVisible
        property1DefaultPosition="absolute"
        property1DefaultWidth="unset"
        property1DefaultHeight={127}
        property1DefaultRight={27}
        property1DefaultBottom={5}
        property1DefaultLeft={26}
        property1DefaultOverflow="unset"
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
        homeIndicatorDarkAlignSelf="stretch"
        homeIndicatorDarkHeight={34}
        homeIndicatorDarkMarginTop="unset"
        homeIndicatorMarginLeft={-66.5}
        homeIndicatorPosition="absolute"
        homeIndicatorBottom={8}
        homeIndicatorLeft="50%"
        homeIndicatorBorderRadius={100}
        homeIndicatorBackgroundColor="#0b0712"
        homeIndicatorWidth={134}
        homeIndicatorHeight={5}
        homeIndicatorAlignSelf="unset"
        onTabItemPress1={() => navigation.navigate('Servio')}
        onTabItemPress2={() => navigation.navigate('HistoricoServios')}
        onTabItemPress4={() => navigation.navigate('Conta')}
      />
      <NewsContainer />
    </View>
  )
}

const styles = StyleSheet.create({
  bomDiaFulanoFlexBox: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  vejaMaisDetalhesTypo: {
    color: Color.white,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 18,
    position: 'absolute'
  },
  sunIcon: {
    width: 28,
    height: 27,
    overflow: 'hidden'
  },
  bomDiaFulano: {
    fontSize: FontSize.size_7xl,
    letterSpacing: 0.8,
    textTransform: 'capitalize',
    fontWeight: '500',
    fontFamily: FontFamily.ralewayMedium,
    color: Color.black,
    width: 232,
    marginLeft: 3,
    textAlign: 'center',
    // lineHeight: 18,
    justifyContent: 'center',
    display: 'flex'
  },
  title: {
    top: 60,
    left: 21,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute'
  },
  sejaumprofissionalChild: {
    top: 14,
    borderRadius: Border.br_5xs,
    width: 382,
    height: 132,
    left: 0,
    position: 'absolute'
  },
  sejaUmProfissional: {
    top: 36,
    left: 3,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.5,
    width: 170,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  vejaMaisDetalhes: {
    top: 0,
    fontSize: FontSize.size_5xs,
    textDecoration: 'underline',
    letterSpacing: 0.2,
    left: 0
  },
  linkvejamaisChild: {
    top: 6,
    left: 81,
    width: 9,
    height: 7,
    position: 'absolute'
  },
  linkvejamais: {
    top: 52,
    left: 7,
    width: 89,
    height: 18,
    position: 'absolute'
  },
  sejaumprofissional: {
    top: 414,
    left: 12,
    width: 392,
    height: 157,
    overflow: 'hidden',
    position: 'absolute'
  },
  homeAutomatico: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    width: '100%'
  }
})

export default HomeAutomatico
