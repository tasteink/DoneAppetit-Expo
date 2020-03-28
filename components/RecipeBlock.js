import * as React from "react"
import styled from "styled-components/native"
import { GradientWrapper } from "./GradientWrapper"
import { ImageBackground } from "react-native"
import { Text } from "./Text"

export const RecipeBlock = (props) => {
  return (
    <RecipeBlockContainer>
      <ImageWrapper source={props.images[0]}>
        <GradientOverlay gradientName='blackToTransparent'>
          <Text.H1>{props.title}</Text.H1>
        </GradientOverlay>
      </ImageWrapper>
    </RecipeBlockContainer>
  )
}

RecipeBlock.defaultProps = {
  images: [],
  title: "",
  id: "",
  tags: []
}

const RecipeBlockContainer = styled.View`
  display: flex;
`

const GradientOverlay = styled(GradientWrapper)`
  width: 100%;
  height: 100%;
  padding: 16px;
`

const ImageWrapper = styled.ImageBackground`
  width: 100%;
  height: 100%;
`
