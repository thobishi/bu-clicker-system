//
import { Answered } from './answered';
import { CurrentQuestion } from './current.question';
import { Question } from './question';
//
export default interface AssessmentStateIntereface {
    CurrentQuestion: CurrentQuestion;
    Questions: Array<Question>;
    AnsweredQuestions: Array<Answered>;
}
