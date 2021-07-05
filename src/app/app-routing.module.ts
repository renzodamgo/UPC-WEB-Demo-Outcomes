import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOutcomeComponent } from './components/create-outcome/create-outcome.component';
import { EditOutcomeComponent } from './components/edit-outcome/edit-outcome.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    
  },
  {
    path: 'outcomes', children:[
      {path: '',component:ListComponent},
      {path: 'create',component:CreateOutcomeComponent},
      {path: 'edit/:id', component:EditOutcomeComponent}

    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
