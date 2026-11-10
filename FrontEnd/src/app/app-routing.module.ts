import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent} from './pages/welcome/welcome.component';
import { MongoComponent} from './pages/mongo/mongo.component';
import { HdfsComponent} from './pages/hdfs/hdfs.component';
import { AnalysisComponent} from './pages/analysis/analysis.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent}, 
    { path: 'mongofiles', component: MongoComponent},
    { path: 'hdfs', component: HdfsComponent},
    { path: 'analysis', component: AnalysisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
