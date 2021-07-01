import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

const Work = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Work Experience</SectionHeading>}
      rightColumn={
        <Fragment>
        </Fragment>
      }
    />
  )
}

export default Work
