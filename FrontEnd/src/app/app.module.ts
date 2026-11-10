import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MongoComponent } from './pages/mongo/mongo.component';
import { HdfsComponent } from './pages/hdfs/hdfs.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MongoComponent,
    HdfsComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
