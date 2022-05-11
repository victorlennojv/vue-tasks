<template>
  <div id="app" class="container">
    <AppLoader :loading="loading" />
    <AppHeader
      @show-add="toggleAddTask"
      :showAddTask="showAddTask"
      title="Task Tracker"
    />
    <div v-if="showAddTask">
      <TaskAdd @add-task="addTask" />
    </div>
    <TasksList
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppLoader from "./components/ui/AppLoader";
import TasksList from "./components/TasksList";
import TaskAdd from "./components/TaskAdd";
import { getTasks } from "./services/tasks";

export default {
  name: "App",
  components: {
    AppHeader,
    TasksList,
    TaskAdd,
    AppLoader,
  },
  data: () => ({
    tasks: [],
    showAddTask: false,
    loading: false,
  }),

  created() {
    this.fetchTasks();
  },

  methods: {
    async fetchTasks() {
      this.loading = true;
      try {
        const data = await getTasks();
        setTimeout(() => {
          // SET TIMEOUT ONLY TO SEE THE LOADING
          this.tasks = data;
          this.loading = false;
        }, 800);
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    deleteTask(id) {
      if (confirm("Are you sure?"))
        this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
