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
            <el-checkbox v-on:click="checkGdpr" v-model="value">GDPR Conform</el-checkbox>

            <el-select placeholder="Technology">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>

        <el-select placeholder="Sector">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <el-select placeholder="Country">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <el-select placeholder="Funding Round">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <el-select placeholder="Maturity">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <el-select placeholder="Giuristiction">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <div class="block">
            <span class="demonstration">Age of Startup</span>
            <el-slider v-model="age"></el-slider>
        </div>

        <el-radio v-model="radio" label="1">0</el-radio>
        <el-radio v-model="radio" label="2">1 - 3</el-radio>
        <el-radio v-model="radio" label="2">> 3</el-radio>

        </div>
        {{gdprChecked}}
       </el-menu>
   </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Sidebar',
  props: ['active'],
  // sharedState: this.store.state,
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
        radio: null
      }
  },
  computed: {
      ...mapState({
        gdprChecked: state => {
            return state.filters.gdprChecked
        }
    })
  },
  methods: {
    ...mapActions(['checkGdpr'])
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
