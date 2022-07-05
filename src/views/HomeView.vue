<template>
  <section class="home">
    <div class="container">
      <div class="home__wrapper">
        <Sidebar class="home__sidebar" />
        <TaskList class="home__content" />
      </div>
    </div>
  </section>
</template>

<script>
import TaskList from '@/components/TaskList';
import Sidebar from '@/components/Sidebar';

export default {
  name: 'HomePage',
  components: {
    TaskList,
    Sidebar,
  },
};
</script>

<style lang="scss">
.home {
  &__wrapper {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    padding: 2rem 0;
  }

  &__sidebar {
    width: 40rem;
  }

  &__content {
    width: calc(100% - 40rem);
  }
}
</style>
