import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'

import Icon from 'components/icons'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 auto;
  ${media.lg`
  height: ${(props) => (props.article ? '64px' : '')};
  `}
  ${media.sm`
    display: ${(props) => (props.article ? 'flex' : 'block')};
  `};
  z-index: 10;
  height: ${(props) => (props.article ? '74px' : '')};
  ${media.xs`
    display: block;
    height: 112px;
  `}
`

const LogoWrapper = styled.div`
  padding: 24px 0 24px 24px;
  ${media.sm`
    padding: ${(props) => (props.article ? '24px 0 24px 24px' : '24px 0 0 0')};
  `};
  ${media.xs`
    padding: 24px 0 0 0;
  `}
`

const NameLink = styled.a`
  text-decoration: none;
`

const Name = styled.h1`
  white-space: nowrap;
  font-size: ${fontSize.f6};
  text-align: left;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.8px;
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f7};
  `};
`

const NameArticle = styled.div`
  white-space: nowrap;
  font-size: ${fontSize.f5};
  font-weight: 700;
  text-align: left;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.6px;
  color: ${color.grey900};
  ${media.xs`
    text-align: center;
  `};
`

const Role = styled.div`
  color: ${color.grey700};
  text-align: left;
  line-height: 1.4;
  font-size: ${fontSize.f4};
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f6};
  `};
`

const SocialLinks = styled.div`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: auto auto auto;
  padding: 15px 24px 0 24px;
  ${media.sm`
    padding: ${(props) => (props.article ? '15px 12px 0 8px' : '4px 0 0 0')};
    grid-column-gap: 0;
  `}
  ${media.xs`
    padding: 0;
  `}
  justify-content: center;
`

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 20px;
  color: ${color.grey900};
  border: 1px solid white;
  &:hover {
    border: 1px solid ${color.grey150};
    background: ${color.grey150};
    color: ${color.grey900};
  }
  &:active {
    color: ${color.grey900};
  }
  &:visited {
    color: ${color.grey900};
  }
`

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  color: inherit;
  background: inherit;
`

export const InlineSvg = styled.svg`
  height: 24px;
  width: 24px;
  color: inherit;
  fill: currentColor;
`

const Tooltip = styled.div`
  padding: 2px 24px 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: opacity 300ms;
  ${media.sm`
    justify-content: center;
    padding-top: 6px;
  `}
`

const TooltipIcon = styled.div`
  transform: rotate(270deg);
  margin-left: 8px;
