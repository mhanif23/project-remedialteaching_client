interface iCreateAdmin {
  username: string;
  password: string;
  fullname: string;
}
export const createAdmin = async (newData: iCreateAdmin): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzODM3MzkwNywiZXhwIjoxNjM4Mzc3NTA3fQ.8nBEteFlPZU694LbTD8AYUkn_8nOtLnw1uGRlTp5vME',
  );
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    username: newData.username,
    password: newData.password,
    name: newData.fullname,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = fetch('http://localhost:8080/registerAdmin', requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  if ((await data) === true) {
    return data;
  } else {
    return false;
  }
};
