<template>
  <div>
    <div :key="task.id" v-for="task in tasks">
      <TaskItem
        @toggle-reminder="$emit('toggle-reminder', task.id)"
        @delete-task="$emit('delete-task', task.id)"
        :task="task"
      />
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
  },

  methods: {
    deleteTask(id) {
      console.log(id)
    }
  }
}
</script>

<style></style>
