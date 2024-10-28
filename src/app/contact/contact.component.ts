import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
myContactForm!:FormGroup;

get name(){
  return this.myContactForm.controls?.['name']
}
get email(){
  return this.myContactForm.controls?.['email']
}
get comment(){
  return this.myContactForm.controls?.['comment']
}

constructor(private fb:FormBuilder) {}
  ngOnInit(): void {
    this.myContactForm=this.fb.group({
      name:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z]*'),
        ],
      ],
      email:[
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.email,
        ],
      ],
      comment:['',[Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(form:NgForm){
    console.log(form);
  }

  log(){
    console.log(this.myContactForm.value);
    
  }

  
}
