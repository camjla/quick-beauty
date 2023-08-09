import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

const Select = ({ onClose }) => {
  return (
    <View style={[styles.select, styles.selectLayout]}>
      <Image
        style={[styles.vectorIcon, styles.selectLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectLayout: {
    height: 11,
    width: 11,
  },
  vectorIcon: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  select: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Select;
