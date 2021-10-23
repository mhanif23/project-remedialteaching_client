const LOCAL_AUTH_KEY = 'REMEDIAL_AUTH';

export function saveToken(auth: string) {
  localStorage.setItem(LOCAL_AUTH_KEY, JSON.stringify(auth));
}
