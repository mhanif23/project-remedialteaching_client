export interface iCreateStudent {
  username: string;
  password: string;
  student_name: string;
  class: string;
}
export const createStudent = async (
  newData: iCreateStudent,
  token: string,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    username: newData.username,
    password: newData.password,
    name: newData.student_name,
    classroom: newData.class,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = fetch(
    `${process.env.REACT_APP_BACKEND_URL}/Student`,
    requestOptions,
  )
    .then((response) => response.json())
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

export interface students {
  id: number;
  username: string;
  password: string;
  student_name: string;
  class: string;
  status: string;
}
export const getStudents = async (token: string): Promise<students[]> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/studentsActive`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return await data.student;
};

export const deleteStudent = async (
  id: number,
  token: string,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    id: id,
  });

  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/student`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return await data;
};

export const getAnswerDiagnostikStudent = async (
  id: number,
): Promise<number> => {
  var requestOptions = {
    method: 'GET',
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/diagnostikAnswers_by_istudent?id_student=${id}`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return data.result.length;
};

export type iBoard = {
  id: number;
  studentId: number;
  nilai: number;
  created_At: Date;
};
export const getTryOutBoard = async (
  id: number,
  token: string,
): Promise<iBoard[]> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    idStudent: id,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/studentsTryOutBoard`,
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

export const getExamBoard = async (
  id: number,
  token: string,
): Promise<iBoard[]> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    idStudent: id,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/studentsExamBoard`,
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

export type iStudents = {
  student_name: string;
  class: string;
  username: string;
};
export const getStudentInfoApi = async (
  id: number,
  token: string,
): Promise<iStudents> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify({
    idStudent: id,
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/studentsInfo`,
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
