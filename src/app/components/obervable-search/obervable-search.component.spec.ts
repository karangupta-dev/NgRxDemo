import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObervableSearchComponent } from './obervable-search.component';

describe('ObervableSearchComponent', () => {
  let component: ObervableSearchComponent;
  let fixture: ComponentFixture<ObervableSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObervableSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObervableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
