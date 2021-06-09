import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { TasksComponent } from './pages/tasks/tasks.component';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ChartModule } from 'primeng/chart';
import { TaskFilterPipe } from './shared/task-filter.pipe';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftPanelComponent,
    DataTableComponent,
    DashboardComponent,
    ResourcesComponent,
    TasksComponent,
    TaskFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ChartModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
