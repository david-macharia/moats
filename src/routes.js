import React from 'react';
import store from "./min-redux/store/store"

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const FORM = React.lazy(() => import('./views/Base/Forms/Forms'));
const UserAppsDashBoard=React.lazy(()=>import('./views/Base/Cards/Cards'));
const Billing =React.lazy(()=>import('./views/Base/Forms/Billing'))
const dashboards=store.getState().apps.map((app,index)=>{
  return  { path: "/apps/"+app.app_id, exact:true, name:app.name, component:Dashboard };
});
console.log("dashboards",dashboards)
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/app/create', name: 'Create new App', component: FORM },
  ...dashboards,
   { path: '/apps/display', exact:true, name: 'My Apps', component: UserAppsDashBoard },
   {path:'/apps/billing',exact:true,name:"Billing",component:Billing}


];
console.log("routes",routes)

export default routes;
