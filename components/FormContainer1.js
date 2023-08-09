import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer1 = ({
  name1,
  serviceProviderName,
  distanceLabel,
  priceLabel,
  rating,
  availabilityLabel,
  serviceProviderId,
  rectangleViewTop,
  rectangleViewLeft,
  icoutlineStarIconWidth,
  onMaterialSymbolscalendarMoPress,
}) => {
  const profissionalStyle = useMemo(() => {
    return {
      ...getStyleValue("top", rectangleViewTop),
      ...getStyleValue("left", rectangleViewLeft),
    };
  }, [rectangleViewTop, rectangleViewLeft]);

  const avaliaoStyle = useMemo(() => {
    return {
      ...getStyleValue("width", icoutlineStarIconWidth),
    };
  }, [icoutlineStarIconWidth]);

  return (
    <View
      style={[
        styles.profissional,
        styles.profissionalLayout,
        profissionalStyle,
      ]}
    >
      <View
        style={[styles.profissionalChild, styles.profissionalChildPosition]}
      />
      <Image
        style={[styles.profissionalItem, styles.profissionalItemPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-25.png")}
      />
      <View
        style={[styles.marianaPimentelParent, styles.profissionalItemPosition]}
      >
        <Text style={[styles.marianaPimentel, styles.r3500Typo]}>{name1}</Text>
        <Text style={[styles.cabelereiraEMaquiadora, styles.textTypo]}>
          {serviceProviderName}
        </Text>
        <Text style={[styles.cabelereiraEMaquiadora, styles.textTypo]}>
          {distanceLabel}
        </Text>
      </View>
      <Text style={[styles.r3500, styles.r3500Typo]}>{priceLabel}</Text>
      <View style={[styles.avaliao, avaliaoStyle]}>
        <Image
          style={[styles.icoutlineStarIcon, styles.profissionalChildPosition]}
          contentFit="cover"
          source={require("../assets/icoutlinestar.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>{rating}</Text>
      </View>
      <View style={styles.agendaDisponvelParent}>
        <Text style={[styles.agendaDisponvel, styles.r3500Typo]}>
          {availabilityLabel}
        </Text>
        <Pressable
          style={styles.materialSymbolscalendarMont}
          onPress={onMaterialSymbolscalendarMoPress}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={serviceProviderId}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profissionalLayout: {
    height: 74,
    width: 394,
  },
  profissionalChildPosition: {
    left: 0,
    position: "absolute",
  },
  profissionalItemPosition: {
    top: 4,
    position: "absolute",
  },
  r3500Typo: {
    textAlign: "center",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
  },
  textTypo: {
    fontFamily: FontFamily.ralewayRegular,
    textAlign: "center",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
  },
  profissionalChild: {
    borderStyle: "solid",
    borderColor: "rgba(150, 196, 134, 0.58)",
    borderWidth: 1,
    top: 0,
    height: 74,
    width: 394,
  },
  profissionalItem: {
    left: 8,
    width: 66,
    height: 65,
  },
  marianaPimentel: {
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
  },
  cabelereiraEMaquiadora: {
    marginTop: 5,
  },
  marianaPimentelParent: {
    left: 90,
    width: 185,
    height: 68,
  },
  r3500: {
    top: 51,
    left: 341,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  icoutlineStarIcon: {
    top: 6,
    width: 9,
    height: 9,
    overflow: "hidden",
  },
  text: {
    left: 9,
    top: 0,
    position: "absolute",
  },
  avaliao: {
    top: 33,
    left: 350,
    width: 29,
    height: 18,
    position: "absolute",
  },
  agendaDisponvel: {
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemiBold,
    color: Color.black,
    lineHeight: 18,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  materialSymbolscalendarMont: {
    width: 21,
    height: 23,
    marginLeft: 2,
  },
  agendaDisponvelParent: {
    top: 1,
    left: 272,
    width: 122,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  profissional: {
    top: 212,
    left: 20,
    position: "absolute",
  },
});

export default FormContainer1;
