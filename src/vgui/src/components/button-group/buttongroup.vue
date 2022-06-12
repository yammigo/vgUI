<template>
  <div :class="buttonGroupClass">
    <slot></slot>
  </div>
</template>

<script>
import { prefix, size } from "../../config/global";
export default {
  name: `${prefix}button-group`,
  props: {
    circle: Boolean,
    size: {
      type: String,
      validator(value) {
        return size.indexOf(value) != -1;
      }
    }
  },
  computed: {
    buttonGroupClass() {
      return {
        [`${prefix}btn-group`]: true,
        [`${prefix}btn-group-circle`]: !!this.circle,
        [`${prefix}btn-group-${this.size}`]: !!this.size
      };
    }
  }
};
</script>
