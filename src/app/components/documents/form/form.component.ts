import { Component, OnInit } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentsService } from 'src/app/services/documents.service';
import { Item } from 'src/app/models/item';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  articles!:Articles;
  articleForm!:FormGroup;
  newItem!:Item;
  id!:number;


  constructor(private fb:FormBuilder,private route:ActivatedRoute, private router:Router, private documentService:DocumentsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.createForm();
    this.getArticles();
  }

  createForm(){
    this.articleForm = this.fb.group({
      article:['', Validators.required],
      price:['', Validators.required],
      quantity:['', Validators.required]
    })
  }

  getArticles(){
    this.documentService.getAllArticles().subscribe((articles:Articles) =>{
      this.articles = articles
    })
  }

  saveItem(){

    if(this.articleForm.valid){
      this.newItem = this.articleForm.value;
      this.documentService.addItem(this.id, this.newItem).subscribe(
        (data) =>{
         this.router.navigate([`/documents/${this.id}`])
         this.newItem = data;
         this.articleForm.reset();
        }
      )

     // window.location.reload();

    }

  }

}
