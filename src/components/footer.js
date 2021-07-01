import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { fontSize } from 'styles/theme'

import Section from 'components/section'

const FooterText = styled.div`
  text-align: center;
  font-size: ${fontSize.f2};
  ${media.lg`
    font-size: ${fontSize.f1};
  `}
  ${media.sm`
    text-align: left;
    font-size: ${fontSize.f1};
  `}
`

const Footer = () => {
  return (
    <Section>
      <FooterText>
      Integer ante felis, fringilla quis lacus eu, euismod varius turpis.
      </FooterText>
    </Section>
  )
}

export default Footer
