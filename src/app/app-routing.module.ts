import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';


const routes: Routes = [{ path: 'moreinfo', component: MoreinfoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
