import { Component, OnInit } from '@angular/core';
import { WHDocumentsList } from 'src/app/models/wh-documents';
import { DocumentsService } from 'src/app/services/documents.service';
import { PageEvent } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { WHDocument } from 'src/app/models/wh-document';
import { Router } from '@angular/router';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents!:WHDocumentsList;
  //document!:WHDocument;
  displayedColumns: string[] = ['dateOfCreation', 'dateOfRecording', 'status', 'transactionType', 'businessPartner', 'businessPartnerLocation', 'year'];
  page:number =1;
  pageSize:number = 10;
  pageEvent!:PageEvent;
  show:boolean = false;
  sort:string = '';
  sortDirection:string ='';
  isAscendingSort: boolean = false;
  id!:number;

  constructor(private documentsService:DocumentsService, private router:Router) { }


  ngOnInit(): void {
    this.getDocuments();
  }


  getDocuments(){
    this.documentsService.getAll(this.page, this.pageSize, this.sort, this.sortDirection).subscribe(
      (results:any) => {
        console.log(results);
        this.documents = results;
      }
    )
  }

  openDocument(id:number){
    this.router.navigate(['/documents', id])
  }

  onPaginateChange(event:PageEvent){
    let page = event.pageIndex;
    let size = event.pageSize;
    let sort:string = '';
    let sortDirection:string = '';
    page = page + 1;

    this.documentsService.getAll(page, size, sort, sortDirection).pipe(
      map((documents:any) => this.documents = documents)
    ).subscribe()
  }

  showHide(){
    this.show = !this.show;
  }

  onChange(ev:MatCheckboxChange, index:any){
    console.log(ev.checked);
    let cl = document.getElementsByClassName(index)
    if(ev.checked){
      console.log(index);
      for(let i = 0; i < cl.length; i++){
        cl[i].classList.add("tabCheck")
      }
    }else {
      for(let i = 0; i < cl.length; i++){
        cl[i].classList.remove("tabCheck")
      }
    }
  }

 sortChange(sort:string){

    if(this.sort === sort){
      this.sortDirection = this.sortDirection == 'asc' ? 'desc':'asc';
      this.isAscendingSort= true
      this.isAscendingSort = !this.isAscendingSort;
    }else{
      this.sort = sort;
      this.sortDirection = 'asc'
      this.isAscendingSort = false


    }
    this.getDocuments();
  }
}


