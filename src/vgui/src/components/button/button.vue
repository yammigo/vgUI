<template>
  <button :class="btnClass">
    <i v-if="!!iconClass" :class="iconClass"></i>
    <span v-if="defaultSlot"><slot></slot></span>
  </button>
</template>
<script>
import { prefix, size } from "../../config/global";
export default {
  name: `${prefix}button`,
  props: {
    color: String,
    textColor: String,
    icon: String,
    loading: Boolean,
    circle: Boolean,
    block: Boolean,
    plan: Boolean,
    border: {
      type: Boolean,
      default: true
    },
    text: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator(value) {
        return size.indexOf(value) != -1;
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    defaultSlot() {
      return !!this.$slots.default;
    },
    btnClass() {
      console.log(!this.$slots.default);
      return {
        [`${prefix}btn`]: true,
        [`${prefix}btn-circle`]: !!this.circle || !!this.iconCircle,
        [`${prefix}btn-text`]: !!this.text,
        [`${prefix}btn-${this.text || this.plan ? "text-" : ""}${this.color}`]:
          !!this.color,
        [`${prefix}btn-block`]: this.block,
        [`${prefix}btn-no-border`]: this.text,
        [`${prefix}btn-${this.size}`]: !!this.size,
        [`${prefix}btn-icon-circle`]:
          this.icon && this.circle && !this.$slots.default,
        [`${prefix}-${this.size}`]: !!this.size
      };
    },
    iconClass() {
      return this.loading ? `${prefix}icon-loading` : this.icon;
    }
  }
};
</script>
