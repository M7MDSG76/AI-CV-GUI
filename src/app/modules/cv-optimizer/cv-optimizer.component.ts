import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Docxtemplater from 'docxtemplater';
import * as JSZip from 'jszip';
import { TransmitionDialogComponent } from '../shared/dialogs/transmition-dialog/transmition-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv-optimizer',
  templateUrl: './cv-optimizer.component.html',
  styleUrls: []
})
export class CvOptimizerComponent {

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) { }



  error: string = '';
  isSubmitted: boolean = false;
  cvForm: FormGroup = new FormGroup(
    {
      file: new FormControl('', { validators: [Validators.required] }),
      CVContent: new FormControl('', { validators: [Validators.required] })
    }
  )
  fileContent: string = '';

  OptimizeCV(){
    this.isSubmitted = true;
    this.error = '';
    console.log(this.cvForm.get('CVContent')?.value)
    
  }
  
  onClick() {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.panelClass = ['primary-dialog', 'dialog-lg'];
    // dialogConfig.autoFocus = true;
    // dialogConfig.disableClose = true;
    // const dialogRef = this.dialog.open(TransmitionDialogComponent, dialogConfig);
    this.router.navigate(['cv-optimizer','t-dialog'])
  }
  displayInput(){
    this.isSubmitted = false;
    this.error = '';
    console.log(this.cvForm.get('CVContent')?.value)

  }
  checkfileType(fileName: string): string {
    console.log(typeof (fileName));
    let fileExtension = fileName.split(".")[1];
    console.log(fileExtension)

    let fileTypes = ['pdf', 'docx', 'txt'];

    if (fileTypes.includes(fileExtension)) {
      return fileExtension;
    } else {
      this.error = 'file type is not accepted'
      console.log(this.error)
      return this.error
    }


  }

  selectFile(event: any) {

    let file: any = event.target.files[0]
    let fileName: string = file.name;
    this.readFile(file)
    console.log(typeof (file))

    this.checkfileType(fileName);

  }

  readFile(file: any) {

    let fileReader: FileReader = new FileReader();
    let self = this;

    const zip = new JSZip();
    zip.loadAsync(file).then(function (doc) {
      zip.generateAsync({ type: 'blob' }).then((updatedContent) => {
        // 'updatedContent' is a Blob containing the updated zip file
        console.log(updatedContent)
      });
    })
    fileReader.onload = function (x) {
      self.fileContent = String(fileReader.result)
      console.log(`file Content:\n ${self.fileContent}`)
    }

    fileReader.readAsText(file);
    this.fileContent = self.fileContent;
    console.log(`file Content:\n ${this.fileContent}`)
  }



}
