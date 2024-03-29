export interface iCreate_diagnostik_student_answer {
  id_question_diagnostik: number;
  id_student: number;
  answer: string;
  alasan: number;
}

export interface iStudentAnswerDiagnostik {
  id: number;
  id_student: number;
  id_question_diagnostik: number;
  status: string;
  answer: string;
}

export const createDiagnostikStudentAnswer = async (
  newData: iCreate_diagnostik_student_answer[],
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
    `${process.env.REACT_APP_BACKEND_URL}/diagnostikAnswersStudent`,
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