`

const TooltipText = styled.div``

const Header = (props) => {
  const [tooltipIsVisible, setTooltipIsVisible] = useState(false)
  const [tooltipText, setTooltipText] = useState('')

  const showTooltip = (tooltipText) => {
    setTooltipIsVisible(true)
    setTooltipText(tooltipText)
  }

  const hideTooltip = () => {
    setTooltipIsVisible(false)
  }

  return (
    <Div article={props.article}>
      <LogoWrapper article={props.article}>
        {props.article && (
          <NameLink href="/">
            <NameArticle article={props.article}>Arjay Rafuse</NameArticle>
          </NameLink>
        )}
        {!props.article && <Name article={props.article}>Arjay Rafuse</Name>}
        {!props.article && <Role>bottom text</Role>}
      </LogoWrapper>
      <div>
        <SocialLinks article={props.article}>
          <SocialLink
            href={`mailto:${process.env.GATSBY_EMAIL}`}
            onMouseOver={() => showTooltip('Mail')}
            onFocus={() => showTooltip('Mail')}
            onMouseLeave={hideTooltip}
            onBlur={hideTooltip}
            aria-label="Send an email to Arjay"
          >
            <SvgWrapper>
              <InlineSvg>
                <path d="m22.3592881 5.82427054v.59619016c0 .24378184-.1417446.46531584-.3630886.56747461l-8.9485541 4.13010189c-.6647377.306802-1.4305531.306802-2.0952908 0l-8.94855408-4.13010189c-.22134402-.10215877-.36308864-.32369277-.36308864-.56747461v-.59619016c0-.55012277.44596262-.99608539.9960854-.99608539h18.72640542c.5501228 0 .9960854.44596262.9960854.99608539zm-1.25 13.34754436h-18.21857622c-.69035594 0-1.25-.5596441-1.25-1.25v-8.52329148c0-.20710678.16789322-.375.375-.375.05424403 0 .10784237.01176807.15709707.03449228l8.78345405 4.0523453c.6647826.3067049 1.4305981.306593 2.095291-.0003062l8.7755375-4.05180448c.1880319-.08681729.4108411-.00476666.4976584.18326519.0227541.04928162.0345382.1029156.0345382.1571966v8.52310279c0 .6903559-.559644 1.25-1.25 1.25z" />
              </InlineSvg>
            </SvgWrapper>
          </SocialLink>
          <SocialLink
            href="https://twitter.com/"
            target="blank"
            onMouseOver={() => showTooltip('Twitter')}
            onFocus={() => showTooltip('Twitter')}
            onMouseLeave={hideTooltip}
            onBlur={hideTooltip}
            aria-label="Arjay's twitter profile"
          >
            <SvgWrapper>
              <InlineSvg>
                <path d="m21.0247938 8.63275418c.2692962 5.94511812-4.1645259 12.57304192-12.0138477 12.57304192-2.38687665 0-4.60746657-.7004644-6.47782429-1.8997889 2.24266338.2648815 4.48091208-.3590616 6.25708971-1.7496895-1.84828426-.033846-3.40961356-1.2567156-3.94967751-2.93577.66367531.1265545 1.31704969.0897654 1.91008994-.0721066-2.03222975-.4090948-3.43610171-2.2397203-3.39048323-4.1983718.57096679.3163862 1.22139804.5062179 1.91450464.5282914-1.88213023-1.25818714-2.41483637-3.74365857-1.30822031-5.64344757 2.08373448 2.55757806 5.19903526 4.2395756 8.71165825 4.41616327-.6165852-2.64292877 1.3891564-5.19020588 4.1189074-5.19020588 1.2140402 0 2.3132985.5135758 3.0843979 1.33470846.9624028-.18836018 1.8688862-.54153552 2.6841326-1.02568004-.3163862.98741938-.9859478 1.81443829-1.8585852 2.33831504.8549786-.10300948 1.670225-.32963032 2.4266089-.66661845-.5650806.85056393-1.2802606 1.59517527-2.1087511 2.19115865z" />
              </InlineSvg>
            </SvgWrapper>
          </SocialLink>
          <SocialLink
            href="https://youtube.com/"
            target="blank"
            onMouseOver={() => showTooltip('YouTube')}
            onFocus={() => showTooltip('YouTube')}
            onMouseLeave={hideTooltip}
            onBlur={hideTooltip}
            aria-label="Arjay's YouTube channel"
          >
            <SvgWrapper>
              <InlineSvg>
              <svg viewBox="0 0 48 48">
                <path d="m21 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM34.0016 15.7493C35.1031 16.0516 35.9706 16.9422 36.265 18.0732C36.8 20.123 36.8 24.4 36.8 24.4C36.8 24.4 36.8 28.6768 36.265 30.7268C35.9706 31.8578 35.1031 32.7484 34.0016 33.0508C32.0054 33.6 24 33.6 24 33.6C24 33.6 15.9946 33.6 13.9983 33.0508C12.8967 32.7484 12.0292 31.8578 11.7348 30.7268C11.2 28.6768 11.2 24.4 11.2 24.4C11.2 24.4 11.2 20.123 11.7348 18.0732C12.0292 16.9422 12.8967 16.0516 13.9983 15.7493C15.9946 15.2 24 15.2 24 15.2C24 15.2 32.0054 15.2 34.0016 15.7493Z"/>
                <path d="M21.6 28.8V20.8L28 24.8001L21.6 28.8Z" fill="black"/>
              </svg>
              </InlineSvg>
            </SvgWrapper>
          </SocialLink>
        </SocialLinks>
        {!props.article && (
          <Tooltip visible={tooltipIsVisible} article={props.article}>
            <TooltipText>{tooltipText}</TooltipText>
            <TooltipIcon>
              <Icon glyph="arrow" size={24} />
            </TooltipIcon>
          </Tooltip>
        )}
      </div>
    </Div>
  )
}

export default Header
