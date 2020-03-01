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
  questions: Question[];
  totalQuestions = null;
  questionNumber = 1;
  question: Question;

  constructor(private eleRef: ElementRef, private buProgressBarDataService: BuProgressBarDataService) {
    //
  }

  ngOnInit() {
    //
    if (this.totalQuestions === null ) {
      //
      console.log('Triggered: ');
      //
      this.buProgressBarDataService.changeQuestion(questions);
      this.buProgressBarDataService.changeQuestionNumber(1);
      this.buProgressBarDataService.BuCurrentQuestionNumber.subscribe(
        //
        BuCurrentQuestionNumber => {
          this.questionNumber = BuCurrentQuestionNumber;
          console.log('Triggered: BuCurrentQuestionNumber ' + BuCurrentQuestionNumber);
        }
      );
      this.buProgressBarDataService.BuCurrentQuestions.subscribe(
        //
        BuCurrentQuestions => {
          this.totalQuestions = BuCurrentQuestions.length;
          this.questions = BuCurrentQuestions;
          console.log('Triggered: totalQuestions ' + this.totalQuestions);
          console.log('Triggered: questions ' + JSON.stringify(this.questions));
        }
      );
    } else if (this.totalQuestions >= 0 && this.questionNumber === 0) {
      //
      this.buProgressBarDataService.storeBuQuestionNumber(1);
      this.buProgressBarDataService.BuCurrentQuestionNumber.subscribe(
        //
        BuCurrentQuestionNumber => this.questionNumber = BuCurrentQuestionNumber
      );
      this.buProgressBarDataService.BuCurrentQuestions.subscribe(
        //
        BuCurrentQuestions => {
          this.totalQuestions = BuCurrentQuestions.length;
          this.questions = BuCurrentQuestions;
        }
      );
    } else {
      //
      this.buProgressBarDataService.BuCurrentQuestionNumber.subscribe(
        //
        BuCurrentQuestionNumber => this.questionNumber = BuCurrentQuestionNumber
      );
      this.buProgressBarDataService.BuCurrentQuestions.subscribe(
        //
        BuCurrentQuestions => {
          this.totalQuestions = BuCurrentQuestions.length;
          this.questions = BuCurrentQuestions;
        }
      );
    }

  }
  //

  //
  @HostListener('window:keypress', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    //
    const buBtnNextPage = this.eleRef.nativeElement.querySelector('#bu-btn-next-page');
    const buBtnPreviousPage = this.eleRef.nativeElement.querySelector('#bu-btn-previous');
    const code: string = event.key;
    //
    if (code.toLowerCase() === 'n' && this.questionNumber < this.totalQuestions ) {
      //
      buBtnNextPage.dispatchEvent(new Event('click'));
    } else if (code.toLowerCase() === 'p' && this.questionNumber !== 1) {
      //
      buBtnPreviousPage.dispatchEvent(new Event('click'));
    }
  }
  //
  setQuestionNumberDecrement() {
    if (this.questionNumber > 1) {
      this.questionNumber = --this.questionNumber;
      this.buProgressBarDataService.changeQuestionNumber(this.questionNumber);
    }
  }
  //
  setQuestionNumberIncrement() {
    //
    if (this.questionNumber > this.totalQuestions) {
      //
      this.questionNumber = ++this.questionNumber;
      this.buProgressBarDataService.changeQuestionNumber(this.questionNumber);
    }
  }
  //
  setDisable(questionNumber: number) {
    //
    console.log(questionNumber + ' ' + this.questionNumber);
    //
    if (this.questionNumber === (questionNumber + 1)) {
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
    title: '',
    description: '',
    question_number: '1',
    question: 'This is the first question. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quidem soluta. Eius ducimus neque ad, laborum accusantium esse doloribus dolore, tenetur nobis a quia illo omnis magni commodi quisquam obcaecati.',
    answers: [
      {
        id: 1,
        question_id: 1,
        answer_alphabet: 'A',
        answer: '------'
      },
      {
        id: 2,
        question_id: 1,
        answer_alphabet: 'B',
        answer: '------'
      },
      {
        id: 3,
        question_id: 1,
        answer_alphabet: 'C',
        answer: '------'
      }
    ]
  },
  {
    id: 2,
    title: '',
    description: '',
    question_number: '2',
    question: 'This is the second question',
    answers: [
      {
        id: 4,
        question_id: 2,
        answer_alphabet: 'A',
        answer: '------'
      },
      {
        id: 5,
        question_id: 2,
        answer_alphabet: 'B',
        answer: '------'
      },
      {
        id: 6,
        question_id: 2,
        answer_alphabet: 'C',
        answer: '------'
      }
    ]
  },
  {
    id: 3,
    title: '',
    description: '',
    question_number: '3',
    question: 'This is the third question',
    answers: []
  },
  {
    id: 4,
    title: '',
    description: '',
    question_number: '4',
    question: 'This is the fourth question',
    answers: [
      {
        id: 7,
        question_id: 4,
        answer_alphabet: 'A',
        answer: '------'
      },
      {
        id: 8,
        question_id: 4,
        answer_alphabet: 'B',
        answer: '------'
      },
      {
        id: 9,
        question_id: 4,
        answer_alphabet: 'C',
        answer: '------'
      }
    ]
  },
  {
    id: 5,
    title: '',
    description: '',
    question_number: '5',
    question: 'This is the fith question',
    answers: []
  },
  {
    id: 6,
    title: '',
    description: '',
    question_number: '6',
    question: 'This is the sixth question',
    answers: []
  },
  {
    id: 7,
    title: '',
    description: '',
    question_number: '7',
    question: 'This is the seventh question',
    answers: []
  },
  {
    id: 8,
    title: '',
    description: '',
    question_number: '8',
    question: 'This is the eighth question',
    answers: []
  },
  {
    id: 9,
    title: '',
    description: '',
    question_number: '9',
    question: 'This is the ninth question',
    answers: []
  },
  {
    id: 10,
    title: '',
    description: '',
    question_number: '10',
    question: 'This is the tenth question',
    answers: []
  },
  {
    id: 11,
    title: '',
    description: '',
    question_number: '11',
    question: 'This is the eleventh question. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quidem soluta. Eius ducimus neque ad, laborum accusantium esse doloribus dolore, tenetur nobis a quia illo omnis magni commodi quisquam obcaecati.',
    answers: []
  },
  {
    id: 12,
    title: '',
    description: '',
    question_number: '12',
    question: 'This is the twelth question',
    answers: []
  }
];
//
const answers: Answer[] = [

];
