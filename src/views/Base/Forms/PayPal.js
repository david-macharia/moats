import React, { useEffect } from 'react'
import './paypal.css'
export default function PayPal() {

  useEffect(()=>{

  },[])
  return (
    <div class="active">
    <div class="floating">
      <div class="thickness"></div>
      <div class="thickness"></div>
      <div class="thickness"></div>
      <div class="card_body">
        <div class="paypal_center svg"></div>
        <div class="logo svg"></div>
        <div class="paywave svg"></div>
        <div class="chips svg"></div>
        <div class="card_no text">
          1234-5678-9012-3456
        </div>
        <div class="valid text">
          VALID <br/> THUR
        </div>
        <div class="valid_date text">
          12/20
        </div>
        <div class="holder text">JOHN DOE</div>
        <div class="mastercard_icon svg"></div>

      </div>

    </div>
  </div>

  )
}
