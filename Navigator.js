import React, { Component } from "react"

import styled from "styled-components/native"
import { SGTextScreen } from "./screens/styleguide/SGTextScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "./screens/HomeScreen"
import * as Icons from "./components/Icons"

const Tab = createBottomTabNavigator()

const getIcon = ({ route }) => {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      if (route.name === "Home") return <Icons.Home />
      if (route.name === "SGText") return <Icons.Search />
    }
  }
}

export const Navigator = (props) => {
  return (
    <>
      <StatusBar hidden backgroundColor='red' />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={getIcon}
          tabBarOptions={{
            showLabel: false,
            tabStyle: { paddingTop: 2 }
          }}
        >
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='SGText' component={SGTextScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

const StatusBar = styled.StatusBar`
  background-color: blue;
`
