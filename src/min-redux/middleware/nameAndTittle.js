// import { ADD_NOTE,incorrectData} from "../actions/actions"

// const nameAndTitileMiddleWare=({dispatch})=>{
//     return function (next){
//         return function(action){
//             switch(action.type){
              
//                 case ADD_NOTE:
                 
//                     if(action.title==undefined||action.title==""){
                      
//                       return   dispatch(incorrectData())
//                     }
                    
//             }
//             return next(action)
//         }
//     }
// }
// export default nameAndTitileMiddleWare;