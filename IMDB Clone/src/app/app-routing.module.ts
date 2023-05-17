import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{path:"",redirectTo:'/HomePage',pathMatch:'full'},
{path:"HomePage",component:MainpageComponent},
{path:"moviedetailS/:id",component:MovieDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
export const routingComponents=[
  MainpageComponent,
  MovieDetailsComponent,
]