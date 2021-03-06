import { SearchComponent } from './page/search/search.component';
import { AboutComponent } from './page/about/about.component';
import { PortafolioComponent } from './page/portafolio/portafolio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './page/item/item.component';


const routes: Routes = [
  {path:'home',component:PortafolioComponent},
  {path:'about',component:AboutComponent},
  {path:'item/:id',component:ItemComponent},
  {path:'search/:termino', component:SearchComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
