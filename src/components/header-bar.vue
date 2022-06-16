<template>
  <div id="header-bar">
    <div class="logo"><i class="vg-icon-vuejs-fill"></i></div>
    <div class="left-action">
      <vg-button-group size="s">
        <vg-button color="primary" title="后退" plan icon="vg-icon-arrow-left-s-line"></vg-button>
        <vg-button color="primary" title="前进" plan icon="vg-icon-arrow-right-s-line"></vg-button>
        <vg-button color="primary" title="刷新" plan icon="vg-icon-restart-line"></vg-button>
      </vg-button-group>
    </div>
    <slot></slot>
    <div class="right-action">
      <div class="mini" @click="minWindow"><i class="vg-icon-subtract-line"></i></div>
      <div class="full" @click="maxWindow"><i class="vg-icon-picture-in-picture-exit-line"></i></div>
      <div class="close" @click="closeWindow"><i class="vg-icon-close-line"></i></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderBar',
  methods: {
    maxWindow() {
      window.ipcRenderer.send('window-max')
    },
    minWindow() {
      window.ipcRenderer.send('window-min')
    },
    closeWindow() {
      window.ipcRenderer.send('window-close')
    }
  }
}
</script>
<style lang="less" scoped>
#header-bar {
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 40px;
  background: #fafafa;
  -webkit-app-region: drag;
  border-bottom: solid 1px #eee;
  .logo {
    float: left;
    height: 100%;
    width: 60px;
    line-height: 40px;
    font-size: 28px;
    color: #379469;
  }

  .right-action {
    height: 100%;
    float: right;
    -webkit-app-region: no-drag;
    & > div {
      display: inline-block;
      line-height: 40px;
      width: 50px;
      font-size: 22px;
      box-sizing: border-box;
      text-align: center;
      &:hover {
        background: #eee;
      }
      &.close:hover {
        background: rgb(242, 65, 65);
        color: #fff;
      }
    }
  }
  .left-action {
    float: left;
    line-height: 40px;
    margin-left: 20px;
    -webkit-app-region: no-drag;
  }
}
</style>
