<template>
    <div id="sidebar" :class="{'open': active}">
    <el-menu theme="light" router>
        <div class="logo-container">
            <img class="logo" src="https://vuejs.org/images/logo.png" />
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
       </el-menu>
   </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['active'],
  computed () {
      active: () => {
          console.log(this)
          return this.active
      }
  }
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
