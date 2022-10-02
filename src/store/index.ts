import { defineStore } from "pinia";
import { IUser } from "@/typescript/User";
const useStore = defineStore("root", {
  state: () => ({
    userAuth: <IUser>{},
    listOnline: <IUser[]>[],
    privatePartner: <IUser>{},
    privateMessage: <Object[]>[],
    isLogedIn: <Boolean>false,
  }),
  getters: {
    getUserAuth: (state) => state.userAuth,
    getListOnline: (state) => state.listOnline,
    getPrivatePartner: (state) => state.privatePartner,
    getPrivateMessage: (state) => state.privateMessage,
    getLogedIn: (state) => state.isLogedIn,
  },
  actions: {
    setUserAuth(user: IUser) {
      this.userAuth = user;
    },
    addUserOnline(user: IUser) {
      this.listOnline.push(user);
    },
    setPrivatePartner(user: IUser) {
      this.privatePartner = user;
    },
    setPrivateMessage(payload: Object) {
      const existChannel = this.privateMessage?.findIndex(
        (item) => item?.channel_id === payload.channel_id
      );
      if (existChannel >= 0) {
        this.privateMessage[existChannel].message.push(payload.detailMessage);
        return;
      }
      this.privateMessage.push({
        channel_id: payload.channel_id,
        message: [payload.detailMessage],
      });
    },
    setLogedIn(isLogedIn: Boolean) {
      this.isLogedIn = isLogedIn;
    },
  },
});

export default useStore;
