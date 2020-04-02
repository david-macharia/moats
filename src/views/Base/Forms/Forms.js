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
import{Button} from 'semantic-ui-react'
import { AppSwitch } from '@coreui/react';
import ImagePicker from './ImagePicker';
import Chips from '../../components/Chip';
import store from '../../../min-redux/store/store';
import CopyInput from './CopyInput';
import LabeledInput from './LabeledInput';

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
  onDeletePlatform(label){
   // this.setState(...this.state)
  }

  render() {
    if (this.props.app === undefined) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" sm="6">
              <Card>
                <CardHeader>
                  <strong>Create New App</strong>

                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="company">Application Name</Label>
                    <Input type="text" id="company" placeholder="Enter Application name (required)" />
                  </FormGroup>

                  <FormGroup >
                    <Label htmlFor="select">What type of application are you using with authentication </Label>
                    <Input type="select" name="select" id="select">
                      <option value="0">Please select</option>
                      {
                        store.getState().app_application.map((app, index) => {
                          return <option value={index + 1}>app</option>
                        })
                      }

                    </Input>

                  </FormGroup>

                  <FormGroup >
                    <FormGroup>
                      <Label htmlFor="deploy">Deploy Automatically deploy application</Label><br />
                      <AppSwitch id="deploy" variant={'pill'} color={'primary'} outline={'alt'} label checked />
                    </FormGroup>

                  </FormGroup>
                  <Label htmlFor="image">Upload Application Icon </Label>

                  <FormGroup>

                    <ImagePicker id="image" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="company">Contact email Address</Label>
                    <Input type="email" id="company" placeholder="Email that you can receive support on the app" />
                  </FormGroup>
                  <FormGroup check className="checkbox">
                    <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                    <Label check className="form-check-label" htmlFor="checkbox1">Have read and understood term and conditions of usage ?</Label>
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
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Create</Button>

              </Card>
            </Col>
          </Row>
        </div>
      );
    } else {
      var app = this.props.app;
      return (
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" sm="6">
              <Card>
                <CardHeader>
                  <strong>{"Edit " + app.name}</strong>

                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="company">Application Name</Label>
                    <Input type="text" id="company" value={app.name} placeholder="Enter Application name (required)" />
                  </FormGroup>



                  <FormGroup >
                    <FormGroup>
                      <Label htmlFor="deploy">Deploy Automatically deploy application</Label><br />
                      <AppSwitch id="deploy" variant={'pill'} color={'primary'} outline={'alt'} label checked={app.is_active} />
                    </FormGroup>

                  </FormGroup>
                  <Label htmlFor="image">Upload Application Icon </Label>

                  <FormGroup>

                    <ImagePicker id="image" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="company">Contact email Address</Label>
                    <Input type="email" value={app.email_address} id="company" placeholder="Email that you can receive support on the app" />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="company">App Id</Label>
                    <br/>
                    <CopyInput value={app.app_id}/>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="company">App Secret</Label>
                    <Input type="password" value={app.app_secret} id="company" placeholder="Email that you can receive support on the app" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="company">Data Delete Request Url</Label>
                    <br/>
                    <LabeledInput/>
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

                  <Chips data={app} onDeletePlatform={this.onDeletePlatform} />

                  <FormGroup>

                    <Label htmlFor="select">Select Platforms</Label>
                    <Input type="select" name="select" id="select">
                      {

                        this.state.platforms.map((my_app, index) => {
                          return !app.app_usage.platform.includes(my_app) ? <option key={index} value={index}>{my_app}</option> : null
                        })
                      }
                    </Input>
                  </FormGroup>
                  <FormGroup >
                    <Label htmlFor="select">What type of application are you using with authentication </Label>
                    <Input type="select" name="select" id="select">
                      <option value={0}>{app.app_application}</option>
                      {

                        store.getState().app_application.map((name, index) => {
                          if (app.app_application == name) {

                            return null
                          } else {

                            return <option key={index} value={index + 1}>{name}</option>
                          }

                        })
                      }


                    </Input>

                  </FormGroup>
                  <FormGroup>



                    <Label htmlFor="vat">Privacy Policy URL</Label>
                    <br/>

                    <LabeledInput placeholder={"my-app-privacy-url.com"} value={app.app_usage.privacy_url}/>
                    {/* <Input type="text" id="vat" value={app.app_usage.privacy_url} placeholder="http://my-app-privacy-url" /> */}
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
                            <br/>
                           <LabeledInput placeholder={"my-app-privacy-url.com"} value={app.app_usage.callback_one}/>

                          </FormGroup>
                            <FormGroup>
                            <Label htmlFor="vat">Alternative Url</Label>
                            <br/>
                           <LabeledInput placeholder={"my-app-privacy-url.com"} value={app.app_usage.callback_two}/>
                          </FormGroup>

                        </CardBody>
                      </Collapse>

                    </Card>


                  </FormGroup>
                </CardBody>
                <Button loading={false} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Create</Button>

              </Card>
            </Col>
          </Row>
        </div>
      );
    }

  }
}

export default Forms;
