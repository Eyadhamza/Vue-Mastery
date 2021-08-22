import EventService from '../../services/EventService'

export const state = {
  'events': [],
  'event':{}
}
export const mutations = {
  ADD_EVENT(state,event){
    state.events.push(event)
  },
  SET_EVENTS(state,events){
    state.events = events
  },
  SET_EVENT(state,event){
    state.event = event
  }
}
export const actions = {
  createEvent({commit,dispatch,rootState},event){
    console.log('User is ' + rootState.user.user.name)
    /// dispatch('action') i dont need to write the module name unless i name space it
    // to avoid collisions
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT',event)
      const notification = {
        type: 'success',
        message: 'Event was created!'
      }
      dispatch('notification/add',notification,{root:true})
    })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: 'There was an error creatung the events' + error.message
        }
        dispatch('notification/add',notification,{root:true})
        throw error
      })

  },
  fetchEvents({commit,dispatch},{perPage,page}){
    EventService.getEvents(perPage,page)
      .then(response => {
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was an error fetching the events' + error.message
        }
        dispatch('notification/add',notification,{root:true})
      })
  },
  fetchEvent({commit,getters,dispatch},id){
    let event = getters.getEventById(id)

    if (event){
      commit('SET_EVENT',event)
    }else{
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT',response.data)
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was an error fetching the event' + error.message
          }
          dispatch('notification/add',notification,{root:true})
        })
    }
  }

}
export const getters ={
  catLength: state => {
    return state.categories.length
  },
    getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}
