import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const loginStore = create(persist((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => set(() => ({ user: user, isLoggedIn: true })),
  logout: () => set(() => ({ user: null, isLoggedIn: false }))
}), {
  name: 'user-storage' 
}));

export default loginStore;
