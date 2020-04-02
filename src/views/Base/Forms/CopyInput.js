import React from 'react'
import { Input } from 'semantic-ui-react'

const CopyInput = (props) => (
  <Input
  style={{width:"100%"}}
    action={{
      color: 'teal',
      labelPosition: 'right',
      icon: 'copy',
      content:"Copy",
    }}
    defaultValue={props.value}
  />
)

export default CopyInput
