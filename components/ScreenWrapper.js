import * as React from "react"
import styled from "styled-components/native"
import { Spacer } from "./Spacer"
import logoPng from "../assets/logo.png"

export const ScreenWrapper = (props) => {
  return (
    <ScreenWrapperContainer>
      <Logo source={logoPng} />
      <ScrollingContainer>
        {props.children}
        <Spacer size={48} />
      </ScrollingContainer>
    </ScreenWrapperContainer>
  )
}

const ScreenWrapperContainer = styled.SafeAreaView`
  height: 100%;
  background-color: #fafafc;
`

const ScrollingContainer = styled.ScrollView`
  height: 100%;
  padding: 24px 16px;
`

const Logo = styled.Image`
  margin-left: 16px;
  margin-top: 16px;
  width: 160px;
  height: 57px;
`
