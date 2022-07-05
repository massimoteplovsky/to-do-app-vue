<template>
  <div class="task-list">
    <p v-if="!tasksList.length">Список задач пуст</p>
    <template v-else>
      <Task v-for="item in tasksList" :key="item.id" :item="item" />
    </template>
  </div>
</template>

<script>
import Task from './Task';
import { mapGetters } from 'vuex';

export default {
  name: 'TaskListComponent',
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ tasksList: 'getTasksList' }),
  },
  components: {
    Task,
  },
};
</script>

<style lang="scss">
.task-list {
  > * {
    margin-bottom: 3rem;
  }
}
</style>
