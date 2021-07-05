import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateOutcomeResponse } from 'src/app/models/createOutcomeResponse.model';
import { OutcomeService } from 'src/app/services/outcome.service';

@Component({
  selector: 'app-create-outcome',
  templateUrl: './create-outcome.component.html',
  styleUrls: ['./create-outcome.component.css']
})
export class CreateOutcomeComponent implements OnInit {
  createForm = new FormGroup({
    amount: new FormControl('',Validators.required),
    detail: new FormControl('',Validators.required)
  })
  disabledForm:boolean = true;

  outcome:CreateOutcomeResponse={
    amount : 0,
    detail : '',
  }
  constructor(private outcomeService:OutcomeService,
              private router:Router) { }

  ngOnInit(): void {
  }

  get amount(){ return this.createForm.get('amount')}
  get detail(){ return this.createForm.get('detail')}

  createOutcome(){
    this.outcome = this.createForm.value;
    console.log(this.outcome)
    this.outcomeService.createOutcome(this.outcome).subscribe((res)=> {
      console.log(res);
      this.router.navigate(['outcomes']);
    })
   

  }
  

}
