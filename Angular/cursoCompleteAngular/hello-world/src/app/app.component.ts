import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent {
  post = {
    title:"Welcome to world!",
    isFavori te:true
  }
  onFavoriteChanged(){
    console.log("FavoriteChanged");
  }
  // imageURL: "https://angular.io/assets/images/logos/angular/angular_solidBlack.png"
}
