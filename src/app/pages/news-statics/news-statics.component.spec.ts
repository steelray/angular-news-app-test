import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsStaticsComponent } from './news-statics.component';

describe('NewsStaticsComponent', () => {
  let component: NewsStaticsComponent;
  let fixture: ComponentFixture<NewsStaticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsStaticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
