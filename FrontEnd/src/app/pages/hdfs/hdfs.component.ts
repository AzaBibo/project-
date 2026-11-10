import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hdfs',
  templateUrl: './hdfs.component.html',
  styleUrl: './hdfs.component.css'
})
export class HdfsComponent implements OnInit{
  file: File | null = null;

  selectedCheckboxes: any[] = [];
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const selectedCheckboxesParam = params.get('selectedCheckboxes');
      if (selectedCheckboxesParam) {
        this.selectedCheckboxes = JSON.parse(selectedCheckboxesParam);
      }
    });
  }
  
  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    if (this.file) {
      // file upload logic
      console.log('Uploading file:', this.file);
      // Example: this.uploadService.uploadFile(this.file).subscribe(response => {
      //   console.log('Upload successful', response);
      // });
    } else {
      console.log('No file selected');
    }
  }
}
