import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ModeltypeComponent } from './modeltype/modeltype.component';
import { AssociationsComponent } from './associations/associations.component';
import { ReviewsktmComponent } from './reviewsktm/reviewsktm.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',component:MaincontentComponent
  },
  {
    path:'models',component:ModeltypeComponent
  },
  {
    path:'associations',component:AssociationsComponent
  },
  {
    path:'report',component:ReviewsktmComponent
  },
  {
    path:'about',component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
