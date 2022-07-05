import axios from 'axios';
import { BASE_URL } from '@/utils/constants';

export const tasks = {
  state: {
    tasksList: [
      {
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
      {
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false,
      },
      {
        id: 3,
        title: 'fugiat veniam minus',
        completed: false,
      },
      {
        id: 4,
        title: 'et porro tempora',
        completed: true,
      },
      {
        id: 5,
        title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
        completed: false,
      },
      {
        id: 6,
        title: 'qui ullam ratione quibusdam voluptatem quia omnis',
        completed: false,
      },
      {
        id: 7,
        title: 'illo expedita consequatur quia in',
        completed: false,
      },
    ],
  },
  getters: {
    getTasksList: ({ tasksList }) => tasksList,
    getTaskById:
      ({ tasksList }) =>
      (id) =>
        tasksList.find((task) => task.id === id),
    getTotalTasksCount: (_, { getTasksList }) => getTasksList.length,
    getCompletedTasks: ({ tasksList }) => tasksList.filter((task) => task.completed),
  },
  mutations: {},
  actions: {
    async fetchTasks() {
      try {
        const { data } = await axios.get(`${BASE_URL}/todos`);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
