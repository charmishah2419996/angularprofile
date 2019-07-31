import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-formbasecomponent',
  templateUrl: './formbasecomponent.component.html',
  styleUrls: ['./formbasecomponent.component.scss']
})

export class FormbasecomponentComponent implements OnInit {

  @Output() outputtoperentevent=new EventEmitter();
  profile:any;
  invalidtext:any;

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    designation: ['', Validators.required],
    email:['', [Validators.required,Validators.email]],
    contact:['', [Validators.required, Validators.minLength(10)]],
    salary:  ['', Validators.required]
  });

   constructor(private formBuilder: FormBuilder) {}

   get f() { return this.contactForm.controls;}

  onSubmit(){
        if (this.contactForm.invalid){
          console.log("invalid");
          this.invalidtext="invalid";
        }
        else{
          console.log("contactformvalue",this.contactForm.value);
            this.profile=this.contactForm.value;
           this.outputtoperentevent.emit(this.profile);
        }
  }

  ngOnInit() {
  }

}
