export interface iCreateQuestion {
  id_indicator: number;
  question: string;
  media: string;
}
export const createQuestion = async (
  newData: iCreateQuestion,
  token: string,
): Promise<boolean> => {
  var myHeaders = new Headers();

  myHeaders.append('Authorization', `Bearer ${token}`);

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

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/Question`,
    requestOptions,
  )
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

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/Questions`,
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

export const deleteQuestionId = async (
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
    `${process.env.REACT_APP_BACKEND_URL}/Question`,
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

export const updateQuestion = async (
  id: number,
  dataPut: iCreateQuestion,
  token: string,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
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

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/question`,
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
