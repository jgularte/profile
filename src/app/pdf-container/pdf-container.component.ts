import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-container',
  templateUrl: './pdf-container.component.html',
  styleUrls: ['./pdf-container.component.css']
})
export class PdfContainerComponent implements OnInit {
  private pdfSource = 'C:/personal/first-profile-attempt/src/static/resume.pdf';
  constructor() { }

  ngOnInit() {
  }

  onFileSelected() {
    const $img: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSource = e.target.result;
      };

      reader.readAsArrayBuffer($img.files[0]);
    }
  }
}
