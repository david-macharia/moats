import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepProgressView = () => (
  <Step.Group style={{width:"100%",marginBottom:"10px"}}>
    <Step active>
      <Icon name='user' />
      <Step.Content>
        <Step.Title>User Account </Step.Title>
        <Step.Description>Confirm Your details</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step >
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepProgressView
