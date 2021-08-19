import React from 'react'

import GlobalWrapper from 'components/global-wrapper'
import Hero from 'components/hero'
import Section from 'components/section'
import Writing from 'components/writing'
import Footer from 'components/footer'
// import Breakpoints from 'utils/breakpoints'

const App = () => {
  return (
    <GlobalWrapper>
      {/* <Breakpoints /> */}
      <Hero />
      <Section>
        <Writing />
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default App
