<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 nav-block">
          <div class="head-block">
            <a href="/"> <h3 class="title"> <img src="./assets/img/document.svg" alt="">  My Docs @ Inmar</h3></a>
          </div>
          <div class="navlist-block">
            <ul class="nav-list">
              <li v-bind:class="{'active' : $route.name == 'Index'}">
                <router-link to="/">Installation</router-link>
              </li>
              <li v-bind:class="{'active' : $route.name == 'Selectors'}">
                <router-link to="/selectors">Selectors</router-link>
              </li>
              <li v-bind:class="{'active' : $route.name == 'Variables'}">
                <router-link to="/variables">Variables</router-link>
              </li>
              <li v-bind:class="{'active' : $route.name == 'Interpolation'}">
                <router-link to="/interpolation">Interpolation</router-link>
              </li>
              <li v-bind:class="{'active' : $route.name == 'Operators'}">
                <router-link to="/operators">Operators</router-link>
              </li>
              <li v-bind:class="{'active' : $route.name == 'Mixins'}">
                <router-link to="/mixins">Mixins</router-link>
              </li>
              <li v-bind:class="{'active' : $route.name == 'Functions'}">
                <router-link to="/functions">Functions</router-link>
              </li>
              <li v-bind:class="{'active' : $route.name == 'Keywords'}">
                <router-link to="/keywords">Keyword Arguments</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-10 content-block">
          <router-view/>
          <br><br><br><br>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="stylus" scoped>
.nav-block
  border-right: 0.5px solid rgba(0,0,0,.54);
  height: 100vh;
  overflow: hidden;
  color: black;
  padding: 0px;

.content-block
  height: 100vh;
  overflow-y: auto;
  color: rgba(0,0,0,.54);
  padding-top 1.5em

.head-block
  padding: 0.2em 0.5em;
  border-bottom: 0.5px solid rgba(0,0,0,.14);
  height: 10vh;

.head-block img
  height: 20px;

.head-block .title
  font-size: 16px;
  font-weight: bold;
  color: #ff6347;

.navlist-block
  padding-top: 10px;
  height: 90vh;
  overflow-y: scroll;

.navlist-block::-webkit-scrollbar
    width: 2px;

.navlist-block::-webkit-scrollbar-track
    -webkit-box-shadow: inset 0 0 3px rgba(0,1.0,0,0.3);

.navlist-block::-webkit-scrollbar-thumb
  background-color: #ff6347;

.nav-list
  margin: 0;
  padding: 0;

.nav-list li
  overflow: hidden;
  padding: 0.5em 1em;
  color: rgba(0,0,0,.74);

.nav-list li a
  color: inherit;
  font-size: 1em;
  letter-spacing: 1px;

.nav-list .active
  color: black;
  font-weight: bold;

.s-head
  color: black;
  font-size: 0.9em;
  font-weight: bold;
</style>
