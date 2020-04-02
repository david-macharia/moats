import React,{useState} from "react"
import { Grid, AccordionTitle, GridColumn } from "semantic-ui-react"
import store from './../store/store'
import {addNote, deleteNote} from '../actions/actions'
import Note from "./Notes"
const Title=(props)=>{
    let addNoteCallBack=(e)=>{
      e.preventDefault()
     var title=document.getElementById("title").value
     var content=document.getElementById("content").value
     store.dispatch(addNote(title,content))
     console.log(store.getState())

    }
    let deleteNoteCallBack=(e)=>{
        e.preventDefault()
  
       store.dispatch(deleteNote())
     
  
      }
    return <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={3}>
      <form id="add-note">
      Title: <br />
      <input type="text" id="title" name="title"/>
      <br />
      Content: <br />
      <textarea name="content" id="content" cols="30" rows="5"></textarea>
      <br />
     <Grid.Row>
     <Grid.Column width={1}>
     <button type="submit" onClick={(e)=>addNoteCallBack(e)}>Add Note</button>

     </Grid.Column>
     <Grid.Column width={1}>
     <button type="submit" onClick={(e)=>deleteNoteCallBack(e)}>Delete Note</button>

     </Grid.Column>
     </Grid.Row>

      </form>
      </Grid.Column>
    
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
    <Note/>
      </Grid.Column>
     
    </Grid.Row>
  </Grid>
}
export default Title;