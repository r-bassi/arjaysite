import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

const Course = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Course Experience</SectionHeading>}
      rightColumn={
        <Fragment>
        </Fragment>
      }
    />
  )
}

export default Course
