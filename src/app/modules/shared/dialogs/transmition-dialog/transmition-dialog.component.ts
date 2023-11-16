import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-transmition-dialog',
  templateUrl: './transmition-dialog.component.html',
  styleUrls: ['./transmition-dialog.component.css']
})
export class TransmitionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TransmitionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    closeDialog(): void {
      this.dialogRef.close();
    }
}
