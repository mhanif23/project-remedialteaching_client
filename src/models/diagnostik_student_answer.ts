export interface iCreate_diagnostik_student_answer {
  id_question_diagnostik: number;
  id_student: number;
  answer: string;
}

export interface iStudentAnswerDiagnostik {
  id: number;
  id_student: number;
  id_question_diagnostik: number;
  status: string;
  answer: string;
}

export const createDiagnostikStudentAnswer = async (
  newData: iCreate_diagnostik_student_answer,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0dWRlbnQiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY0MTI3ODU4NSwiZXhwIjoxNjQxMjk2NTg1fQ.79PS1F_uOh7BgB3qUl_RJ-zBFFv6GC2JRpJM9Ew44rw',
  );
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
    'http://localhost:8080/diagnostikAnswersStudent',
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
