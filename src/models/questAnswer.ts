export interface iCreateQuestionAnswer {
  id_question: number;
  answer: string;
  status: boolean;
}
export const createQuestionAnswer = async (
  newData: iCreateQuestionAnswer,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTExOTU3NywiZXhwIjoxNjQxMTM3NTc3fQ.pJf3k8x7MAK-k3CPKy4AE_-FEZiFhdTv-ORfml3A1a4',
  );
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify({
    id_question: Number(newData.id_question),
    answer: newData.answer,
    status: Boolean(newData.status),
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch(
    'http://localhost:8080/question_answers',
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
    return true;
  } else {
    return false;
  }
};

export interface QuestionsAnswerData {
  id: number;
  id_question: number;
  answer: string;
  status: boolean;
}
export const getQuestionAnswer = async (
  id_question: number,
): Promise<QuestionsAnswerData[]> => {
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
    `http://localhost:8080/question_answers_by_id_question?id_question=${id_question}`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  console.log(data);
  return await data.result;
};

export const deleteQuestionAnswerId = async (id: number): Promise<boolean> => {
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

  const data = await fetch(
    'http://localhost:8080/question_answers',
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

export const updateQuestionAnswer = async (
  id: number,
  id_question: number,
  answer: string,
  status: boolean,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTExOTU3NywiZXhwIjoxNjQxMTM3NTc3fQ.pJf3k8x7MAK-k3CPKy4AE_-FEZiFhdTv-ORfml3A1a4',
  );
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    id: id,
    id_question: id_question,
    answer: answer,
    status: status,
  });

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch(
    'http://localhost:8080/question_answers',
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
