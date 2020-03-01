import { Action, createReducer, on } from '@ngrx/store';
// Actions
import * as QuestionActions from '../actions/question.action';

// Models
import { Answered } from '../interfaces/answered';
import { CurrentQuestion } from '../interfaces/current.question';
import { Question } from '../interfaces/question';
// State
import AssessmentState, {initializeState} from '../state/assessment.state';
import { stat } from 'fs';


// Intialize initial state
export const initialState = initializeState();

const reducer = createReducer(
    //
    initialState,
    on(QuestionActions.GetAssessmentStateAction, state => state),
);
// Export Reducer Function
export function AssessmentReducer(state: AssessmentState | undefined, action: Action) {
    //
    return reducer(state, action);
}
