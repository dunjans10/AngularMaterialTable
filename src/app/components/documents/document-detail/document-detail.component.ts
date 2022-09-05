import { Component, OnInit } from '@angular/core';
import { WHDocument } from 'src/app/models/wh-document';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentsService } from 'src/app/services/documents.service';
import { Item } from 'src/app/models/item';
import { Items } from 'src/app/models/items';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {

  document!:WHDocument;
  id!:number;
  newItem!:Item;
  items:Items[]=[];

  constructor(private route:ActivatedRoute,private router:Router, private documentService: DocumentsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getDocument();
  }

   getDocument(){
    this.documentService.getOne(this.id).subscribe((document:WHDocument)=>{
      this.document = document;
    })
  }

  /*addItem(data:any){
    console.log('recived:', data);
    this.newItem = data;
    console.log(data);

   // this.router.navigate([`/documents/${this.id}`])
  }*/

}
