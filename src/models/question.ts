export interface iCreateQuestion {
  id_indicator: number;
  question: string;
  media: string;
}
export const createQuestion = async (
  newData: iCreateQuestion,
): Promise<boolean> => {
  var myHeaders = new Headers();

  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTQ1NjcyNCwiZXhwIjoxNjQxNDc0NzI0fQ.rmGwfv-uLzKp7rP0yfwe3g8lpMltuI6N3YYjjWCl0N0',
  );

  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    id_indicator: Number(newData.id_indicator),
    question: String(newData.question),
    media: String(newData.media),
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch('http://localhost:8080/Question', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  if (await data.result) {
    return true;
  } else {
    return false;
  }
};

export interface QuestionsData {
  id: number;
  id_indicator: number;
  question: string;
  media: string;
}
export const getQuestion = async (): Promise<QuestionsData[]> => {
  var requestOptions = {
    method: 'GET',
  };

  const data = await fetch('http://localhost:8080/Questions', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return await data.result;
};

export const deleteQuestionId = async (id: number): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTQ1NjcyNCwiZXhwIjoxNjQxNDc0NzI0fQ.rmGwfv-uLzKp7rP0yfwe3g8lpMltuI6N3YYjjWCl0N0',
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

  const data = await fetch('http://localhost:8080/Question', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return await data;
};

export const updateQuestion = async (
  id: number,
  dataPut: iCreateQuestion,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTQ1NjcyNCwiZXhwIjoxNjQxNDc0NzI0fQ.rmGwfv-uLzKp7rP0yfwe3g8lpMltuI6N3YYjjWCl0N0',
  );
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    id: id,
    data: JSON.stringify({
      id_indicator: dataPut.id_indicator,
      question: dataPut.question,
      media: dataPut.media,
    }),
  });

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch('http://localhost:8080/question', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });

  return await data;
};
