<template>
  <div>
    <h1>Create Event by {{user.name}}</h1>
    <p>was created by {{user.id}}</p>

    <p v-for="category in categories" :key="category">
      {{category}}
    </p>

      {{ getEventById(1)}}


    <p>number of categories = {{catLength}}</p>
  </div>

</template>


<script>
import {mapState,mapGetters} from 'vuex';

export default {

  computed:{
    // instead of state => state.user.name, we use the shortcut
    // this simply map state to a property
    // and getters as well
    // catLength(){
    //   return this.$store.getters.catLength
    // },
    ...mapGetters(['getEventById']),
    ...mapState(['user','categories'])
  }

}

</script>

<style>

</style>
