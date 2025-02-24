import React from 'react'
import { LaunchIcon } from '@sanity/icons'

const ExternalLinkRenderer = (props: any) => (
  <span>
    {props.renderDefault(props)}
    <a contentEditable={false} href={props.value.href} target='_blank'>
      <LaunchIcon />
    </a>
  </span>
)

export default ExternalLinkRenderer
