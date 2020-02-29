import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuProgressBarComponent } from './bu-progress-bar.component';

describe('BuProgressBarComponent', () => {
  let component: BuProgressBarComponent;
  let fixture: ComponentFixture<BuProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
