import Vue from 'vue'
import Vuex from 'vuex'
import EventService from './services/EventService'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'user': {'id':1234, 'name':'Eyad Hamza'},
    'categories':[
      'asda sda sd',
      'asdasd',
      'asda sda sd',
      'asdasd',
      'asda sda sd',
      'asdasd',
      'asda sda sd',
      'asdasd',
    ],
    'events': [
      {'id':1,'name':'Beyond Earth'},
      {'id':2,'name':'Beyond Earth 1'},
      {'id':3,'name':'Beyond Earth 23'},
      {'id':4,'name':'Beyond Earth 33'},
    ]
  },
  mutations: {
      ADD_EVENT(state,event){
        state.events.push(event)

      }
  },
  actions: {
      createEvent({commit},event){
          return EventService.postEvent(event).then(() => {
            commit('ADD_EVENT',event)
          })
            .catch(() => {
            console.log('there was an error')
          })

      }
  },
  getters:{
    catLength: state => {
      return state.categories.length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
