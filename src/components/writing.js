import React from 'react'

import TwoColumns from 'components/twoColumns'
import Project from 'components/project'
import SectionHeading from 'components/sectionHeading'


const Writing = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Some other heading</SectionHeading>}
      
    />
  )
}

export default Writing
