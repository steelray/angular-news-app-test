import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDeleteDialogComponent } from './news-delete-dialog.component';

describe('NewsDeleteDialogComponent', () => {
  let component: NewsDeleteDialogComponent;
  let fixture: ComponentFixture<NewsDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
