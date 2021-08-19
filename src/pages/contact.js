import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

const Contact = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Contact Me</SectionHeading>}
      rightColumn={
        <Fragment>
        </Fragment>
      }
    />
  )
}

export default Contact
