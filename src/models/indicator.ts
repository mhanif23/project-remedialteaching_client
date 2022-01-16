export interface iCreateIndicator {
  id_subject: string;
  topic: string;
  description: string;
  code_number: string;
  link: string;
}
export const createIndicator = async (
  newData: iCreateIndicator,
  token: string,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    id_subject: Number(newData.id_subject),
    topic: newData.topic,
    description: newData.description,
    code_number: newData.code_number,
    link: newData.link,
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/Indicators`,
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

export interface IndicatorsData {
  id: number;
  id_subject: number;
  topic: string;
  description: string;
  code_number: string;
  link: string;
}

export const getIndicatorBySubject = async (
  id: number,
): Promise<IndicatorsData[]> => {
  var requestOptions = {
    method: 'GET',
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/IndicatorsBySubject?idSubject=${id}`,
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

export const getIndicator = async (): Promise<IndicatorsData[]> => {
  var requestOptions = {
    method: 'GET',
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/Indicators`,
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

export const deleteIndicatorId = async (
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
    `${process.env.REACT_APP_BACKEND_URL}/Indicators`,
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

export const updateIndicator = async (
  id: number,
  newData: iCreateIndicator,
  token: string,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    id: id,
    id_subject: Number(newData.id_subject),
    topic: newData.topic,
    description: newData.description,
    code_number: newData.code_number,
    link: newData.link,
  });

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/Indicators`,
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

export const getIndicatorStudentForMatter = async (
  id: number,
): Promise<(IndicatorsData & { isDone: number; idDetail: number })[]> => {
  var requestOptions = {
    method: 'GET',
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/findMatter?id_student=${id}`,
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

export type iDiagnostikAnswer = {
  id: number;
  id_student: number;
  status: false;
  created_At: Date;
  id_question_diagnostik: number;
  answer: string;
  alasanAnswer: number;
};

export type resultDA = {
  result: [iDiagnostikAnswer[]];
};

export const checkstudentDiagnostikAnswer = async (
  id: number,
): Promise<iDiagnostikAnswer[]> => {
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
  return await data.result;
};

export const getIndicatorStudentForTryOut = async (
  id: number,
): Promise<(IndicatorsData & { isDone: number; idDetail: number })[]> => {
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

export const getIndicatorStudentForExam = async (
  id: number,
): Promise<(IndicatorsData & { isDone: number; idDetail: number })[]> => {
  var requestOptions = {
    method: 'GET',
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/findExam?id_student=${id}`,
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
