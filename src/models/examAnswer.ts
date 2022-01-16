export interface iCreate_Exam_student_answer {
  id_Exam_Question: number;
  studentId: number;
  answer: string;
}

export interface iStudentAnswerExam {
  id: number;
  studentId: number;
  id_Exam_Question: number;
  status: string;
  answer: string;
}

export const createExamStudentAnswer = async (
  newData: iCreate_Exam_student_answer[],
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
    `${process.env.REACT_APP_BACKEND_URL}/examAnswerStudent`,
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
