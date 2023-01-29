import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imageFilePath: string = '';
  extractedText: string = '';
  extractedTextProgress: string = '';
  selectedLanguage: string = 'ita';

  fileUploadForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
  });



  constructor() {}


  get getFileUploadFormControls() {
    return this.fileUploadForm.controls;
  }

  onSelectedLanguage(value: string): void {
    this.selectedLanguage = value;
  }

  onFileChange(event: any) {
    this.extractedText = '';
    this.extractedTextProgress = '';
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageFilePath = reader.result as string;
        this.fileUploadForm.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }

  reset(){
    window.location.reload()
  }

  submit() {
    this.extractedTextProgress = 'Caricamento';
    this.extractedText = '';
    Tesseract.recognize(
      this.fileUploadForm.controls.fileSource.value,
      this.selectedLanguage,
      {
        logger: (m) => {
          this.extractedTextProgress = m.status;
        },
      }
    ).then(({ data: { text } }) => {
      this.extractedTextProgress = '';
      this.extractedText = text;
    });
  }
}
