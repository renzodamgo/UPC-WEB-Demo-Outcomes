import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OutcomeRespone } from 'src/app/models/outcomeResponse.model';
import { OutcomeService } from 'src/app/services/outcome.service';

@Component({
  selector: 'app-edit-outcome',
  templateUrl: './edit-outcome.component.html',
  styleUrls: ['./edit-outcome.component.css']
})
export class EditOutcomeComponent implements OnInit {
  outcomeId!:number
  outcome!:OutcomeRespone
  constructor(private outcomeService:OutcomeService,
              private router: ActivatedRoute,
              private routernav:Router) { }

  ngOnInit(): void {
    this.getOutcomeById()
  }

  getOutcomeById(){
    this.outcomeId = +this.router.snapshot.paramMap.get('id')!;
    this.outcomeService.getOutcomeById(this.outcomeId).subscribe((res)=>{
      console.log(res);
      this.outcome = res;
    });

  }
  editOutcome(){
    this.outcomeService.updateOutcome(this.outcome).subscribe((res)=>{
      console.log(res);
      this.routernav.navigate(['outcomes']);
    })
  }
}
