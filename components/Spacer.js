import * as React from "react"
import styled from "styled-components/native"

export const Spacer = styled.View`
  display: flex;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`
