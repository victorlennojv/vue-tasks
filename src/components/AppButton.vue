<template>
  <button @click="onClick" :style="{ backgroundColor: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    text: {
      type: String,
      default: 'Button'
    },
    color: {
      type: String,
      default: 'black'
    }
  },

  methods: {
    onClick() {
      console.log('Click')
    }
  }
}
</script>

<style></style>
