import { Component, OnInit, Input } from '@angular/core';
import { WHDocument } from 'src/app/models/wh-document';
import { DocumentsService } from 'src/app/services/documents.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input()document!:WHDocument;
  
  constructor(private service:DocumentsService) { }

  ngOnInit(): void {
  }


}
