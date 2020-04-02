import React from 'react'
import { Select, Input } from 'semantic-ui-react'

const options = [
  { key: 'http', text: 'http', value: 'http' },
  { key: 'https', text: 'https', value: 'https' },
]

const LabeledInputWithOption = () => (
  <Input type='text' placeholder='Search...' action>
  <input />
   <Select compact options={options} defaultValue='articles' />

  </Input>
)
export default LabeledInputWithOption;
