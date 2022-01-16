export interface iCreate_TryOut_student_answer {
  id_TryOut_Question: number;
  studentId: number;
  answer: string;
}

export interface iStudentAnswerTryOut {
  id: number;
  id_student: number;
  id_question_TryOut: number;
  status: string;
  answer: string;
}

export const createTryOutStudentAnswer = async (
  newData: iCreate_TryOut_student_answer[],
  token: string,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    data: newData,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/TryOutAnswersStudent`,
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
