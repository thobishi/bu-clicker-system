//
import { Answered } from '../interfaces/answered';
import { Question } from '../interfaces/question';
import { CurrentQuestion } from '../interfaces/current.question';

//
export default class AssessmentState {
    CurrentQuestion: CurrentQuestion;
    Questions: Array<Question>;
    AnsweredQuestions: Array<Answered>;
}

//
export const initializeState = (): AssessmentState => {
    return { CurrentQuestion: { QuestionId: null, QuestionNumber: 0 }, Questions: Array<Question>(), AnsweredQuestions: Array<Answered>() };
};
