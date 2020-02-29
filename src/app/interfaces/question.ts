//
import { Answer } from './answer';
export interface Question {
  //
  id: number;
  title: string;
  description: string;
  question_number: string;
  question: string;
  answers: Answer[];
}
