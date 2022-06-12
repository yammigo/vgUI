import Button from './components/button/index'
import ButtonGroup from './components/button-group/index'
import Row from './components/row/index'
import Col from './components/col'

const components = {
  Button,
  ButtonGroup,
  Row,
  Col
}

const install = function (Vue) {
  if (install.installed) {
    return
  }
  Object.keys(components).forEach(key => {
    let component = components[key]
    Vue.component(key, component)
    Vue.component(`vg-${key.toLocaleLowerCase()}`, component)
    if (key.indexOf('vg') !== 0) {
      Vue.component(`vg${key}`, component)
    }
  })
}

if (typeof window != 'undefined' && window.Vue) {
  install(window.vue)
}
const VgUI = {}
VgUI.install = install

export default VgUI
