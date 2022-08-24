import {Component, OnInit} from '@angular/core';
import {SettingsService} from "./settings.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ThxComponent} from "./thx/thx.component";
import {ApiService} from "./api.service";
import {JsonData} from "./json-data";
import {WebsocketService} from "./websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'qa-assist';
  setting: JsonData[] = []
  constructor(
    public settings: SettingsService,
    public api: ApiService,
    public dialog: MatDialog,
    private wbs: WebsocketService
  ) {
  }
  ngOnInit() {
    this.settings.getJSON().subscribe(retval=>{
      this.setting = retval
    })

  }
  click(res: number){
    const data = this.setting.find((obj)=>{
      return obj['value'] === res
    })
    this.openDialog(res, data)
    this.api.send(res, -1)
  }
  openDialog(res: number, data: JsonData | undefined): void {
    const dialogRef = this.dialog.open(ThxComponent, {
      width: "50%",
      data: data
    });
  }
}
