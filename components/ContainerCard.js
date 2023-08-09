import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerCard = ({ propTop, propLeft }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.rectangleParent, groupViewStyle]}>
      <View style={styles.groupChild} />
      <Text style={[styles.text, styles.textFlexBox]}>366/500</Text>
      <Text style={[styles.loremIpsumIs, styles.textFlexBox]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "justify",
    lineHeight: 18,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderStyle: "solid",
    borderColor: "rgba(217, 217, 217, 0.8)",
    borderWidth: 1,
    width: 378,
    height: 133,
    position: "absolute",
  },
  text: {
    top: 133,
    left: 335,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    color: Color.gray_900,
    width: 50,
  },
  loremIpsumIs: {
    top: 6,
    left: 7,
    fontFamily: FontFamily.ralewayRegular,
    color: Color.black,
    width: 359,
  },
  rectangleParent: {
    top: 36,
    left: 2,
    width: 385,
    height: 151,
    position: "absolute",
  },
});

export default ContainerCard;
