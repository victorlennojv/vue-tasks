<template>
  <div>
    <div :key="task.id" v-for="task in tasks">
      <TaskItem :task="task" />
    </div>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue'

export default {
  name: 'TasksList',
  components: {
    TaskItem
  },
  props: {
    tasks: Array
  }
}
</script>

<style></style>
