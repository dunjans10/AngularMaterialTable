import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Items } from 'src/app/models/items';
import { DocumentsService } from 'src/app/services/documents.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['article', 'price', 'quantity', 'totalValue'];
  dataSource!:Items;
  id!:number;
  articles:Article[] = [];



  constructor(private documentService:DocumentsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getItems();
  }

  getItems(){

    this.documentService.getItems(this.id).subscribe(
      (results:any) => {
      console.log('result:' ,results);
      this.dataSource = results;
      console.log( 'datasource' ,this.dataSource.results);
    })
  }


  codeToArticleName(code:string){
    let name='';
    for(let art of this.articles){
      if(art.code === code){
        name = art.name;
        break;
      }
    }
    return name;
  }


}

