<template>
  <div id="app">
    <HeaderBar>
      <nav>
        <router-link to="/">组件</router-link> |
        <router-link to="/about">关于</router-link>
      </nav>
    </HeaderBar>
    <router-view class="views scrollBar" />
  </div>
</template>
<script>
import HeaderBar from './components/header-bar.vue'
export default {
  components: {
    HeaderBar
  },
  methods: {
    getname() {
      return () => {}
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.views {
  position: absolute;
  top: 41px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  // backdrop-filter: saturate(150%) blur(20px);
  // -webkit-backdrop-filter: saturate(150%) blur(20px);
  // background-color: rgba(0, 0, 0, 0.3);
}

nav {
  display: inline;
  a {
    font-weight: bold;
    color: #2c3e50;
    -webkit-app-region: no-drag;
    line-height: 40px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
