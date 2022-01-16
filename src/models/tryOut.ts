export interface itryOut_question {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  trueAnswer: string;
  media?: string;
  idIndicator: number;
  idSubject: number;
  id_Indicator?: string;
  noTopic: string;
}

export interface iCreatetryOut_question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  trueAnswer: string;
  media?: string;
  idIndicator: string;
  idSubject: string;
  noTopic: string;
}

export const createTryoutQuestion = async (
  newData: iCreatetryOut_question,
  token: string,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
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
    idIndicator: Number(newData.idIndicator),
    idSubject: Number(newData.idSubject),
    noTopic: Number(newData.noTopic),
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = fetch(
    `${process.env.REACT_APP_BACKEND_URL}/questionTryOuts`,
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

export const getSoalTryOut = async (): Promise<itryOut_question[]> => {
  var myHeaders = new Headers();

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/questionTryOuts_active`,
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

export const getSoalTryOutStudent = async (
  id: number,
): Promise<itryOut_question[]> => {
  var requestOptions = {
    method: 'GET',
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/findTryOut?id_student=${id}`,
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

export const updateTryoutQuestion = async (
  id: number,
  body: iCreatetryOut_question,
  token: string,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
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
    idIndicator: Number(body.idIndicator),
    idSubject: Number(body.idSubject),
    noTopic: Number(body.noTopic),
  });

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/questionTryOuts`,
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

export const deleteTryoutQuestion = async (
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
    `${process.env.REACT_APP_BACKEND_URL}/questionTryOuts`,
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
