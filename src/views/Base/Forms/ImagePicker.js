import React, { useState } from 'react'
import image from './../../../assets/img/image.png'
import { Button } from 'reactstrap'
import './imagepicker.css'
export default function ImagePicker(props) {
  var [state, setImage] = useState({
    src: image
  })
  var onClick = () => {

    var file = document.getElementById("upload-appp-icon");
    file.click()
    file.onchange = imagePreview
  }

  function imagePreview(event) {

        setImage({
          src: URL.createObjectURL(event.target.files[0])
        })


  }
  return (<div class="container">
    <img src={state.src} alt="Avatar" class="image" />
    <input type="file" id="upload-appp-icon" style={{ display: "none" }} />
    <div class="overlay" onClick={() => onClick()}>

      <div class="text" >
      <text style={{fontSize:"10px"}}>200px * 200px</text>
    <br/>
      <i className="fa fa-pencil" />

      </div>

    </div>
  </div>)

}
