import { Component, OnInit, HostBinding, Input } from '@angular/core';
//Import the Article model
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  //Adding the class ''row'' to the host of this component
  //(the parent of this component)
  //So that all articls are displayed on rows;
  @HostBinding('attr.class') cssClass = 'row';

  @Input() article: Article; //The model we imported
  //It gets an article as Input

  constructor() { 
   // article is populated by the Input now,
   // so we don't need anything here
  }

  voteUp():boolean
  {
    this.article.voteUp();
    return false;
    //Returns false so that Javascript won't propagate the
    //click event to the parent and refresh the page;
  }
  voteDown(): boolean
  {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }


}
