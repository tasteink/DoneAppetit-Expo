import React from "react"
import Icons1 from "react-native-vector-icons/MaterialIcons"
import Icons2 from "react-native-vector-icons/MaterialCommunityIcons"

export const Search = (props) => {
  return (
    <Icons1 name='search' size={props.size || 36} color={props.color || "#333"} />
  )
}

export const Home = (props) => {
  return <Icons1 name='home' size={props.size || 36} color={props.color || "#333"} />
}
