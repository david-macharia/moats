import React, { Component } from 'react';

import {

  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { Button, Grid, Image, Card as SUICard, Radio } from 'semantic-ui-react'
import { AppSwitch } from '@coreui/react';
import ImagePicker from './ImagePicker';
import store from '../../../min-redux/store/store';
import StepProgressView from './StepProgressView';
import Avator from './Avator';
import { Responsive, Segment } from 'semantic-ui-react'
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import Visa from './Visa';
import PayPal from './PayPal';
import Mpesa from './Mpesa';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      currentStep: 0,
      collapse: true,
      fadeIn: true,
      timeout: 300,
      platforms: store.getState().platform,
      payment_method: [
        {
          payment_method: "Visa",
          is_selected: true

        },
        {
          payment_method: "PayPal",
          is_selected: false
        },
        {
          payment_method: "M-Pesa",
          is_selected: false
        }
      ]


    };

  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }
  onDeletePlatform() {
    // this.setState(...this.state)
  }
  onStepChangeRequest() {

  }
  onBackClick = () => {
    this.setState({
      ...this.state,
      currentStep: this.state.currentStep -1
    })

  }
  onNextClick = () => {

    this.setState({
      ...this.state,
      currentStep: this.state.currentStep + 1
    })
  }
  handlePaymentChange = (e, radio) => {
   var methods= this.state.payment_method.map(payment=>{
      if(radio.value===payment.payment_method){
        return {
          payment_method: payment.payment_method,
          is_selected: true
        }
      }else{
        return {
          payment_method: payment.payment_method,
          is_selected: false
        }
      }

    })
    this.setState({
      ...this.state,
      payment_method: methods
    })


  }
  render() {
    var payment_component= (()=>{
     return  this.state.payment_method.map(payment=>{
       if(payment.is_selected){
        switch (payment.payment_method) {
          case "Visa": {
           return <Visa/>

          }
          case "PayPal":
            {
            return <PayPal/>
            }
          case "M-Pesa": {

            return <Mpesa/>
          }
          default:
            return null;
        }
       }


      });

    })()
    return (
      <div className="animated fadeIn">

        <Row>
          <Col xs="12" sm="12">
            <StepProgressView step={this.state.currentStep} />
          </Col>
        </Row>
        {
          (() => {
            switch (this.state.currentStep) {
              case 0:
                return (<Row>
                  <Col xs="12" sm="6">
                    <Card>
                      <CardHeader>
                        <strong>User Account</strong>
                      </CardHeader>
                      <CardBody>
                        <FormGroup style={{ marginLeft: "10px" }}>


                          <FormGroup >
                            <Grid columns={2} divided>
                              <Grid.Row centered={true} >
                                <Avator />
                              </Grid.Row>
                            </Grid>
                          </FormGroup>
                          <FormGroup >
                            <Grid columns={2} divided>
                              <Grid.Row>
                                <Grid.Column>
                                  <FormGroup>
                                    <Label htmlFor="company">First Name</Label>
                                    <Input type="text" id="company" placeholder="Enter Application name (required)" />
                                  </FormGroup>

                                </Grid.Column>
                                <Grid.Column>
                                  <FormGroup>
                                    <Label htmlFor="company">Last Name</Label>
                                    <Input type="text" id="company" placeholder="Enter Application name (required)" />
                                  </FormGroup>
                                </Grid.Column>

                              </Grid.Row>
                            </Grid>
                          </FormGroup>
                          <FormGroup >
                            <Grid columns={2} divided>
                              <Grid.Row>
                                <Grid.Column>
                                  <FormGroup>
                                    <Label htmlFor="company">Payment Profile Id</Label>
                                    <Input type="text" readOnly id="company" placeholder="User account Id" />
                                  </FormGroup>

                                </Grid.Column>
                                <Grid.Column>
                                  <FormGroup>
                                    <Label htmlFor="company">Country</Label>
                                    <Input type="text" id="company" placeholder="Enter Application name (required)" />
                                  </FormGroup>
                                </Grid.Column>

                              </Grid.Row>
                            </Grid>
                          </FormGroup>
                          <FormGroup >
                            <Grid columns={2} divided>
                              <Grid.Row>
                                <Grid.Column>
                                  <FormGroup>
                                    <Label htmlFor="company">Postal Address</Label>
                                    <Input type="text" id="company" placeholder="Enter Application name (required)" />
                                  </FormGroup>

                                </Grid.Column>
                                <Grid.Column>
                                  <FormGroup >
                                    <Label htmlFor="select">Account Type</Label>
                                    <Input type="select" name="select" id="select">
                                      <option value={0}>Individual</option>
                                      <option value={1}>Business</option>




                                    </Input>

                                  </FormGroup>
                                </Grid.Column>

                              </Grid.Row>
                            </Grid>
                          </FormGroup>

                        </FormGroup>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col xs="12" sm="6">
                    <Card>
                      <CardHeader>
                        <strong>Contacts</strong>

                      </CardHeader>
                      <CardBody>
                        <FormGroup>
                          <Label htmlFor="vat">Email</Label>
                          <Input type="text" id="vat" placeholder="e.g verifier@authenticate.com" />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="vat">Phone Number</Label>
                          <Input type="text" id="vat" placeholder="e.g +1(567)99333" />
                        </FormGroup>
                      </CardBody>
                      <Button onClick={this.onNextClick} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Next</Button>

                    </Card>
                  </Col>
                </Row>
                )

              case 1:
                return ((<Row>
                  <Col xs="12" sm="6">
                    <Card>
                      <CardHeader>
                        <strong>Payment Method</strong>
                      </CardHeader>
                      <CardBody>
                        <FormGroup style={{ marginLeft: "10px" }}>


                          <FormGroup >
                            <Grid columns={2} divided>
                              <Grid.Row centered={true} >
                                <Avator />
                              </Grid.Row>
                            </Grid>
                          </FormGroup>
                          <FormGroup >
                            <Grid columns={2} divided>
                              <Grid.Row>
                                <Grid.Column>
                                  <FormGroup>
                                    <Label htmlFor="company">First Name</Label>
                                    <Input type="text" id="company" placeholder="Enter Application name (required)" />
                                  </FormGroup>

                                </Grid.Column>
                                <Grid.Column>
                                  <FormGroup>
                                    <Label htmlFor="company">Last Name</Label>
                                    <Input type="text" id="company" placeholder="Enter Application name (required)" />
                                  </FormGroup>
                                </Grid.Column>

                              </Grid.Row>
                            </Grid>
                          </FormGroup>
                          <FormGroup >
                            <Grid columns={2} divided>
                              <Grid.Row>
                                <Grid.Column>
                                  <FormGroup>
                                    <Label htmlFor="company">Payment Profile Id</Label>
                                    <Input type="text" readOnly id="company" placeholder="User account Id" />
                                  </FormGroup>

                                </Grid.Column>
                                <Grid.Column>
                                  <FormGroup>
                                    <Label htmlFor="company">Country</Label>
                                    <Input type="text" id="company" placeholder="Enter Application name (required)" />
                                  </FormGroup>
                                </Grid.Column>

                              </Grid.Row>
                            </Grid>
                          </FormGroup>
                          <FormGroup >
                            <Grid columns={2} divided>
                              <Grid.Row>
                                <Grid.Column>
                                  <FormGroup>
                                    <Label htmlFor="company">Postal Address</Label>
                                    <Input type="text" id="company" placeholder="Enter Application name (required)" />
                                  </FormGroup>

                                </Grid.Column>
                                <Grid.Column>
                                  <FormGroup >
                                    <Label htmlFor="select">Account Type</Label>
                                    <Input type="select" name="select" id="select">
                                      <option value={0}>Individual</option>
                                      <option value={1}>Business</option>




                                    </Input>

                                  </FormGroup>
                                </Grid.Column>

                              </Grid.Row>
                            </Grid>
                          </FormGroup>

                        </FormGroup>
                      </CardBody>
                      <Button onClick={this.onBackClick} type="submit" size="sm" color="primary"><i className="fa fa-arrow-circle-left"></i> Back</Button>

                    </Card>
                  </Col>

                  <Col xs="12" sm="6">
                    <Card>
                      <CardHeader>
                        <strong>Contacts</strong>

                      </CardHeader>
                      <CardBody>
                        <FormGroup>
                          <Label htmlFor="vat">Email</Label>
                          <Input type="text" id="vat" placeholder="e.g verifier@authenticate.com" />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="vat">Phone Number</Label>
                          <Input type="text" id="vat" placeholder="e.g +1(567)99333" />
                        </FormGroup>
                      </CardBody>
                      <Button onClick={this.onNextClick} type="submit" size="sm" color="primary"><i className="fa fa-arrow-circle-o-right"></i> Next</Button>

                    </Card>
                  </Col>
                </Row>
                ))
              case 2:
                return ((
                  <Col>
                    <Row>
                      <Col xs="12" sm="12">
                        <Segment style={{ marginTop: "10px", marginBottom: "10px" }}>Please Verified the entered Details </Segment>

                      </Col>
                    </Row>

                    <Row>

                      <Col xs="12" sm="6">

                        <Card>
                          <CardHeader>
                            <strong>Confirm Order</strong>
                          </CardHeader>
                          <CardBody>
                            <FormGroup style={{ marginLeft: "10px" }}>


                              <FormGroup >
                                <Grid columns={2} divided>
                                  <Grid.Row centered={true} >
                                    <Avator />
                                  </Grid.Row>
                                </Grid>
                              </FormGroup>
                              <FormGroup >
                                <Grid columns={2} divided>
                                  <Grid.Row>
                                    <Grid.Column>
                                      <FormGroup>
                                        <Label htmlFor="company">First Name</Label>
                                        <Input type="text" id="company" placeholder="Enter Application name (required)" />
                                      </FormGroup>

                                    </Grid.Column>
                                    <Grid.Column>
                                      <FormGroup>
                                        <Label htmlFor="company">Last Name</Label>
                                        <Input type="text" id="company" placeholder="Enter Application name (required)" />
                                      </FormGroup>
                                    </Grid.Column>

                                  </Grid.Row>
                                </Grid>
                              </FormGroup>
                              <FormGroup >
                                <Grid columns={2} divided>
                                  <Grid.Row>
                                    <Grid.Column>
                                      <FormGroup>
                                        <Label htmlFor="company">Payment Profile Id</Label>
                                        <Input type="text" readOnly id="company" placeholder="User account Id" />
                                      </FormGroup>

                                    </Grid.Column>
                                    <Grid.Column>
                                      <FormGroup>
                                        <Label htmlFor="company">Country</Label>
                                        <Input type="text" id="company" placeholder="Enter Application name (required)" />
                                      </FormGroup>
                                    </Grid.Column>

                                  </Grid.Row>
                                </Grid>
                              </FormGroup>
                              <FormGroup >
                                <Grid columns={2} divided>
                                  <Grid.Row>
                                    <Grid.Column>
                                      <FormGroup>
                                        <Label htmlFor="company">Postal Address</Label>
                                        <Input type="text" id="company" placeholder="Enter Application name (required)" />
                                      </FormGroup>

                                    </Grid.Column>
                                    <Grid.Column>
                                      <FormGroup >
                                        <Label htmlFor="select">Account Type</Label>
                                        <Input type="select" name="select" id="select">
                                          <option value={0}>Individual</option>
                                          <option value={1}>Business</option>




                                        </Input>

                                      </FormGroup>
                                    </Grid.Column>

                                  </Grid.Row>
                                  <Grid.Row>
                                    <Grid.Column>

                                      <FormGroup>
                                        <Label htmlFor="vat">Email</Label>
                                        <Input type="text" id="vat" placeholder="e.g verifier@authenticate.com" />
                                      </FormGroup>
                                    </Grid.Column>
                                    <Grid.Column>
                                      <FormGroup>
                                        <Label htmlFor="vat">Phone Number</Label>
                                        <Input type="text" id="vat" placeholder="e.g +1(567)99333" />
                                      </FormGroup>
                                    </Grid.Column>
                                  </Grid.Row>


                                </Grid>
                              </FormGroup>

                            </FormGroup>
                          </CardBody>
                          <Button onClick={this.onBackClick} type="submit" size="sm" color="primary"><i className="fa fa-arrow-circle-left"></i> Back</Button>

                        </Card>
                      </Col>

                      <Col xs="12" sm="6">
                        <Card>
                          <CardHeader>
                            <strong>Payment Method</strong>

                          </CardHeader>
                          <CardBody style={{ marginBottom: "10px" }}>
                            <p>Billing Andress</p>
                            <ReactFlagsSelect
                              style={{ width: "100%" }}
                              searchable={true}
                              defaultCountry={'KE'}
                              searchPlaceholder="Search for a country" />
                            <br />
                            {
                              this.state.payment_method.map((payment) => {
                                return (
                                  <Radio
                                    style={{ marginRight: "10px" }}
                                    label={payment.payment_method}
                                    name='radioGroup'
                                    value={payment.payment_method}
                                    checked={payment.is_selected}
                                    onChange={this.handlePaymentChange}
                                  />
                                )
                              })
                            }



                          {
                            payment_component
                          }


                          </CardBody>
                          <Button style={{ margin: "10px" }} onClick={this.onNextClick} type="submit" size="sm" color="primary"><i className="fa fa-shopping-cart"></i> Check Out</Button>

                        </Card>
                      </Col>
                    </Row>



                  </Col>


                ))


              default:
                return null;

            }
          })()
        }

      </div>
    );


  }
}

export default Forms;
