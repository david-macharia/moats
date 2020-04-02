import { List } from 'semantic-ui-react'
import React, { useState } from 'react'
import store from "./../store/store"
import 'semantic-ui-css/semantic.min.css'
const Note = () => {
    const [notes, setNotes] = useState(store.getState().notes)
    store.subscribe(() => {
      
        setNotes(store.getState().notes)
    })
    return <List divided relaxed>
    {notes.map((note,index)=>{
        return <List.Item key={index}>
        <List.Icon name='github' size='large' verticalAlign='middle' />
        <List.Content>
            <List.Header as='a'>{note.title}</List.Header>
            <List.Description as='a'>{note.content}</List.Description>

            <List.Description as='a'>Updated 10 mins ago</List.Description>
        </List.Content>
    </List.Item>
    })}
        
       
    </List>
}
export default Note;