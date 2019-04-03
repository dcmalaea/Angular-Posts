import { Component } from '@angular/core';
import { Article } from './article/article.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  articles: Article[];
  constructor()
  {
    this.articles =
    [
      new Article('Angular 2','http://angular.io',10),
      new Article('Angular 3','http://angular.io',4),
      new Article('Angular 5','http://angular.io',100),
    ]
  }

  addArticle(title: HTMLInputElement,link: HTMLInputElement): boolean{
    console.log("Adding article title: "+title.value +" and link: "+link.value);
    this.articles.push(new Article(title.value,link.value));
    //Clear the input fields
    title.value="";
    link.value=""
    //Return false so it doesn't refresh
    return false;
  }

  sortedArticles():Article[]{
    return this.articles.sort((a:Article,b:Article)=>b.votes-a.votes);

  }
  

}
