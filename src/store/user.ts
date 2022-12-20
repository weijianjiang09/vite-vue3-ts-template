import { defineStore } from "pinia";
type userInfo = {
  name: string;
  mail: string;
};
export const useUserStore = defineStore({
  id: "user", // id必填，且需要唯一
  state: () => {
    return {
      userInfo: {
        name: "",
        mail: "",
        sex: "",
      },
    };
  },
  getters: {
    nameLength: (state) => state.userInfo.name.length,
  },
  actions: {
    updateUserInfo(data: userInfo) {
      this.userInfo.name = data.name;
      this.userInfo.mail = data.mail;
    },
  },
});
