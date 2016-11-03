//
// import React, {Component} from 'react';
import {StyleSheet} from 'react-native'

export const Colors = {
  lighterGreen: "#7bb857",
  lightGreen: "#7ba857",
  darkGreen: "#6e974e",
  darkerGreen: "#ff537d3e",
  lighterBlue: "#007cd3",
  lightBlue: "#007cc3",
  darkBlue: "#0065a0",
  lighterGray: "#ddd",
  lightGrey: "#757575",
  darkGray: "#2D2D2D",
  red: "#FF5353",
  gray222: "#222",
  grayDDD: "#DDD",
  listDivider: "#E0E0E0",
  yabonoGradientEndColor: "#841010",
  yabonoGradientStartColor: "#C41212",
  yabonoRed: "#Ff0000",
  windowbackground: "#Eeeeee",
  blackSemiTransparent: "#B2000000",
  mainText: "#4C4C4C",
  cercaniasC1Color: "#4Bb4E7",
  cercaniasC2Color: "#008C27",
  cercaniasC3Color: "#8B019C",
  cercaniasC4Color: "#00299C",
  cercaniasC5Color: "#Ffbc00",
  cercaniasC7Color: "#De0017",
  cercaniasC8Color: "#008C27",
  cercaniasC9Color: "#Ff5901",
  cercaniasC10Color: "#93Bd00",
  metroL1Color: "#00C0F3",
  metroL2Color: "#Ed1C24",
  metroL3Color: "#F5C900",
  metroL4Color: "#Ce7019",
  metroL5Color: "#72Bf44",
  metroL6Color: "#939598",
  metroL7Color: "#F57F32",
  metroL8Color: "#F287B7",
  metroL9Color: "#A3238E",
  metroL10Color: "#0066B3",
  metroL11Color: "#008F56",
  metroL12Color: "#B8B308",
  metroLrColor: "#Fff",
  lightMetroL1Color: "#00C0F3",
  lightMetroL2Color: "#A3238E",
  lightMetroL3Color: "#F57F32",
  lightMetroL4Color: "#72Bf44"
};

const styleSheet = StyleSheet.create({
    toolBar: {
      height: 56,
      backgroundColor: Colors.darkGreen
    },

    savedStopListItem: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 8,
      height: 54,
    },

    savedStopName: {
      flex: 1,
      fontSize: 18,
      color: "#757575",
    },

    savedStopNumber: {
      fontSize: 18,
      color: "#ddd",
    },
  }
);

export const Styles = {
  toolBar: {
    logo: require("../res/img/ic_launcher/ic_launcher.png"),
    title: " Madrid Bus Interurbanos",
    titleColor: "white",
    elevation: 10,
    style: styleSheet.toolBar,
  },
  savedStopListItem: {style: styleSheet.savedStopListItem},
  savedStopName: {style: styleSheet.savedStopName},
  savedStopNumber: {style: styleSheet.savedStopNumber},

};

