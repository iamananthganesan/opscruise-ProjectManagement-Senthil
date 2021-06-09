import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'tasks', component: TasksComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
