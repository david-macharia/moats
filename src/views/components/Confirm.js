import React,{useState,useEffect} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import store from "./../../min-redux/store/store"
import { changeAppStatus } from '../../min-redux/actions/actions';

const ConfirmDialog = (props) =>{

const [state,changeDialogState]=useState({"open":props.open});
 var accept=()=>{
   props.accept(props.app)
  // store.dispatch(changeAppStatus(props.app.app_id,props.app.is_active))

     changeDialogState({
      "open":false
     })
 }
 var decline=()=>{
  props.decline(props.app)
 // store.dispatch(changeAppStatus(props.app.app_id,!props.app.is_active))
 changeDialogState({
  "open":false
     })
}
useEffect(()=>{

},[props.open])
return(
  <Modal open={state.open} size={'small'} style={{width:"500px",height:"200px",marginRight:"15%",marginTop:"15%",marginBottom:"15%",marginLeft:"40%",position:"absolute"}} closeIcon>
    <Header icon='archive' content={"Deativate  `"+props.app.name+"`"} />
    <Modal.Content>
      <p>
       You are about to deactive the app,Api key and any other app using the app information and data will fail to get response,
       Are you sure?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'onClick={decline}>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' onClick={accept}>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)
}

export default ConfirmDialog
