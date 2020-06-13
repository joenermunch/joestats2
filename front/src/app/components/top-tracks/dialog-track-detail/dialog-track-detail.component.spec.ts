import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTrackDetailComponent } from './dialog-track-detail.component';

describe('DialogTrackDetailComponent', () => {
  let component: DialogTrackDetailComponent;
  let fixture: ComponentFixture<DialogTrackDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTrackDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTrackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
