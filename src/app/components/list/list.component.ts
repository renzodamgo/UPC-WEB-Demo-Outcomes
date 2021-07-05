import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OutcomeRespone } from 'src/app/models/outcomeResponse.model';
import { OutcomeService } from 'src/app/services/outcome.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  outcomes:OutcomeRespone[]=[];
  deleted:Boolean = false;
  outcomesSum:number = 0
  constructor(private outcomeService:OutcomeService,
              public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllOutcomes();
  }

  getAllOutcomes(){
    this.outcomeService.getAllOutcomes().subscribe((res)=>{
      this.outcomes = res;
      console.log(this.outcomes)
      this.sumAllOutcomes()
      this.replaceWithDates()
    });
  }

  replaceWithDates(){
    this.outcomes.forEach(outcome => {
      outcome.updatedAt = new Date(outcome.updatedAt);
      outcome.createdAt = new Date(outcome.createdAt)
    });
   
    console.log(this.outcomes[1].updatedAt.toLocaleString('en-US'));

  }
  deleteOutcome(outcomeId:number){
    const dialogRef = this.dialog.open(closeDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.deleted = result;
      console.log(this.deleted + `${outcomeId}`)
      if(this.deleted){
        this.outcomeService.deleteOutcomeById(outcomeId).subscribe((res)=> console.log(res))
        this.outcomes = this.outcomes.filter(outcome => outcome.outcomeId != outcomeId)
      }
      this.sumAllOutcomes()
    });


    
  }

  sumAllOutcomes(){
    // console.log(this.outcomes[2].amount);
    this.outcomesSum = this.outcomes.map(a => a.amount)
    .reduce((sum,current)=> sum + current, 0 )
                             
          
  }

}

@Component({
  selector: 'close-dialog',
  templateUrl: './close-dialog.html',
})
export class closeDialog {}
