import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

const Keyboard = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Keyboard Content</SectionHeading>}
      rightColumn={
        <Fragment>
        </Fragment>
      }
    />
  )
}

export default Keyboard
