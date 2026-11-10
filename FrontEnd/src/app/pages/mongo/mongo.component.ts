import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Files } from '../../models/file.model';
import { AccessMongoService } from '../../access.mongo.service';

@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrl: './mongo.component.css'
})
export class MongoComponent implements OnInit{
 selectAll = false;

 public files: Files[] = [];

 constructor(private router: Router, private fileService: AccessMongoService) { 
 }
 
 ngOnInit(): void {
  this.fileService.getFile().subscribe(files => {
    this.files = files;
  });
}
 
toggleSelectAll(){
  //this.checkboxes.forEach((c)=>(c.selected = this.selectAll));
  if (this.files) {
    this.files.forEach((file) => (file.selected = this.selectAll));
  }
 }

 checkboxChanged(){
  if (this.isAllCheckboxesSelected()) this.selectAll = true;
  else this.selectAll = false;
 }

 isAllCheckboxesSelected(){
  //return this.checkboxes.every((c)=>c.selected);
  return this.files && this.files.every((file) => file.selected);
 }

 submit(){
  const queryParams = {
    selectedCheckboxes: JSON.stringify(this.selectedCheckboxes)
  };
  this.router.navigate(['/hdfs'], { queryParams });
  console.log(this.selectedCheckboxes);
 }

 get selectedCheckboxes(){
  return this.files ? this.files.filter((file) => file.selected) : [];
 }

}