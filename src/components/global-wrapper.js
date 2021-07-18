import React, { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import GlobalStyle from 'styles/global-style'

const GlobalWrapper = (props) => {
  const [displayOutlines, setDisplayOutlines] = useState(false)

  const handleKeyboardInput = (e) => {
    const key = e.keyCode || e.charCode
    // Tab
    if (key === 9) {
      setDisplayOutlines(true)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyboardInput(e))
  })

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>Arjay Rafuse</title>
        <meta name="description" content="Arjay Rafuse's projects" />
        <meta
          name="keywords"
          content="key, words, go, here"
        />
        <meta
          property="og:image"
          content="https://sm.mashable.com/mashable_in/feature/d/dogecoin-e/dogecoin-everything-you-need-to-know-about-the-cryptocurrenc_4ssb.jpg"
        />
        <meta property="og:description" content="Arjay Rafuse's projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="arjaydeocampo.github.io" />
        <meta property="og:title" content="Arjay Rafuse" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <GlobalStyle displayOutlines={displayOutlines} />
      {props.children}
    </Fragment>
  )
}

export default GlobalWrapper
