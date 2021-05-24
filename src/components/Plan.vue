<template>
  <h2 id="planTitle" @click="showDetails = !showDetails">{{ plan.title }}</h2>
  <p id="planDetails" v-if="showDetails">{{ plan.details }}</p>
  <span
    id="planID"
    :style="{ background: plan.completed ? idStyleCompleted : idStyleOngoing }"
    >{{ plan.id }}</span
  >
  <div class="icons">
    <router-link :to="{ name: 'EditProject' , params: { id: plan.id}}">
      <span class="material-icons">edit</span>
    </router-link>
    <span
      class="material-icons"
      @click="toggleComplete"
      :style="{ color: plan.completed ? idStyleCompleted : idStyleOngoing }"
      >done</span
    >
    <span class="material-icons" @click="deletePlan">delete</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDetails: false,
      idStyleCompleted: "rgb(44, 238, 44)",
      idStyleOngoing: "rgb(245, 2, 82)",
      url: "http://localhost:3000/plans/" + this.plan.id,
    };
  },
  props: ["plan"],
  methods: {
    deletePlan() {
      fetch(this.url, { method: "DELETE" })
        .then(() => {
          this.$emit("delete", this.plan.id);
        }).then(() => { window.location.reload() })
        .catch((err) => console.log(err.message));
    },
    toggleComplete() {
      fetch(this.url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !this.plan.completed }),
      }).then(() => {
          this.$emit("complete", this.plan.id);
        }).then(() => { window.location.reload() })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style lang="scss" scoped>
.icons {
  text-align: right;
  span {
    margin-right: 8px;
    cursor: pointer;
  }
}
</style>
