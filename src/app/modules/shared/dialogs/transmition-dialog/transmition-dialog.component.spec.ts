import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmitionDialogComponent } from './transmition-dialog.component';

describe('TransmitionDialogComponent', () => {
  let component: TransmitionDialogComponent;
  let fixture: ComponentFixture<TransmitionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransmitionDialogComponent]
    });
    fixture = TestBed.createComponent(TransmitionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
