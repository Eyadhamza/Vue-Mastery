<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";
@Options({
    props:['page'],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getEvents(2,this.page)
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
})
export default class Home extends Vue {}
</script>
