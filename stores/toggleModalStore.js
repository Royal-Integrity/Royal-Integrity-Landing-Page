import { defineStore } from 'pinia';

const useModalStore = defineStore({
  id: 'modalStore',
  state: () => ({
    visible: false,
  }),
  actions: {
    toggleVisible() {
      this.visible = !this.visible;
    },
  },
});

export default useModalStore;
