export interface idiagnostik_question {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  trueAnswer: string;
}

export interface iCreatediagnostik_question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  trueAnswer: string;
}

export const createDiagnostikQuestion = async (
  newData: iCreatediagnostik_question,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzOTY3MDk1NiwiZXhwIjoxNjM5Njc0NTU2fQ.XJkFqAOH0Wa4m3jD0PSoken5tQNRVU_hs2JcCrV4M_s',
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
