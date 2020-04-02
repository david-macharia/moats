import _ from 'lodash'
import React,{useState} from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import Forms from '../Base/Forms/Forms'
import store from "./../../min-redux/store/store"
import { showEditApp } from '../../min-redux/actions/actions';

const EditAppModal = (props)=>{
  const [open,setOpen]= useState(true)
  var showEditAppCog = () => {
    store.dispatch(showEditApp(props.app.app_id, false))
  }
return (


  <Modal open={open}  style={{ height: "80%", marginTop: "5%", marginLeft: "20%", marginBottom: "300%" }} closeIcon>
    <Modal.Header>{props.app.name}

    <Icon link name='close' onClick={()=>{showEditAppCog();setOpen(false)}} />
    </Modal.Header>

    <Modal.Content image scrolling>

      <Forms app={props.app} />


    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
)
}

export default EditAppModal
