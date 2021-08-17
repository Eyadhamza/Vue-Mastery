<template>
  <div v-if="event" >
    <h1>{{ event.title }}</h1>

      <div >
        <router-link :to="{name: 'Details'}">Details</router-link>

      </div>

      <div>
        <router-link :to="{name: 'Register'}">Register</router-link>
      </div>
      <div>
        <router-link :to="{name: 'Edit'}">Edit</router-link>
      </div>


    <router-view :event="event"/>
  </div>
</template>

<script >
// the layout component will be the one who fetches the event from the api, then we send it to
// the other views using router view and passing a props
import EventService from '../../services/EventService'

export default {
  props: ['id'],

  data () {
    return {
      event: null

    }
  },
  created () {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}

</script>
