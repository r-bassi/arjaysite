import React, { Fragment } from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import Section from 'components/section'
import Header from 'components/header'
import GlobalStyle from '../styles/global-style'


import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
  ${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

const Placement = styled.div`
  margin-top: -500px;
`

const Work = () => {
  return (
    <>
    <Header />
    <Placement>
    <Section id={'work'}>
      <TwoColumns
        leftColumn={<SectionHeading>Work Experience</SectionHeading>}
        rightColumn={<Fragment>
          <Big>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus non lectus at libero tempor posuere vitae eget velit.
          </Big>
          <p>
            Cras enim nunc, feugiat nec elit a, ullamcorper scelerisque sapien. Nam ut nibh at neque placerat convallis. Integer vestibulum tincidunt lectus, a consequat velit.
            Donec vitae rutrum lacus.
          </p>
          <p>
            Curabitur scelerisque orci sapien, non tincidunt nisl venenatis ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            In egestas urna quis ante aliquet tristique non vel nisi.
          </p>
          <p style={{ marginBottom: 0 }}>
            Sed nec mi at nulla aliquam tempor id eget urna.
            Ut ut odio sollicitudin, viverra ex quis, tincidunt neque. Morbi elementum sapien vitae metus pretium, non consectetur est rhoncus.
            In hac habitasse platea dictumst.
          </p>
        </Fragment>} />
    </Section>
    <GlobalStyle />
    </Placement>
    </>
  )
}

export default Work