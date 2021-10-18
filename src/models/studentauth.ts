interface requestInit {
  method: string;
  headers: Headers;
  body: string;
}
type auth = {
  token?: string;
  username?: string;
};

const StudentAuth = async (
  username: string,
  password: string,
): Promise<auth> => {
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

  const data = await fetch('http://localhost:8080/loginStudent', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });

  return data;
};

export default StudentAuth;
