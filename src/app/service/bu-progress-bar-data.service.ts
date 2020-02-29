import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuProgressBarDataService {
  //
  private BuData = new BehaviorSubject({ total: 0, count: 1 });
  //
  BuCurrentData = this.BuData.asObservable();

  //
  constructor() { }
  //
  changeData(buCount: number, buTotal: number) {
    //
    const data = { total: buTotal, count: buCount };
    //
    this.setData(data);
    //
    this.BuData.next(this.getData());
  }
  //
  setData(data: any) {
    //
    sessionStorage.setItem('BuData', JSON.stringify(data));

  }
  getData() {
    //
    return JSON.parse(sessionStorage.getItem('BuData'));
  }
  //
  getTotal() {
    //
    const data = this.getData();
    //
    return data.total;
  }
  getCount() {
    //
    const data = this.getData();
    //
    return data.count;
  }
  //


}
