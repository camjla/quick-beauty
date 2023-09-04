import * as React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Image } from 'expo-image'
import { Color, FontSize, FontFamily } from '../GlobalStyles'

const ProfileCard1 = () => {
  return (
    <View style={[styles.perfil, styles.perfilPosition]}>
      <Text style={[styles.fulanoSilva, styles.fulanoSilvaPosition]}>
        Fulano Silva
      </Text>
      <Image
        style={[styles.fotoDePerfil, styles.perfilPosition]}
        contentFit="cover"
        source={require('../assets/foto-de-perfil.png')}
      />
      <View
        style={[styles.materialSymbolsstarParent, styles.fulanoSilvaPosition]}
      >
        <Image
          style={styles.materialSymbolsstarIcon}
          contentFit="cover"
          source={require('../assets/materialsymbolsstar.png')}
        />
        <Text style={[styles.text, styles.textFlexBox]}>4,62</Text>
      </View>
      <Image
        style={styles.materialSymbolseditIcon}
        contentFit="cover"
        source={require('../assets/materialsymbolsedit.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  perfilPosition: {
    left: '20%',
    top: '25%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column'
  },
  fulanoSilvaPosition: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  textFlexBox: {
    textAlign: 'center',
    color: Color.black
  },
  fulanoSilva: {
    marginTop: 37.5,
    marginLeft: -99,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.8,
    fontFamily: FontFamily.ralewayRegular,

    height: 71,
    textAlign: 'center',
    color: Color.black,
    width: 200
  },
  fotoDePerfil: {
    marginTop: -116.5,
    marginLeft: -79,
    width: 157,
    height: 158
  },
  materialSymbolsstarIcon: {
    width: 16,
    height: 16,
    overflow: 'hidden'
  },
  text: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0.5,
    fontFamily: FontFamily.robotoRegular,
    marginLeft: 2
  },
  materialSymbolsstarParent: {
    marginTop: 92.5,
    marginLeft: -29,
    alignItems: 'center',
    justifyContent: 'space-between',

    flexDirection: 'row'
  },
  materialSymbolseditIcon: {
    top: -15,
    left: 45,
    width: 40,
    height: 40,
    overflow: 'hidden',
    position: 'absolute'
  },
  perfil: {
    display: 'flex',
    flexDirection: 'column'
  }
})

export default ProfileCard1
