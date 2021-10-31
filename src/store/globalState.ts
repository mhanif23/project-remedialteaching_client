import create from 'zustand';
type State = {
  username: string | null;
  token: string | null;
  role: string | null;
  setUsername: (username: string) => void;
  setToken: (token: string) => void;
  setRole: (role: string) => void;
};

const useStore = create<State>((set) => ({
  username: null,
  token: null,
  role: null,
  setUsername: (username) => set({ username }),
  setToken: (token) => set({ token }),
  setRole: (role) => set({ role }),
}));

export default useStore;
