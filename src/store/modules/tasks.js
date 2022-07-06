import axios from 'axios';
import { BASE_URL, TaskStatus } from '@/utils/constants';

export const tasks = {
  namespaced: true,
  state: {
    tasksList: [],
  },
  getters: {
    getTasksList: ({ tasksList }) => tasksList,
    getTaskById:
      ({ tasksList }) =>
      (id) =>
        tasksList.find((task) => task.id === id),
    getTotalTasksCount: (_, { getTasksList }) => getTasksList.length,
    getTasksByStatus:
      ({ tasksList }) =>
      (status = 'completed') =>
        tasksList.filter((task) => {
          status === 'completed' ? task.completed : !task.completed;
        }),
    getUncompletedTasksCount: (_, { getTasksList, getTasksByStatus }) =>
      getTasksList.length - getTasksByStatus(TaskStatus.COMPLETED).length,
    getCompletedTasksCount: (_, { getTasksList, getTasksByStatus }) =>
      getTasksList.length - getTasksByStatus(TaskStatus.UNCOMPLETED).length,
  },
  mutations: {
    setTasks: (state, { tasksList }) => {
      state.tasksList = tasksList;
    },
  },
  actions: {
    async fetchTasks({ commit, dispatch }) {
      dispatch('app/fetchDataRequest', null, { root: true });
      try {
        const { data: tasksList } = await axios.get(`${BASE_URL}/todos`);
        commit('setTasks', { tasksList });
        dispatch('app/fetchDataSuccess', null, { root: true });
      } catch (err) {
        console.log(err);
        dispatch('app/fetchDataFailure', null, { root: true });
      }
    },
  },
};
