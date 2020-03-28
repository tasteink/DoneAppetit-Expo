import * as React from "react"
import * as Font from "expo-font"

import { FONTS } from "../consts"

export const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false)

  React.useEffect(() => {
    Font.loadAsync(FONTS).then(() => {
      setFontsLoaded(true)
    })
  }, [])

  return fontsLoaded
}
