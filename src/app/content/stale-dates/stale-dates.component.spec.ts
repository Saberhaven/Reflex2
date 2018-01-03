import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaleDatesComponent } from './stale-dates.component';

describe('StaleDatesComponent', () => {
  let component: StaleDatesComponent;
  let fixture: ComponentFixture<StaleDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaleDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaleDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
