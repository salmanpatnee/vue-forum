import { defineStore, acceptHMRUpdate } from "pinia";
import data from '@/data.json'
export const useAuthUserStore = defineStore("authUserStore", {
  state: () => {
    return {
      authId: "38St7Q8Zi2N1SPa5ahzssq9kbyp1",
    };
  },
  actions: {
  },
  getters: {
    authUser: state => data.users.filter(user => user.id === state.authId)
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthUserStore, import.meta.hot));
}
