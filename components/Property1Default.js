import React, { useMemo } from 'react'
import { StyleSheet, View, Text, ImageSourcePropType } from 'react-native'
import { Image } from 'expo-image'
import { Border, Color, FontSize, FontFamily, Padding } from '../GlobalStyles'

const getStyleValue = (key, value) => {
  if (value === undefined) return
  return { [key]: value === 'unset' ? undefined : value }
}
const Property1Default = ({
  qualServioDesejaSolicitar,
  group,
  property1DefaultPosition,
  property1DefaultWidth,
  property1DefaultTop,
  property1DefaultLeft,
  qualServioDesejaColor,
  groupIconMarginLeft,
  keywordResearchMarginLeft,
  onBarraDePesquisaPress
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue('position', property1DefaultPosition),
      ...getStyleValue('width', property1DefaultWidth),
      ...getStyleValue('top', property1DefaultTop),
      ...getStyleValue('left', property1DefaultLeft)
    }
  }, [
    property1DefaultPosition,
    property1DefaultWidth,
    property1DefaultTop,
    property1DefaultLeft
  ])

  const qualServioDesejaStyle = useMemo(() => {
    return {
      ...getStyleValue('color', qualServioDesejaColor)
    }
  }, [qualServioDesejaColor])

  const groupIconStyle = useMemo(() => {
    return {
      ...getStyleValue('marginLeft', groupIconMarginLeft)
    }
  }, [groupIconMarginLeft])

  const keywordResearchStyle = useMemo(() => {
    return {
      ...getStyleValue('marginLeft', keywordResearchMarginLeft)
    }
  }, [keywordResearchMarginLeft])

  return (
    <View
      style={[styles.property1default, property1DefaultStyle]}
      onPress={onBarraDePesquisaPress}
    >
      <View style={styles.property1defaultChild} />
      <View style={styles.qualServioDesejaSolicitarParent}>
        <Text style={[styles.qualServioDeseja, qualServioDesejaStyle]}>
          {qualServioDesejaSolicitar}
        </Text>
        <Image
          style={[styles.groupIcon, groupIconStyle]}
          contentFit="cover"
          source={group}
        />
        <View style={[styles.keywordResearch, keywordResearchStyle]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  property1defaultChild: {
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: Border.br_8xs,
    backgroundColor: Color.whitesmoke_200,
    shadowColor: 'rgba(0, 0, 0, 0.55)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: '#96c486',
    borderWidth: 0.5,
    position: 'absolute'
  },
  qualServioDeseja: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: FontFamily.ralewayMedium,
    color: Color.gray_500,
    textAlign: 'center'
  },
  groupIcon: {
    width: 23,
    height: 23,
    marginLeft: 150
  },
  keywordResearch: {
    width: 24,
    height: 24,
    overflow: 'hidden',
    marginLeft: 150
  },
  qualServioDesejaSolicitarParent: {
    height: '60%',
    width: '70%',
    top: '20%',
    right: '8.06%',
    bottom: '20%',
    left: '1.51%',
    flexDirection: 'row',
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    alignItems: 'center',
    position: 'absolute'
  },
  property1default: {
    width: 397,
    height: 40
  }
})

export default Property1Default
