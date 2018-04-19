<template>
<div>
    <h1>{{startup.name}}</h1>
    <h2>{{startup.solution}}</h2>
    <el-card>
        <img :src="startup.logo"/>
        <p>{{startup.description}}</p>
        <h3>Team:</h3>
        <div v-for="member in startup.team">
            <h3>Position: {{ member.position }}</h3>
            <h3>Name: {{ member.name }}</h3>
            <hr>
        </div>
    </el-card>
</div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
      startup: {}
    }
  },
  computed: {
    startupId () {
      return this.$route.params.id
    }
  },
  mounted() {
      fetch('http://localhost:8080/startup/' + this.startupId)
      .then((res) => {
          return res.json()
      })
      .then((data) => {
          console.log(data)
          this.startup = data
      })
  }
}
</script>
