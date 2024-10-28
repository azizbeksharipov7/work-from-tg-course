import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import path from 'path';
import { RouterModule, Routes } from '@angular/router';
import { CanExitGuard } from '../shared/guards/can-exit.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

const routes: Routes =[
  {path:'',canDeactivate:[CanExitGuard], component: LoginComponent , pathMatch: "full" }
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ],
})
export class AuthModule { }
