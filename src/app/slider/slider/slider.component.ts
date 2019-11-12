import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
img : string[] = 
  [
    "https://images.unsplash.com/photo-1573488754877-300b883e0006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1573497882071-a95de2c4c7da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1573542625226-956e54f63571?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1573483164701-fbd9ad53cc7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  ]
  src : string = "https://images.unsplash.com/photo-1573486145949-182147241fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  capacity : number = this.img.length;
  count : number = 0;
  timer;
  getPi(){
    if(this.count < this.capacity-1){
      this.count++;
      this.setSrc(this.img[this.count]);
    }else{
      this.count=0;
      this.setSrc(this.img[this.count]);
    }
  }
    getPri(){
    if(this.count > 0){
      this.count--;
      this.setSrc(this.img[this.count]);
    }else{
      this.count=this.capacity-1;
      this.setSrc(this.img[this.count]);
    }
  }
  setSrc(link: string){
    this.src = link;
  }
  setautoImgs(){
    this.timer = setInterval(()=>{this.getPi()
    }, 3000);
  }
  stop(){
    clearInterval(this.timer);
  }
}