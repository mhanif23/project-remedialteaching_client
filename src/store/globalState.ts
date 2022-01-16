import create from 'zustand';
type State = {
  username: string;
  token: string;
  role: string;
  id: number;
  setUsername: (username: string) => void;
  setToken: (token: string) => void;
  setRole: (role: string) => void;
  setId: (id: number) => void;
};

const useStore = create<State>((set) => ({
  username: '',
  token: '',
  role: '',
  id: -1,
  setUsername: (username) => set({ username }),
  setToken: (token) => set({ token }),
  setRole: (role) => set({ role }),
  setId: (id) => set({ id }),
}));

export default useStore;
