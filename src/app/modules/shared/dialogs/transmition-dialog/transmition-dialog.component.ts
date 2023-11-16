import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transmition-dialog',
  templateUrl: './transmition-dialog.component.html',
  styleUrls: ['./transmition-dialog.component.css']
})
export class TransmitionDialogComponent {
constructor(
  public dialogRef: MatDialogRef<TransmitionDialogComponent>,

){

}
}
