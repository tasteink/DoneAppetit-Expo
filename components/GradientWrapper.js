import React from "react"
import { Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export const GradientWrapper = (props) => {
  const colors = colorSets[props.gradientName]
  return (
    <LinearGradient colors={colors} style={{ ...props.style[0] }}>
      {props.children}
    </LinearGradient>
  )
}

GradientWrapper.defaultProps = {
  gradientName: "blackToTransparent",
  style: []
}

const colorSets = {
  blackToTransparent: ["rgba(0,0,0,0)", "rgba(0,0,0,1)"]
}
