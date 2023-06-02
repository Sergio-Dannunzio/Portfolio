import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    
  }

  getClass(){
    if(document.body.className == 'dark-theme') {
      return false;
    }else
    return true;
}

toggleDarkTheme(): void {
  document.body.classList.toggle('dark-theme');
}

}
