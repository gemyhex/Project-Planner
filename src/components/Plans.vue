<template>
  <div class="container" v-if="projects.length">
    <h1>Projects Planner</h1>
    <FilterNav @filter="current = $event" :current="current"></FilterNav>
    <div
      v-for="plan in filteredProjects"
      :key="plan.id"
      :style="{ 'border-left': plan.completed ? styleComplete : styleOngoing }"
      class="plan"
    >
      <Plan
        :plan="plan"
        :delete="handleDelete"
        :complete="handleComplete"
      ></Plan>
    </div>
  </div>
  <div class="empty" v-if="!projects.length">
    <h2>{{ emptyMess }}</h2>
    <button @click="this.$router.push('/add')">Add Project</button>
  </div>
</template>

<script>
import Plan from "./Plan";
import FilterNav from "./FilterNav";
export default {
  name: "Plans",
  data() {
    return {
      styleComplete: "3px solid rgb(44, 238, 44)",
      styleOngoing: "3px solid rgb(245, 2, 82)",

      projects: [],
      url: "http://localhost:3000/plans",
      current: "all",
      emptyMess: "There's no projects to show add some !!",
    };
  },
  mounted() {
    // this.projects = this.$store.getters.getPlans;
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((plan) => {
        return plan.id !== id;
      });
    },
    handleComplete(id) {
      let p = this.projects.find((plan) => {
        return plan.id == id;
      });
      p.complete = !p.complete;
    },
    // handleFilter(by){
    //   this.projects = this.projects.filter((plan) => {
    //     return plan.id
    //   })
    // }
  },
  computed: {
    filteredProjects() {
      if (this.current === "completed") {
        return this.projects.filter((plan) => plan.completed);
      }
      if (this.current === "ongoing") {
        return this.projects.filter((plan) => !plan.completed);
      }
      return this.projects;
    },
  },
  components: {
    Plan,
    FilterNav,
  },
};
</script>

<style lang="scss">
.empty {
  position: relative;
  background: #fff;
  padding: 5px 40px;
  margin-top: 20px;
  border-radius: 10px;
  text-transform: capitalize;
  text-align: center;
  button {
    width: 150px;
    height: 50px;
    background: rgb(22, 226, 83);
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: 0;
  }
}
.container {
  .plan {
    position: relative;
    background: #fff;
    padding: 5px 40px;
    margin-top: 20px;
    border-radius: 10px;
    text-transform: capitalize;

    #planTitle {
      cursor: pointer;
    }
    #planID {
      position: absolute;
      top: -10px;
      right: -10px;
      color: white;
      padding: 5px 10px;
      border-radius: 50%;
    }
  }
}
</style>
