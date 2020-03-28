import { Text } from "react-native"
import styled from "styled-components/native"

const getColor = (props) => {
  if (props.isDanger) return "red"
  if (props.isSuccess) return "green"
  if (props.isWarning) return "orange"
  if (props.isInfo) return "blue"
  if (props.isMuted) return "#7d8b99"
  return "#000"
}

export const Title = styled.Text`
  font-size: 28px;
  letter-spacing: -1.2px;
  font-family: "sf-heavy";
  line-height: 30px;
  color: ${getColor};
`

export const H1 = styled.Text`
  font-size: 24px;
  letter-spacing: -0.75px;
  font-family: "sf-bold";
  line-height: 26px;
  color: ${getColor};
`

export const H2 = styled.Text`
  font-size: 22px;
  letter-spacing: -0.5px;
  font-family: "sf-bold";
  line-height: 24px;
  color: ${getColor};
`

export const H3 = styled.Text`
  font-size: 20px;
  letter-spacing: -0.25px;
  font-family: "sf-bold";
  line-height: 22px;
  color: ${getColor};
`

export const H4 = styled.Text`
  font-size: 18px;
  letter-spacing: 0px;
  font-family: "sf-bold";
  line-height: 20px;
  color: ${getColor};
`

export const H5 = styled.Text`
  font-size: 16px;
  letter-spacing: 0.2px;
  font-family: "sf-bold";
  line-height: 18px;
  color: ${getColor};
`

export const H6 = styled.Text`
  font-size: 14px;
  letter-spacing: 0.25px;
  font-family: "sf-bold";
  line-height: 20px;
  color: ${getColor};
`

export const Paragraph = styled.Text`
  color: ${getColor};
  font-size: 16px;
  letter-spacing: 0.25px;
  font-family: "sf-regular";
  line-height: 22px;
`

export const Small = styled.Text`
  font-size: 14px;
  letter-spacing: 0.25px;
  font-family: "sf-regular";
  line-height: 20px;
  color: ${(props) => (props.muted ? "#717171" : "#000")};
`
