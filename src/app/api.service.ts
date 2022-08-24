import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private mess: MessageService
  ) { }
  send(res: number, data: any){
    const params = new HttpParams()
      .set('raitings', res)
      .set('description', data)
    this.http.get("https://manage-worker.local/raitings_user", {params, responseType: "text"}).subscribe(retval=>{
      this.mess.print(retval)
    })
  }
}
