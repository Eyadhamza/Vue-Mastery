<template>
  <div v-if="event" class="event-card">
    <h1>{{ event.title }}</h1>
    <span>@ {{ event.time }} on {{ event.date }} @ {{ event.location }}</span>
    <h4>{{ event.description }}</h4>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EventService from "@/services/EventService";
@Options({
    props:['id'],
    data() {
        return {
            event: null,
        };
    },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
          this.event = response.data
      })
      .catch(error => {
          console.log(error)
      })
  },
})
export default class EventDetails extends Vue {}
</script>
