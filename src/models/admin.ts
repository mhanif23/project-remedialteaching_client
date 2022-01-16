export interface iCreateAdmin {
  username: string;
  password: string;
  fullname: string;
}
export const createAdmin = async (
  newData: iCreateAdmin,
  token: string,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
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

  const data = fetch(
    `${process.env.REACT_APP_BACKEND_URL}/registerAdmin`,
    requestOptions,
  )
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
export const getAdmins = async (token: string): Promise<admins[]> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/admins`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return await data.admins;
};
