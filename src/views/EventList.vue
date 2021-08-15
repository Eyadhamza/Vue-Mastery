<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EventCard from "@/components/EventCard.vue"; // @ is an alias to /src

@Options({
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          user: {
            id: "abc123",
            name: "Adam",
          },
          category: "animal welfare",
          organizer: "Adam",
          title: "Cat Cabaret",
          description: "Yay felines!",
          location: "Meow Town",
          date: "2019-01-03T21:54:00.000Z",
          time: "2:00",
          attendees: [],
        },
        {
          id: 8419988,
          user: {
            id: "abc123",
            name: "Adam",
          },
          category: "animal welfare",
          organizer: "Adam",
          title: "Kitty Cluster",
          description: "Yay cats!",
          location: "Catlandia",
          date: "2019-01-31T22:09:00.000Z",
          time: "7:00",
          attendees: [],
        },
        {
          id: 4582797,
          user: {
            id: "abc123",
            name: "Adam",
          },
          category: "animal welfare",
          organizer: "Adam",
          title: "Puppy Parade",
          description: "Yay pups!",
          location: "Puptown ",
          date: "2019-02-02T23:27:00.000Z",
          time: "1:00",
          attendees: [],
        },
      ],
    };
  },
})
export default class Home extends Vue {}
</script>
