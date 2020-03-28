import * as React from "react"
import styled from "styled-components/native"
import { ScreenWrapper, Text, Spacer } from "../components"
import { GradientWrapper } from "../components/GradientWrapper"
import Swiper from "react-native-swiper"
import { View } from "react-native"

const image = {
  uri:
    "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_721,h_406/v1/img/mpx/5458744_16x9.jpg"
}

const image1 = {
  uri:
    "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_721,h_406/v1/img/recipes/92/02/1/8wimK3LVR5yUgXYUZImK_DSC_0473-2.jpg"
}

const image2 = {
  uri:
    "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_721,h_406/v1/img/submissions/recipe/2002496143/ZzmzcEDfQW9g7wSynK7M_sprinkled%20treats%20-%20horizontal%20-%20without%20product%201.jpg"
}

export const HomeScreen = (props) => {
  return (
    <ScreenWrapper>
      <Spacer size={16} />
      <Text.Title>Recipes for you</Text.Title>
      <Spacer size={24} />

      <RecipeSwiper />
    </ScreenWrapper>
  )
}

const RecipeSwiperWrapper = styled.View((props) => ({}))

const SHADOW_STYLE = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.5,
  shadowRadius: 3.84,
  elevation: 5
}

const RecipeSwiper = (props) => {
  return (
    <RecipeSwiperWrapper style={SHADOW_STYLE}>
      <SwiperOuterContainer
        loop
        showButtons={false}
        autoplay={false}
        showsButtons={false}
        pagingEnabled
        showsPagination={false}
      >
        <SwiperContainer source={image}>
          <RecipeTitle>Hello Swiper</RecipeTitle>
          <AuthorBlock
            avatar='https://pbs.twimg.com/profile_images/1051157346796400646/t33XAm04.jpg'
            name='Glitchy Ben'
          />
        </SwiperContainer>

        <SwiperContainer source={image1}>
          <RecipeTitle>Hello Swiper</RecipeTitle>
          <AuthorBlock
            avatar='https://pbs.twimg.com/profile_images/1051157346796400646/t33XAm04.jpg'
            name='Glitchy Ben'
          />
        </SwiperContainer>

        <SwiperContainer source={image2}>
          <RecipeTitle>Hello Swiper</RecipeTitle>
          <AuthorBlock
            avatar='https://pbs.twimg.com/profile_images/1051157346796400646/t33XAm04.jpg'
            name='Glitchy Ben'
          />
        </SwiperContainer>
      </SwiperOuterContainer>
    </RecipeSwiperWrapper>
  )
}

const SwiperOuterContainer = styled(Swiper)`
  /* width: 100%; */
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
`

const SwiperContainer = (props) => {
  return (
    <SwiperPane resizeMode='cover' source={props.source}>
      <InnerSwiperPane>{props.children}</InnerSwiperPane>
    </SwiperPane>
  )
}

const SwiperPane = styled.ImageBackground`
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  margin: 0 8px;
`

const InnerSwiperPane = styled(GradientWrapper)`
  justify-content: flex-end;
  width: 100%;
  height: 300px;
  padding: 16px;
`

const RecipeTitle = styled(Text.H2)`
  color: #fff;
  margin-bottom: 8px;
  text-align: left;
`

/*

** POTENTIAL **
- Your judgement.
- Your disapproval.
- Your silent disapproval.
- Your resentment.

** COULD RESULT IN **
- Being farther from you.

*/

const AuthorBlock = (props) => {
  const imageSource = { uri: props.avatar }

  return (
    <AuthorContainer>
      <AuthorImage source={imageSource} />
      <AuthorName>{props.name}</AuthorName>
    </AuthorContainer>
  )
}

const AuthorContainer = styled.View`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
`

const AuthorImage = styled.Image`
  width: 48px;
  height: 48px;
  margin-right: 8px;
`

const AuthorName = styled(Text.H4)`
  color: #fff;
`
