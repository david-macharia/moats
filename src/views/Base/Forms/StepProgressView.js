import React,{useState,useEffect} from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepProgressView = (props) =>{

 const [progres,setStep] =useState({
   activeSteps:range(0,props.step),
   steps:[
     {
       name:"user",
       title:"User Account",
       description:"Confirm Your details",
       active:false
     },
     {
      name:"payment",
      title:"Billing",
      description:"Enter billing information",
      active:true
    },
    {
      name:"order",
      title:"Confirm Order",
      description:"Confirm Your details",
      active:false
    }
   ]
 })
 useEffect(()=>{
setStep({
    activeSteps:range(0,props.step),
    steps:[...progres.steps]
  })
 },[props.step])
 function range(start, end, step, offset) {

  var len = (Math.abs(end - start) + ((offset || 0) * 2)) / (step || 1) + 1;
  var direction = start < end ? 1 : -1;
  var startingPoint = start - (direction * (offset || 0));
  var stepSize = direction * (step || 1);

  return Array(len).fill(0).map(function(_, index) {
    return startingPoint + (stepSize * index);
  });

}

return(
  <Step.Group style={{width:"100%",marginBottom:"10px"}}>
   {
    progres.steps.map((step,index)=>{
        var active=progres.activeSteps.includes(index)?true:false
      return<Step active={active}>
      <Icon name={step.name} />
      <Step.Content>
        <Step.Title>{step.title}</Step.Title>
        <Step.Description>{step.description}</Step.Description>
      </Step.Content>
    </Step>
     })
   }
   </Step.Group>
)
}

export default StepProgressView
