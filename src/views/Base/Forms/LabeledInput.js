import React from 'react'
import { Input } from 'semantic-ui-react'

const LabeledInput = (props) => (
  <Input style={{width:"100%"}} label='http://' value={props.placeholder} placeholder={props.placeholder} />
)

export default LabeledInput
