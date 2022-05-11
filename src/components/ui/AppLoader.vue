<template>
  <div class="page-loader" v-if="loading">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</template>

<script>
export default {
  name: "AppLoader",

  props: {
    loading: Boolean,
  },
};
</script>

<style lang="scss" scoped>
$colors: #8cc271, #69beeb, #f5aa39, #e9643b;
// -----------------------------------------------------
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
}
// -----------------------------------------------------
.cube {
  width: 12px;
  height: 12px;
  margin-right: 10px;
  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }
  &:first-child {
    animation: left 1s infinite;
  }
  &:last-child {
    animation: right 1s infinite 0.5s;
  }
}
// -----------------------------------------------------
@keyframes left {
  40% {
    transform: translateX(-30px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes right {
  40% {
    transform: translateX(30px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>
