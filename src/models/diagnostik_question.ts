export interface idiagnostik_question {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  trueAnswer: string;
  media?: string;
}

export interface iCreatediagnostik_question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  trueAnswer: string;
  media?: string;
}

export const createDiagnostikQuestion = async (
  newData: iCreatediagnostik_question,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTM3MTQ0OSwiZXhwIjoxNjQxMzg5NDQ5fQ.70zjuCcKPpo7TsHanba4vllsAVq67Db0j3dX9rckirM',
  );
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    question: newData.question,
    option1: newData.option1,
    option2: newData.option2,
    option3: newData.option3,
    option4: newData.option4,
    option5: newData.option5,
    trueAnswer: newData.trueAnswer,
    media: newData.media,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = fetch(
    'http://localhost:8080/questionDiagnostiks',
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

export const getSoalDiagnopstik = async (): Promise<idiagnostik_question[]> => {
  var myHeaders = new Headers();

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const data = await fetch(
    'http://localhost:8080/questionDiagnostiks_active',
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return await data.result;
};

export const updateDiagnostikQuestion = async (
  id: number,
  body: iCreatediagnostik_question,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTM3MTQ0OSwiZXhwIjoxNjQxMzg5NDQ5fQ.70zjuCcKPpo7TsHanba4vllsAVq67Db0j3dX9rckirM',
  );
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    id: id,
    question: body.question,
    option1: body.option1,
    option2: body.option2,
    option3: body.option3,
    option4: body.option4,
    option5: body.option5,
    trueAnswer: body.trueAnswer,
    media: body.media,
  });

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch(
    'http://localhost:8080/questionDiagnostiks',
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

export const deleteDiagnostikQuestion = async (
  id: number,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTM3MTQ0OSwiZXhwIjoxNjQxMzg5NDQ5fQ.70zjuCcKPpo7TsHanba4vllsAVq67Db0j3dX9rckirM',
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

  const data = await fetch(
    'http://localhost:8080/questionDiagnostiks',
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
