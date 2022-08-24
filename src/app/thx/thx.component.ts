import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-thx',
  templateUrl: './thx.component.html',
  styleUrls: ['./thx.component.scss']
})
export class ThxComponent implements AfterViewInit{
  timeToClose = 10
  retval = -1
  interval:any
  constructor(
    public dialogRef: MatDialogRef<ThxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(this.retval);
  }
  ngAfterViewInit() {
    this.startTimer()
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeToClose > 0) {
        this.timeToClose--;
      } else {
        this.dialogRef.close(this.retval)
      }
    },1000)
  }
  change(e: any){
    this.retval = e.value
    this.timeToClose = 20
  }
}
