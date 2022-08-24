import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private window: MatSnackBar
  ) { }
  print(message: string) {
    this.window.open(message, "", {horizontalPosition: "right", duration: 5000})
  }
}
