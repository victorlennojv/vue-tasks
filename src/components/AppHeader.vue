<template>
  <header>
    <h1>{{ title }}</h1>
    <AppButton
      @btn-click="$emit('show-add')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import AppButton from "./AppButton.vue";

export default {
  name: "AppHeader",
  components: {
    AppButton,
  },

  props: {
    title: {
      type: String,
      required: true,
      default: "Hello World",
    },
    showAddTask: Boolean,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
