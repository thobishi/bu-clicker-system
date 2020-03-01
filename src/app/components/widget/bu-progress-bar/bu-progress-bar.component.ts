import { Component, OnInit, Input } from '@angular/core';
//
import { BuProgressBarDataService } from '../../../service/bu-progress-bar-data.service';


@Component({
  selector: 'app-bu-progress-bar',
  templateUrl: './bu-progress-bar.component.html',
  styleUrls: ['./bu-progress-bar.component.css']
})
export class BuProgressBarComponent implements OnInit {
  //
  @Input() BuProgressTotal: number;
  @Input() BuProgressCount: number;
  BuProgressPercent = 0;

  constructor(private buProgressBarDataService: BuProgressBarDataService) { }

  ngOnInit() {
    this.BuProgressPercent = ( this.BuProgressCount / this.BuProgressTotal ) * 100;

  }


}
