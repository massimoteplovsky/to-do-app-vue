import { createStore, createLogger } from 'vuex';
import { tasks, app } from './modules';

export default createStore({
  modules: {
    tasks,
    app,
  },
  plugins: [createLogger()],
});
