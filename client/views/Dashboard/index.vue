<template>
    <div>
        <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Problem">
            <el-input v-model="form.searchString"></el-input>
            <el-button type="primary" icon="el-icon-search" v-on:click="search">Search</el-button>
        </el-form-item>
        </el-form>
        <el-row>
        <el-col :span="100" v-for="startup in startups" :key="startup._id" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
            <img src="http://via.placeholder.com/400x150" class="image">
            <div style="padding: 14px;">
                <span>{{startup.name}}</span>
                <div class="bottom clearfix">
                <div class="time">{{startup.description.slice(0, 300)}}...</div>
                <el-button type="text" class="button">Operating button</el-button>
                </div>
            </div>
            </el-card>
        </el-col>
        </el-row>
    </div>
</template>
<script>
function getAllStartups() {
    return fetch('http://localhost:8080/startup')
    .then((res) => {
        return res.json()
    })
}

function getSearchedStartups(searchString) {
    return fetch('http://localhost:8080/startup?search=' + searchString)
    .then((res) => {
        return res.json()
    })
}
export default {
  name: 'Dashboard',
  data() {
      return {
        form: {
          searchString: ''
        },
        startups: []
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      search() {
        if (!this.form.searchString) {
            getAllStartups()
            .then((data) => {
                console.log(data)
                this.startups = data
            })
        } else {
            getSearchedStartups(this.form.searchString)
            .then((data) => {
              this.startups = data
            })
          }

      }
    },
    components: [
    ]
}
</script>
