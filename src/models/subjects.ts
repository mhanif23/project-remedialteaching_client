export interface iCreateSubject {
  name: string;
}
export const createSubject = async (
  newData: iCreateSubject,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MDQ5OTkwNSwiZXhwIjoxNjQwNTE3OTA1fQ.ZJs3fErauNCeFPZuG-obEMfG0ySr3cZ07Iys8oBAylo',
  );
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    name: newData.name,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = fetch('http://localhost:8080/Subject', requestOptions)
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

export interface SubjectsData {
  id: number;
  name: string;
}
export const getSubject = async (): Promise<SubjectsData[]> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MDQ5OTkwNSwiZXhwIjoxNjQwNTE3OTA1fQ.ZJs3fErauNCeFPZuG-obEMfG0ySr3cZ07Iys8oBAylo',
  );

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const data = await fetch('http://localhost:8080/Subject', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return await data.result;
};

export const deleteSubject = async (id: number): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MDQ5OTkwNSwiZXhwIjoxNjQwNTE3OTA1fQ.ZJs3fErauNCeFPZuG-obEMfG0ySr3cZ07Iys8oBAylo',
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

  const data = await fetch('http://localhost:8080/Subject', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return await data;
};
