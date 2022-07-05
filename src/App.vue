<template>
  <!-- <nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</nav> -->
  <main>
    <router-view />
  </main>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['fetchTasks']),
  },
  mounted() {
    this.fetchTasks();
  },
};
</script>

<style lang="scss"></style>
