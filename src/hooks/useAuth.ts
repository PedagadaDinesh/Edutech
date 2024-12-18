// import { configs } from "@/configs";
import { create } from "zustand";
import { getFromLocalStorage, removeFromLocalStorage } from "../../utils";

type AuthState = {
  isUserLoading: boolean;
  user?: Partial<UserType>;
  setUser: (user: Partial<UserType>) => Promise<void>;
  logout: () => void;
  getUser: () => void;
};
const useAuth = create<AuthState>((set) => ({
  isUserLoading: true,
  user: {},
  setUser: async (user: Partial<UserType>) => {
    set({ user: { ...user } });
  },
  logout: async () => {
    removeFromLocalStorage("ACCESS_TOKEN");
  },
  getUser: async () => {
    const accessToken = getFromLocalStorage("ACCESS_TOKEN");
    if (!accessToken) {
      set({ user: {}, isUserLoading: false });
      return;
    }
    // try {
    //   const res = await fetch(`${configs.serverUrl}/users/current/user`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   });
    //   if (res?.status !== 200) {
    //     window?.localStorage?.removeItem("ACCESS_TOKEN");
    //     set({ user: {}, isUserLoading: false });
    //   } else {
    //     const data = await res.json();
    //     const userData = data?.data;
    //     set({ user: { ...userData }, isUserLoading: false });
    //   }
    // } catch (error) {
    //   set({ user: {} });
    // }
  },
}));

export default useAuth;
