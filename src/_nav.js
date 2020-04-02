
import store from './min-redux/store/store'
console.log("apps",store.getState().apps)
export default {
  items: [
    {
      name: 'DashBoard',
      url: 'apps/diplay',
      icon: 'icon-home',

    },
    {
      name: 'My Applications',
      url: '/dashboard',
      icon: 'icon-folder',
        children:[...store.getState().apps,  {
          name: 'Create a new App',
          url: '/app/create',
          icon: 'icon-plus',
          app_id: "sdsdm323923d13medsd",
          is_active: true,

        },]
    },
    {
      name: 'Account',
      url: '/dashboard',
      icon: 'icon-user',
      children:[
        {
          name :"Billing",
          icon:"icon-wallet",
          url :'/apps/billing'
        },
        {
          name :"Setting",
          icon:"icon-settings",
          url :'/billing'
        }
      ]

    }
  ],
};
