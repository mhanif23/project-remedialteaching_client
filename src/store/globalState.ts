import create from 'zustand';
type State = {
  username: string;
  token: string;
  role: string;
  setUsername: (username: string) => void;
  setToken: (token: string) => void;
  setRole: (role: string) => void;
};

const useStore = create<State>((set) => ({
  username: '',
  token: '',
  role: '',
  setUsername: (username) => set({ username }),
  setToken: (token) => set({ token }),
  setRole: (role) => set({ role }),
}));

export default useStore;
