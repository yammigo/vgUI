<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />

    <details>
      <summary>button组件2</summary>
      <div class="demo_item">
        <vg-button>button</vg-button>
        <vg-button color="yellow">button</vg-button>
        <vg-button color="red">button</vg-button>
        <vg-button color="green">button</vg-button>
        <vg-button color="primary">button</vg-button>
        <vg-button color="blue">button</vg-button>
        <vg-button color="gray">button</vg-button>
      </div>
      <div class="demo_item">
        <vg-button text>button</vg-button>
        <vg-button text color="yellow">button</vg-button>
        <vg-button text color="red">button</vg-button>
        <vg-button text color="green">button</vg-button>
        <vg-button text color="primary">button</vg-button>
        <vg-button text color="blue">button</vg-button>
        <vg-button text color="gray">button</vg-button>
      </div>
      <div class="demo_item">
        <vg-button plan>button</vg-button>
        <vg-button color="yellow" plan>button</vg-button>
        <vg-button plan color="red">button</vg-button>
        <vg-button plan color="green">button</vg-button>
        <vg-button plan color="primary">button</vg-button>
        <vg-button plan color="blue">button</vg-button>
        <vg-button color="gray">button</vg-button>
      </div>
      <div class="demo_item">
        <vg-button circle>button</vg-button>
        <vg-button circle color="yellow">button</vg-button>
        <vg-button circle color="primary">button</vg-button>
        <vg-button plan circle color="blue">button</vg-button>
        <vg-button plan circle color="gray">button</vg-button>
        <vg-button circle color="gray">button</vg-button>
      </div>
      <div class="demo_item">
        <vg-button icon="vg-icon-mail-unread-line" circle></vg-button>
        <vg-button icon="vg-icon-mail-unread-line">button</vg-button>
        <vg-button icon="vg-icon-mail-unread-line" circle color="yellow">button</vg-button>
        <vg-button circle icon="vg-icon-mail-unread-line" color="primary">button</vg-button>
        <vg-button icon="vg-icon-mail-unread-line" plan circle color="blue">button</vg-button>
        <vg-button icon="vg-icon-mail-unread-line" plan circle color="gray">button</vg-button>
        <vg-button icon="vg-icon-mail-unread-line" circle color="gray">button</vg-button>
      </div>
      <div class="demo_item" style="width: 240px; margin-left: auto; margin-right: auto">
        <vg-button disabled icon="vg-icon-mail-unread-line" block circle color="primary">disabled</vg-button>
        <vg-button icon="vg-icon-mail-unread-line" block circle plan color="primary" style="margin-top: 20px">button</vg-button>
      </div>
      <div class="demo_item">
        <vg-button icon="vg-icon-mail-unread-line" size="l" color="primary">button</vg-button>
        <vg-button icon="vg-icon-mail-unread-line" color="primary">button</vg-button>
        <vg-button icon="vg-icon-mail-unread-line" size="s" color="primary">button</vg-button>
        <vg-button icon="vg-icon-mail-unread-line" size="xs" color="primary">button</vg-button>
      </div>
      <div class="demo_item">
        <vg-button-group>
          <vg-button color="primary">button</vg-button>
          <vg-button color="blue">button</vg-button>
        </vg-button-group>
        <vg-button-group>
          <vg-button plan color="primary">button</vg-button>
          <vg-button color="blue" plan>button</vg-button>
        </vg-button-group>
        <vg-button-group circle>
          <vg-button color="primary">button</vg-button>
          <vg-button color="blue" plan>button</vg-button>
        </vg-button-group>
        <vg-button-group circle size="s">
          <vg-button color="primary" icon="vg-icon-mail-unread-line">button</vg-button>
          <vg-button color="blue" plan icon="vg-icon-mail-unread-line">button</vg-button>
        </vg-button-group>
        <vg-button-group circle size="xs">
          <vg-button color="primary" plan>button</vg-button>
          <vg-button color="blue" plan>button</vg-button>
        </vg-button-group>
        <vg-button-group circle size="xs">
          <vg-button color="primary" plan icon="vg-icon-mail-unread-line"></vg-button>
          <vg-button color="blue" plan icon="vg-icon-mail-unread-line"></vg-button>
        </vg-button-group>
      </div>
    </details>
    <details>
      <summary>grid布局组件</summary>
      <div class="demo_item">
        <vg-row :space="5">
          <vg-col width="8" class="demo_col">123</vg-col>
          <vg-col width="8" class="demo_col">123</vg-col>
          <vg-col width="8" class="demo_col">123</vg-col>
          <vg-col width="8" class="demo_col">123</vg-col>
          <vg-col width="8" class="demo_col">123</vg-col>
          <vg-col width="8" class="demo_col">123</vg-col>
        </vg-row>
      </div>
    </details>
  </div>
</template>
<script>
export default {
  methods: {
    getname() {
      return () => {}
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.summary {
  cursor: pointer;
}
.demo_col {
  background: #eee;
  border-radius: 4px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.demo_item {
  margin-top: 20px;
}
</style>
