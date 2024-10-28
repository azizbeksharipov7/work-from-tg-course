import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDeactivate } from '../../shared/guards/can-exit.guard';
import { AuthService } from '../auth.service';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, IDeactivate {
  form!:FormGroup
  get name(){
    return this.form.controls?.['username']
  }
  constructor (private auth:AuthService){}

  test(){
     this.auth.testHttp().subscribe(data=>{
      console.log(data);
      
     })
  }
  ngOnInit(): void {
    this.form= new FormGroup ({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl('',[])
    });
    console.log(this.form)
  }

  canExit(): boolean{
    if(this.form.value.username !== '' && this.form.value.password!==''){
      const confirmed= confirm('Are you sure to leave without saving data?')
      return confirmed
    }
    return true
  }

}
