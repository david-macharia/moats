import React, { Component } from 'react';

import {

  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { Button, Grid } from 'semantic-ui-react'
import { AppSwitch } from '@coreui/react';
import ImagePicker from './ImagePicker';
import store from '../../../min-redux/store/store';
import StepProgressView from './StepProgressView';
import Avator from './Avator';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      platforms: store.getState().platform
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

  render() {
    return (
      <div className="animated fadeIn">

        <Row>
          <Col xs="12" sm="12">
            <StepProgressView />
          </Col>
        </Row>


        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>User Account</strong>
              </CardHeader>
              <CardBody>
                <FormGroup style={{marginLeft:"10px"}}>


                  <FormGroup >
                    <Grid columns={2} divided>
                      <Grid.Row centered={true} >
                      <Avator/>
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
                <strong>App usage</strong>

              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="select">Select Platform</Label>
                  <Input type="select" name="select" id="select">
                    <option value="0">Android</option>
                    <option value="1">IOS</option>
                    <option value="2">Website</option>
                    <option value="2">Windows App</option>

                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="vat">Privacy Policy URL</Label>
                  <Input type="text" id="vat" placeholder="http://my-app-privacy-url" />
                </FormGroup>
                <FormGroup>
                  <Card>
                    <CardHeader>
                      <i className="fa fa-align-justify"></i><strong>Server Api Call Back</strong>
                      <div className="card-header-actions">

                      </div>
                    </CardHeader>
                    <Collapse isOpen={true} onEntering={this.onEntering} onEntered={this.onEntered} onExiting={this.onExiting} onExited={() => { alert("home") }}>
                      <CardBody>
                        <FormGroup>
                          <Label htmlFor="vat">Enter Endpoint to receive authenitcation status</Label>
                          <Input type="text" id="vat" placeholder="http://my-app-privacy-url" />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="vat">Alternative Url</Label>
                          <Input type="text" id="vat" placeholder="http://my-app-privacy-url" />
                        </FormGroup>

                      </CardBody>
                    </Collapse>

                  </Card>


                </FormGroup>
              </CardBody>
              <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Next</Button>

            </Card>
          </Col>
        </Row>
      </div>
    );


  }
}

export default Forms;
