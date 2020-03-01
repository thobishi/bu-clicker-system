import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
//
import { Question } from '../interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class BuProgressBarDataService {
  //
  private buQuestions = new BehaviorSubject(Array<Question>());
  private buQuestionNumber = new BehaviorSubject(0);
  //
  BuCurrentQuestions = this.buQuestions.asObservable();
  BuCurrentQuestionNumber = this.buQuestionNumber.asObservable();
  //
  constructor() {}
  //
  changeQuestion( buQuestions: Question[] ) {
    //
    // this.storeBuQuestions(buQuestions);
    this.buQuestions.next(buQuestions);
  }
  changeQuestionNumber(buQuestionNumber: number) {
    //
    // this.storeBuQuestionNumber(buQuestionNumber);
    this.buQuestionNumber.next(buQuestionNumber);
  }
  //
  storeBuQuestions(buTotal: Question[]) {
    //
    const buTotalNew = {data: buTotal};
    localStorage.setItem('buQuestions', JSON.stringify(buTotalNew));
  }
  storeBuQuestionNumber(BuQuestionNumber: number) {
    //
    localStorage.setItem('buQuestionNumber', BuQuestionNumber.toString());
  }

  fetchBuQuestions() {
    //
    const buData = JSON.parse(localStorage.getItem('buQuestions'));
    //
    return buData.data;
  }
  fetchBuQuestionNumber() {
    //
    return Number(localStorage.getItem('buQuestionNumber'));
  }


}
