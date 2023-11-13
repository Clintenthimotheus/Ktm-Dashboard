import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    
    
  }
  @Output() toggle =new EventEmitter();
  menuIconClicked(){
  this.toggle.emit()
  }

  click(){
    window.location.href = 'https://www.ktmindia.com/ktmindiaapp';

  }
 
}
