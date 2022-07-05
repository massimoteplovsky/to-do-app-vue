import { createStore } from 'vuex';
import { tasks } from './modules';

export default createStore({
  modules: {
    tasks,
  },
});
