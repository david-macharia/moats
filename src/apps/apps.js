
import store from '../min-redux/store/store'
export default app=()=>{
 store.subscribe(()=>{
     store.getState().apps
 })
}