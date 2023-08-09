import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Selected2 = ({
  ellipse1,
  ellipse2,
  ellipse3,
  selected2Position,
  selected2Top,
  selected2Left,
}) => {
  const selected2Style = useMemo(() => {
    return {
      ...getStyleValue("position", selected2Position),
      ...getStyleValue("top", selected2Top),
      ...getStyleValue("left", selected2Left),
    };
  }, [selected2Position, selected2Top, selected2Left]);

  return (
    <View style={[styles.selected2, selected2Style]}>
      <Image
        style={styles.selected2Layout}
        contentFit="cover"
        source={ellipse1}
      />
      <Image
        style={[styles.selected2Item, styles.selected2Layout]}
        contentFit="cover"
        source={ellipse2}
      />
      <Image
        style={[styles.selected2Item, styles.selected2Layout]}
        contentFit="cover"
        source={ellipse3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selected2Layout: {
    height: 8,
    width: 8,
  },
  selected2Item: {
    marginLeft: 8,
  },
  selected2: {
    flexDirection: "row",
    padding: Padding.p_base,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Selected2;
