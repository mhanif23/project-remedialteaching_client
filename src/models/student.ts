export interface iCreateStudent {
  username: string;
  password: string;
  student_name: string;
  class: string;
}
export const createStudent = async (
  newData: iCreateStudent,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTExOTU3NywiZXhwIjoxNjQxMTM3NTc3fQ.pJf3k8x7MAK-k3CPKy4AE_-FEZiFhdTv-ORfml3A1a4',
  );
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

  const data = fetch('http://localhost:8080/Student', requestOptions)
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
export const getStudents = async (): Promise<students[]> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTExOTU3NywiZXhwIjoxNjQxMTM3NTc3fQ.pJf3k8x7MAK-k3CPKy4AE_-FEZiFhdTv-ORfml3A1a4',
  );

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const data = await fetch(
    'http://localhost:8080/studentsActive',
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

export const deleteStudent = async (id: number): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTExOTU3NywiZXhwIjoxNjQxMTM3NTc3fQ.pJf3k8x7MAK-k3CPKy4AE_-FEZiFhdTv-ORfml3A1a4',
  );
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    id: id,
  });

  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch('http://localhost:8080/student', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return await data;
};
