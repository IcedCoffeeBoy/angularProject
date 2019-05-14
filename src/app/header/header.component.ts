import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() viewChangeClick = new EventEmitter<string>();
  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onViewChange(view: string) {
    return this.viewChangeClick.emit(view);
  }

}

