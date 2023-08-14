import * as React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import Property1Default1 from '../components/Property1Default1'
import { Color, FontSize, FontFamily, Padding } from '../GlobalStyles'

const Privacidade = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.privacidade}>
      <View style={[styles.localizaoParent, styles.navbarLayout]}>
        <View style={styles.localizao}>
          <View style={styles.localizaoGroup}>
            <Text
              style={[styles.localizao1, styles.privacidadeFlexBox]}
            >{`Localização
`}</Text>
            <Text style={[styles.ativado, styles.ativadoTypo]}>Ativado</Text>
          </View>
        </View>
        <View style={styles.notificaoesParent}>
          <View style={styles.notificaoesLayout}>
            <View style={[styles.notificaesParent, styles.parentPosition]}>
              <Text style={[styles.notificaes, styles.notificaesTypo]}>
                Notificações
              </Text>
              <View style={styles.controleQuaisMensagensDesejWrapper}>
                <Text
                  style={[
                    styles.controleQuaisMensagens,
                    styles.privacidade1FlexBox
                  ]}
                >
                  Controle quais mensagens deseja receber
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.alterarSenha, styles.alterarLayout]}>
            <View style={[styles.alterarSenhaParent, styles.alterarLayout]}>
              <Text style={[styles.alterarSenha1, styles.notificaesTypo]}>
                Alterar senha
              </Text>
              <View style={styles.ltimaAtualizaoDaSenhaHWrapper}>
                <Text
                  style={[
                    styles.controleQuaisMensagens,
                    styles.privacidade1FlexBox
                  ]}
                >
                  Última atualização da senha há 7 meses.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text
        style={[
          styles.centralDePrivacidadeContainer,
          styles.privacidadeFlexBox
        ]}
      >
        <Text style={styles.centralDePrivacidadeContainer1}>
          <Text style={styles.privacidadeTypo}>{`Central de privacidade
`}</Text>
          <Text style={styles.saibaComoNs}>
            Saiba como nós protegemos a sua privacidade
          </Text>
        </Text>
      </Text>
      <Image
        style={[styles.dashiconsprivacy, styles.navbarPosition]}
        contentFit="cover"
        source={require('../assets/dashiconsprivacy1.png')}
      />
      <Property1Default1
        icon={require('../assets/icon4.png')}
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
        labelRight="-0.63%"
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
        onTabItemPress={() => navigation.navigate('HomeAutomatico')}
        onVectorPress={() => navigation.navigate('Servio')}
        onTabItemPress3={() => navigation.navigate('HistoricoServios')}
        onTabItemPress5={() => navigation.navigate('Conta')}
      />

      <Pressable
        style={[styles.navbar, styles.navbarPosition]}
        onPress={() => navigation.navigate('ConfiguraesUserNormal')}
      >
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate('ConfiguraesUserNormal')}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../assets/vector-4.png')}
          />
        </Pressable>
        <Text style={[styles.privacidade1, styles.privacidadeTypo]}>
          Privacidade
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  navbarLayout: {
    width: 431,
    left: 0
  },
  privacidadeFlexBox: {
    display: 'flex',
    alignItems: 'center'
  },
  ativadoTypo: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: '500',
    letterSpacing: 0.5
  },
  parentPosition: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    top: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute'
  },
  notificaesTypo: {
    height: 39,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    color: Color.black,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg
  },
  privacidade1FlexBox: {
    textAlign: 'center',
    lineHeight: 18
  },
  alterarLayout: {
    height: 62,
    width: 424
  },
  navbarPosition: {
    overflow: 'hidden',
    position: 'absolute'
  },
  privacidadeTypo: {
    fontFamily: FontFamily.ralewayBold,
    fontWeight: '700'
  },
  localizao1: {
    width: 118,
    height: 43,
    alignItems: 'center',
    textAlign: 'left',
    lineHeight: 18,
    color: Color.black,
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    display: 'flex',
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: '600'
  },
  ativado: {
    marginTop: -15,
    textAlign: 'left',
    lineHeight: 18
  },
  localizaoGroup: {
    paddingLeft: Padding.p_xl,
    top: 0,
    height: 65,
    width: 424,
    justifyContent: 'center',
    left: 0,
    position: 'absolute'
  },
  localizao: {
    height: 65,
    width: 424
  },
  notificaes: {
    width: 116
  },
  controleQuaisMensagens: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: '500',
    letterSpacing: 0.5
  },
  controleQuaisMensagensDesejWrapper: {
    marginTop: 2,
    flexDirection: 'row'
  },
  notificaesParent: {
    height: 77,
    width: 424
  },
  notificaoesLayout: {
    height: 77,
    width: 424
  },
  alterarSenha1: {
    width: 145
  },
  ltimaAtualizaoDaSenhaHWrapper: {
    alignItems: 'flex-end',
    marginTop: 1,
    flexDirection: 'row'
  },
  alterarSenhaParent: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    top: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute'
  },
  alterarSenha: {
    marginTop: 7
  },
  notificaoesParent: {
    width: 436,
    height: 127,
    marginTop: 7,
    justifyContent: 'center'
  },
  localizaoParent: {
    top: 230,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    justifyContent: 'center',
    position: 'absolute',
    left: 0
  },
  saibaComoNs: {
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: '500'
  },
  centralDePrivacidadeContainer1: {
    lineBreak: 'anywhere',
    width: '100%'
  },
  centralDePrivacidadeContainer: {
    top: 145,
    left: 91,
    textAlign: 'justify',
    width: 275,
    alignItems: 'center',
    color: Color.black,
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    display: 'flex',
    lineHeight: 18,
    position: 'absolute'
  },
  dashiconsprivacy: {
    top: 137,
    left: 25,
    width: 56,
    height: 57
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    width: 19,
    height: 19
  },
  privacidade1: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    color: Color.darkseagreen,
    width: 186,
    height: 35,
    marginLeft: 90,
    textAlign: 'center',
    lineHeight: 18,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
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
    height: 53,
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_base,
    flexDirection: 'row',
    alignItems: 'center',
    width: 431,
    left: 0
  },
  privacidade: {
    backgroundColor: Color.colorsBackgroundsLight,
    flex: 1,
    height: 929,
    width: '100%'
  }
})

export default Privacidade
