import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, Card, CardBody, CardFooter, Button, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import store from "./../../../min-redux/store/store"
import { toggleApp, changeAppStatus, showEditApp } from '../../../min-redux/actions/actions';
import Widget04 from '././../../Widgets/Widget04';
import { Pie } from 'react-chartjs-2';
import ConfirmDialog from '../../components/Confirm';
import EditAppModal from '../../components/EditAppModal';
class Cards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      app: {
        value:undefined,
        active:false
      }
    }

  }

  toggle(app_id) {
    store.dispatch(toggleApp(app_id))
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }
  accept=(app)=>{
    store.dispatch(changeAppStatus(app.app_id,app.is_active))
    var my_app = { ...this.state, app: { ...app, "active":false} };
    this.setState(my_app)
  }
  decline=(app)=>{
    store.dispatch(changeAppStatus(app.app_id,!app.is_active))
    var my_app = { ...this.state, app: { ...app, "active":true} };
    this.setState(my_app)
  }
  changeAppStatus(app, value) {

    // store.dispatch(changeAppStatus(app_id,!status))
    var my_app = { ...this.state, app: { ...app, "active":!this.state.app.active} };

    this.setState(my_app)
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
  showEditAppCog = (app_id) => {
    store.dispatch(showEditApp(app_id, true))
  }

  render() {

    return (

      <div className="animated fadeIn">
        {
          (this.state.app.active === false) ?null: <ConfirmDialog decline={this.decline} accept={this.accept} app={this.state.app} open={this.state.app.active}/>

        }
        {
          store.getState().apps.map((app,index) => {
            if (app.showEditApp) {
              return <EditAppModal app={app} key={index} />
            }
          })
        }

        <Row>
          {
            store.getState().apps.map((app, index) => {
              var app_status = app.is_active;
              var app_color=app_status?{backgroundColor:"#ccffcc"}:{backgroundColor:"#f5f5f0"}
              return <Col key={index} xs="12" sm="6" md="4">
                <Fade timeout={app.state.timeout} in={app.state.fadeIn}>
                  <Card>
                    <CardHeader style={app_color}>

                      {app.name}
                      <div className="card-header-actions">
                        {/*eslint-disable-next-line*/}
                        <a onClick={() => this.showEditAppCog(app.app_id)} href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>

                        <AppSwitch className={'float-right mb-0'} onChange={(e) => this.changeAppStatus(app, this.state.app.active)} variant={'pill'} color={'primary'} size={'sm'} outline label value={"'"+this.state.app.active+"'"} checked={app_status} />
                        <a className="card-header-action btn btn-minimize float-right" data-target="#collapseExample" onClick={() => this.toggle(app.app_id)}><i className="icon-arrow-up"></i></a>
                      </div>
                    </CardHeader>
                    <Collapse isOpen={app.state.collapse} id="collapseExample">
                      <CardBody disabled style={app_color}>
                        <Row>
                          <Col sm="12" md="12">

                            <Widget04 icon="icon-speedometer" color="danger" header={"'"+app.data.api_call_count+"'"} value="25" invert>Api Call

                            </Widget04>
                            <div className="chart-wrapper">
                              <Pie data={app.data.pie_data} />
                            </div>
                          </Col>

                        </Row>
                      </CardBody>
                    </Collapse>
                  </Card>
                </Fade>
              </Col>

            })
          }
          <Col xs="12" sm="6" md="4">
            <Fade timeout={3000} in={true}>
              <Card>
                <CardHeader>

                  Create New App
                      <div className="card-header-actions">

                  </div>
                </CardHeader>
                <Collapse isOpen={true} id="collapseExample">
                  <CardBody disabled>
                    <Row>
                      <Col xs="4" sm="4">

                      </Col>
                      <Col xs="4" sm="4">
                        <Link to="/app/create" className="nav-link">

                          <Button color="danger" size="lg" className="btn-pill" style={{ height: "100px", width: "100px" }}>
                            <i className="fa fa-plus"></i>
                          </Button>
                        </Link>

                      </Col>
                      <Col xs="4" sm="4">

                      </Col>
                    </Row>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>



        </Row>
      </div>
    );
  }
}

export default Cards;
//this.changeAppStatus(app)
