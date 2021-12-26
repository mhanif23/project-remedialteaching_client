export interface iCreateAdmin {
  username: string;
  password: string;
  fullname: string;
}
export const createAdmin = async (newData: iCreateAdmin): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MDQ5OTkwNSwiZXhwIjoxNjQwNTE3OTA1fQ.ZJs3fErauNCeFPZuG-obEMfG0ySr3cZ07Iys8oBAylo',
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

export interface admins {
  id: number;
  admin_name: string;
  username: string;
}
export const getAdmins = async (): Promise<admins[]> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MDQ5OTkwNSwiZXhwIjoxNjQwNTE3OTA1fQ.ZJs3fErauNCeFPZuG-obEMfG0ySr3cZ07Iys8oBAylo',
  );

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const data = await fetch('http://localhost:8080/admins', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return await data.admins;
};
