import * as React from "react"

import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from "react-native"

import Constants from "expo-constants"
import styled from "styled-components/native"

import { useFonts } from "./utilities/useFonts"
import { SGTextScreen } from "./screens/styleguide/SGTextScreen.js"
import { Text, Spacer, ScreenWrapper } from "./components"
import { Navigator } from "./Navigator"

export default function App() {
  const fontsLoaded = useFonts()

  return (
    fontsLoaded && (
      <AppContainer>
        <Navigator />
      </AppContainer>
    )
  )
}

const AppContainer = styled.SafeAreaView`
  padding-top: 84px;
  height: 100%;
`
