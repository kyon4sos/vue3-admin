import { defineStore } from 'pinia';

const useAppStore = defineStore('app-store', {
  state: () => ({
    isLogin: false,
    isCollapse: false,
    userInfo: {
      username: '',
      avatar:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    },
  }),
  actions: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    login() {
      this.isLogin = true;
    },
    logout() {
      this.isLogin = false;
    },
  },
});

export default useAppStore;
