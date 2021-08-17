<template>
  <p>Register for the event here!</p>
  <button @click="register()">Register Now!</button>
</template>

<script >

export default {
  props: ['event'],

  methods:{
    register(){
      this.$router.push({
        name : 'Details',
        params: {id :this.event.id}
      })
    }
  }
}

</script>
