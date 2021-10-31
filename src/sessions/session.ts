const LOCAL_AUTH_KEY = 'REMEDIAL_AUTH';

export function saveToken(token: string, role: string) {
  localStorage.setItem(LOCAL_AUTH_KEY, JSON.stringify({ token, role }));
}

export function getCredential() {
  const authJSON = localStorage.getItem(LOCAL_AUTH_KEY);
  if (!authJSON)
    return {
      token: null,
      role: null,
    };
  let auth = JSON.parse(authJSON);
  return auth;
}

export function clearCredential() {
  localStorage.removeItem(LOCAL_AUTH_KEY);
}
