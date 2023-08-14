import * as React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import Property1Default1 from '../components/Property1Default1'
import { FontFamily, FontSize, Color, Padding } from '../GlobalStyles'

const ChatProfissional = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.chatProfissional}>
      <View style={styles.mensagem4}>
        <Text style={[styles.andreiaFerreira, styles.essaFlexBox]}>
          Andreia Ferreira
        </Text>
        <Text style={[styles.essaConversaFoi, styles.essaTypo]}>
          Essa conversa foi finalizada
        </Text>
        <Text style={[styles.text, styles.textTypo]}>28/02/2023</Text>
        <Image
          style={[styles.mensagem4Child, styles.mensagemChildLayout]}
          contentFit="cover"
          source={require('../assets/ellipse-30.png')}
        />
      </View>
      <View style={styles.mensagem}>
        <Image
          style={[styles.mensagemChild, styles.mensagemLayout1]}
          contentFit="cover"
          source={require('../assets/line-51.png')}
        />
        <Text style={[styles.mariaEduarda, styles.essaFlexBox]}>
          Maria Eduarda
        </Text>
        <Text style={[styles.essaConversaFoi1, styles.essaTypo]}>
          Essa conversa foi finalizada
        </Text>
        <Text style={[styles.text1, styles.textTypo]}>05/04/2023</Text>
        <Image
          style={[styles.mensagemItem, styles.mensagemChildLayout]}
          contentFit="cover"
          source={require('../assets/ellipse-30.png')}
        />
      </View>
      <View style={[styles.mensagem1, styles.mensagemLayout]}>
        <Image
          style={[styles.mensagemInner, styles.mensagemLayout1]}
          contentFit="cover"
          source={require('../assets/line-51.png')}
        />
        <Text style={[styles.robertaFernandes, styles.essaFlexBox]}>
          Roberta Fernandes
        </Text>
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require('../assets/ellipse-15.png')}
        />
        <Text style={[styles.essaConversaFoi2, styles.essaTypo]}>
          Essa conversa foi finalizada
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>15/04/2023</Text>
        <Image
          style={[styles.mensagemChild1, styles.mensagemChildLayout]}
          contentFit="cover"
          source={require('../assets/ellipse-30.png')}
        />
      </View>
      <View style={[styles.mensagem2, styles.mensagemLayout]}>
        <Image
          style={[styles.lineIcon, styles.mensagemLayout1]}
          contentFit="cover"
          source={require('../assets/line-51.png')}
        />
        <Text style={[styles.claraMaria, styles.claraMariaClr]}>
          Clara Maria
        </Text>
        <Text style={[styles.obrigadaEstareiTe, styles.claraMariaClr]}>
          Obrigada, estarei te esperando
        </Text>
        <Text style={[styles.h, styles.textTypo]}>1h</Text>
        <Image
          style={[styles.mensagemChild2, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require('../assets/ellipse-15.png')}
        />
        <Image
          style={[styles.mensagemItem, styles.mensagemChildLayout]}
          contentFit="cover"
          source={require('../assets/ellipse-30.png')}
        />
      </View>
      <Property1Default1
        icon={require('../assets/icon4.png')}
        vector={require('../assets/vector8.png')}
        label="Serviços"
        icon1={require('../assets/icon5.png')}
        mdiclipboardTextHistory={require('../assets/icon1.png')}
        label1="Mensagens"
        icon2={require('../assets/icon1.png')}
        group={require('../assets/group4.png')}
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
        onTabItemPress={() => navigation.navigate('HomeAutomatico')}
      />
      <Pressable
        style={styles.navbar}
        onPress={() => navigation.navigate('HomeAutomatico')}
      >
        <Image
          style={styles.navbarChild}
          contentFit="cover"
          source={require('../assets/vector-4.png')}
        />
        <Text style={[styles.mensagens, styles.essaFlexBox]}>Mensagens</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  essaFlexBox: {
    textAlign: 'left',
    lineHeight: 18
  },
  essaTypo: {
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: '500',
    letterSpacing: 1.1,
    fontSize: FontSize.size_2xs,
    left: 63
  },
  textTypo: {
    color: Color.silver_100,
    letterSpacing: 0.8,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: '500',
    textAlign: 'left',
    lineHeight: 18,
    position: 'absolute'
  },
  mensagemChildLayout: {
    height: 48,
    width: 49,
    left: 0,
    position: 'absolute'
  },
  mensagemLayout1: {
    height: 1,
    width: 362,
    left: 0,
    position: 'absolute'
  },
  mensagemLayout: {
    width: 367,
    position: 'absolute'
  },
  ellipseIconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    width: '2.21%',
    overflow: 'hidden',
    position: 'absolute'
  },
  claraMariaClr: {
    color: Color.black,
    textAlign: 'left',
    lineHeight: 18,
    position: 'absolute'
  },
  andreiaFerreira: {
    color: Color.gainsboro_100,
    textAlign: 'left',
    lineHeight: 18,
    position: 'absolute',
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: '600',
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    left: 60,
    top: 3
  },
  essaConversaFoi: {
    top: 27,
    textAlign: 'left',
    lineHeight: 18,
    color: Color.gainsboro_100,
    position: 'absolute'
  },
  text: {
    left: 315,
    letterSpacing: 0.8,
    fontSize: FontSize.size_5xs,
    top: 0
  },
  mensagem4Child: {
    top: 3
  },
  mensagem4: {
    top: 411,
    left: 23,
    width: 368,
    height: 51,
    position: 'absolute'
  },
  mensagemChild: {
    top: 151
  },
  mariaEduarda: {
    top: 92,
    color: Color.gainsboro_100,
    textAlign: 'left',
    lineHeight: 18,
    position: 'absolute',
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: '600',
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    left: 60
  },
  essaConversaFoi1: {
    top: 116,
    textAlign: 'left',
    lineHeight: 18,
    color: Color.gainsboro_100,
    position: 'absolute'
  },
  text1: {
    top: 89,
    left: 315,
    letterSpacing: 0.8,
    fontSize: FontSize.size_5xs
  },
  mensagemItem: {
    top: 0
  },
  mensagem: {
    top: 230,
    width: 369,
    height: 152,
    left: 22,
    position: 'absolute'
  },
  mensagemInner: {
    top: 146
  },
  robertaFernandes: {
    top: 87,
    left: 59,
    color: Color.gainsboro_100,
    textAlign: 'left',
    lineHeight: 18,
    position: 'absolute',
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: '600',
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi
  },
  ellipseIcon: {
    height: '3.55%',
    top: '0%',
    right: '23.95%',
    bottom: '96.45%',
    left: '73.84%'
  },
  essaConversaFoi2: {
    top: 111,
    textAlign: 'left',
    lineHeight: 18,
    color: Color.gainsboro_100,
    position: 'absolute'
  },
  text2: {
    top: 84,
    left: 315,
    letterSpacing: 0.8,
    fontSize: FontSize.size_5xs
  },
  mensagemChild1: {
    top: 179
  },
  mensagem1: {
    top: 143,
    height: 227,
    left: 22
  },
  lineIcon: {
    top: 59
  },
  claraMaria: {
    top: 0,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: '600',
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    left: 60
  },
  obrigadaEstareiTe: {
    top: 24,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: '500',
    letterSpacing: 1.1,
    fontSize: FontSize.size_2xs,
    left: 63
  },
  h: {
    left: 357,
    top: 0
  },
  mensagemChild2: {
    height: '13.38%',
    top: '8.3%',
    right: '23.68%',
    bottom: '78.32%',
    left: '74.11%'
  },
  mensagem2: {
    top: 138,
    left: 21,
    height: 60
  },
  navbarChild: {
    width: 19,
    height: 19
  },
  mensagens: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    fontWeight: '700',
    fontFamily: FontFamily.ralewayBold,
    color: Color.darkseagreen,
    display: 'flex',
    width: 119,
    height: 35,
    marginLeft: 120,
    alignItems: 'center',
    textAlign: 'left',
    lineHeight: 18
  },
  navbar: {
    top: 47,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(151, 151, 151, 0.5)',
    borderBottomWidth: 1,
    width: 428,
    height: 53,
    flexDirection: 'row',
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_31xl,
    alignItems: 'center',
    overflow: 'hidden',
    left: 0,
    position: 'absolute'
  },
  chatProfissional: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    width: '100%',
    height: 933
  }
})

export default ChatProfissional
