import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateOutcomeResponse } from '../models/createOutcomeResponse.model';
import { OutcomeRespone } from '../models/outcomeResponse.model';
import { UpdateOutcomeResponse } from '../models/updateOutcomeResponse.model';

@Injectable({
  providedIn: 'root'
})
export class OutcomeService {

  constructor(private http:HttpClient) { }


  getAllOutcomes(): Observable<OutcomeRespone[]>{
    console.log(`${environment.apiUrl}outcomes`);
    return this.http.get<OutcomeRespone[]>(`${environment.apiUrl}outcomes`)
  }

  getOutcomeById(outcomeId:number): Observable<OutcomeRespone>{
    console.log(`${environment.apiUrl}outcomes`);
    return this.http.get<OutcomeRespone>(`${environment.apiUrl}outcomes/${outcomeId}`)
  }

  updateOutcome(outcome:UpdateOutcomeResponse): Observable<OutcomeRespone>{
    return this.http.put<OutcomeRespone>(`${environment.apiUrl}outcomes/`,outcome);
  }

  deleteOutcomeById(outcomeId:number){
    return this.http.delete(`${environment.apiUrl}outcomes/${outcomeId}`)
  }

  createOutcome(outcome:CreateOutcomeResponse){
    return this.http.post(`${environment.apiUrl}outcomes/`,outcome);

  }
  
}
