<template>
  <div class="task">
    <p class="task__title">{{ item.title }}</p>
    <p class="task__complete">
      <label for="complete">Завершено</label>
      <input id="complete" type="checkbox" :checked="item.completed" />
    </p>
  </div>
</template>
<script>
export default {
  name: 'TaskComponent',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.task {
  padding: 1rem;
  border: 2px solid black;
}
</style>
