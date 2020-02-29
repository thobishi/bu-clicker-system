import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
//
import { Answer } from '../../../interfaces/answer';
import { Question } from '../../../interfaces/question';
//
import { BuProgressBarDataService } from '../../../service/bu-progress-bar-data.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  //
  questions: Question[] = questions;
  answers: Answer[] = answers;
  totalQuestions: number = this.questions.length;
  questionNumber = 1;
  question: Question = this.questions[0];
  // @ViewChild('bu-btn-next-page') buBtnNextPage: ElementRef<HTMLElement>;


  constructor(private eleRef: ElementRef, private buProgressBarDataService: BuProgressBarDataService) { }

  ngOnInit() {
  }
  //

  //
  @HostListener('window:keypress', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    //
    const buBtnNextPage = this.eleRef.nativeElement.querySelector('#bu-btn-next-page');
    const buBtnPreviousPage = this.eleRef.nativeElement.querySelector('#bu-btn-previous');
    const code: string = event.key;
    if (code.toLowerCase() === 'n' && this.questionNumber < this.totalQuestions ) {
      //
      buBtnNextPage.dispatchEvent(new Event('click'));
    } else if (code.toLowerCase() === 'p' && this.questionNumber !== 1) {
      //
      buBtnPreviousPage.dispatchEvent(new Event('click'));
    }
  }
  //
  setQuestion(questionNumber: number) {
    //
    const questionIndex = questionNumber - 1;

    //
    this.question = this.questions[questionIndex];
    //
    console.log('Question index: ' + questionIndex + ' set question: ' + this.question.question);

  }
  //
  setQuestionNumberIncrement() {
    this.questionNumber = ++this.questionNumber;
    console.log('current index: ' + this.questionNumber);
  }
  //
  setQuestionNumberDecrement() {
   if ( this.questionNumber !== 1) {
     //
     this.questionNumber = --this.questionNumber;
   }
  }
  //
  setActive(i) {

  }
  //
  setDisable(questionNumber: number) {
    // console.log(questionNumber + ' ' + this.questionNumber);
    //
    if (this.questionNumber === questionNumber) {
      return true;
    } else {
      return false;
    }
  }


}
//
const questions: Question[] = [
  {
    id: 1,
    question_number: '1',
    question: 'This is the first question. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quidem soluta. Eius ducimus neque ad, laborum accusantium esse doloribus dolore, tenetur nobis a quia illo omnis magni commodi quisquam obcaecati.'
  },
  {
    id: 2,
    question_number: '2',
    question: 'This is the second question'
  },
  {
    id: 3,
    question_number: '3',
    question: 'This is the third question'
  },
  {
    id: 4,
    question_number: '4',
    question: 'This is the fourth question'
  },
  {
    id: 5,
    question_number: '5',
    question: 'This is the fith question'
  },
  {
    id: 6,
    question_number: '6',
    question: 'This is the sixth question'
  },
  {
    id: 7,
    question_number: '7',
    question: 'This is the seventh question'
  },
  {
    id: 8,
    question_number: '8',
    question: 'This is the eighth question'
  },
  {
    id: 9,
    question_number: '9',
    question: 'This is the ninth question'
  },
  {
    id: 10,
    question_number: '10',
    question: 'This is the tenth question'
  },
  {
    id: 11,
    question_number: '11',
    question: 'This is the eleventh question. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quidem soluta. Eius ducimus neque ad, laborum accusantium esse doloribus dolore, tenetur nobis a quia illo omnis magni commodi quisquam obcaecati.'
  },
  {
    id: 12,
    question_number: '12',
    question: 'This is the twelth question'
  }
];
//
const answers: Answer[] = [
  {
    id: 1,
    question_id: 1,
    answer_alphabet: '',
    answer: ''
  }
];
