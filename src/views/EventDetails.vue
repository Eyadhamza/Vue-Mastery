<template>
  <div v-if="event" class="event-card">
    <h1>{{ event.title }}</h1>
    <span>@ {{ event.time }} on {{ event.date }} @ {{ event.location }}</span>
    <h4>{{ event.description }}</h4>
  </div>
</template>

<script >
import EventService from '../services/EventService'

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
