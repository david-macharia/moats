
import image from './../../assets/img/image.png'
import { SHOW_EDIT_APP, ADD_APP,ADD_PLATFORM, DELETE_NOTE, TITLE_CONTENT_REQUIRED, TOGGLE_APP, APP_STATUS } from '../actions/actions'

const initialState = {
  user: {
    isLoggedIn: false,
    userAccount: {
      user_name: "david kiarie macharia"
    }
  },
  app_application: [
    "Bancking/financial",
    "Social network & Dating",
    "Other"
  ],
  platform: ["Android", "Ios", "Windows", " Web Applications"],
  new_app: {
    name: "",
    "app-application": [
      {
        name: "Banking $ financial"
      },
      {
        name: "Social Network & Dating"
      },
      {
        name: "other"
      }
    ],
    app_icon: image,
    app_agreement: false,
    emai_address: "",
    "app_usage": {
      "platform": ["Android", "Ios", "Windows"],
      "privacy-url": null,
      "callback_one": "https://www.callback.myback.com",
      "callback_two": null
    }
  },
  apps: [
    {
      name: 'Central Bank of Kenya',
      url: "sdsdm32a392313medsd",
      icon: 'icon-layers',
      app_id: "sdsdm32a392313medsd",
      app_secret:"wertydsggvc523g76sqwerty",
      is_active: false,
      app_application: "Other",
      app_icon: image,
      app_agreement: false,
      email_address: "davidkiarie5861@gmail.com",
      app_usage: {
        "platform": ["Android", " Web Applications"],
        "privacy_url": null,
        "callback_one": "https://www.callback.myback.com",
        "callback_two": "https://www.callback.myback.com/backup",
      },

      state: {
        collapse: true,
        fadeIn: true,
        timeout: 300,
        showEditApp: false,
      },
      data: {
        api_call_count: 13023,
        pie_data: {
          labels: [
            'Passed',
            'Failed',
            'Blocked',
          ],
          datasets: [
            {
              data: [300, 50, 100],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
              ],
              hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
              ],
            }],

        }
      }
    },
    {
      name: 'Okash',
      url: "wetyuwioepdwedewjmk",
      icon: 'icon-layers',
      app_id: "wetyuwioepdwedewjmk",
      app_secret:"werty663276sqwerty",
      is_active: true,
      state: {
        collapse: true,
        fadeIn: true,
        timeout: 300,
        showEditApp: false,
      },
      app_application: "Bancking/financial",
      app_icon: image,
      app_agreement: false,
      email_address: "",
      app_usage: {
        platform: ["Android", "Ios", "Windows", " Web Applications"],
        "privacy_url": null,
        "callback_one": null,
        "callback_two": null
      },
      data: {
        api_call_count: 10223,
        pie_data: {
          labels: [
            'Passed',
            'Failed',
            'Blocked',
          ],
          datasets: [
            {
              data: [300, 50, 100],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
              ],
              hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
              ],
            }],
        }
      }
    }
  ],
  notes: [

  ]
}
let rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_APP: {
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            "title": action.title,
            "content": action.content
          }
        ]
      }
    } case TOGGLE_APP: {
      let apps = state.apps.map((app) => {
        if (app.app_id === action.id) {

          return {
            ...app,
            state: {
              ...app.state,
              collapse: !app.state.collapse,

            }
          }

        } else {
          return {
            ...app
          }
        }



      })
      return {
        ...state,
        "apps": apps
      }
    }
    case APP_STATUS: {
      let app = state.apps.map((app) => {

        if (app.app_id === action.payload.id) {

          return {
            ...app,
            is_active: action.payload.activate,
          }
        } else {

          return {
            ...app
          }
        }
      })
      return {
        ...state,
        "apps": app
      }
    }
    case SHOW_EDIT_APP: {
      let app = state.apps.map((app) => {

        if (app.app_id === action.payload.id) {

          return {
            ...app,
            showEditApp: action.payload.showEditApp,
          }
        } else {

          return {
            ...app
          }
        }
      })
      return {
        ...state,
        "apps": app
      }
    }
    case ADD_PLATFORM: {
      let apps = state.apps.map((app) => {
        if (app.app_id === action.id) {

          return {
            ...app,

          }

        } else {
          return {
            ...app
          }
        }



      })
      return {
        ...state,
        "apps": apps
      }
    }
    default:
      return state

  }
}
export default rootReducer;
