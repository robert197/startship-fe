<template>
    <div>
        <el-form ref="form" :model="form" label-width="120px">
            <el-input v-model="form.searchString"></el-input>
            <div class="search-button">
                <el-button type="primary" icon="el-icon-search" v-on:click="search">Search</el-button>
            </div>
        </el-form>
        <el-tabs v-model="activeName" @tab-click="handleClick">

            <!-- List -->
            <el-tab-pane label="List" name="list">
                <el-row v-if="startups.length > 0">
                    <h3 class="center-title">List of Startups</h3>
                </el-row>
                <el-row v-else>
                    <h3 class="center-title">No Startups found</h3>
                    <h3 class="center-title">...</h3>
                </el-row>
                <el-row>
                <el-col :span="100" v-for="startup in startups" :key="startup._id">
                    <el-card :body-style="{ padding: '0px' }">
                    <img :src="startup.logo" class="image">
                    <div class="category"><b>Category:</b> {{startup.category}}</div>
                    <div style="padding: 15px;">
                        <h2>{{startup.name}}</h2>
                        <div class="bottom clearfix">
                        <div class="time">{{startup.description.slice(0, 300)}}...</div>
                        <el-collapse accordion>
                            <el-collapse-item name="1">
                                <div>Age: {{startup.age}}</div>
                                <div>Website: <a :href="startup.link">{{startup.link}}</a></div>
                                <div>Country: {{startup.country}}</div>
                                <div>City: {{startup.city}}</div>
                                <div>Partnerships: {{startup.partnerships}}</div>
                                <div>Patents: {{startup.patents}}</div>
                                <div>Technology: {{startup.technology}}</div>
                            </el-collapse-item>
                        </el-collapse>
                        <el-button type="text" class="button" v-on:click="goToDetail(startup._id)">Details</el-button>
                        <div class="block">
                            <el-button size="mini" class="thumbs-button"><img src="ic_thumb_up_black_24px.svg"></img></el-button>
                            <el-button size="mini" class="thumbs-button"><img src="ic_thumb_down_black_24px.svg"></img></el-button>
                            <el-button size="mini" class="thumbs-button"><img src="ic_chat_black_24px.svg"></img></el-button>
                            <div class="score">
                                <h3>Fit: 90%</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                </el-card>
            </el-col>
            </el-row>
            </el-tab-pane>

            <!-- Radar -->
            <el-tab-pane label="Radar" name="Radar">

            </el-tab-pane>
        </el-tabs>
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
  mounted() {
      setTimeout(() => {
        this.$notify({
          title: 'Watchlist Updated',
          message: 'A startup for your problem raised!',
          type: 'success'
        })
      }, 7000)
  },
  data() {
      return {
        form: {
          searchString: ''
        },
        startups: [],
        activeName: 'list'
      }
    },
    watch: {
        rating(val) {
            console.log(val)
        }
    },
    methods: {
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

      },
      goToDetail(id) {
        this.$router.push('/detail/' + id)
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style lang="scss">
    .container {
        max-width: 100%!important;
    }
    .center-title {
        text-align: center;
    }
    .image {
        width: 5em;
        height: 5em;
    }
    .el-collapse {
        border: none;
    }
    .el-collapse-item__header {
        border: none;
        text-align: right;
    }
    .thumbs-button {
        border-radius: 50px;
        img {
            opacity: 0.5;
        }
    }
    .score {
        display: inline-block;
        float: right;
    }
    .category {
        display: inline-block;
        float: right;
        padding: 2em;
    }
    .search-button {
        width: 100%;
        text-align: center;
        button {
            margin-top: 1em;
            box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.4);
            border-radius: 40px;
        }
    }
    .el-input {
        input {
            border-radius: 50px;
        }
    }
    .page-layout main .main-content {
        margin-top: 4em!important;
    }
</style>
