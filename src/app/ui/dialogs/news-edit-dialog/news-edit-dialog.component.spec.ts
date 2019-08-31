import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEditDialogComponent } from './news-edit-dialog.component';

describe('NewsEditDialogComponent', () => {
  let component: NewsEditDialogComponent;
  let fixture: ComponentFixture<NewsEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
