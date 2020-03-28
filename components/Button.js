import * as React from "react"
import styled from "styled-components/native"

export const Button = (props) => {
  return (
    <ButtonContainer {...props}>
      <ButtonText>{props.children}</ButtonText>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.TouchableOpacity`
  width: 300px;
  height: 48px;
  background: #000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.Text`
  font-family: "sf-heavy";
  color: #fff;
  letter-spacing: -0.75px;
  font-size: 18px;
`
