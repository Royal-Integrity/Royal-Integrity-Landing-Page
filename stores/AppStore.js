import { defineStore } from 'pinia';

const appStore = defineStore({
  id: 'appStore',
  state: () => ({
    screenWidth: 0,
  }),
});

export default appStore;
