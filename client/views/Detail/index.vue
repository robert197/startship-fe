<template>
<div>
    <h1>{{startup.name}}</h1>
    <el-card>
        <p>{{startup.description}}</p>
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
          this.startup = data
      })
  }
}
</script>
