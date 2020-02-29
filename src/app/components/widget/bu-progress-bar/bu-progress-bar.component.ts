import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bu-progress-bar',
  templateUrl: './bu-progress-bar.component.html',
  styleUrls: ['./bu-progress-bar.component.css']
})
export class BuProgressBarComponent implements OnInit {
  //
  @Input() BuProgressTotal: number;
  @Input() BuProgressCount: number;
  BuProgressPercent = ( this.BuProgressCount / this.BuProgressTotal ) * 100;

  constructor() { }

  ngOnInit() {//
    this.setProgress();
  }
  //
  setProgress() {
    this.BuProgressPercent = ( this.BuProgressCount / this.BuProgressTotal ) * 100;
  }

}
