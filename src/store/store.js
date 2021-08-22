import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '../services/EventService'
import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'
import * as notification from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    user,
    event,
    notification
  },
  state: {

    'categories': [
      'asda sda sd',
      'asdasd',
      'asda sda sd',
      'asdasd',
      'asda sda sd',
      'asdasd',
      'asda sda sd',
      'asdasd',
    ],
  }
})
