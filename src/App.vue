<template>
  <!-- <nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</nav> -->
  <Loader v-if="true" />
  <main>
    <router-view />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Loader from './components/Loader';

export default {
  methods: {
    ...mapActions({
      fetchTasks: 'tasks/fetchTasks',
    }),
  },
  async created() {
    await this.fetchTasks();
    console.log(this.appState);
  },
  computed: {
    ...mapGetters({
      appState: 'app/getAppState',
    }),
  },
  components: {
    Loader,
  },
};
</script>

<style lang="scss"></style>
