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
    'events': [],
    'event':{}
  },
  mutations: {
      ADD_EVENT(state,event){
        state.events.push(event)
      },
      SET_EVENTS(state,events){
        state.events = events
      },
      SET_EVENT(state,event){
      state.event = event
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

      },
      fetchEvents({commit},{perPage,page}){
        EventService.getEvents(perPage,page)
          .then(response => {
            commit('SET_EVENTS', response.data)
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })
      },
      fetchEvent({commit,getters},id){
        let event = getters.getEventById(id)

        if (event){
          commit('SET_EVENT',event)
        }else{
          EventService.getEvent(id)
            .then(response => {
              commit('SET_EVENT',response.data)
            })
            .catch(error => {
              console.log('There was an error:', error.response)
            })
        }
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
