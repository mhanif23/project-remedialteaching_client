interface requestInit {
  method: string;
  headers: Headers;
  body: string;
}
type auth = {
  token?: string;
  username?: string;
  id?: number;
};

const AdminAuth = async (username: string, password: string): Promise<auth> => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    username: username,
    password: password,
  });

  var requestOptions: requestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/loginAdmin`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });

  return data;
};

export default AdminAuth;
