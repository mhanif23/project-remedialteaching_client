import { idiagnostik_question } from '../../../models/diagnostik_question';

const AnswerChoice = ({
  question,
  addNewStudentAnswer,
}: {
  question: idiagnostik_question;
  addNewStudentAnswer: (
    id_diagnostik: number,
    id_student: number,
    answer: string,
  ) => void;
}) => {
  return (
    <>
      <h1>{question.question}</h1>
    </>
  );
};
export default AnswerChoice;
