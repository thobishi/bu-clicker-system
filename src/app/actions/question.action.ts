import { createAction, props } from '@ngrx/store';
//
import { Answered } from '../interfaces/answered';
import { Question } from '../interfaces/question';
import { CurrentQuestion } from '../interfaces/current.question';

//
export const GetAssessmentStateAction = createAction('[GetAssessmentStateAction] - Get GetAssessmentStateAction');
//
export const CreateAssessmentStateAction = createAction(
    '[CurrentQuestion] - Create CurrentQuestion',
    props<{ CurrentQuestion: CurrentQuestion, Questions: Array<Question>, AnsweredQuestions: Array<Answered> }>()
);
export const CreateQuestionsAction = createAction(
    '[Questions] - Create Questions',
    props<Question>()
);
export const CreateAnsweredQuestionsAction = createAction(
    '[AnsweredQuestions] - Create AnsweredQuestions',
    props<Answered>()
);
