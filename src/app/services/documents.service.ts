import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { WHDocumentsList } from '../models/wh-documents';
import { WHDocument } from '../models/wh-document';
import { Items } from '../models/items';
import { Articles } from '../models/articles';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})

export class DocumentsService {

  private apiUrl:string = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getAll(page:number, size:number, sort:string, sortDirection:string):Observable<WHDocumentsList>{
    let params = new HttpParams();
    params = params.set('page', page);
    params = params.set('pageSize', size);
    params = params.set('sort', sort);
    params = params.set('sortdirection', sortDirection)

    return this.http.get<WHDocumentsList>(this.apiUrl,{
      params
    }).pipe(
      map((documents:WHDocumentsList) => {
        return documents;
      })
    )
  }

  getOne(documentId:number){
    return this.http.get<WHDocument>(`${this.apiUrl}/${documentId}`).pipe(
      map((document:WHDocument) => {
        return document;
      })
    )
  }

  getItems(documentId:number):Observable<Items>{
    return this.http.get<Items>(`${this.apiUrl}/${documentId}/items`).pipe(
      map((items:Items) => {
        return items;
      })
    )
  }

  getAllArticles():Observable<Articles> {
    return this.http.get<Articles>('http://localhost:3000/api/articles').pipe(
      map((articles:Articles)=>{
        return articles;
      })
    )
  }

  addItem(documentId:number, newItem:Item):Observable<Item>{
    return this.http.post<Item>(`${this.apiUrl}/${documentId}/items`, newItem).pipe(
      map((newItem:Item)=>{
        return newItem;
      })
    )
  }

}
