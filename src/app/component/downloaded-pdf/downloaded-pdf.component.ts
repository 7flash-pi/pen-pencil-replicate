import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-downloaded-pdf',
  templateUrl: './downloaded-pdf.component.html',
  styleUrls: ['./downloaded-pdf.component.scss'],
})
export class DownloadedPdfComponent  implements OnInit {
  @Output() desc= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.desc.emit('Downloaded Notes');
  }

}
