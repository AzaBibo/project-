import { Component, OnInit } from '@angular/core';
import { Files } from './models/file.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AccessMongoService } from './access.mongo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
}
