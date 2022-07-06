<template>
  <div class="sidebar">
    <h2 class="sidebar__title">Мой список задач</h2>
    <ul class="sidebar__list">
      <li class="sidebar__item">Всего задач: 200</li>
      <li class="sidebar__item">Выполнено: 10</li>
      <li class="sidebar__item">В работе: 10</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SidebarComponent',
  computed: {
    ...mapGetters({
      totalTasksCount: 'getTotalTasksCount',
      comletedTasksCount: 'getCompletedTasks',
      uncompletedTasksCount: 'getUncompletedTasks',
    }),
  },
};
</script>
