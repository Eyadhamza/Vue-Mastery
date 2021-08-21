import Vue from 'vue'
import Vuex from 'vuex'

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
  mutations: {},
  actions: {},
  getters:{
    catLength: state => {
      return state.categories.length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
