<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: current === 'all' }">
      All
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: current === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: current === 'ongoing' }"
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(by) {
      this.$emit("filter", by);
    },
  },
};
</script>

<style lang="scss">
.filter-nav {
  margin-top: 25px;
  button {
    color: #555;
    font-weight: bold;
    background: #fff;
    padding: 7px 15px;
    margin: 5px 5px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    &:first-child {
      &:hover,
      &.active {
        background: rgb(2, 156, 245);
        color: white;
        transition: all 0.5s ease;
      }
    }
    &:nth-child(2) {
      &:hover,
      &.active {
        background: rgb(44, 238, 44);
        color: white;
        transition: all 0.5s ease;
      }
    }
    &:last-child {
      &:hover,
      &.active {
        background: rgb(245, 2, 82);
        color: white;
        transition: all 0.5s ease;
      }
    }
  }
}
</style>
