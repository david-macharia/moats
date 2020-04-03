import React from 'react'
import { Button, Image, Card as SUICard } from 'semantic-ui-react'
import mpesalogo from './../../../assets/img/mpesa.png'
import '././../../Base/Forms/mpesa.css'
export default function Mpesa() {
  return (
 <SUICard className="mpesa-card">


                              <SUICard.Content>




                                <Image
                                  floated='right'
                                  size='mini'
                                  src={mpesalogo}
                                />
                                <SUICard.Header>Pay using M-Pesa </SUICard.Header>
                                <SUICard.Meta>Friends of Elliot</SUICard.Meta>
                                <SUICard.Description>
                                  Steve wants to add you to the group <strong>best friends</strong>
                                </SUICard.Description>
                              </SUICard.Content>
                              <SUICard.Content extra>
                                <div className='ui two buttons'>

                                  <Button basic color='red'>
                                    Decline
                                     </Button>
                                </div>
                              </SUICard.Content>
                            </SUICard>
  )
}
