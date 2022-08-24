import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-base-smile',
  templateUrl: './base-smile.component.html',
  styleUrls: ['./base-smile.component.scss']
})
export class BaseSmileComponent implements OnInit {
  @Input('typeSmile') type:string = "happy"
  @Input('text') text: string = ""
  @Input('value') value: number = -1
  @Output("onClick") onClick = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }
  getClass(){
    return "smiley " + this.type
  }
  click(){
    this.onClick.next(this.value)
  }
}
