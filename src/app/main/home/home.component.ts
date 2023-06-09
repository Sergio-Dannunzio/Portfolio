import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  elem: number;
  constructor() {
    this.elem = 0;
   }
  
  
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

toggleColorHr(): void {
  if(this.elem==0){
    this.elem++;
    document.body.style.setProperty("--color-1","#14D100");
    document.body.style.setProperty("--color-2","#A7EF00");
    document.body.style.setProperty("--color-3","#FFFA00");
  }
  else if(this.elem==1){
    this.elem++;
    document.body.style.setProperty("--color-1","#0D3FAA");
    document.body.style.setProperty("--color-2","#009D92");
    document.body.style.setProperty("--color-3","#58E000");
  }
  else if(this.elem==2){
    this.elem++;
    document.body.style.setProperty("--color-1","#3C13AF");
    document.body.style.setProperty("--color-2","#123EAB");
    document.body.style.setProperty("--color-3","#009999");
  }
  else if(this.elem==3){
    this.elem++;
    document.body.style.setProperty("--color-1","#7409AA");
    document.body.style.setProperty("--color-2","#3914B0");
    document.body.style.setProperty("--color-3","#1142AA");
  }
  else if(this.elem==4){
    this.elem++;
    document.body.style.setProperty("--color-1","#E1004C");
    document.body.style.setProperty("--color-2","#9702A7");
    document.body.style.setProperty("--color-3","#4C10AE");
  }
  else{
    this.elem=0;
    document.body.style.setProperty("--color-1","#E96823");
    document.body.style.setProperty("--color-2","#E99B23");
    document.body.style.setProperty("--color-3","#E9BD23");
  }
}
}
