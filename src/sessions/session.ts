const LOCAL_AUTH_KEY = 'REMEDIAL_AUTH';

export function saveToken(token: string, username: string, role: string) {
  localStorage.setItem(
    LOCAL_AUTH_KEY,
    JSON.stringify({ token, username, role }),
  );
}

type iauth = {
  username: string;
  token: string;
  role: string;
};

export function getCredential(): iauth {
  const authJSON = localStorage.getItem(LOCAL_AUTH_KEY);
  if (!authJSON)
    return {
      username: '',
      token: '',
      role: '',
    };
  let auth = JSON.parse(authJSON);
  return auth;
}

export function clearCredential() {
  localStorage.removeItem(LOCAL_AUTH_KEY);
}
