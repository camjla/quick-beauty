import React, { useMemo } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Text } from 'react-native'
import { Border, Color, FontSize, FontFamily, Padding } from '../GlobalStyles'

const getStyleValue = (key, value) => {
  if (value === undefined) return
  return { [key]: value === 'unset' ? undefined : value }
}
const Property1Default1 = ({
  icon,
  vector,
  label,
  icon1,
  mdiclipboardTextHistory,
  label1,
  icon2,
  group,
  label2,
  showMarkerComponent,
  markerComponentVisible,
  showRound,
  showMdiclipboardTextHistoryIc,
  markerComponentVisible1,
  roundVisible,
  property1DefaultPosition,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultRight,
  property1DefaultBottom,
  property1DefaultLeft,
  property1DefaultOverflow,
  labelPosition,
  labelFontSize,
  labelLetterSpacing,
  labelLineHeight,
  labelFontWeight,
  labelFontFamily,
  labelColor,
  labelTextAlign,
  labelMarginTop,
  labelWidth,
  labelHeight,
  tabItemFlex,
  tabItemFlexDirection,
  tabItemAlignItems,
  tabItemJustifyContent,
  tabItemMarginLeft,
  tabItemPosition,
  tabItemMarginTop,
  iconViewPosition,
  iconViewWidth,
  iconViewHeight,
  iconViewFlex,
  iconViewFlexDirection,
  iconViewAlignItems,
  iconViewJustifyContent,
  iconViewMarginLeft,
  iconPosition,
  iconTop,
  iconLeft,
  iconOverflow,
  markerComponentTop,
  markerComponentLeft,
  markerComponentBorderRadius,
  markerComponentWidth,
  markerComponentHeight,
  roundTop,
  roundRight,
  roundBorderRadius,
  roundBackgroundColor,
  roundJustifyContent,
  roundAlignItems,
  roundLeft,
  roundWidth,
  roundHeight,
  roundOverflow,
  mdiclipboardTextHistoryIcTop,
  mdiclipboardTextHistoryIcLeft,
  mdiclipboardTextHistoryIcWidth,
  mdiclipboardTextHistoryIcHeight,
  mdiclipboardTextHistoryIcOverflow,
  mdiclipboardTextHistoryIcRight,
  mdiclipboardTextHistoryIcBorderRadius,
  mdiclipboardTextHistoryIcBackgroundColor,
  mdiclipboardTextHistoryIcJustifyContent,
  mdiclipboardTextHistoryIcAlignItems,
  labelPosition1,
  labelFontSize1,
  labelLetterSpacing1,
  labelLineHeight1,
  labelFontWeight1,
  labelFontFamily1,
  labelColor1,
  labelTextAlign1,
  labelMarginTop1,
  labelTop,
  labelLeft,
  labelWidth1,
  labelHeight1,
  labelOverflow,
  tabItemFlex1,
  tabItemFlexDirection1,
  tabItemAlignItems1,
  tabItemJustifyContent1,
  tabItemMarginLeft1,
  tabItemPosition1,
  tabItemMarginTop1,
  iconViewPosition1,
  iconViewWidth1,
  iconViewHeight1,
  iconViewFlex1,
  iconViewFlexDirection1,
  iconViewAlignItems1,
  iconViewJustifyContent1,
  iconViewMarginLeft1,
  iconPosition1,
  iconTop1,
  iconLeft1,
  iconOverflow1,
  markerComponentTop1,
  markerComponentLeft1,
  markerComponentBorderRadius1,
  markerComponentWidth1,
  markerComponentHeight1,
  roundTop1,
  roundRight1,
  roundBorderRadius1,
  roundBackgroundColor1,
  roundJustifyContent1,
  roundAlignItems1,
  roundLeft1,
  roundWidth1,
  roundHeight1,
  roundOverflow1,
  groupIconRight,
  groupIconWidth,
  groupIconHeight,
  groupIconTop,
  groupIconBottom,
  groupIconLeft,
  groupIconMaxWidth,
  groupIconOverflow,
  groupIconMaxHeight,
  groupIconBorderRadius,
  groupIconBackgroundColor,
  groupIconJustifyContent,
  groupIconAlignItems,
  labelPosition2,
  labelFontSize2,
  labelLetterSpacing2,
  labelLineHeight2,
  labelFontWeight2,
  labelFontFamily2,
  labelColor2,
  labelTextAlign2,
  labelMarginTop2,
  labelHeight2,
  labelWidth2,
  labelTop1,
  labelRight,
  labelBottom,
  labelLeft1,
  labelMaxWidth,
  labelOverflow1,
  labelMaxHeight,
  homeIndicatorDarkAlignSelf,
  homeIndicatorDarkHeight,
  homeIndicatorDarkMarginTop,
  homeIndicatorMarginLeft,
  homeIndicatorPosition,
  homeIndicatorBottom,
  homeIndicatorLeft,
  homeIndicatorBorderRadius,
  homeIndicatorBackgroundColor,
  homeIndicatorWidth,
  homeIndicatorHeight,
  homeIndicatorAlignSelf,
  onTabItemPress,
  onTabItemPress1,
  onVectorPress,
  onTabItemPress2,
  onTabItemPress3,
  onTabItemPress4,
  onTabItemPress5
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      ...getStyleValue('position', property1DefaultPosition),
      ...getStyleValue('width', property1DefaultWidth),
      ...getStyleValue('height', property1DefaultHeight),
      ...getStyleValue('right', property1DefaultRight),
      ...getStyleValue('bottom', property1DefaultBottom),
      ...getStyleValue('left', property1DefaultLeft),
      ...getStyleValue('overflow', property1DefaultOverflow)
    }
  }, [
    property1DefaultPosition,
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultRight,
    property1DefaultBottom,
    property1DefaultLeft,
    property1DefaultOverflow
  ])

  const labelStyle = useMemo(() => {
    return {
      ...getStyleValue('position', labelPosition),
      ...getStyleValue('fontSize', labelFontSize),
      ...getStyleValue('letterSpacing', labelLetterSpacing),
      ...getStyleValue('lineHeight', labelLineHeight),
      ...getStyleValue('fontWeight', labelFontWeight),
      ...getStyleValue('fontFamily', labelFontFamily),
      ...getStyleValue('color', labelColor),
      ...getStyleValue('textAlign', labelTextAlign),
      ...getStyleValue('marginTop', labelMarginTop),
      ...getStyleValue('width', labelWidth),
      ...getStyleValue('height', labelHeight)
    }
  }, [
    labelPosition,
    labelFontSize,
    labelLetterSpacing,
    labelLineHeight,
    labelFontWeight,
    labelFontFamily,
    labelColor,
    labelTextAlign,
    labelMarginTop,
    labelWidth,
    labelHeight
  ])

  const tabItemStyle = useMemo(() => {
    return {
      ...getStyleValue('flex', tabItemFlex),
      ...getStyleValue('flexDirection', tabItemFlexDirection),
      ...getStyleValue('alignItems', tabItemAlignItems),
      ...getStyleValue('justifyContent', tabItemJustifyContent),
      ...getStyleValue('marginLeft', tabItemMarginLeft),
      ...getStyleValue('position', tabItemPosition),
      ...getStyleValue('marginTop', tabItemMarginTop)
    }
  }, [
    tabItemFlex,
    tabItemFlexDirection,
    tabItemAlignItems,
    tabItemJustifyContent,
    tabItemMarginLeft,
    tabItemPosition,
    tabItemMarginTop
  ])

  const iconViewStyle = useMemo(() => {
    return {
      ...getStyleValue('position', iconViewPosition),
      ...getStyleValue('width', iconViewWidth),
      ...getStyleValue('height', iconViewHeight),
      ...getStyleValue('flex', iconViewFlex),
      ...getStyleValue('flexDirection', iconViewFlexDirection),
      ...getStyleValue('alignItems', iconViewAlignItems),
      ...getStyleValue('justifyContent', iconViewJustifyContent),
      ...getStyleValue('marginLeft', iconViewMarginLeft)
    }
  }, [
    iconViewPosition,
    iconViewWidth,
    iconViewHeight,
    iconViewFlex,
    iconViewFlexDirection,
    iconViewAlignItems,
    iconViewJustifyContent,
    iconViewMarginLeft
  ])

  const iconStyle = useMemo(() => {
    return {
      ...getStyleValue('position', iconPosition),
      ...getStyleValue('top', iconTop),
      ...getStyleValue('left', iconLeft),
      ...getStyleValue('overflow', iconOverflow)
    }
  }, [iconPosition, iconTop, iconLeft, iconOverflow])

  const markerComponentStyle = useMemo(() => {
    return {
      ...getStyleValue('top', markerComponentTop),
      ...getStyleValue('left', markerComponentLeft),
      ...getStyleValue('borderRadius', markerComponentBorderRadius),
      ...getStyleValue('width', markerComponentWidth),
      ...getStyleValue('height', markerComponentHeight)
    }
  }, [
    markerComponentTop,
    markerComponentLeft,
    markerComponentBorderRadius,
    markerComponentWidth,
    markerComponentHeight
  ])

  const roundStyle = useMemo(() => {
    return {
      ...getStyleValue('top', roundTop),
      ...getStyleValue('right', roundRight),
      ...getStyleValue('borderRadius', roundBorderRadius),
      ...getStyleValue('backgroundColor', roundBackgroundColor),
      ...getStyleValue('justifyContent', roundJustifyContent),
      ...getStyleValue('alignItems', roundAlignItems),
      ...getStyleValue('left', roundLeft),
      ...getStyleValue('width', roundWidth),
      ...getStyleValue('height', roundHeight),
      ...getStyleValue('overflow', roundOverflow)
    }
  }, [
    roundTop,
    roundRight,
    roundBorderRadius,
    roundBackgroundColor,
    roundJustifyContent,
    roundAlignItems,
    roundLeft,
    roundWidth,
    roundHeight,
    roundOverflow
  ])

  const mdiclipboardTextHistoryIconStyle = useMemo(() => {
    return {
      ...getStyleValue('top', mdiclipboardTextHistoryIcTop),
      ...getStyleValue('left', mdiclipboardTextHistoryIcLeft),
      ...getStyleValue('width', mdiclipboardTextHistoryIcWidth),
      ...getStyleValue('height', mdiclipboardTextHistoryIcHeight),
      ...getStyleValue('overflow', mdiclipboardTextHistoryIcOverflow),
      ...getStyleValue('right', mdiclipboardTextHistoryIcRight),
      ...getStyleValue('borderRadius', mdiclipboardTextHistoryIcBorderRadius),
      ...getStyleValue(
        'backgroundColor',
        mdiclipboardTextHistoryIcBackgroundColor
      ),
      ...getStyleValue(
        'justifyContent',
        mdiclipboardTextHistoryIcJustifyContent
      ),
      ...getStyleValue('alignItems', mdiclipboardTextHistoryIcAlignItems)
    }
  }, [
    mdiclipboardTextHistoryIcTop,
    mdiclipboardTextHistoryIcLeft,
    mdiclipboardTextHistoryIcWidth,
    mdiclipboardTextHistoryIcHeight,
    mdiclipboardTextHistoryIcOverflow,
    mdiclipboardTextHistoryIcRight,
    mdiclipboardTextHistoryIcBorderRadius,
    mdiclipboardTextHistoryIcBackgroundColor,
    mdiclipboardTextHistoryIcJustifyContent,
    mdiclipboardTextHistoryIcAlignItems
  ])

  const label1Style = useMemo(() => {
    return {
      ...getStyleValue('position', labelPosition1),
      ...getStyleValue('fontSize', labelFontSize1),
      ...getStyleValue('letterSpacing', labelLetterSpacing1),
      ...getStyleValue('lineHeight', labelLineHeight1),
      ...getStyleValue('fontWeight', labelFontWeight1),
      ...getStyleValue('fontFamily', labelFontFamily1),
      ...getStyleValue('color', labelColor1),
      ...getStyleValue('textAlign', labelTextAlign1),
      ...getStyleValue('marginTop', labelMarginTop1),
      ...getStyleValue('top', labelTop),
      ...getStyleValue('left', labelLeft),
      ...getStyleValue('width', labelWidth1),
      ...getStyleValue('height', labelHeight1),
      ...getStyleValue('overflow', labelOverflow)
    }
  }, [
    labelPosition1,
    labelFontSize1,
    labelLetterSpacing1,
    labelLineHeight1,
    labelFontWeight1,
    labelFontFamily1,
    labelColor1,
    labelTextAlign1,
    labelMarginTop1,
    labelTop,
    labelLeft,
    labelWidth1,
    labelHeight1,
    labelOverflow
  ])

  const tabItem1Style = useMemo(() => {
    return {
      ...getStyleValue('flex', tabItemFlex1),
      ...getStyleValue('flexDirection', tabItemFlexDirection1),
      ...getStyleValue('alignItems', tabItemAlignItems1),
      ...getStyleValue('justifyContent', tabItemJustifyContent1),
      ...getStyleValue('marginLeft', tabItemMarginLeft1),
      ...getStyleValue('position', tabItemPosition1),
      ...getStyleValue('marginTop', tabItemMarginTop1)
    }
  }, [
    tabItemFlex1,
    tabItemFlexDirection1,
    tabItemAlignItems1,
    tabItemJustifyContent1,
    tabItemMarginLeft1,
    tabItemPosition1,
    tabItemMarginTop1
  ])

  const iconView1Style = useMemo(() => {
    return {
      ...getStyleValue('position', iconViewPosition1),
      ...getStyleValue('width', iconViewWidth1),
      ...getStyleValue('height', iconViewHeight1),
      ...getStyleValue('flex', iconViewFlex1),
      ...getStyleValue('flexDirection', iconViewFlexDirection1),
      ...getStyleValue('alignItems', iconViewAlignItems1),
      ...getStyleValue('justifyContent', iconViewJustifyContent1),
      ...getStyleValue('marginLeft', iconViewMarginLeft1)
    }
  }, [
    iconViewPosition1,
    iconViewWidth1,
    iconViewHeight1,
    iconViewFlex1,
    iconViewFlexDirection1,
    iconViewAlignItems1,
    iconViewJustifyContent1,
    iconViewMarginLeft1
  ])

  const icon1Style = useMemo(() => {
    return {
      ...getStyleValue('position', iconPosition1),
      ...getStyleValue('top', iconTop1),
      ...getStyleValue('left', iconLeft1),
      ...getStyleValue('overflow', iconOverflow1)
    }
  }, [iconPosition1, iconTop1, iconLeft1, iconOverflow1])

  const markerComponent1Style = useMemo(() => {
    return {
      ...getStyleValue('top', markerComponentTop1),
      ...getStyleValue('left', markerComponentLeft1),
      ...getStyleValue('borderRadius', markerComponentBorderRadius1),
      ...getStyleValue('width', markerComponentWidth1),
      ...getStyleValue('height', markerComponentHeight1)
    }
  }, [
    markerComponentTop1,
    markerComponentLeft1,
    markerComponentBorderRadius1,
    markerComponentWidth1,
    markerComponentHeight1
  ])

  const round1Style = useMemo(() => {
    return {
      ...getStyleValue('top', roundTop1),
      ...getStyleValue('right', roundRight1),
      ...getStyleValue('borderRadius', roundBorderRadius1),
      ...getStyleValue('backgroundColor', roundBackgroundColor1),
      ...getStyleValue('justifyContent', roundJustifyContent1),
      ...getStyleValue('alignItems', roundAlignItems1),
      ...getStyleValue('left', roundLeft1),
      ...getStyleValue('width', roundWidth1),
      ...getStyleValue('height', roundHeight1),
      ...getStyleValue('overflow', roundOverflow1)
    }
  }, [
    roundTop1,
    roundRight1,
    roundBorderRadius1,
    roundBackgroundColor1,
    roundJustifyContent1,
    roundAlignItems1,
    roundLeft1,
    roundWidth1,
    roundHeight1,
    roundOverflow1
  ])

  const groupIcon1Style = useMemo(() => {
    return {
      ...getStyleValue('right', groupIconRight),
      ...getStyleValue('width', groupIconWidth),
      ...getStyleValue('height', groupIconHeight),
      ...getStyleValue('top', groupIconTop),
      ...getStyleValue('bottom', groupIconBottom),
      ...getStyleValue('left', groupIconLeft),
      ...getStyleValue('maxWidth', groupIconMaxWidth),
      ...getStyleValue('overflow', groupIconOverflow),
      ...getStyleValue('maxHeight', groupIconMaxHeight),
      ...getStyleValue('borderRadius', groupIconBorderRadius),
      ...getStyleValue('backgroundColor', groupIconBackgroundColor),
      ...getStyleValue('justifyContent', groupIconJustifyContent),
      ...getStyleValue('alignItems', groupIconAlignItems)
    }
  }, [
    groupIconRight,
    groupIconWidth,
    groupIconHeight,
    groupIconTop,
    groupIconBottom,
    groupIconLeft,
    groupIconMaxWidth,
    groupIconOverflow,
    groupIconMaxHeight,
    groupIconBorderRadius,
    groupIconBackgroundColor,
    groupIconJustifyContent,
    groupIconAlignItems
  ])

  const label2Style = useMemo(() => {
    return {
      ...getStyleValue('position', labelPosition2),
      ...getStyleValue('fontSize', labelFontSize2),
      ...getStyleValue('letterSpacing', labelLetterSpacing2),
      ...getStyleValue('lineHeight', labelLineHeight2),
      ...getStyleValue('fontWeight', labelFontWeight2),
      ...getStyleValue('fontFamily', labelFontFamily2),
      ...getStyleValue('color', labelColor2),
      ...getStyleValue('textAlign', labelTextAlign2),
      ...getStyleValue('marginTop', labelMarginTop2),
      ...getStyleValue('height', labelHeight2),
      ...getStyleValue('width', labelWidth2),
      ...getStyleValue('top', labelTop1),
      ...getStyleValue('right', labelRight),
      ...getStyleValue('bottom', labelBottom),
      ...getStyleValue('left', labelLeft1),
      ...getStyleValue('maxWidth', labelMaxWidth),
      ...getStyleValue('overflow', labelOverflow1),
      ...getStyleValue('maxHeight', labelMaxHeight)
    }
  }, [
    labelPosition2,
    labelFontSize2,
    labelLetterSpacing2,
    labelLineHeight2,
    labelFontWeight2,
    labelFontFamily2,
    labelColor2,
    labelTextAlign2,
    labelMarginTop2,
    labelHeight2,
    labelWidth2,
    labelTop1,
    labelRight,
    labelBottom,
    labelLeft1,
    labelMaxWidth,
    labelOverflow1,
    labelMaxHeight
  ])

  return (
    <View style={[styles.property1default, property1Default1Style]}>
      <View style={styles.tabBar}>
        <View style={styles.tabs}>
          <View style={styles.tabItem} onPress={onTabItemPress}>
            <View style={styles.iconview}>
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={icon}
              />
              {showMarkerComponent && (
                <View style={[styles.markerComponent, styles.markerLayout]}>
                  <View style={[styles.round, styles.roundPosition]} />
                </View>
              )}
            </View>
            <Text style={styles.label}>Inicio</Text>
          </View>
          <View
            style={[styles.tabItem1, styles.tabItemFlexBox]}
            onPress={onTabItemPress1}
          >
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={vector}
              onPress={onVectorPress}
            />
            <Text style={[styles.label, labelStyle]}>{label}</Text>
          </View>
          <View
            style={[styles.tabItemFlexBox, tabItemStyle]}
            onPress={onTabItemPress2}
          >
            <View
              style={[styles.iconLayout, iconViewStyle]}
              onPress={onTabItemPress3}
            >
              <Image
                style={[styles.icon, styles.iconLayout, iconStyle]}
                contentFit="cover"
                source={icon1}
              />
              {markerComponentVisible && (
                <View
                  style={[
                    styles.markerComponent1,
                    styles.markerLayout,
                    markerComponentStyle
                  ]}
                >
                  {showRound && (
                    <View
                      style={[styles.round1, styles.roundPosition, roundStyle]}
                    />
                  )}
                </View>
              )}
              {showMdiclipboardTextHistoryIc && (
                <Image
                  style={[
                    styles.mdiclipboardTextHistoryIcon,
                    styles.iconLayout,
                    mdiclipboardTextHistoryIconStyle
                  ]}
                  contentFit="cover"
                  source={mdiclipboardTextHistory}
                />
              )}
            </View>
            <Text style={[styles.label, label1Style]}>{label1}</Text>
          </View>
          <View
            style={[styles.tabItemFlexBox, tabItem1Style]}
            onPress={onTabItemPress4}
          >
            <View
              style={[styles.iconLayout, iconView1Style]}
              onPress={onTabItemPress5}
            >
              <Image
                style={[styles.icon, styles.iconLayout, icon1Style]}
                contentFit="cover"
                source={icon2}
              />
              {markerComponentVisible1 && (
                <View
                  style={[
                    styles.markerComponent,
                    styles.markerLayout,
                    markerComponent1Style
                  ]}
                >
                  {roundVisible && (
                    <View
                      style={[styles.round, styles.roundPosition, round1Style]}
                    />
                  )}
                </View>
              )}
              <Image
                style={[styles.groupIcon, groupIcon1Style]}
                contentFit="cover"
                source={group}
              />
            </View>
            <Text style={[styles.label, label2Style]}>{label2}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconLayout: {
    width: 24,
    height: 24
  },
  markerLayout: {
    display: 'none',
    height: 16,
    borderRadius: Border.br_7xs,
    top: -4,
    width: 16,
    position: 'absolute',
    overflow: 'hidden'
  },
  roundPosition: {
    borderRadius: Border.br_9xs,
    right: 6,
    top: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  tabItemFlexBox: {
    marginLeft: 5,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    top: 0,
    left: 0,
    width: 24,
    position: 'absolute',
    overflow: 'hidden'
  },
  round: {
    backgroundColor: Color.redRed500
  },
  markerComponent: {
    left: 17
  },
  iconview: {
    width: 25,
    height: 24
  },
  label: {
    fontSize: FontSize.size_smi,
    letterSpacing: 0.4,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: FontFamily.ralewayMedium,
    color: Color.blackViolet300,
    textAlign: 'center',
    marginTop: 4
  },
  tabItem: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  vectorIcon: {
    height: 25,
    width: 16
  },
  tabItem1: {
    height: 47
  },
  round1: {
    backgroundColor: Color.palevioletred_100
  },
  markerComponent1: {
    left: 14
  },
  mdiclipboardTextHistoryIcon: {
    top: 2,
    left: 0,
    width: 24,
    position: 'absolute',
    overflow: 'hidden'
  },
  groupIcon: {
    height: '86.67%',
    width: '103.33%',
    top: '15%',
    right: '-0.63%',
    bottom: '-1.67%',
    left: '-2.71%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  tabs: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0
  },
  tabBar: {
    right: 0,
    bottom: 0,
    backgroundColor: Color.colorsBackgroundsLight,
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    justifyContent: 'flex-end',
    alignItems: 'center',
    left: 0,
    position: 'absolute',
    overflow: 'hidden'
  },
  property1default: {
    width: 375,
    height: 88,
    overflow: 'hidden'
  }
})

export default Property1Default1
