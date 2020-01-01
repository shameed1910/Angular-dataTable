import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { FileDownloadService } from '../file-download.service';

const MIME_TYPES = {
  pdf: 'application/pdf',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetxml.sheet'
}

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css']
})
export class FileDownloadComponent implements OnInit {

  constructor(private service:FileDownloadService) { }

  ngOnInit() {
  }

  downloadFile(fileName) {
    const EXT = fileName.substr(fileName.lastIndexOf('.') + 1);
    this.service.downloadFile({ 'fileName': fileName})
    .subscribe(data => {
      //save it on the client machine.
      saveAs(new Blob([data], {type: MIME_TYPES[EXT]}), fileName);
    })
  }


}