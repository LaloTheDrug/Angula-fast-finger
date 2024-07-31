import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-1';
  time = 60;
  myWords = ["academic", "brilliant", "candidate", "definition", "educational", "fashionable", "generation", "heaven", "imaginary", "jewellery", "knowledge", "laboratory", "magazine", "necessarily", "objective", "paragraph", "qualification", "reasonable", "schedule", "talented", "uncomfortable", "vegetable", "whisper", 
    "axed", "yesterday", "zabaione"];
  index = Math.floor(Math.random() * this.myWords.length);
  words = this.myWords[this.index];
  input = "";
  point=0;
  keyboards = [
    {
      top : ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    },
    {
      middle : ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    },
    {
      bottom : ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    }
  ];
  
ramdomWord(){
  this.index = Math.floor(Math.random() * this.myWords.length);
  this.words = this.myWords[this.index];
  this.input = '';
}
@HostListener('document:keypress', ['$event'])
checkResult(event: KeyboardEvent) {
  let pressedKey = event.key.toLowerCase();
  let button = document.getElementById(pressedKey);
  if (button) {
    button.style.backgroundColor = "#008CBA";
    button.style.color = "white";
    setTimeout(function() {
        button.style.backgroundColor = "white";
        button.style.color = "black";
    }, 300);
  }
  if (event.key == ' ') {
    let str = this.input.trim();
    if (str == this.words) {
      this.point++;
    } else {
      this.point--;
    }
    this.input = '';
    this.ramdomWord();
  }
}  
startTimer(){
  let timeInterval = setInterval(() => {
    this.time--;
    if(this.time == 0){
      clearInterval(timeInterval);
      alert('Game Over');
    }
  }, 1000);
}
}
