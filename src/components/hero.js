import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import Header from 'components/header'

const HeroSection = styled.section`
  height: 50vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${media.sm`
    height: calc(100vh - 76px);
  `}
`

const Hero = () => {
  return (
    <><Header />
    <HeroSection>
      <head>
      <style>
      </style>
      </head>
      <body>
        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>
        <div>This is a div.</div>
      </body>
    </HeroSection>
    </>
  )
}
export default Hero
