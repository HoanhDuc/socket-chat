import { defineStore } from "pinia";
import { IUserGoogle } from '@/typescript/User'
const useStore = defineStore("root", {
    state: () => ({
        userGoogle: <IUserGoogle>{},
        isLogedIn: <Boolean>false
    }),
    getters: {
        getUserGoogle: (state) => state.userGoogle,
        getLogedIn: (state) => state.isLogedIn,
    },
    actions: {
        setUserGoogle(user: IUserGoogle) {
            this.userGoogle = user;
        },
        setLogedIn(isLogedIn : Boolean) {
            this.isLogedIn = isLogedIn;
        },
    },
});

export default useStore;
