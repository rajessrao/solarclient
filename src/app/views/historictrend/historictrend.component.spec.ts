import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorictrendComponent } from './historictrend.component';

describe('HistorictrendComponent', () => {
  let component: HistorictrendComponent;
  let fixture: ComponentFixture<HistorictrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorictrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorictrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
