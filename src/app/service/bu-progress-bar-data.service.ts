import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuProgressBarDataService {
  //
  private BuNewData = { total: 0, count: 1 };
  private BuData = new BehaviorSubject(this.BuNewData);
  //
  BuCurrentData = this.BuData.asObservable();

  //
  constructor() {}
  //
  changeData(buCount: number, buTotal: number) {
    //
    const data = {count: buCount, total: buTotal };
    //
    console.log('changeData ' + JSON.stringify(data));
    //
    this.setData(data);
    //
    const newData = this.getData();
    //
    this.BuData.next(newData);
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
    console.log('Fetched Total' + data.total);
    //
    return data.total;
  }
  getCount() {
    //
    const data = this.getData();
    console.log('Fetched Count' + data.count);
    //
    return data.count;
  }
  //


}
