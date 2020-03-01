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
  question: Question = this.questions[this.questionNumber - 1];

  constructor(private eleRef: ElementRef, private buProgressBarDataService: BuProgressBarDataService) { }

  ngOnInit() {
    //
    this.setData();
    this.getData();

  }
  //
  setData() {

    //
    this.buProgressBarDataService.changeData( this.questionNumber, this.questions.length);
  }
  getData() {
    this.buProgressBarDataService.BuCurrentData.subscribe(
      //
      BuData => {
        //
        this.totalQuestions = BuData.total;
        this.questionNumber = BuData.count;
      }
    );
  }
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
  setQuestion(questionNumber: number) {
    //
    const questionIndex = questionNumber - 1;
    //
    this.question = this.questions[questionIndex];

  }
  //
  setQuestionNumberIncrement() {

    this.buProgressBarDataService.changeData( ++this.questionNumber, this.questions.length);
    this.buProgressBarDataService.BuCurrentData.subscribe(
      //
      BuData => {
        //
        this.totalQuestions = BuData.total;
        this.questionNumber = BuData.count;
      }
    );

  }
  //
  setQuestionNumberDecrement() {
   if ( this.questionNumber !== 1) {
     //
     // this.questionNumber = --this.questionNumber;
     this.buProgressBarDataService.changeData( --this.questionNumber, this.questions.length);
     this.buProgressBarDataService.BuCurrentData.subscribe(
      //
      BuData => {
        //
        this.totalQuestions = BuData.total;
        this.questionNumber = BuData.count;
      }
    );
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
    title: '',
    description: '',
    question_number: '1',
    // tslint:disable-next-line:max-line-length
    question: 'Which are the proper full description for I CARE, in terms of our values',
    answers: [
      {
        id: 1,
        question_id: 1,
        answer_alphabet: 'A',
        answer: 'Integrity, Community, Accceptable, Resposible, Excellence'
      },
      {
        id: 2,
        question_id: 1,
        answer_alphabet: 'B',
        answer: 'Integrity, Commitment, Accountability, Respect, Excellence'
      },
      {
        id: 3,
        question_id: 1,
        answer_alphabet: 'C',
        answer: 'International, Center, Association, Represent, Excellence'
      }
    ]
  },
  {
    id: 2,
    title: '',
    description: '',
    question_number: '2',
    // tslint:disable-next-line:max-line-length
    question: 'What does the SHEQ policy require from all Employees?',
    answers: [
      {
        id: 4,
        question_id: 1,
        answer_alphabet: 'A',
        answer: 'Do your work and knock off when it is time to knock off.'
      },
      {
        id: 5,
        question_id: 1,
        answer_alphabet: 'B',
        answer: 'Report all accidents, incidents and non-conformance.'
      },
      {
        id: 6,
        question_id: 1,
        answer_alphabet: 'C',
        answer: 'Continue working at all times.'
      }
    ]
  },
  {
    id: 3,
    title: '',
    description: '',
    question_number: '3',
    // tslint:disable-next-line:max-line-length
    question: 'According to the HRD Quality Statement/Objectives & Commitment, it is the quality statement of the Mine Humen Resource Development to provide training that consistently meets the requirement of our clients.',
    answers: [
      {
        id: 7,
        question_id: 3,
        answer_alphabet: 'A',
        answer: 'True'
      },
      {
        id: 8,
        question_id: 3,
        answer_alphabet: 'B',
        answer: 'False'
      }
    ]
  },
  {
    id: 4,
    title: '',
    description: '',
    question_number: '4',
    // tslint:disable-next-line:max-line-length
    question: 'Which one of the following is a statement from \'FIRE RISK STATEMEENT\': ',
    answers: [
      {
        id: 9,
        question_id: 4,
        answer_alphabet: 'A',
        // tslint:disable-next-line:max-line-length
        answer: 'All processes, activities, workplaces and equipment are included in a comprehensive fire risk management program to ensure a continuous safe production cycle.'
      },
      {
        id: 10,
        question_id: 4,
        answer_alphabet: 'B',
        answer: 'Not all fire risks annd reelated information mustt be recorded on the important once.'
      },
      {
        id: 11,
        question_id: 4,
        answer_alphabet: 'C',
        answer: 'Fire risks are only identified only when they occurr, these makes the Mine avoid tooo much work, looking for faults.'
      }
    ]
  }
];
//
const answers: Answer[] = [

];
