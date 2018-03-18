<template>
    <div id="sidebar" :class="{'open': active}">
    <el-menu theme="light" router>
        <div class="logo-container">
            <img class="logo" src="image.png"/>
        </div>
          <el-menu-item index="/">Search</el-menu-item>
         <el-submenu index="1">
           <template slot="title">
               Watchlist
           </template>
           <el-menu-item-group title="Category 1">
             <el-menu-item index="/post/1">Problem #1</el-menu-item>
             <el-menu-item index="/post/2">Problem #2</el-menu-item>
           </el-menu-item-group>
           <el-menu-item-group title="Category 2">
             <el-menu-item index="/post/3">Problem #3</el-menu-item>
           </el-menu-item-group>
         </el-submenu>
         <el-menu-item index="/about">News</el-menu-item>

        <div class="filters">
            <el-checkbox style="margin-bottom: 2em" @change="checkGdpr" v-model="gdpr">GDPR Conform</el-checkbox>

            <el-select style="margin-bottom: 2em" placeholder="Technology">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>

        <el-select style="margin-bottom: 2em" placeholder="Sector">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <el-select style="margin-bottom: 2em" placeholder="Country">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <el-select style="margin-bottom: 2em" placeholder="Funding Round">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <el-select placeholder="Maturity" style="margin-bottom: 2em">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <el-select placeholder="Giuristiction" style="margin-bottom: 2em">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <div class="block" style="margin-bottom: 2em">
            <span class="demonstration">Age of Startup</span>
            <el-slider v-model="age"></el-slider>
        </div>

        <el-radio v-model="radio" label="1">0</el-radio>
        <el-radio v-model="radio" label="2">1 - 3</el-radio>
        <el-radio v-model="radio" label="2">> 3</el-radio>

        </div>
       </el-menu>
   </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import shared from 'store/shared'

export default {
  name: 'Sidebar',
  props: ['active'],
  mounted() {
      console.log(shared)
  },
  data() {
      return {
          checked: false,
          options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        age: 2,
        radio: null,
        gdpr: false
      }
  },
  computed: {
  },
  methods: {
    checkGdpr() {
        shared.gdpr = this.gdpr
    }
  },
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
.filters {
    margin-top: 6em;
}
@import '~scss_vars';
@import './style.scss';
</style>
