import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuProgressBarDataService {
  //
  private ProgressPercent = new BehaviorSubject(0);
  //
  BuCurrentProgressPercent = this.ProgressPercent.asObservable();
  //
  constructor() { }
  //
  changeProgressPercent(count: number, total: number) {
    //
    this.setProgressPercent(this.getPercentage(count, total));
    //
    this.ProgressPercent.next(Number(this.getProgressPercent()));
  }
  getPercentage(count: number, total: number) {
    return  (count / total) * 100;
  }
  //
  setProgressPercent(percentTotal: number) {
    //
    sessionStorage.setItem('percentTotal', percentTotal.toString());
  }
  getProgressPercent() {
    //
    const percentTotal = sessionStorage.getItem('percentTotal');
    return Number(percentTotal);
  }
  //
  setAnswered(count: number) {
    //
    const numCount = this.getAnswered();
    const answered = Number(numCount) + count;
    //
    sessionStorage.setItem('answered', answered.toString());
  }
  getAnswered() {
    const answered = sessionStorage.getItem('answered');
    return Number(answered);
  }
  //
  setTotal(total: number) {
    sessionStorage.setItem('total', total.toString());
  }
  getTotal() {
    const total = sessionStorage.getItem('total');

    return Number(total);
  }

}
